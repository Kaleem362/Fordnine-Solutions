import React from "react";
import "../Styles/productCategories.css";

function ProductCategories() {
  return (
    <div className="Product-container">
      <div className="product-header">
        <h1 className="text-center">Product Categories</h1>
        <div className="d-flex pt-5">
          <div className="card">
            <div className="bg d-flex align-items-center">
              <h3 className="text-center">AI-Powered Career Tools</h3>
            </div>
            <div className="blob"></div>
          </div>
          <div className="card">
            <div className="bg d-flex align-items-center">
              <h3 className="text-center">Creative AI Applications</h3>
            </div>
            <div className="blob"></div>
          </div>
          <div className="card">
            <div className="bg d-flex align-items-center">
              <h3 className="text-center">Educational AI Tools</h3>
            </div>
            <div className="blob"></div>
          </div>
          <div className="card">
            <div className="bg d-flex align-items-center">
              <h3 className="text-center">Religious & Lifestyle Tools</h3>
            </div>
            <div className="blob"></div>
          </div>
          <div className="card">
            <div className="bg d-flex align-items-center">
              <h3 className="text-center">Utility Apps</h3>
            </div>
            <div className="blob"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCategories;
