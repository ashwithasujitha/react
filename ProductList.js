import React, { useState, useEffect } from 'react';
import './ProductList.css'; // Add your CSS file

const ProductList = ({ products = [], addToCart, setCurrentPage }) => {
  // Get unique categories from the products
  const categories = ['All', ...new Set(products.map(product => product.category))];
  
  // States for managing selected category, button texts, and product quantities
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [buttonText, setButtonText] = useState([]);
  const [quantities, setQuantities] = useState({});

  // Initialize quantities and button texts when the products list changes
  useEffect(() => {
    const initialQuantities = {};
    const initialButtonTexts = [];
    
    products.forEach((product, index) => {
      initialQuantities[product.id] = 0; // Set initial quantity to 0
      initialButtonTexts[index] = "Add to cart"; // Set initial button text
    });
    
    setQuantities(initialQuantities);
    setButtonText(initialButtonTexts);
  }, [products]);

  // Handle changing quantity for a specific product
  const handleQuantityChange = (productId, value) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(0, value), // Ensure quantity doesn't go below 0
    }));
  };

  // Handle adding a product to the cart
  const handleAddToCart = (product, index) => {
    const quantity = quantities[product.id]; // Get the current quantity
    
    if (quantity > 0) { // Only add to cart if quantity is greater than 0
      addToCart({ ...product, quantity }); // Call the passed function to add the product to cart
      
      setButtonText((prev) => {
        const newButtonText = [...prev];
        newButtonText[index] = "Added to cart"; // Update the button text
        return newButtonText;
      });
      
      setCurrentPage('cart'); // Navigate to the cart page
    } else {
      alert("Please set a quantity greater than 0 before adding to cart."); // Alert for 0 quantity
    }
  };

  // Handle changing the selected category
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="product-list">
      <h2>Product List</h2>
      <div className="category-filter">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={selectedCategory === category ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </div>
      <ul className="product-items">
        {filteredProducts.map((product, index) => (
          <li key={product.id} className="product-item">
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <input
              type="number"
              min="0"
              value={quantities[product.id] || 0}
              onChange={(e) => handleQuantityChange(product.id, Number(e.target.value))}
              style={{ width: '60px', marginRight: '10px' }}
            />
            <button onClick={() => handleAddToCart(product, index)}>
              {buttonText[index]}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
