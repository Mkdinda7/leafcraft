import React, { useState } from "react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useWishlist } from "../Context/WishlistContextProvider";
import { useCartlist } from "../Context/CartContextProvider";

// toastify import
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

import { Link } from "react-router-dom";

import products from "../Product.json";

// import service image
import service1 from "./../assets/service-icon1.svg";
import service2 from "./../assets/service-icon2.svg";
import service3 from "./../assets/service-icon3.svg";
import service4 from "./../assets/service-icon4.svg";
import subBanner1 from "./../assets/sub-banner-1-1.jpg";
import subBanner2 from "./../assets/sub-banner-2-1.jpg";
import about_hero from "./../assets/about-img-1.jpg";
import about1 from "./../assets/about-svg-1.svg";
import about2 from "./../assets/about-svg-2.svg";
import about3 from "./../assets/about-svg-3.svg";
import cmsBanner1 from "./../assets/cms-banner-1.jpg";
import cmsBanner2 from "./../assets/cms-banner-2.jpg";
import user1 from "./../assets/user1.jpg";
import user2 from "./../assets/user2.jpg";
import user3 from "./../assets/user3.jpg";
import blog1 from "./../assets/blog-1.jpeg";
import blog2 from "./../assets/blog-2.jpeg";
import blog3 from "./../assets/blog-3.jpeg";
import blog4 from "./../assets/blog-4.jpeg";
import blog5 from "./../assets/blog-5.jpeg";
import blog6 from "./../assets/blog-6.jpeg";
import brand1 from "./../assets/brand-1.png";
import brand2 from "./../assets/brand-2.png";
import brand3 from "./../assets/brand-3.png";
import brand4 from "./../assets/brand-4.png";
import brand5 from "./../assets/brand-5.png";

const Index = () => {
  const { addToWishlist } = useWishlist();
  const { addToCart} = useCartlist();

  const handleAddToCart = (product) => {
    const productWithNumbers = {
      ...product,
      price: parseFloat(product.price),
      offerPrice: parseFloat(product.offerPrice),
    };
    addToCart(productWithNumbers);
  };

  // product details
  const [selectedProduct, setselectedProduct] = useState({});

  const handleProductClick = (product) => {
    setselectedProduct(product);
    const productModel = new window.bootstrap.Modal(
      document.getElementById("productModel")
    );
    productModel.show();
  };

  // quantity state
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <ToastContainer
        stacked
        position="bottom-left"
        style={{ padding: "20px" }}
      />

      {/* Hero */}
      <div className="hero">
        <Swiper
          modules={[Navigation, EffectFade]}
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          effect="fade"
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          <SwiperSlide>
            <div className="hero-wrap hero-wrap1 position-relative">
              <div className="hero-content position-absolute">
                <h3>Hot Sale 50% Discount</h3>
                <h1>Green Indoor Plant For Home Decore</h1>
                <p className="my-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Doloribus odio veniam rem.{" "}
                </p>
                <Link to="/shop" className="btn hero-btn mt-3">
                  Shop Now
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-wrap hero-wrap2 position-relative">
              <div className="hero-content position-absolute">
                <h3>Hot Sale 50% Discount</h3>
                <h1>Green Indoor Plant For Home Decore</h1>
                <p className="my-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Doloribus odio veniam rem.
                </p>
                <Link to="/shop" className="btn hero-btn mt-3">
                  Shop Now
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-button-prev swiper-btn swiper-prev">
          <i className="ri-arrow-left-long-line"></i>
        </div>
        <div className="swiper-button-next swiper-btn swiper-next">
          <i className="ri-arrow-right-long-line"></i>
        </div>
      </div>

      {/* service */}
      <div className="section services py-5 mt-5">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="section-title d-flex flex-column justify-content-center align-items-center">
              <h3>What We Do</h3>
              <h2>Our Services</h2>
            </div>
          </div>
          <div className="row mt-5">
            {/* col 1 */}
            <div className="col-12 col-lg-3 col-md-6">
              <div className="service-box d-flex flex-column justify-content-center align-items-center">
                <div className="service-img service-img1 ">
                  <img src={service1} className="img-fluid" alt="" />
                </div>
                <div className="service-box-info text-center mt-4">
                  <h3>Pick Your Plant</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
              </div>
            </div>
            {/* col 2 */}
            <div className="col-12 col-lg-3 col-md-6">
              <div className="service-box d-flex flex-column justify-content-center align-items-center">
                <div className="service-img service-img2">
                  <img src={service2} className="img-fluid" alt="" />
                </div>
                <div className="service-box-info text-center mt-4">
                  <h3>Choose A Pot Color</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
              </div>
            </div>

            {/* col 3 */}
            <div className="col-12 col-lg-3 col-md-6">
              <div className="service-box d-flex flex-column justify-content-center align-items-center">
                <div className="service-img service-img3">
                  <img src={service3} className="img-fluid" alt="" />
                </div>
                <div className="service-box-info text-center mt-4">
                  <h3>Have It Shipped</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
              </div>
            </div>

            {/* col 4 */}
            <div className="col-12 col-lg-3 col-md-6">
              <div className="service-box d-flex flex-column justify-content-center align-items-center">
                <div className="service-img service-img4">
                  <img src={service4} className="img-fluid" alt="" />
                </div>
                <div className="service-box-info text-center mt-4">
                  <h3>What It Grow</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Banners */}
      <div className="section banners py-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="card col-12 col-lg-6 position-relative">
              <img
                src={subBanner1}
                className="img-fluid rounded banner-img"
                alt=""
              />
              <div className="banner-content position-absolute">
                <h3>Farm Snake Plant</h3>
                <h2>
                  Greenery Nursery <br />
                  Snake Plant{" "}
                </h2>
                <Link to="/shop" className="btn banner-btn mt-2">
                  Shop Now
                </Link>
              </div>
            </div>
            <div className="card card2 col-12 col-lg-6 position-relative">
              <img
                src={subBanner2}
                className="img-fluid rounded banner-img"
                alt=""
              />
              <div className="banner-content banner-content2 position-absolute">
                <h3>Farm Snake Plant</h3>
                <h2>
                  Greenery Nursery <br />
                  Snake Plant{" "}
                </h2>
                <Link to="/shop" className="btn banner-btn mt-2">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Swiper Slider */}
      <div className="section swiper-product my-5 pb-5 position-relative">
        <div className="container position-relative">
          <div className="row">
            <div className="section-title d-flex flex-column justify-content-center align-items-center">
              <h3>New Products</h3>
              <h2>LATEST PRODCUTS</h2>
            </div>
            <Swiper
              modules={[Navigation]}
              slidesPerView={0}
              spaceBetween={0}
              loop={true}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                480: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              className="swiper mt-4 py-4"
            >
              {products
                .filter((product) => product.id >= 1 && product.id <= 10)
                .map((product) => (
                  <SwiperSlide
                    key={product.id}
                    className="mx-1 swiper-slide product-swiper-slide"
                  >
                    <div
                      className="card product-card text-center border rounded "
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
                                    <strong>{product.name}</strong> added to
                                    cart!
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
                        onClick={() => {
                          handleProductClick(product);
                        }}
                        style={{ cursor: "pointer" }}
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
                        {/* <Link to={/shop/${product.id}} className='btn product-btn'>View Product</Link> */}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-button-prev product-swiper-btn product-swiper-prev">
              <i className="ri-arrow-left-s-line"></i>
            </div>
            <div className="swiper-button-next product-swiper-btn product-swiper-next">
              <i className="ri-arrow-right-s-line"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Product Popup Model */}
      <div
        className=" modal fade"
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
                  <button
                    className="btn btn-success justify-content-center  d-flex align-items-center gap-2 custom-z"
                    onClick={() => {
                      addToCart({
                        id: selectedProduct.id,
                        name: selectedProduct.name,
                        price: selectedProduct.price,
                        image: selectedProduct.image,
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
                    <i className="bi bi-cart"></i> Add Cart
                  </button>
                </div>
                <p className="mt-4 product-des">{products.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="section about-section">
        <div className="container">
          <div className="row align-items-center d-flex justify-content-center gap-4">
            <div className="col-lg-6 about-img">
              <img src={about_hero} className="img-fluid" alt="" />
            </div>

            <div className="col-lg-6 about-content">
              <div className="section-title about-title mb-2">
                <h3>About Plants</h3>
                <h2>WE OFFER LANDSCAPE AND TREE PLANTATION</h2>
              </div>
              <p className="text-menu">
                There are many variations of passages lorem imsum available but
                the majority which don't look even more then slightly
                believable.
              </p>
              <div className=" mt-4 about-option ms-4 d-flex justify-content-center gap-4 ">
                <div className=" col-sm-4 text-center d-flex align-items-center flex-column">
                  <div className="about-svg">
                    <img src={about1} className="img-fluid" alt="" />
                  </div>
                  <h5 className="mt-2 fw-bold about-text">PLANT WATERING</h5>
                  <p className="text-muted about-pere">
                    Lorem Ipsum is simply dummy text
                  </p>
                </div>
                <div className="col-sm-4 text-center d-flex align-items-center flex-column">
                  <div className="about-svg about-svg2">
                    <img src={about2} className="img-fluid" alt="" />
                  </div>
                  <h5 className="mt-2 fw-bold about-text">PLANT WATERING</h5>
                  <p className="text-muted about-pere">
                    Lorem Ipsum is simply dummy text
                  </p>
                </div>
                <div className="col-sm-4 text-center d-flex align-items-center flex-column">
                  <div className="about-svg about-svg3">
                    <img src={about3} className="img-fluid" alt="" />
                  </div>
                  <h5 className="mt-2 fw-bold about-text">PLANT WATERING</h5>
                  <p className="text-muted about-pere">
                    Lorem Ipsum is simply dummy text
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Parallax Banner */}
      <div className="section py-5 mt-5 parallax-banner d-flex justify-content-center align-items-center position-relative">
        <div className="container position-relative">
          <div className="row">
            <div className="paralax-content col-lg-12 d-flex justify-content-center flex-column">
              <div className="section-title d-flex flex-column justify-content-center">
                <h3>Hot Sale 30% Discount</h3>
                <h2>
                  Potted Plant With <br /> Pot Grey 6cm
                </h2>
              </div>
              <p className="my-3 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti quo accusantium illo adipisci expedita quisquam.
              </p>
              <Link to="/shop" className="btn">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Product Swiper Slider */}
      <div className="section swiper-product my-5 pb-5 position-relative">
        <div className="container position-relative">
          <div className="row">
            <div className="section-title d-flex flex-column justify-content-center align-items-center">
              <h3>Popular Products</h3>
              <h2>LATEST PRODCUTS</h2>
            </div>
            <Swiper
              modules={[Navigation]}
              slidesPerView={0}
              spaceBetween={0}
              loop={true}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                480: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              className="swiper mt-4 py-4"
            >
              {products
                .filter((product) => product.id >= 2 && product.id <= 8)
                .map((product) => (
                  <SwiperSlide
                    key={product.id}
                    className="mx-1 swiper-slide product-swiper-slide"
                  >
                    <div
                      className="card product-card text-center border rounded "
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
                                    <strong>{product.name}</strong> added to
                                    cart!
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
                                    <strong>{product.name}</strong> added to
                                    cart!
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
                        onClick={() => {
                          handleProductClick(product);
                        }}
                        style={{ cursor: "pointer" }}
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
                        {/* <Link to={/shop/${product.id}} className='btn product-btn'>View Product</Link> */}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-button-prev product-swiper-btn product-swiper-prev">
              <i className="ri-arrow-left-s-line"></i>
            </div>
            <div className="swiper-button-next product-swiper-btn product-swiper-next">
              <i className="ri-arrow-right-s-line"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Banners */}
      <div className="section banners py-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="card col-12 col-lg-6 position-relative">
              <img
                src={cmsBanner1}
                className="img-fluid rounded banner-img"
                alt=""
              />
              <div className="banner-content position-absolute">
                <h3>Flat 20% Discount</h3>
                <h2>
                  The Elliot Modular <br />
                  Planters{" "}
                </h2>
                <Link to="/shop" className="btn banner-btn mt-2">
                  Shop Now
                </Link>
              </div>
            </div>
            <div className="card card2 col-12 col-lg-6 position-relative">
              <img
                src={cmsBanner2}
                className="img-fluid rounded banner-img"
                alt=""
              />
              <div className="banner-content banner-content2 position-absolute">
                <h3>We're Spring Plant</h3>
                <h2>
                  Cloud Farm Peace <br />
                  Lily Plant{" "}
                </h2>
                <Link to="/shop" className="btn banner-btn mt-2">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Rated Product Swiper Slider */}
      <div className="section swiper-product my-5 pb-5 position-relative">
        <div className="container position-relative">
          <div className="row">
            <div className="section-title d-flex flex-column justify-content-center align-items-center">
              <h3>Top Products</h3>
              <h2>LATEST PRODCUTS</h2>
            </div>
            <Swiper
              modules={[Navigation]}
              slidesPerView={0}
              spaceBetween={0}
              loop={true}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                480: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              className="swiper mt-4 py-4 "
            >
              {products
                .filter((product) => product.id >= 8 && product.id <= 16)
                .map((product) => (
                  <SwiperSlide
                    key={product.id}
                    className="mx-1 swiper-slide product-swiper-slide"
                  >
                    <div
                      className="card product-card text-center border rounded "
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
                                    <strong>{product.name}</strong> added to
                                    cart!
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
                                    <strong>{product.name}</strong> added to
                                    cart!
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
                        onClick={() => {
                          handleProductClick(product);
                        }}
                        style={{ cursor: "pointer" }}
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
                        {/* <Link to={/shop/${product.id}} className='btn product-btn'>View Product</Link> */}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-button-prev product-swiper-btn product-swiper-prev">
              <i className="ri-arrow-left-s-line"></i>
            </div>
            <div className="swiper-button-next product-swiper-btn product-swiper-next">
              <i className="ri-arrow-right-s-line"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="section testimonial d-flex justify-content-center align-items-center">
        <div className="mt-5 py-5  text-center container testimonial-wrap">
          <div className="text-success mb-3">
            <Swiper
              spaceBetween={0}
              slidbarsPerView={1}
              loop={true}
              modules={[Autoplay, EffectFade]}
              autoplay={{
                delay: 1500,
              }}
              // effect='fade'
            >
              <SwiperSlide className="review-area d-flex flex-column align-items-center justify-content-center">
                <i className="ri-double-quotes-l"></i>
                <p className="text-muted ">
                  The plant arrived in perfect condition, exactly as shown in
                  the pictures. Packaging was secure and eco-friendly. Highly
                  satisfied with the quality and service.
                </p>
                <div className="test-card d-flex justify-content-center my-4">
                  <img
                    src={user1}
                    roundedCircle
                    width={80}
                    height={80}
                    className="shadow-sm"
                    alt=""
                  />
                </div>
                <h5 className="fw-bold">STEFANIE RASHFORD</h5>
                <p className="text-muted">CEO</p>
              </SwiperSlide>
              <SwiperSlide className="review-area d-flex flex-column align-items-center justify-content-center">
                <i className="ri-double-quotes-l"></i>
                <p className="text-muted ">
                  Great variety of indoor plants at affordable prices. The
                  website is easy to navigate and place orders. Delivery was
                  quick and well-handled.
                </p>
                <div className="test-card d-flex justify-content-center my-4">
                  <img
                    src={user2}
                    roundedCircle
                    width={80}
                    height={80}
                    className="shadow-sm"
                    alt=""
                  />
                </div>
                <h5 className="fw-bold">STEFANIE RASHFORD</h5>
                <p className="text-muted">CEO</p>
              </SwiperSlide>
              <SwiperSlide className="review-area d-flex flex-column align-items-center justify-content-center">
                <i className="ri-double-quotes-l"></i>
                <p className="text-muted card-text">
                  Beautiful collection and aesthetic product presentation. The
                  plant pot quality exceeded my expectations. Made my home decor
                  much livelier.
                </p>
                <div className="test-card d-flex justify-content-center my-4">
                  <img
                    src={user3}
                    roundedCircle
                    width={80}
                    height={80}
                    className="shadow-sm"
                    alt=""
                  />
                </div>
                <h5 className="fw-bold">STEFANIE RASHFORD</h5>
                <p className="text-muted">CEO</p>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      {/* Blog */}
      <div className="section blog py-5 my-5">
        <div className="container">
          <div className="section-title d-flex flex-column justify-content-center align-items-center">
            <h3>From The Blog</h3>
            <h2>OUR LATEST BLOG</h2>
          </div>
          <div className="row mt-5 position-relative">
            <Swiper
              modules={[Navigation]}
              slidesPerView={0}
              spaceBetween={0}
              loop={true}
              navigation={{
                nextEl: ".blog-button-next, .swiper-button-next",
                prevEl: ".blog-button-prev, .swiper-button-prev",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                480: {
                  slidesPerView: 1,
                },
                991: {
                  slidesPerView: 2,
                },
                1300: {
                  slidesPerView: 3,
                },
              }}
              className="blog-swiper mt-4 py-4"
            >
              {/* Slide 1 */}
              <SwiperSlide>
                <div className="blog-card overflow-hidden">
                  <div className="blog-img overflow-hidden rounded">
                    <img src={blog1} className="img-fluid rounded" alt="" />
                  </div>
                  <div className="blog-content mt-3">
                    <h5 className="blog-meta">
                      <span>February 9, 2025</span> <span>by Editor</span>
                    </h5>
                    <h2 className="blog-title mt-2 mb-3">
                      How to Write a Blog Post Your Readers will love in steps
                    </h2>
                    <p>
                      Why the world would end without trave coupons. The 16
                      worst songs about spa deals. How daily...
                    </p>
                    <Link to="/blog" className="blog-btn">
                      Read More <i className="ri-arrow-right-long-line"></i>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              {/* Slide 2 */}
              <SwiperSlide>
                <div className="blog-card overflow-hidden">
                  <div className="blog-img overflow-hidden rounded">
                    <img src={blog2} className="img-fluid rounded" alt="" />
                  </div>
                  <div className="blog-content mt-3">
                    <h5 className="blog-meta">
                      <span>February 9, 2025</span> <span>by Editor</span>
                    </h5>
                    <h2 className="blog-title mt-2 mb-3">
                      How to Write a Blog Post Your Readers will love in steps
                    </h2>
                    <p>
                      Why the world would end without trave coupons. The 16
                      worst songs about spa deals. How daily...
                    </p>
                    <Link to="/blog" className="blog-btn">
                      Read More <i className="ri-arrow-right-long-line"></i>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              {/* Slide 3 */}
              <SwiperSlide>
                <div className="blog-card overflow-hidden">
                  <div className="blog-img overflow-hidden rounded">
                    <img src={blog3} className="img-fluid rounded" alt="" />
                  </div>
                  <div className="blog-content mt-3">
                    <h5 className="blog-meta">
                      <span>February 9, 2025</span> <span>by Editor</span>
                    </h5>
                    <h2 className="blog-title mt-2 mb-3">
                      How to Write a Blog Post Your Readers will love in steps
                    </h2>
                    <p>
                      Why the world would end without trave coupons. The 16
                      worst songs about spa deals. How daily...
                    </p>
                    <Link to="/blog" className="blog-btn">
                      Read More <i className="ri-arrow-right-long-line"></i>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              {/* Slide 4 */}
              <SwiperSlide>
                <div className="blog-card overflow-hidden">
                  <div className="blog-img overflow-hidden rounded">
                    <img src={blog4} className="img-fluid rounded" alt="" />
                  </div>
                  <div className="blog-content mt-3">
                    <h5 className="blog-meta">
                      <span>February 9, 2025</span> <span>by Editor</span>
                    </h5>
                    <h2 className="blog-title mt-2 mb-3">
                      How to Write a Blog Post Your Readers will love in steps
                    </h2>
                    <p>
                      Why the world would end without trave coupons. The 16
                      worst songs about spa deals. How daily...
                    </p>
                    <Link to="/blog" className="blog-btn">
                      Read More <i className="ri-arrow-right-long-line"></i>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              {/* Slide 5 */}
              <SwiperSlide>
                <div className="blog-card overflow-hidden">
                  <div className="blog-img overflow-hidden rounded">
                    <img src={blog5} className="img-fluid rounded" alt="" />
                  </div>
                  <div className="blog-content mt-3">
                    <h5 className="blog-meta">
                      <span>February 9, 2025</span> <span>by Editor</span>
                    </h5>
                    <h2 className="blog-title mt-2 mb-3">
                      How to Write a Blog Post Your Readers will love in steps
                    </h2>
                    <p>
                      Why the world would end without trave coupons. The 16
                      worst songs about spa deals. How daily...
                    </p>
                    <Link to="/blog" className="blog-btn">
                      Read More <i className="ri-arrow-right-long-line"></i>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              {/* Slide 6 */}
              <SwiperSlide>
                <div className="blog-card overflow-hidden">
                  <div className="blog-img overflow-hidden rounded">
                    <img src={blog6} className="img-fluid rounded" alt="" />
                  </div>
                  <div className="blog-content mt-3">
                    <h5 className="blog-meta">
                      <span>February 9, 2025</span> <span>by Editor</span>
                    </h5>
                    <h2 className="blog-title mt-2 mb-3">
                      How to Write a Blog Post Your Readers will love in steps
                    </h2>
                    <p>
                      Why the world would end without trave coupons. The 16
                      worst songs about spa deals. How daily...
                    </p>
                    <Link to="/blog" className="blog-btn">
                      Read More <i className="ri-arrow-right-long-line"></i>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="swiper-button-prev blog-swiper-btn blog-swiper-btn-prev swiper-btn swiper-prev">
              <i className="ri-arrow-left-s-line"></i>
            </div>
            <div className="swiper-button-next blog-swiper-btn blog-swiper-btn-next swiper-btn swiper-next">
              <i className="ri-arrow-right-s-line"></i>
            </div>
          </div>
        </div>
      </div>
      {/* Brands */}
      <div className="section brands py-5 my-">
        <div className="container">
          <div className="row">
            <Swiper
              slidesPerView={5}
              spaceBetween={0}
              modules={[Autoplay]}
              loop={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                480: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 5,
                },
              }}
              className="brands-swiper"
            >
              <SwiperSlide>
                <div className="brand-img">
                  <img src={brand1} className="img-fluid" alt="brand" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-img">
                  <img src={brand2} className="img-fluid" alt="brand" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-img">
                  <img src={brand3} className="img-fluid" alt="brand" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-img">
                  <img src={brand4} className="img-fluid" alt="brand" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-img">
                  <img src={brand5} className="img-fluid" alt="brand" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-img">
                  <img src={brand3} className="img-fluid" alt="brand" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
