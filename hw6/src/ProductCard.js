import React from 'react';
import './ProductCard.css'; 

const ProductCard = ({ name, image, price, availability }) => {
    return (
        <div className="product-card">
            <img src={image} alt={name} className="product-image" />
            <h3 className="product-name">{name}</h3>
            <p className="product-price">${price.toFixed(2)}</p>
            <p className={`product-availability ${availability ? 'in-stock' : 'out-of-stock'}`}>
                {availability ? 'In Stock' : 'Out of Stock'}
            </p>
        </div>
    );
};

export default ProductCard;
