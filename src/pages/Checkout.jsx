import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { useWishlist } from '../Context/WishlistContextProvider';
import { useCartlist } from '../Context/CartContextProvider';
import Swal from 'sweetalert2';



// toastify import
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Checkout = () => {
  const { cartItems, clearCart } = useCartlist();
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  
 

  useEffect(() => {
    const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const taxAmount = totalAmount * 0.18;
    const grandTotal = totalAmount + taxAmount;

    setSubtotal(totalAmount);
    setTax(taxAmount);
    setTotal(grandTotal);
  }, [cartItems])

 const handleCheckout = () => {
  Swal.fire({
    icon: 'success',
    title: 'Checkout Successful!',
    text: "Thank you for your purchase from LeafCraft!",
    confirmButtonText: 'OK',     
    padding: '2rem',      
    customClass: {
      popup: 'custom-swal-height',
      confirmButton: 'my-confirm-btn',
      icon: 'my-icon',
      title: "my-title"    
    }
  }).then(() => {
    clearCart();
    navigate("/");
  });
};


    


  return (
    <>
      <div className="Page-section mb-4 text-center">
        <p className="text-muted">
          <Link to='/'>Home</Link> / Check-Out
        </p>
        <h2 className='fw-bold'>Check-Out</h2>
      </div>

      <div className="section">
        <div className="container my-5">
          <span className="fs-2 fw-bold">Checkout</span>

          <div className="row">
            <div className="col-lg-7">
              <div className="accordion" id="accordionExample">
                {/* Delivery Address */}
                <div className="d-flex justify-content-between align-items-center border-bottom py-2"
                  type='button'
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls='collapseOne'>

                  <div className="d-flex align-items-center gap-2">
                    <i className="ri-map-pin-line fs-6 text-secondary"></i>
                    <span className="custom-hover fw-medium">Add Delivery Address</span>
                  </div>
                  <button type="button" className='btn btn-outline-success btn-sm'>Add New Address</button>
                </div>

                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <div className="container mt-4">
                      <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col">
                          <div className="card h-100 p-3 shadow-sm rounded border mb-3">
                            <div className="d-flex justify-content-between align-items-center">
                              <h5 className="fs-6 d-flex align-items-center">
                                <input type="radio" name="address" className='form-check-input me-2' defaultChecked />
                                Home
                              </h5>
                            </div>
                            <p className="mb-2" style={{ fontSize: ".80rem" }}>
                              Mrinal Kanti Dinda <br />
                              Hirapur, Kolaghat, <br />
                              Purba Medinipur - 721151
                            </p>
                            <div className="mt-auto">
                              <a href="#" className='text-success d-block mb-1' style={{ fontSize: ".90rem" }}>Set as Default</a>
                              <a href="#" className='text-primary me-2' style={{ fontSize: ".90rem" }}>Edit</a>
                              <a href="#" className='text-danger' style={{ fontSize: ".90rem" }}>Delete</a>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="card h-100 p-3 shadow-sm rounded border mb-3">
                            <div className="d-flex justify-content-between align-items-center">
                              <h5 className="fs-6 d-flex align-items-center">
                                <input type="radio" name="address" className='form-check-input me-2' />
                                Office
                              </h5>
                            </div>
                            <p className="mb-2" style={{ fontSize: ".80rem" }}>
                              Mrinal Kanti Dinda <br />
                              Kolkata Sector-V <br />
                              Kolkata - 700091
                            </p>
                            <div className="mt-auto">
                              <a href="#" className='text-success d-block mb-1' style={{ fontSize: ".90rem" }}>Set as Default</a>
                              <a href="#" className='text-primary me-2' style={{ fontSize: ".90rem" }}>Edit</a>
                              <a href="#" className='text-danger' style={{ fontSize: ".90rem" }}>Delete</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="border-bottom py-2" id="headingThree">
                  <div className="collapsed"
                    type='button'
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls='collapseThree'>
                    <div className="d-flex align-items-center gap-2">
                      <i className="ri-bank-card-line fs-6 text-secondary"></i>
                      <span className="custom-hover fw-medium">Payment Method</span>
                    </div>
                  </div>
                </div>

                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <div className="container mt-4">
                      <div className="card p-3 mb-4 shadow-sm rounded border">
                        <div className="form-check">
                          <input type="radio" name="paymentMethod" id="paypal" />
                          <label htmlFor="paypal" className="form-check-label fs-6 fw-semibold">Payment with Paypal</label>
                          <p className="text-muted ms-1 mb-0 fs-6">You Will be redirected to Paypal to complete the purchase.</p>
                        </div>
                      </div>

                      <div className="card p-3 mb-4 shadow-sm rounded border">
                        <div className="form-check">
                          <input type="radio" name="paymentMethod" id="card" />
                          <label htmlFor="card" className="form-check-label fs-6 fw-semibold">Credit / Debit Card</label>
                          <p className="text-muted ms-1 mb-0 fs-6">We support Mastercard, Visa, Discover, and Stripe.</p>
                        </div>

                        <div className="mt-3">
                          <label htmlFor="" className="form-label">Card Number</label>
                          <input type="text" className='form-control' placeholder='1234 4567 78905 7463' />
                        </div>

                        <div className="row mt-3">
                          <div className="col-md-6">
                            <label htmlFor="" className="form-label">Name on Card</label>
                            <input type="text" className='form-control' placeholder='Enter your First Name' />
                          </div>
                          <div className="col-md-3">
                            <label htmlFor="" className="form-label">Expiry Date</label>
                            <input type="text" className='form-control' />
                          </div>
                          <div className="col-md-3">
                            <label htmlFor="" className="form-label">CVV Code</label>
                            <input type="text" className='form-control' placeholder='xxx' />
                          </div>
                        </div>
                      </div>

                      <div className="card p-3 mb-4 shadow-sm rounded border">
                        <div className="form-check">
                          <input type="radio" name="paymentMethod" id="payoneer" />
                          <label htmlFor="payoneer" className="form-check-label fs-6 fw-semibold">Payment with Payoneer</label>
                          <p className="text-muted ms-1 mb-0 fs-6">You Will be redirected to Payoneer to complete the purchase.</p>
                        </div>
                      </div>

                      <div className="card p-3 mb-4 shadow-sm rounded border">
                        <div className="form-check">
                          <input type="radio" name="paymentMethod" id="cash" />
                          <label htmlFor="cash" className="form-check-label fs-6 fw-semibold">Cash on Delivery</label>
                          <p className="text-muted ms-1 mb-0 fs-6">Pay with cash when your order is delivered.</p>
                        </div>
                      </div>

                      <div className="d-flex justify-content-end gap-2 mt-3">
                        <button className="btn btn-outline-secondary">Prev</button>
                        <button className="btn btn-success">Place Order</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5 mt-0 mt-md-4">
              <div className="container col-md-10 m-auto">
                <div className="card p-4 shadow-sm rounded border">
                  <h5 className="border-bottom mb-2 fs-4 fw-semibold">Order Details</h5>
                  <div id="card-items">
                    {cartItems.length > 0 ? (
                      cartItems.map((item, i) => (
                        <div key={i} className="d-flex justify-content-between align-items-center mb-3">
                          <span className="d-flex align-items-center gap-2">
                            <img src={item.image || "/default.image.png"} alt={item.name}
                              style={{ width: "40px", height: "40px", objectFit: "cover", borderRadius: "5px" }} />
                            <span>{item.name} X {item.quantity}</span>
                          </span>
                          <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      ))
                    ) : (
                      <p >No Items in carts.</p>
                    )}
                  </div>

                  <div className="mt-3">
                    <div className="d-flex justify-content-between">
                      <span>Item Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Shipping Free</span>
                      <span className='fw-semibold'>$0.00</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Tax VAT 18%</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between">
                      <span className='fw-semibold'>Grand Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                    <div className="d-grid mt-4">
                      <button onClick={handleCheckout} className="btn btn-success">Place Order</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Checkout