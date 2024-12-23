import React from 'react';
import { useParams } from 'react-router-dom';
import tesla from '../images/tesla.jpg';
import bmw from '../images/bmw.jpg';
import audi from '../images/audi.jpg';
import mercedes from '../images/benz.jpg';
import mustang from '../images/mustang.jpg';
import corvette from '../images/corvette.jpg';
import porsche from '../images/porsche.jpg';
import camry from '../images/camry.jpg';
import civic from '../images/honda.jpg';


function CarDetails({ addToCart }) {
  const { id } = useParams();

  // Car data
  const cars = [
    {
      id: 1,
      title: 'Tesla Model S',
      description: 'Electric luxury car',
      price: 79999,
      image: tesla,
    },
    {
      id: 2,
      title: 'BMW M4',
      description: 'High-performance sports car',
      price: 70999,
      image: bmw,
    },
    {
      id: 3,
      title: 'Audi A8',
      description: 'Luxury sedan',
      price: 85999,
      image: audi,
    },
    {
      id: 4,
      title: 'Mercedes-Benz C-Class',
      description: 'Compact executive car',
      price: 42999,
      image: mercedes,
    },
    {
      id: 5,
      title: 'Ford Mustang',
      description: 'Classic muscle car',
      price: 55999,
      image: mustang,
    },
    {
      id: 6,
      title: 'Chevrolet Corvette',
      description: 'Iconic sports car',
      price: 65999,
      image: corvette,
    },
    {
      id: 7,
      title: 'Porsche 911',
      description: 'Legendary sports car',
      price: 99999,
      image: porsche,
    },
    {
      id: 8,
      title: 'Toyota Camry',
      description: 'Reliable family sedan',
      price: 24999,
      image: camry,
    },
    {
      id: 9,
      title: 'Honda Civic',
      description: 'Compact and efficient',
      price: 22999,
      image: civic,
    },
  ];

  const car = cars.find(car => car.id === parseInt(id));

  if (!car) {
    return <h2>Car not found</h2>;
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>{car.title}</h1>
      <img
        src={car.image}
        alt={car.title}
        style={{ width: '60%', height: 'auto', margin: '20px 0' }}
      />
      <p style={{ fontSize: '18px' }}>{car.description}</p>
      <h2>${car.price.toLocaleString()}</h2>
      <button
        onClick={() => addToCart(car)}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default CarDetails;
