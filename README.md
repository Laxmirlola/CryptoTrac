# 📈 Real-Time Crypto Tracker

A **responsive React + Redux Toolkit** application that displays **live cryptocurrency prices** (Bitcoin, Ethereum, etc.) in a sleek table format, simulating real-time updates like CoinMarketCap.

---

## 🌟 Features

- Displays top 5 crypto assets with:
  - Logo
  - Name & Symbol
  - Live Price
  - 1h %, 24h %, 7d % Changes (color-coded green/red)
  - Market Cap
  - 24h Volume
  - Circulating Supply
  - Max Supply
  - 7-Day Mini Chart
- **Real-Time Updates** every 1–2 seconds (simulated WebSocket)
- **Redux Toolkit** for full state management
- **Mini 7-Day Line Charts** generated dynamically (SVG-based)
- **Responsive Design** — Mobile & Desktop friendly
- **Optimized re-renders** using Redux selectors

---

## 🛠️ Tech Stack

- **React** (Functional Components, Hooks)
- **Redux Toolkit** (createSlice, configureStore)
- **Mock WebSocket** (setInterval simulation)
- **Normal CSS** (no Tailwind/Bootstrap)
- **SVG Mini Charts** (dynamic 7D sparkline graphs)

---

## 📂 Folder Structure

```
src/
  ├── app/
  │     └── store.js           # Redux store configuration
  ├── features/
  │     └── cryptoSlice.js     # Crypto assets slice
  ├── components/
  │     ├── CryptoTable.jsx    # Main table component
  │     ├── CryptoTable.css    # Table styling
  │     └── MiniChart.jsx      # SVG Mini Chart component
  ├── utils/
  │     └── sampleData.js      # Mock crypto data
  ├── App.jsx                  # Main app
  ├── index.js                 # React DOM rendering
```

---

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Laxmirlola/crypto-tracker.git
   cd crypto-tracker
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## 📷 Screenshots

| Desktop View   |
|:-------------: |
| ![desktop view](https://github.com/user-attachments/assets/35e67cbd-7704-45e3-89a7-6ca8c17adf75)|


---

## 📈 Simulated Real-Time Behavior

- Every 1–2 seconds:
  - Price, % Changes, and 24h Volume **update randomly**
  - 7D mini-charts **slide new points**, simulating a moving sparkline

---

## 🧠 Key Concepts Practiced

- Redux Store Design
- Real-Time UI Simulation
- SVG Data Visualization
- Responsive Table Layouts
- React Component Architecture

---

## 🙌 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## 📜 License

This project is open-source and free to use.  
Feel free to customize it for your own crypto dashboard or portfolio!

---

# 💬 Final Note

Thanks for checking out this project!  
If you liked it or learned something new, give it a ⭐️ on GitHub!
