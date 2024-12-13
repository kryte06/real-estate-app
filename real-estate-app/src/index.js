import React from "react";
import ReactDOM from "react-dom/client"; // Updated import
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import PropertyListings from "./pages/PropertyListings";
import Recommendations from "./pages/Recommendations";
import "./index.css";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/listings" element={<PropertyListings />} />
      <Route path="/recommendations" element={<Recommendations />} />
    </Routes>
  </Router>
);

// Updated rendering method
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
