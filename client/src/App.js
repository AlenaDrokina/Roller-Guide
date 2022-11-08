import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { getHome } from "./helpers/geoLocation";

import Local from "./helpers/Local";
import Api from "./helpers/Api";

import { Routes, Route, useNavigate } from "react-router-dom";
// import MembersOnly from "./views/MembersOnly";

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
  const [home, setHome] = useState(null);
  const [user, setUser] = useState(Local.getUser());
  const [loginErrorMsg, setLoginErrorMsg] = useState("");
  const navigate = useNavigate();
  // const [marker, setMarker] = useState([]);
  const [places, setPlaces] = useState([]);
  // useEffect(() => {
  //   fetch("/TheMap")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       // upon success, update tasks
  //       //console.log(json);
  //       setMarker(json);
  //     })
  //     .catch((error) => {
  //       // upon failure, show error message
  //     });
  // }, []);
  // async function addMarker(input) {
  //   // fetch("/api/todos",
  //   // let taskObj = { text: input, complete: 0 };
  //   // input.complete = 0;
  //   try {
  //     let response = await fetch("/TheMap", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" }, //in what form we send to server
  //       body: JSON.stringify(places), // updated input
  //     });

  //     if (response.ok) {
  //       let data = await response.json();
  //       setPlaces(data);
  //     } else {
  //       console.log(`Server error: ${response.status} ${response.statusText}`);
  //     }
  //   } catch (err) {
  //     console.log(`Network error: ${err.message}`);
  //   }
  // }

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

  useEffect(() => {
    getAndSetHome();
  }, []);

  async function getAndSetHome() {
    let latLng = await getHome(); // returns [lat, lng]
    setHome(latLng);
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
                <TurnView move={specMove} showSkateMove={showSkateMove} />
              </PrivateRoute>
            }
          />
          <Route
            path="/LeveledMoves"
            element={
              <PrivateRoute>
                <LeveledMoves move={specMove} showSkateMove={showSkateMove} />
              </PrivateRoute>
            }
          />
          <Route
            path="/TheMap"
            element={
              <PrivateRoute>
                <TheMap home={home} />
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

          <Route path="/FavMoves" element={<FavMoves />} />
          <Route path="/TheMap" element={<TheMap />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}
