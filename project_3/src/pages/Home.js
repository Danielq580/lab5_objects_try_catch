import React from 'react';
import ProductCard from '../components/ProductCard';

function Home({ addToCart }) {
  const products = [
    {
      id: 1,
      title: 'Tesla Model S',
      description: 'Electric luxury car',
      price: 79999,
      image: 'https://example.com/tesla.jpg'
    },
    {
      id: 2,
      title: 'BMW M4',
      description: 'High-performance sports car',
      price: 70999,
      image: 'https://example.com/bmw.jpg'
    },
    {
      id: 3,
      title: 'Audi A8',
      description: 'Luxury sedan',
      price: 85999,
      image: 'https://example.com/audi.jpg'
    }
  ];

  return (
    <div>
      <h2>Our Cars</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Home;
