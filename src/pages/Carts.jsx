// src/Pages/Carts.js
import React from 'react';
import { useCartlist } from '../Context/CartContextProvider';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Carts = () => {
  const { cartItems, removeFromCart, updateQuantity, total } = useCartlist();

  return (
    <>
      <ToastContainer stacked position="bottom-left" style={{ padding: '20px' }} />

      <div className="Page-section mb-4 text-center">
        <p className="text-muted">
          <Link to="/">Home</Link> / Cart
        </p>
        <h2 className="fw-bold">Carts</h2>
      </div>

      <div className="section pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4 className="mb-4 fw-bold text-center">🛒 Shopping Cart</h4>
              {cartItems.length === 0 ? (
                <div className="alert alert-danger text-center py-4">No Items in Cart!</div>
              ) : (
                <div className="table-responsive product-cart-wrap">
                  <table className="table align-middle text-center shadow-sm">
                    <thead className="table-light">
                      <tr>
                        <th className="fw-semibold text-start">Product</th>
                        <th className="fw-semibold text-end">Price</th>
                        <th className="fw-semibold text-center d-none d-lg-table-cell">Quantity</th>
                        <th className="fw-semibold text-end">Subtotal</th>
                        <th className="fw-semibold text-center">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => (
                        <tr key={item.id}>
                          <td className="text-start d-flex align-items-center gap-3">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="img-thumbnail"
                              style={{ width: "70px", height: "70px", objectFit: "cover", borderRadius: "8px" }}
                            />
                            <span className="fw-medium">{item.name}</span>
                          </td>
                          <td className="text-end fw-semibold">${item.price}</td>
                          <td className="text-center quantity-input">
                            <input
                              className="form-control text-center mx-auto"
                              style={{ width: "80px" }}
                              type="number"
                              value={item.quantity}
                              min={1}
                              onChange={(e) => updateQuantity(item.id, e.target.value)}
                            />
                          </td>
                          <td className="text-end fw-semibold">
                            ${(item.price * item.quantity).toFixed(2)}
                          </td>
                          <td className="text-center">
                            <button
                              className="btn btn-outline-danger"
                              style={{ fontSize: "1.2rem", lineHeight: "1" }}
                              onClick={() => {
                                removeFromCart(item.id);
                                toast.info(`${item.name} removed from cart`);
                              }}
                            >
                              <i className="ri-delete-bin-line"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                      <tr>
                        <td colSpan="3" className="text-end fw-bold fs-5">
                          Total:
                        </td>
                        <td className="text-end fw-bold fs-5 text-success">${total.toFixed(2)}</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>

          {/* Cart Totals Section */}
          <div className="row mt-5 justify-content-center">
            <div className="col-lg-12">
              <div className="card p-4 shadow-sm border rounded-4 bg-light">
                <h4 className="mb-4 fw-bold text-center">🧾 Cart Totals</h4>

                <table className="w-100">
                  <tbody>
                    <tr className="border-bottom">
                      <td className="py-3">Cart Subtotal</td>
                      <td className="text-end text-success fw-semibold py-3">
                        ${total.toFixed(2)}
                      </td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="py-3">Shipping</td>
                      <td className="text-end py-3">Free Shipping</td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="py-3 fw-semibold">Total</td>
                      <td className="text-end text-success fw-bold py-3">
                        ${total.toFixed(2)}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="text-start mt-4">
                  <Link
                    to={cartItems.length > 0 ? "/checkout" : "#"}
                    className={`btn checkout-btn d-inline-block mt-3 ${cartItems.length === 0 ? 'disabled btn-secondary' : ''}`}
                    style={{ pointerEvents: cartItems.length === 0 ? 'none' : 'auto' }}
                  >
                    <i className="ri-bank-card-line me-2"></i>
                    Proceed to Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Carts;
