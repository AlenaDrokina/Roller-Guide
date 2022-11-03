import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
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
      <h1>ROLLER-GUIDE</h1>{" "}
      <div>
        {/* <header className="App-header"></header> */}

        <NavBar />
        <Routes>
          <Route path="/" element={<HomeView />} />

          <Route
            path="/LeveledMoves"
            element={
              <LeveledMoves move={specMove} showSkateMove={showSkateMove} />
            }
          />
          <Route
            path="/TurnView"
            element={<TurnView move={specMove} showSkateMove={showSkateMove} />}
          />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}
