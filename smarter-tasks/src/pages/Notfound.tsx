// src/pages/Notfound.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="notfound-page">
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <button id="backToHomeButton" onClick={handleBackToHome}>
        Back to Homepage
      </button>
    </div>
  );
};

export default NotFound;
