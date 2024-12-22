import React, { useState } from 'react';
import ProductModal from './ProductModal';
import '../styles/ProductCard.css';

function ProductCard({ product, addToCart }) {
  const [showModal, setShowModal] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" onClick={toggleModal} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>

      {showModal && <ProductModal product={product} closeModal={toggleModal} />}
    </div>
  );
}

export default ProductCard;
