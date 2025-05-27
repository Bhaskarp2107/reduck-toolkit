import React, { useState } from 'react';
import './Payment.css';

const Payment = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate successful payment
    setIsSubmitted(true);
  };

  return (
    <div className="payment-container">
      {!isSubmitted ? (
        <>
          <h2>Payment Details</h2>
          <form className="payment-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Cardholder Name</label>
              <input type="text" placeholder="John Doe" required />
            </div>

            <div className="form-group">
              <label>Card Number</label>
              <input type="text" placeholder="1234 5678 9012 3456" maxLength="19" required />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Expiry Date</label>
                <input type="text" placeholder="MM/YY" required />
              </div>
              <div className="form-group">
                <label>CVV</label>
                <input type="password" placeholder="123" maxLength="4" required />
              </div>
            </div>

            <div className="form-group">
              <label>Payment Method</label>
              <select required>
                <option value="">Select</option>
                <option value="credit">Credit Card</option>
                <option value="debit">Debit Card</option>
                <option value="upi">UPI</option>
                <option value="netbanking">Net Banking</option>
              </select>
            </div>

            <button type="submit">Pay Now</button>
          </form>
        </>
      ) : (
        <div className="success-message">
          <h2>✅ Payment Successful!</h2>
          <p>Thank you for your purchase.</p>
        </div>
      )}
    </div>
  );
};

export default Payment;
