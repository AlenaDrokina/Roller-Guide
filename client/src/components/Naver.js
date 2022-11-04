import React from "react";
// import "./NavBar.css";
import { NavLink } from "react-router-dom";

function Naver() {
  return (
    <nav className="Naver">
      <ul>
        <li>
          <NavLink to="/login">Log In</NavLink>
        </li>
        <li>
          <NavLink to="/register">Sign Up</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Naver;
