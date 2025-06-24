import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthProvider';
import { login } from '../../Api/Function/authFunction';
import loginbanner from "./../../assets/login.jpg"

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newData = {
      email: formData.email,
      password: formData.password,
    };
    login(newData, navigate, setLoading, auth, setAuth);
    setLoading(true);
  };

  return (
    <>
      <div className="section pt-5" 
      style={{ 
        marginTop: '80px',
        height: "600px",
        backgroundImage : `URL(${loginbanner})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"

       }}>
        <div className="container py-5 d-flex justify-content-center">
          <div className="p-4 custom-shadow" style={{ maxWidth: '500px', width: '100%', backdropFilter: "blur(8px)" }}>
            <div className="border-0">
              <h5 className="text-center mb-3 text-success sign-up-title fw-bold">
                Login
              </h5>
            </div>

            <div>
              <form onSubmit={handleSubmit}>
                <div className="mb-3 input-area">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control border shadow-sm"
                    placeholder="Enter Your Email"
              
                  />
                </div>

                <div className="mb-3 input-area">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="form-control border shadow-sm"
                    placeholder="Enter Your Password"
               
                  />
                </div>

                <div className="text-end my-3">
                  <Link to="/forgot-password" className="mb-0 terms text-success">
                    Forgot Password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="btn text-white btn-signup w-100"
                  disabled={loading}
                >
                  {loading ? (
                    <div
                      className="spinner-border spinner-border-sm text-light"
                      role="status"
                    >
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  ) : (
                    'Login'
                  )}
                </button>
              </form>

              <div className="text-center mt-3">
                <p className="mb-0 terms">
                  Create New? <Link to="/register">Sign Up</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
