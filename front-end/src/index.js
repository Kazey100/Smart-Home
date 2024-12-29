import React from "react";
import ReactDOM from "react-dom/client"; // Correct import for React 18
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./Login";
import RegisterPage from "./components/pages/RegisterPage";
import App from "./App";
import "./index.css";

const Root = () => (
  <Router>
    <App />

    <Routes>
      {/* <Route path="/" element={<Login />} /> */}
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  </Router>
);

// Use createRoot in React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
