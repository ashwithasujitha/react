import React from 'react';
import './Auth.css';

const Signup = ({ setCurrentPage }) => {
  const handleSignup = () => {
    // Your signup logic here
    setCurrentPage('products'); // Navigate to products page after signup
  };

  return (
    <div className="auth-container">
      <form className="auth-form">
        <h2>Signup</h2>
        <input type="text" placeholder="Name" required />
        <input type="text" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="button" onClick={handleSignup}>Signup</button>
        <div className="toggle">
          <span>Already have an account? </span>
          <button type="button" onClick={() => setCurrentPage('login')}>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
