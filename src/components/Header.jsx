import React from "react";
import "./Header.css"; // You'll need to create this CSS file
// import BitcoinLogo from "./assets/bitcoin.png"; // Assuming you have the logo in your assets folder

// --- Components ---

// Header Component
const Header = () => {
  return (
    <header className="header">
      <div className="logo">CoinMarketCap</div>
      <nav className="nav">
        <ul>
          <li>Cryptocurrencies</li>
          <li>DexScan</li>
          <li>Exchanges</li>
          <li>Community</li>
          <li>Products</li>
        </ul>
      </nav>
      <div className="right-header">
        <div className="portfolio">Portfolio</div>
        <div className="watchlist">Watchlist</div>
        <div className="search">Search</div>
        <button className="login-btn">Login</button>
        <button className="get-listed-btn">Get Listed</button>
        <button className="api-btn">API</button>
      </div>
    </header>
  );
};

export default Header;
