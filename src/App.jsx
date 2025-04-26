import React, { useEffect } from "react";
import CryptoTable from "./components/CryptoTable";
import { useDispatch } from "react-redux";
import { startMockWebSocket } from "./utils/mockWebSocket";
import { updateAsset } from "./features/cryptoSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    startMockWebSocket(dispatch, updateAsset);
  }, [dispatch]);

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>
        Crypto Price Tracker
      </h1>
      <CryptoTable />
    </div>
  );
}

export default App;
