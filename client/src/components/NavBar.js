import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="Navbar">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/LeveledMoves">Stops</NavLink>
        </li>
        <li>
          <NavLink to="/TurnView">Turns</NavLink>
        </li>
        <li>
          <NavLink to="/FavMoves">FavMoves</NavLink>
        </li>
        <li>
          <NavLink to="/TheMap">Map</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
