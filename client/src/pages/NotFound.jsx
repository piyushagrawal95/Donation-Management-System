import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBackCircle } from 'react-icons/io5'; // React Icon for "go back" icon

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="text-center">
        <h1 className="display-1 text-danger">404</h1>
        <p className="h4 mt-4">Oops! Page Not Found</p>
        <p className="mt-2">The page you're looking for doesn't exist or has been moved.</p>
        <button
          onClick={() => navigate(-1)}
          className="btn btn-primary mt-4 d-flex align-items-center justify-content-center"
        >
          <IoArrowBackCircle size={24} className="mr-2" />
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
