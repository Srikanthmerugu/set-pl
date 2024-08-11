import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./components/Home/home";
import SingleChamber from "./components/Chambers/SingleCamber/singleChamber";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="singleChamber" element={<SingleChamber />} />
      </Routes>
    </Router>
  );
}

export default App;
