import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './Payment.css';

const Payment = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    alert('Payment Successful!');
    clearCart();
    navigate('/');
  };

  return (
  <div className="payment-container">
  <h2>Payment Page</h2>

  {cart.length === 0 ? (
    <p>Your cart is empty.</p>
  ) : (
    <>
      <div className="cart-items">
        <h3>Cart Items:</h3>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - Quantity: {item.quantity}
            </li>
          ))}
        </ul>
      </div>

      <form onSubmit={handlePayment} className="payment-form">
        <input type="text" placeholder="Card Number" required />
        <input type="text" placeholder="Card Holder Name" required />
        <input type="text" placeholder="Expiry Date (MM/YY)" required />
        <input type="text" placeholder="CVV" required />

        <div className="payment-buttons">
          <button type="button" className="back" onClick={() => navigate('/cart')}>
            Back to Cart
          </button>
          <button type="submit" className="pay">
            Pay Now
          </button>
        </div>
      </form>
    </>
  )}
</div>
  );
};

export default Payment;
