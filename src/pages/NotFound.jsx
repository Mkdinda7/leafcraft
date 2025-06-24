import React from 'react';
import { Link } from 'react-router-dom';
import plantImg from '../assets/houseplant.png'; 

const NotFound = () => {
  return (
    <div className="section d-flex flex-column align-items-center justify-content-center text-center py-5" style={{ minHeight: '100vh',  backgroundColor: "#f9fef9"}}>
      <h1 className="display-4 fw-bold text-success "style={{fontSize: "80px"}} >4 <img
        src={plantImg}
        alt="House Plant"
        style={{ width: '100px', maxWidth: '50%', marginBottom: '20px' }}
      /> 4</h1>
      <h2 className="mb-3">Oops! Page not found</h2>
      <p className="text-muted mb-4">
        Looks like this page doesn't exist. But don’t worry, your favorite plants are still thriving!
      </p>
      <Link to="/" className="btn notfound-btn btn-success px-4 py-2  shadow">
        🌱 Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
