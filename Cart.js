// Cart.js
import React from 'react';
import './cart.css';

const Cart = ({ cartItems, setCartItems, handleOrder, setCurrentPage }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - Quantity: {item.quantity}
            </li>
          ))}
        </ul>
      )}
      <button onClick={handleOrder}>Place Order</button>
    </div>
  );
};

export default Cart;
