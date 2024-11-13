// App.js
import React, { useState } from 'react';
import Navbar from './components/navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/signup';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Order from './components/Order';
import Inventory from './components/Inventory'; // Import the Inventory component
import { products as initialProducts } from './data/products';
import Admin from './components/Admin';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [products, setProducts] = useState(initialProducts);
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([]);

  // Function to handle adding items to the cart
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingProduct = prevItems.find((item) => item.id === product.id);
      if (existingProduct) {
        // If product exists, increase quantity
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Otherwise, add the new product with quantity 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });

    // Update the product stock when adding to the cart
    setProducts((prevProducts) =>
      prevProducts.map((p) =>
        p.id === product.id ? { ...p, stock: p.stock - 1 } : p
      )
    );
  };

  // Function to handle placing an order
  const handlePlaceOrder = () => {
    setOrders((prevOrders) => [...prevOrders, cartItems]);
    setCartItems([]);
    setCurrentPage('order');
  };

  // Update stock for the inventory management
  const updateProductStock = (productId, newStock) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, stock: newStock } : product
      )
    );
  };

  // Function to render the current page based on the state
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'login':
        return <Login setCurrentPage={setCurrentPage} />;
      case 'signup':
        return <Signup setCurrentPage={setCurrentPage} />;
      case 'products':
        return (
          <ProductList
            products={products}
            addToCart={handleAddToCart}
            setCurrentPage={setCurrentPage}
          />
        );
      case 'cart':
        return (
          <Cart
            cartItems={cartItems}
            setCartItems={setCartItems}
            handleOrder={handlePlaceOrder}
            setCurrentPage={setCurrentPage}
          />
        );
      case 'order':
        return <Order orders={orders} />;
      case 'inventory':
        return <Inventory products={products} updateProductStock={updateProductStock} />;
      case 'admin':
        return (
          <Admin
            products={products}
            orders={orders}
            updateProductStock={updateProductStock}
          />
        );
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="app-container">
      <Navbar setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
};

export default App;
