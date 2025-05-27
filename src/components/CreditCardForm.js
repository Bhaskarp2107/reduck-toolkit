// src/components/CreditCardForm.js
import { useState } from 'react';

export default function CreditCardForm() {
  const [card, setCard] = useState({ name: '', number: '', expiry: '', cvv: '' });

  return (
    <div className="my-4">
      <input placeholder="Cardholder Name" onChange={e => setCard({ ...card, name: e.target.value })} />
      <input placeholder="Card Number" onChange={e => setCard({ ...card, number: e.target.value })} />
      <input placeholder="Expiry MM/YY" onChange={e => setCard({ ...card, expiry: e.target.value })} />
      <input placeholder="CVV" onChange={e => setCard({ ...card, cvv: e.target.value })} />
    </div>
  );
}
