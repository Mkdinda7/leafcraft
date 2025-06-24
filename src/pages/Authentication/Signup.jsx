import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../Api/Function/authFunction";
import registerbanner from "./../../assets/register.jpg"


const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    answer: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      phone: formData.phone,
      answer: formData.answer,
    };
    registerUser(newData, navigate, setLoading);
  };

  return (
    <>
      <div className="section pt-5" style={{
         marginTop: "80px",
         backgroundImage: `url(${registerbanner})`,
         backgroundSize: "cover",
         backgroundRepeat: "no-repeat", 
         height: "100dvh",
        }}>
        <div className="container py-5 d-flex justify-content-center">
          <div className="p-4 custom-shadow" 
          style={{ 
            maxWidth: "500px", 
            width: "100%",
            }}>
            <div className="border-0">
              <h5 className="text-center mb-3 text-success sign-up-title fw-bold">
                Sign Up
              </h5>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-3 input-area">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control border shadow-sm"
                  placeholder="Enter Your Name"
                  value={formData.name}
                  onChange={handleChange}
                
                />
              </div>

             <div className="d-flex justify-content-between">
                <div className="mb-3 input-area">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control border shadow-sm"
                    placeholder="Enter Your Email"
                    value={formData.email}
                    onChange={handleChange}
                  
                  />
                </div>

                <div className="mb-3 input-area">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="form-control border shadow-sm"
                    placeholder="Enter Your Phone"
                    value={formData.phone}
                    onChange={handleChange}
                  
                  />
                </div>
             </div>

              <div className="mb-3 input-area">
                <label htmlFor="answer" className="form-label">
                  Security Answer (e.g. pet name)
                </label>
                <input
                  type="text"
                  id="answer"
                  className="form-control border shadow-sm"
                  placeholder="Enter Your Answer"
                  value={formData.answer}
                  onChange={handleChange}
                  
                />
              </div>

              <div className="mb-3 input-area">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control border shadow-sm"
                  placeholder="Enter Your Password"
                  value={formData.password}
                  onChange={handleChange}
                 
                />
              </div>

              <p className="terms text-muted mb-2">
                You agree to our <a href="#">Terms of Service</a> &{" "}
                <a href="#">Privacy Policy</a>
              </p>

              <button
                type="submit"
                className="btn text-white btn-signup w-100"
                disabled={loading}
              >
                {loading ? "Signing Up..." : "Sign Up"}
              </button>
            </form>

            <div className="text-center mt-3">
              <p className="mb-0 terms">
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
