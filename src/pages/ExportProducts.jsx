// src/services/DryPowderInjections.jsx
import React from 'react';
import '../injection.css'; // Ensure this CSS file exists and is properly configured
import image from '../assets/images/exp.jpg';

const ExportProducts = () => {
  return (
    <div className="service-container">
      <div className="service-image-container">
        <img src={image} alt="Export Products" className="service-image" />
        <div className="service-text-container">
          <div className="service-text">
            EXPORT PRODUCTS
          </div>
          <div className="underline"></div>
        </div>
      </div>
      <div className="service-content">
        <h2>Export Prducts</h2>
        <p>
          
        </p>
      </div>
    </div>
  );
};

export default ExportProducts;