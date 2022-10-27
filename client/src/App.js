import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import VideoView from "./views/VideoView";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>ROLLER-GUIDE</h1>
          <NavBar />

          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/Video" element={<VideoView />} />
          </Routes>
        </div>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
