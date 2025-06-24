import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useWishlist } from "../Context/WishlistContextProvider";
import { useCartlist } from "../Context/CartContextProvider";
import { useAuth } from "../Context/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { wishlistItems } = useWishlist();
  const wishlistCount = wishlistItems.length;
  const { cartItems } = useCartlist();
  const cartCount = cartItems?.length;
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("token");
    toast.success("Successfully logged out");
    navigate("/login");
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  const renderProfileIcon = () => (
    <div
      onClick={toggleDropdown}
      className="d-flex justify-content-center align-items-center rounded-circle bg-success text-white"
      style={{
        width: "30px",
        height: "30px",
        cursor: "pointer",
        fontWeight: "bold",
      }}
    >
      {auth?.user ? auth.user.name.charAt(0).toUpperCase() : <i className="bi bi-person"></i>}
    </div>
  );

  return (
    <>
      <div className="nav w-100 fixed-top top-0 start-0 bg-light shadow-sm">
        <nav className="navbar navbar-expand-lg w-100">
          <div className="logo navbar-brand">
            <Link to="/" className="logo-text text-decoration-none">
              Leaf<span>Craft</span>
            </Link>
          </div>

          <div className="nav-icons d-flex d-lg-none justify-content-center align-items-center gap-3">
            <Link to="/search">
              <i className="bi bi-search"></i>
            </Link>

            {/* Mobile Profile */}
            <div className="position-relative">{renderProfileIcon()}
              {showDropdown && (
                <div
                  className="dropdown-menu show position-absolute"
                  style={{ right: 0, minWidth: "150px" }}
                  onMouseLeave={closeDropdown}
                >
                  {!auth?.user ? (
                    <>
                      <Link className="dropdown-item" to="/login">
                        Login
                      </Link>
                      <Link className="dropdown-item" to="/register">
                        Register
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link className="dropdown-item" to="/update-password">
                        Update Password
                      </Link>
                      <button className="dropdown-item" onClick={handleLogout}>
                        Logout
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>

            <Link to="/wishlist" className="position-relative">
              <i className="bi bi-heart"></i>
              {wishlistCount > 0 && (
                <span className="wishlist-count position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <Link to="/cart" className="position-relative">
              <i className="bi bi-bag"></i>
              {cartCount > 0 && (
                <span className="cart-count position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartCount}
                </span>
              )}
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" id="menu-bars"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse py-4" id="navbarNav">
            <ul className="menu navbar-nav d-flex justify-content-center gap-3 align-items-center">
              <li className="nav-item">
                <Link to="/" className="menu-text">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="menu-text">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/shop" className="menu-text">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="menu-text">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="menu-text">
                  Contact
                </Link>
              </li>

              <li className="nav-item ms-4 d-none d-lg-block">
                <div className="nav-icons d-flex align-items-center gap-3">
                  <Link to="/search" className="menu-text">
                    <i className="bi bi-search"></i>
                  </Link>

                  {/* Desktop Profile */}
                  <div className="position-relative">{renderProfileIcon()}
                    {showDropdown && (
                      <div
                        className="dropdown-menu show position-absolute"
                        style={{ right: 0, minWidth: "150px" }}
                        onMouseLeave={closeDropdown}
                      >
                        {!auth?.user ? (
                          <>
                            <Link className="dropdown-item" to="/login">
                              Login
                            </Link>
                            <Link className="dropdown-item" to="/register">
                              Register
                            </Link>
                          </>
                        ) : (
                          <>
                            <Link className="dropdown-item" to="/update-password">
                              Update Password
                            </Link>
                            <button className="dropdown-item" onClick={handleLogout}>
                              Logout
                            </button>
                          </>
                        )}
                      </div>
                    )}
                  </div>

                  <Link to="/wishlist" className="position-relative menu-text">
                    <i className="bi bi-heart"></i>
                    {wishlistCount > 0 && (
                      <span className="wishlist-count position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {wishlistCount}
                      </span>
                    )}
                  </Link>

                  <Link to="/cart" className="position-relative menu-text">
                    <i className="bi bi-bag"></i>
                    {cartCount > 0 && (
                      <span className="cart-count position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {cartCount}
                      </span>
                    )}
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
