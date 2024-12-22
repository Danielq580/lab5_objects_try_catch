import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header({ cartItems }) {
  return (
    <header className="header">
      <h1 className="logo">CarShop</h1>
      <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/cart" className="nav-link cart-button">
          🛒 Cart ({cartItems.length})
        </Link>
      </nav>
    </header>
  );
}

export default Header;
