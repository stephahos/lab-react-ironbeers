import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Beers from "./pages/Beers";
import Random from "./pages/Random";
import AddBeer from "./pages/AddBeer";
import DetailedBeer from "./pages/DetailedBeer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/beers/:beerId" element={<DetailedBeer />} />
        <Route path="/random-beer" element={<Random />} />
        <Route path="/AddBeer" element={<AddBeer />} />
      </Routes>
    </div>
  );
}

export default App;
