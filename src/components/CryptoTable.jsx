import React from "react";
import { useSelector } from "react-redux";
import MiniChart from "./MiniChart";

import "./CryptoTable.css"; // Optional: if you separate CSS per component

const CryptoTable = () => {
  const assets = useSelector((state) => state.crypto.assets);

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Logo</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>1h %</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>Market Cap</th>
            <th>24h Volume</th>
            <th>Circulating Supply</th>
            <th>Max Supply</th>
            <th>7D Chart</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, index) => (
            <tr key={asset.id}>
              <td>{index + 1}</td>
              <td>
                <img
                  src={asset.logo}
                  width="20%"
                  height="10%"
                  alt={asset.name}
                  className="logo"
                />
              </td>
              <td>{asset.name}</td>
              <td>{asset.symbol}</td>
              <td>${asset.price.toFixed(2)}</td>
              <td className={asset.change1h >= 0 ? "positive" : "negative"}>
                {asset.change1h}%
              </td>
              <td className={asset.change24h >= 0 ? "positive" : "negative"}>
                {asset.change24h}%
              </td>
              <td className={asset.change7d >= 0 ? "positive" : "negative"}>
                {asset.change7d}%
              </td>
              <td>${asset.marketCap.toLocaleString()}</td>
              <td>${asset.volume24h.toLocaleString()}</td>
              <td>{asset.circulatingSupply.toLocaleString()}</td>
              <td>
                {asset.maxSupply ? asset.maxSupply.toLocaleString() : "-"}
              </td>
              <td>
                <MiniChart points={asset.chartPoints} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
