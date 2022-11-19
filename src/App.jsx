import "./App.css";
import Layout from "./Components/Layout/Layout";
import Router from "./routes/Router";
import { Link } from "react-router-dom";
import { useState } from "react";

function App() {
  return (
    <div>
      <Layout />
      <div className="main-content">
        <a href="/buy" className="conn-wlt btn btn-primary float-right">
          Buy NFT
        </a>
        <a
          href="/"
          type="button"
          className="conn-wlt btn btn-primary float-right"
        >
          Check Status
        </a>
        <a
          href="/renew"
          type="button"
          className="conn-wlt btn btn-primary float-right"
        >
          Renew Subsciption
        </a>
      </div>
      <Router />
    </div>
  );
}

export default App;
