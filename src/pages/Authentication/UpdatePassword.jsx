import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { updatePassword } from "../../Api/Function/authFunction"; 
import { useAuth } from "../../Context/AuthProvider";

import updatebanner from "../../assets/update-password.jpg"

const UpdatePassword = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();

  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("auth");
    if (!token || !auth?.user) {
      toast.error("Unauthorized! Please login.");
      navigate("/login");
    }
  }, [navigate, auth]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { newPassword, confirmPassword } = formData;

    if (!newPassword.trim() || !confirmPassword.trim()) {
      toast.error("All fields are required.");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    const newData = {
      user_id: auth.user._id,
      password: newPassword,
    };

    try {
      setLoading(true);
      await updatePassword(newData, navigate, setLoading, auth?.token, setAuth);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="section pt-5" style={{ 
            marginTop: '80px',
            height: "600px",
            backgroundImage : `URL(${updatebanner})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
    
           }}>
      <div className="container py-5 d-flex justify-content-center">
        <div className="p-4 custom-shadow" style={{ maxWidth: '500px', width: '100%', backdropFilter: "blur(8px)" }}>
          <div className="border-0">
            <h5 className="text-center mb-3 text-success sign-up-title fw-bold">
              Update Password
            </h5>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-3 input-area">
              <label htmlFor="newPassword" className="form-label">
                New Password
              </label>
              <input
                type="password"
                name="newPassword"
                id="newPassword"
                className="form-control border shadow-sm"
                placeholder="Enter New Password"
                value={formData.newPassword}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3 input-area">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="form-control border shadow-sm"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="btn text-white btn-signup w-100"
              disabled={loading}
            >
              {loading ? "Updating..." : "Update Password"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
