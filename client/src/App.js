import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import VideoView from "./views/VideoView";
import LeveledMoves from "./views/LeveledMoves";
import TurnView from "./views/TurnView";
import Footer from "./views/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>ROLLER-GUIDE</h1>
          <NavBar bg="dark" />
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/Video" element={<VideoView />} />
            <Route path="/LeveledMoves" element={<LeveledMoves />} />
            <Route path="/TurnView" element={<TurnView />} />
          </Routes>
          <Footer />
        </div>
      </header>
    </div>
  );
}

export default App;
