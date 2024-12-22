import React from 'react';

function CartPage({ cartItems }) {
  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);
  const tax = (subtotal * 0.0816).toFixed(2);
  const total = (subtotal + parseFloat(tax)).toFixed(2);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.title} - ${item.price}
              </li>
            ))}
          </ul>
          <div className="totals">
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Sales Tax (8.16%): ${tax}</p>
            <p>Total: ${total}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
