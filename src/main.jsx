import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import App from "./App";
import About from "./components/About";
import ReachOut from "./components/ReachOut"
import MyWork from "./components/Mywork";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <React.StrictMode>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/about" element={<About/>}/>
      <Route path="myWork" element={<MyWork/>}/>
      <Route path="/reachOut" element={<ReachOut/>}/>
    </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
