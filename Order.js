// Order.js
import React from 'react';
import './Order.css';

const Order = ({ orders = [] }) => {
  return (
    <div className="order-page">
      <h2>Order History</h2>
      {orders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        <ul>
          {orders.map((order, index) => (
            <li key={index}>
              <h3>Order {index + 1}</h3>
              <ul>
                {order.map((item) => (
                  <li key={item.id}>
                    {item.name} - Quantity: {item.quantity}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Order;
