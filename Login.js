import React from 'react';
import './Auth.css';

const Login = ({ setCurrentPage }) => {
  const handleLogin = () => {
    // Your login logic here
    setCurrentPage('products'); // Navigate to products page after login
  };

  return (
    <div className="auth-container">
      <form className="auth-form">
        <h2>Login</h2>
        <input type="text" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="button" onClick={handleLogin}>Login</button>
        <div className="toggle">
          <span>Don't have an account? </span>
          <button type="button" onClick={() => setCurrentPage('signup')}>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
