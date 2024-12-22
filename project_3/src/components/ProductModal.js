import React from 'react';
import '../styles/ProductModal.css';

function ProductModal({ product, closeModal }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <img src={product.image} alt={product.title} className="modal-image" />
        <div className="modal-details">
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p className="price">${product.price}</p>
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
