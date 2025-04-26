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

// Top Info Bar Component
const TopInfoBar = () => {
  return (
    <div className="top-info-bar">
      <p>
        Cryptos: 14.4M Exchanges: 808 Market Cap: $2.97T{" "}
        <span className="down-arrow">↓</span> 0.97% 24h Vol: $100.4B{" "}
        <span className="up-arrow">↑</span> 0.06% Dominance: BTC 53.2% ETH 17.3%
        Gas: ETH <span className="down-arrow">↓</span> 0.05 Gwei Peer & Greed:
        53 Neutral
      </p>
    </div>
  );
};

// TodaysPrices Component
const TodaysPrices = () => {
  return (
    <section className="todays-prices">
      <h1>Today's Cryptocurrency Prices by Market Cap</h1>
      <p className="global-market-cap">
        The global crypto market cap is $2.97T, a{" "}
        <span className="up-arrow">↑</span> 0.97% increase over the last day.{" "}
        <a href="#">Read More</a>
      </p>
    </section>
  );
};

// TrendingCoinsCard Component
const TrendingCoinsCard = ({ coins }) => {
  return (
    <div className="trending-coins-card">
      <div className="card-header">Trending Coins</div>
      <ul>
        {coins.map((coin) => (
          <li key={coin.id}>
            <div className="coin-info">
              <img src={coin.logo} alt={coin.name} className="coin-logo" />
              <div className="coin-details">
                <div className="coin-name">{coin.name}</div>
                <div className="coin-symbol">{coin.symbol}</div>
              </div>
            </div>
            <div className="coin-price">${coin.price.toFixed(2)}</div>
            <div className={`coin-change ${coin.change >= 0 ? "up" : "down"}`}>
              {coin.change.toFixed(2)}%
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// TrendingDexSeanCard Component
const TrendingDexSeanCard = ({ items }) => {
  return (
    <div className="trending-dex-card">
      <div className="card-header">Trending on DexSean</div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <div className="dex-info">
              <div className="dex-rank">{item.id}</div>
              <div className="dex-details">
                <div className="dex-name">{item.name}</div>
                <div className="dex-symbol">{item.symbol}</div>
              </div>
            </div>
            <div className="dex-price">${item.price.toFixed(4)}</div>
            <div className={`dex-change ${item.change >= 0 ? "up" : "down"}`}>
              {item.change.toFixed(2)}%
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// MarketCapCard Component
const MarketCapCard = () => {
  return (
    <div className="market-cap-card">
      <div className="card-header">Market Cap</div>
      <div className="market-cap-value">$2.97T</div>
      <div className="market-cap-change down">↓ 0.97%</div>
      <div className="market-cap-chart">
        {/* Placeholder for chart */}
        <div
          style={{ width: "100%", height: "50px", backgroundColor: "#f0f0f0" }}
        ></div>
      </div>
    </div>
  );
};

// Cmc100Card Component
const Cmc100Card = () => {
  return (
    <div className="cmc100-card">
      <div className="card-header">CMC100</div>
      <div className="cmc100-value">$181.19</div>
      <div className="cmc100-change up">↑ 0.77%</div>
      <div className="cmc100-chart">
        {/* Placeholder for chart */}
        <div
          style={{ width: "100%", height: "50px", backgroundColor: "#f0f0f0" }}
        ></div>
      </div>
    </div>
  );
};

// SatoshiCard Component
const SatoshiCard = () => {
  return (
    <div className="satoshi-card">
      <div className="card-header">
        Satoshi_Club <span className="time">23h</span>
      </div>
      <p className="tweet">AI-themed memecoins are pumping.</p>
      <div className="tweet-actions">
        <span>💬 11</span>
        <span>🔁</span>
        <span>❤️</span>
      </div>
    </div>
  );
};

// FearGreedCard Component
const FearGreedCard = () => {
  return (
    <div className="fear-greed-card">
      <div className="card-header">Fear & Greed</div>
      <div className="fear-greed-index">
        <div className="indicator">53</div>
        <div className="label">Neutral</div>
        <div className="scale">
          <span style={{ left: "53%" }}></span>
        </div>
        <div className="scale-labels">
          <span>0</span>
          <span>25</span>
          <span>50</span>
          <span>75</span>
          <span>100</span>
        </div>
        <div className="scale-text">
          <span>Extreme Fear</span>
          <span>Fear</span>
          <span>Neutral</span>
          <span>Greed</span>
          <span>Extreme Greed</span>
        </div>
      </div>
    </div>
  );
};

// AltcoinSeasonCard Component
const AltcoinSeasonCard = () => {
  return (
    <div className="altcoin-season-card">
      <div className="card-header">Altcoin Season?</div>
      <div className="altcoin-index">
        <div className="index-value">14</div>
        <div className="label">Should Be In</div>
        <div className="scale">
          <span style={{ left: "14%" }}></span>
        </div>
        <div className="scale-labels">
          <span>0</span>
          <span>100</span>
        </div>
        <div className="scale-text">
          <span>Bitcoin Season</span>
          <span>Altcoin Season</span>
        </div>
      </div>
    </div>
  );
};

// CryptoNewsCard Component
const CryptoNewsCard = () => {
  return (
    <div className="crypto-news-card">
      <div className="card-header">
        crypto.news <span className="time">20 hours</span>
      </div>
      <p className="news-item">
        Ondo Finance reclaims $38 market cap as SEC opens tokenization talks
      </p>
    </div>
  );
};

// TrendingSection Component
const TrendingSection = () => {
  const trendingCoins = [
    {
      id: 1,
      logo: "./assets/bitcoin.png",
      name: "BTC",
      symbol: "BTC",
      price: 94444.05,
      change: -0.77,
    },
    {
      id: 2,
      logo: "./assets/ethereum.png",
      name: "ETH",
      symbol: "ETH",
      price: 1814.24,
      change: -2.3,
    },
    {
      id: 3,
      logo: "./assets/bitcoin.png",
      name: "BONK",
      symbol: "BONK",
      price: 0.00001883,
      change: 16.0,
    },
    {
      id: 4,
      logo: "./assets/bitcoin.png",
      name: "VIRTUAL",
      symbol: "VIRTUAL",
      price: 1.08,
      change: -31.33,
    },
    {
      id: 5,
      logo: "./assets/bitcoin.png",
      name: "BSV",
      symbol: "BSV",
      price: 43.51,
      change: -22.22,
    },
  ];

  const trendingDexSean = [
    { id: 1, name: "TRUMP", symbol: "USDT", price: 16.21, change: -25.6 },
    { id: 2, name: "Fartcoin", symbol: "FART", price: 1, change: 6.34 },
    { id: 3, name: "LetsBONK", symbol: "LBONK", price: 0.2187, change: -9999 },
    { id: 4, name: "POPCAT", symbol: "POPCAT", price: 0.3965, change: -0.4 },
    { id: 5, name: "USDT", symbol: "USDT", price: 0.9994, change: -0.01 },
  ];

  return (
    <section className="trending-section">
      <TrendingCoinsCard coins={trendingCoins} />
      <TrendingDexSeanCard items={trendingDexSean} />
      <MarketCapCard />
      <Cmc100Card />
      <SatoshiCard />
      <FearGreedCard />
      <AltcoinSeasonCard />
      <CryptoNewsCard />
    </section>
  );
};

// FilterBar Component
const FilterBar = () => {
  return (
    <section className="filter-bar">
      <div className="all-crypto active">All Crypto</div>
      <div className="nfts">NFTs</div>
      <div className="categories">Categories</div>
      <div className="token-unlocks">Token unlocks</div>
      <div className="rehype">Rehypothecation</div>
      <div className="binance-alpha">Binance Alpha</div>
      <div className="tags">
        <div className="tag">#SOL</div>
        <div className="tag">#BNB</div>
        <div className="tag">#USA</div>
        <div className="tag">#AI</div>
        <div className="tag">#RWA</div>
        <div className="tag">#Gaming</div>
        <div className="tag">#DeFi</div>
        <div className="tag">#DataFi</div>
        {/* Add more tags as needed */}
      </div>
    </section>
  );
};

// CoinsTableSection Component
const CoinsTableSection = () => {
  return (
    <section className="coins-table-section">
      {/* Placeholder for the main coins table */}
      <div
        style={{
          width: "100%",
          height: "300px",
          backgroundColor: "#e0e0e0",
          textAlign: "center",
          lineHeight: "300px",
        }}
      >
        Coins Table Content Here
      </div>
    </section>
  );
};

// FooterBar Component
const FooterBar = () => {
  return (
    <footer className="footer-bar">
      <div className="left-footer">
        <div className="coins-tab active">
          <span className="icon">#</span> Coins
        </div>
        <div className="dexscan-tab">
          <span>DEX</span> DexScan
        </div>
        <div className="trending-tab">
          <span className="arrow-up">↑</span> Trending
        </div>
        <div className="new-tab">✨ New</div>
        <div className="gainers-tab">🔥 Gainers</div>
        <div className="most-visited-tab">⭐ Most Visited</div>
      </div>
      <div className="right-footer">
        <div className="filters-btn">
          <span className="icon">⚙️</span> Filters
        </div>
        <div className="columns-btn">
          <span className="icon"></span> Columns
        </div>
        <div className="show-row-count">Show 100</div>
      </div>
    </footer>
  );
};

// Main App Component
function Upper() {
  return (
    <div className="app">
      <Header />
      <TopInfoBar />
      <main className="main-content">
        <TodaysPrices />
        <TrendingSection />
        <FilterBar />
        <CoinsTableSection />
        <FooterBar />
      </main>
    </div>
  );
}

export default Upper;
