import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
// import Naver from "./components/Naver";

import Local from "./helpers/Local";
import Api from "./helpers/Api";

import { Routes, Route, useNavigate } from "react-router-dom";

import HomeView from "./views/HomeView";
import LeveledMoves from "./views/LeveledMoves";
import TurnView from "./views/TurnView";
import Footer from "./views/Footer";
import FavMoves from "./views/FavMoves";
import TheMap from "./views/TheMap";

import Login from "./views/Login";
// import Signup from "./views/Signup";

export default function App() {
  const [skateMoves, setSkateMoves] = useState([]);
  const [specMove, setSpecMove] = useState(null);
  const [user, setUser] = useState(Local.getUser());
  const [loginErrorMsg, setLoginErrorMsg] = useState("");
  const navigate = useNavigate();

  async function doLogin(username, password) {
    let myresponse = await Api.loginUser(username, password);
    if (myresponse.ok) {
      Local.saveUserInfo(myresponse.data.token, myresponse.data.user);
      setUser(myresponse.data.user);
      setLoginErrorMsg("");
      navigate("/");
    } else {
      setLoginErrorMsg("Login failed");
    }
  }

  function doLogout() {
    Local.removeUserInfo();
    setUser(null);
    // (NavBar will send user to home page)
  }

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
      {/* <Naver /> */}
      <h1>ROLLER-GUIDE</h1>{" "}
      <div>
        {/* <header className="App-header"></header> */}

        <NavBar user={user} logoutCb={doLogout} />
        <Routes>
          <Route
            path="/login"
            element={<Login loginCb={(u, p) => doLogin(u, p)} />}
          />
          {/* <Route path="/Register" element={<Signup />} /> */}
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
          <Route path="/FavMoves" element={<FavMoves />} />
          <Route path="/TheMap" element={<TheMap />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}
