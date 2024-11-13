// src/components/Checkout.js
import React from 'react';

const Checkout = () => {
  return (
    <div>
      <h1>Checkout</h1>
      <form>
        <div>
          <label>Full Name</label>
          <input type="text" required />
        </div>
        <div>
          <label>Address</label>
          <input type="text" required />
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
