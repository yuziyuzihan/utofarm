import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="logo-container">
        <i className="fas fa-kiwi-bird"></i>
        <h1 className="logo-name">Utoboar</h1>
      </div>
      <div className="socials-container">
        {/* <button className="discord-button">
          <i className="fab fa-discord"></i>
        </button> */}
        <a href ="https://twitter.com/utoboar">
        <button className="twitter-button" >
          <i className="fab fa-twitter"   ></i>
        </button>

        </a>
        {/* <button className="twitter-button" >
          <i className="fab fa-twitter"   ></i>
        </button> */}
        <button className="connect-wallet-button">Connect Wallet</button>
      </div>
    </nav>
  );
};

export default Navbar;
