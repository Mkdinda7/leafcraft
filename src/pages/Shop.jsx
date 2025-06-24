import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import products from "../Product.json";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useWishlist } from "../Context/WishlistContextProvider";
import { useCartlist } from "../Context/CartContextProvider";

import PRODUCT_ENDPOINTS from "../Api/Endpoint/productEndpoint";
import { productInstance } from "../Api/axiosInstance";



const Shop = () => {
  const { addToWishlist } = useWishlist();
  const { addToCart } = useCartlist();

  const [selectedProduct, setselectedProduct] = useState({});
  const [visibleCount, setvisibleCount] = useState(12);
  const initialCount = 12;
  const [quantity, setQuantity] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await productInstance.get(PRODUCT_ENDPOINTS.ALL_PRODUCTS);
        // setProducts(response.data);
        console.log(response?.data);
        
      } catch (err) {
        setError("Failed to load products.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleProductClick = (product) => {
    setselectedProduct(product);
    const productModel = new window.bootstrap.Modal(
      document.getElementById("productModel")
    );
    productModel.show();
  };

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <>
      <ToastContainer
        stacked
        position="bottom-left"
        style={{ padding: "20px" }}
      />

      <div className="Page-section mb-4 text-center">
        <p className="text-muted">
          <Link to="/">Home</Link> / Shop
        </p>
        <h2 className="fw-bold">Shop</h2>
      </div>

      <div className="section shop">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb-3">
              <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                <div className="total-product">
                  <p>
                    Showing <strong>All Products</strong> for you!
                  </p>
                </div>

                <div className="search-box">
                  <input
                    type="text"
                    className="form-control rounded-pill px-4 py-2 shadow-sm"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ maxWidth: "300px" }}
                  />
                </div>
              </div>
            </div>

            {/* Product Cards */}
            <div className="row mt-3 mx-2 gx-3 gy-4">
              {filteredProducts.slice(0, visibleCount).map((product) => (
                <div
                  key={product.id}
                  className="col-lg-3 col-sm-6 px-2 product-card text-center rounded"
                  style={{ cursor: "pointer" }}
                >
                  <div className="position-relative product-img-container">
                    <img
                      src={product.image}
                      className="img-fluid product-img main-img"
                      alt={product.name}
                    />
                    <img
                      src={product.seconedImage}
                      className="img-fluid product-img hover-img"
                      alt={product.name}
                    />
                    <div className="product-option position-absolute">
                      <i
                        className="bi bi-heart"
                        role="button"
                        onClick={() => {
                          addToWishlist({
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            image: product.image,
                            description: product.description || "",
                            inStock: true,
                          });
                          toast.success(
                            <div className="d-flex align-items-center gap-2">
                              <img
                                src={product.image}
                                alt={product.name}
                                style={{
                                  width: 40,
                                  height: 40,
                                  objectFit: "cover",
                                  borderRadius: "5px",
                                }}
                              />
                              <span>
                                <strong>{product.name}</strong> added to cart!
                              </span>
                            </div>,
                            {
                              position: "bottom-left",
                              autoClose: 3000,
                            }
                          );
                        }}
                      ></i>
                    </div>
                    <button
                      className="btn add-cart-btn position-absolute"
                      onClick={() => {
                        addToCart({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          image: product.image,
                          quantity: 1,
                        });
                        toast.success(
                          <div className="d-flex align-items-center gap-2">
                            <img
                              src={product.image}
                              alt={product.name}
                              style={{
                                width: 40,
                                height: 40,
                                objectFit: "cover",
                                borderRadius: "5px",
                              }}
                            />
                            <span>
                              <strong>{product.name}</strong> added to cart!
                            </span>
                          </div>,
                          {
                            position: "bottom-left",
                            autoClose: 3000,
                          }
                        );
                      }}
                    >
                      Add Cart
                    </button>
                  </div>
                  <div
                    className="product-info Pt-5 p-3"
                    onClick={() => handleProductClick(product)}
                  >
                    <h5>{product.name}</h5>
                    <div className="text-warning mb-2 stars">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-half"></i>
                    </div>
                    <div className="mb-1 product-price">
                      <span className="text-muted text-decoration-line-through">
                        ${product.offerPrice}
                      </span>
                      <span className="text-success fw-bold ms-2">
                        ${product.price}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Product Modal */}
            <div
              className="modal fade"
              id="productModel"
              tabIndex="-1"
              aria-labelledby="productModelLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg modal-dialog-centered mx-auto position-relative">
                <div className="modal-content d-flex justify-content-center align-items-center p-3">
                  <div className="modal-body d-flex flex-column flex-md-row gap-3">
                    <div className="col-md-6">
                      <img
                        src={selectedProduct.image}
                        className="img-fluid rounded border"
                        alt={selectedProduct.name}
                      />
                    </div>
                    <button
                      type="button"
                      className="position-absolute end-0 top-0 bg-danger text-white px-1 border-0"
                      data-bs-dismiss="modal"
                    >
                      <i className="bi bi-x"></i>
                    </button>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                      <div className="modal-header border-0 p-0">
                        <div
                          className="modal-title product-title"
                          id="productModalLabel"
                        >
                          {selectedProduct.name}
                        </div>
                      </div>
                      <div className="d-flex gap-1 text-warning mb-2">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-half"></i>
                      </div>
                      <p className="text-muted small">
                        {selectedProduct.description}
                      </p>
                      <h4 className="text-success fw-bold">
                        ${selectedProduct.price}
                        <span className="text-muted text-decoration-line-through ms-2">
                          ${selectedProduct.offerPrice}
                        </span>
                      </h4>
                      <div className="d-flex align-items-center gap-3">
                        <div
                          className="d-flex align-items-center border rounded"
                          style={{ width: "100px", height: "40px" }}
                        >
                          <span
                            className="px-2"
                            style={{ cursor: "pointer" }}
                            onClick={handleDecrease}
                          >
                            -
                          </span>
                          <span className="flex-grow-1 text-center border-start border-end">
                            {quantity}
                          </span>
                          <span
                            className="px-2"
                            style={{ cursor: "pointer" }}
                            onClick={handleIncrease}
                          >
                            +
                          </span>
                        </div>
                        <button className="btn btn-success justify-content-center d-flex align-items-center gap-2 custom-z">
                          <i className="bi bi-cart"></i> Add Cart
                        </button>
                      </div>
                      <p className="mt-4 product-des">
                        {selectedProduct.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Load More Button */}
            <div className="row">
              <div className="col-lg-12 d-flex justify-content-center py-5">
                {visibleCount < products.length ? (
                  <button
                    className="btn load-more-product"
                    onClick={() => setvisibleCount(visibleCount + 8)}
                  >
                    Load More
                  </button>
                ) : (
                  <button
                    className="btn load-more-product"
                    onClick={() => setvisibleCount(initialCount)}
                  >
                    Load Less
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
