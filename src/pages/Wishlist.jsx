import React from "react";
import { useWishlist } from "../Context/WishlistContextProvider";
import { useCartlist } from "../Context/CartContextProvider";
import { Link } from "react-router-dom";

// toastify import
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCartlist();

  const handleAddToCart = (product) => {
    const productWithNumbers = {
      ...product,
      price: parseFloat(product.price),
      offerPrice: parseFloat(product.offerPrice),
      quantity: 1,
    };

    addToCart(productWithNumbers);
    removeFromWishlist(product.id); 
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
          <Link to="/">Home</Link> / Cart
        </p>
        <h2 className="fw-bold">Carts</h2>
      </div>

      <div className="section py-5">
        <div className="container">
          {wishlistItems.length === 0 ? (
            <div className="alert alert-warning text-center shadow-sm p-4">
              <i className="ri-heart-line fs-2 text-danger d-block mb-2"></i>
              <h5 className="mb-0">Your wishlist is empty!</h5>
            </div>
          ) : (
            <div className="table-responsive shadow-sm rounded">
              <table className="table align-middle text-center table-hover">
                <thead className="bg-success text-white">
                  <tr>
                    <th className="text-start px-4 py-3">Product</th>
                    <th>Price</th>
                    <th className="d-none d-md-table-cell">Stock</th>
                    <th>Add to Cart</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {wishlistItems.map((product) => (
                    <tr key={product.id} className="bg-light">
                      <td className="d-flex align-items-center gap-3 text-start px-4 py-3">
                        <img
                          src={product.image}
                          alt={product.name}
                          width={70}
                          height={70}
                          className="border rounded shadow-sm"
                        />
                        <div>
                          <h6 className="mb-1">{product.name}</h6>
                          <p className="mb-0 text-muted small">
                            {product.description?.slice(0, 50) + "..." ||
                              "Short description here."}
                          </p>
                        </div>
                      </td>
                      <td className="fs-6">${product.price}</td>
                      <td className="text-success d-none d-md-table-cell fw-semibold">
                        In Stock
                      </td>
                      <td>
                        <button
                          className="btn btn-outline-success btn-sm px-3"
                          onClick={() => handleAddToCart(product)}
                        >
                          <i className="ri-shopping-cart-line me-2"></i> Add
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-outline-danger btn-sm px-3"
                          onClick={() => removeFromWishlist(product.id)}
                        >
                          <i className="ri-delete-bin-line"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Wishlist;
