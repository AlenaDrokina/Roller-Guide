import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import VideoView from "./views/VideoView";
import LeveledMoves from "./views/LeveledMoves";
import TurnView from "./views/TurnView";
import Footer from "./views/Footer";

export default function App() {
  const [skateMoves, setSkateMoves] = useState([]);
  const [specMove, setSpecMove] = useState(null);

  useEffect(() => {
    getSkateMoves();
  }, []);
  const getSkateMoves = () => {
    fetch("/skateMoves")
      .then((response) => response.json())
      .then((skateMoves) => {
        setSkateMoves(skateMoves);
        //  setSpecMove(skateMoves[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  async function showSkateMove(id) {
    try {
      let response = await fetch(`/skateMoves/${id}`);
      if (response.ok) {
        let data = await response.json();
        setSpecMove(data);
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`Network error: ${err.message}`);
    }
  }

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
          {specMove && <LeveledMoves move={specMove} />}
          <Footer />
        </div>
      </header>
    </div>
  );
}
