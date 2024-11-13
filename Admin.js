import React, { useState } from 'react';
import './Admin.css';

const Admin = () => {
  // State for products and orders
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([
    // Example orders for illustration; replace with real data
    {
      id: '1',
      products: [
        { name: 'Apple', quantity: 2 },
        { name: 'Banana', quantity: 3 },
      ],
      total: 15.00,
    },
  ]);

  const [newProduct, setNewProduct] = useState({ name: '', price: '', category: '' });
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price && newProduct.category) {
      if (editIndex !== null) {
        // Update existing product
        setProducts((prev) =>
          prev.map((product, index) =>
            index === editIndex ? { ...newProduct, id: product.id } : product
          )
        );
      } else {
        // Add new product
        setProducts((prev) => [
          ...prev,
          { ...newProduct, id: Date.now().toString() },
        ]);
      }
      setNewProduct({ name: '', price: '', category: '' });
      setEditIndex(null);
    } else {
      alert("Please fill in all product details."); // Simple validation
    }
  };

  const handleEditProduct = (index) => {
    setEditIndex(index);
    setNewProduct(products[index]);
  };

  const handleDeleteProduct = (index) => {
    setProducts((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="admin-panel">
      <h2>Admin Dashboard</h2>

      <div className="product-management">
        <h3>Manage Products</h3>
        <div className="product-inputs">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="price"
            placeholder="Product Price"
            value={newProduct.price}
            onChange={handleInputChange}
            min="0"
          />
          <input
            type="text"
            name="category"
            placeholder="Product Category"
            value={newProduct.category}
            onChange={handleInputChange}
          />
        </div>
        <button onClick={handleAddProduct} className="action-button">
          {editIndex !== null ? 'Update Product' : 'Add Product'}
        </button>

        <ul className="product-list">
          {products.map((product, index) => (
            <li key={product.id} className="product-item">
              <strong>{product.name}</strong> - ${product.price} [{product.category}]
              <div className="product-actions">
                <button onClick={() => handleEditProduct(index)} className="edit-button">Edit</button>
                <button onClick={() => handleDeleteProduct(index)} className="delete-button">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="order-management">
        <h3>Order History</h3>
        {orders.length === 0 ? (
          <p>No orders placed.</p>
        ) : (
          <ul className="order-list">
            {orders.map((order, index) => (
              <li key={index} className="order-item">
                <strong>Order ID:</strong> {order.id}
                <br />
                <strong>Products:</strong> {order.products.map((prod) => `${prod.name} (${prod.quantity})`).join(', ')}
                <br />
                <strong>Total:</strong> ${order.total}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Admin;
