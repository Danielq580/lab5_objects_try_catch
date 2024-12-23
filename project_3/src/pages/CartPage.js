import React from 'react';
import Footer from '../components/Footer';

function CartPage({ cartItems, removeFromCart }) {
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const calculateTax = (subtotal) => {
    return (subtotal * 8.16) / 100;
  };

  const calculateTotal = (subtotal, tax) => {
    return subtotal + tax;
  };

  const subtotal = calculateSubtotal();
  const tax = calculateTax(subtotal);
  const total = calculateTotal(subtotal, tax);

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map(item => (
              <li key={item.id} style={{ marginBottom: '10px' }}>
                <div>{item.title}</div>
                <div>${item.price.toLocaleString()}</div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    padding: '5px 10px',
                    backgroundColor: 'red',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div>
            <p>Subtotal: ${subtotal.toLocaleString()}</p>
            <p>Tax (8.16%): ${tax.toLocaleString()}</p>
            <p>Total: ${total.toLocaleString()}</p>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default CartPage;
