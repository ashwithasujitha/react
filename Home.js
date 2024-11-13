// src/components/Home.js
import React from 'react';
import './Home.css';

const Home = ({ setCurrentPage }) => {
  return (
    <div className="home-container">
      <div className="content">
        <h1>Welcome to Supermarket Manager</h1>
        <p className="slogan">
          <span className="word-1">Simplify</span> your management, 
          <span className="word-2">Empower</span> your business,
          <span className="word-3">Succeed</span> effortlessly!
        </p>

        <div className="button-container">
          <button
            className="button button-primary"
            onClick={() => setCurrentPage('signup')}
          >
            Get Started
          </button>
          <button
            className="button button-secondary"
            onClick={() => setCurrentPage('login')}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
