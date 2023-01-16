import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <React.StrictMode>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/reachOut" element={<ReachOut/>}/>
    </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
