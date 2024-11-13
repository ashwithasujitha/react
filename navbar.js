// src/components/Navbar.js
import React from 'react';
import './Navbar.css'; // Import CSS for styling

const Navbar = ({ setCurrentPage }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Reliance Fresh</div>
      <div className="navbar-links">
        <a onClick={() => setCurrentPage('home')} href="#">Home</a>
        
        <a onClick={() => setCurrentPage('products')} href="#">Products</a>
        <a onClick={() => setCurrentPage('cart')} href="#">Cart</a>
      
        <a onClick={() => setCurrentPage('inventory')} href="#">Inventory</a>
        <a onClick={() => setCurrentPage('admin')} href="#">Admin</a>
      </div>
    </nav>
  );
};

export default Navbar;
