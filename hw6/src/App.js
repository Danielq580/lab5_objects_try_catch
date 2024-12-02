import React from 'react';
import ProductCard from './ProductCard';
import toiletPaperImage from './images/toilet.jpg';
import chickenImage from './images/chicken.jpg';
import oliveOilImage from './images/extravirgin.jpg';

const products = [
    { id: 1, name: 'Kirkland Signature Extra Virgin Olive Oil', image: oliveOilImage, price: 16.99, availability: true },
    { id: 2, name: 'Rotisserie Chicken', image: chickenImage, price: 4.99, availability: true },
    { id: 3, name: 'Toilet Paper (30 Rolls)', image: toiletPaperImage, price: 19.99, availability: false },
];

const App = () => {
    return (
        <div className="app">
            <h1>Costco Product Listing</h1>
            <div className="product-list">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        image={product.image}
                        price={product.price}
                        availability={product.availability}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
