import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { forgotPassword } from "../../Api/Function/authFunction";
import { toast } from "react-toastify";
import forgotbanner from "../../assets/forgot-6.jpg"

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    answer: "",
    newPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, answer, newPassword } = formData;

    if (!email.trim() || !answer.trim() || !newPassword.trim()) {
      toast.error("All fields are required.");
      return;
    }

    const newData = {
      email,
      answer,
      newPassword,
    };

    try {
      setLoading(true);
      await forgotPassword(newData, navigate, setLoading);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="section pt-5" 
          style={{ 
            marginTop: '80px',
            height: "600px",
            backgroundImage : `URL(${forgotbanner})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
    
           }}>
      <div className="container py-5 d-flex justify-content-center">
        <div className="p-4 custom-shadow" style={{ maxWidth: '500px', width: '100%', backdropFilter: "blur(8px)" }}>
          <div className="border-0">
            <h5 className="text-center mb-3 text-success sign-up-title fw-bold">
              Forgot Password
            </h5>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-3 input-area">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control border shadow-sm"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3 input-area">
              <label htmlFor="answer" className="form-label">
                Security Answer
              </label>
              <input
                type="text"
                id="answer"
                name="answer"
                className="form-control border shadow-sm"
                placeholder="Enter Your Answer"
                value={formData.answer}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3 input-area">
              <label htmlFor="newPassword" className="form-label">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                className="form-control border shadow-sm"
                placeholder="Enter Your New Password"
                value={formData.newPassword}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="btn text-white btn-signup w-100"
              disabled={loading}
            >
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
