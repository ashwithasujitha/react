// Inventory.js
import React, { useState } from 'react';
import './Inventory.css';

const Inventory = ({ products, updateProductStock }) => {
  const [updatedStock, setUpdatedStock] = useState({});

  // Handle stock input changes
  const handleStockChange = (e, productId) => {
    setUpdatedStock({
      ...updatedStock,
      [productId]: e.target.value,
    });
  };

  // Update stock when the button is clicked
  const handleUpdateStock = (productId) => {
    const newStock = parseInt(updatedStock[productId], 10);
    if (!isNaN(newStock)) {
      updateProductStock(productId, newStock);
      alert('Stock updated successfully!');
    }
  };

  return (
    <div className="inventory">
      <h2>Inventory Management</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <span>{product.name}</span>
            <span>Stock: {product.stock}</span>
            <input
              type="number"
              min="0"
              value={updatedStock[product.id] || ''}
              onChange={(e) => handleStockChange(e, product.id)}
              placeholder="Update stock"
            />
            <button onClick={() => handleUpdateStock(product.id)}>Update Stock</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inventory;
