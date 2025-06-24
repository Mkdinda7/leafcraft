import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      {/* Header Section */}
      <div className="Page-section mb-4 text-center">
        <p className="text-muted">
          <Link to="/">Home</Link> / Contact Us
        </p>
        <h2 className="fw-bold">Contact Us</h2>
      </div>

      {/* Main Section */}
      <div className="section py-5">
        <div className="container">
          {/* Map and Form Section */}
          <div className="row g-4">
            {/* Google Map */}
            <div className="col-lg-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.60402263852!2d87.83415381008743!3d22.36857574033374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02bd756b2cc861%3A0x18f119b20f90794f!2sHirapur%20k.k%20high%20school!5e0!3m2!1sen!2sin!4v1747425611982!5m2!1sen!2sin"
                width="100%"
                height="550"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Contact Form */}
            <div className="col-lg-6 bg-light p-4 rounded shadow-sm">
              <h4 className="fw-bold mb-3">GET IN TOUCH WITH US</h4>
              <p className="text-muted mb-4">
                If you wish to directly reach us, please fill out the form below:
              </p>
              <form className="contact-form">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input type="text" className="form-control" placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Your Email</label>
                  <input type="email" className="form-control" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <textarea className="form-control" rows={6} placeholder="Type your message"></textarea>
                </div>
                <button type="submit" className="btn btn-success w-100 mt-3">
                  Submit <i className="ri-send-plane-fill"></i>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="row gy-5 gx-4 mt-5 text-center">
            <div className="col-md-6 col-lg-3">
              <i className="bi bi-geo-alt-fill text-success fs-4"></i>
              <p className="mt-2">
                Hirapur, Deriachak, <br />
                Kolaghat - Purba Medinipur 721151
              </p>
            </div>
            <div className="col-md-6 col-lg-3">
              <i className="bi bi-telephone-fill text-success fs-4"></i>
              <p className="mt-2">
                Call us: <br />
                (+91 993-298-0522)
              </p>
            </div>
            <div className="col-md-6 col-lg-3">
              <i className="bi bi-envelope-fill text-success fs-4"></i>
              <p className="mt-2">
                Mail us: <br />
                leafcraft73@gmail.com
              </p>
            </div>
            <div className="col-md-6 col-lg-3">
              <i className="bi bi-clock-fill text-success fs-4"></i>
              <p className="mt-2">
                Open Time: <br />
                10:00AM - 6:00PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
