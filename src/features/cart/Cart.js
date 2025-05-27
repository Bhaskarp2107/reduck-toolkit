// src/features/cart/Cart.js
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from './cartSlice';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <ul>
            {items.map(item => (
              <li key={item.id} className="my-2">
                {item.name} - ₹{item.price}
                <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
              </li>
            ))}
          </ul>
          <button onClick={() => navigate('/payment')}>Proceed to Payment</button>
        </>
      )}
    </div>
  );
}
