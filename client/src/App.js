import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";

import Local from "./helpers/Local";
import Api from "./helpers/Api";

import { Routes, Route, useNavigate } from "react-router-dom";
import MembersOnly from "./views/MembersOnly";

import PrivateRoute from "./components/PrivateRoute";
import HomeView from "./views/HomeView";
import LeveledMoves from "./views/LeveledMoves";
import TurnView from "./views/TurnView";
import Footer from "./views/Footer";
import FavMoves from "./views/FavMoves";
import TheMap from "./views/TheMap";
import Profile from "./views/Profile";

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

  function doLogout() {
    Local.removeUserInfo();
    setUser(null);
    // (NavBar will send user to home page)
  }

  return (
    <div className="App">
      <h1>ROLLER-GUIDE</h1>{" "}
      <div>
        <NavBar user={user} logoutCb={doLogout} />

        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route
            path="/users/:userId"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />

          <Route
            path="/TurnView"
            element={
              <PrivateRoute>
                <TurnView />
              </PrivateRoute>
            }
          />
          <Route
            path="/LeveledMoves"
            element={
              <PrivateRoute>
                <LeveledMoves />
              </PrivateRoute>
            }
          />
          <Route
            path="/TheMap"
            element={
              <PrivateRoute>
                <TheMap />
              </PrivateRoute>
            }
          />
          <Route
            path="/login"
            element={
              <Login
                loginCb={(u, p) => doLogin(u, p)}
                loginError={loginErrorMsg}
              />
            }
          />
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
