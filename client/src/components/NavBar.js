import React from "react";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";

function NavBar(props) {
  return (
    <nav className="Navbar">
      <ul>
        {props.user ? (
          <ul className="navbar-nav">
            <li className="nav-item1">
              <NavLink className="nav-link" to={`/users/${props.user.id}`}>
                Profile
              </NavLink>
            </li>
            <li className="nav-item2">
              {/* Log out user. Then go to home page. */}
              <Link className="nav-link" to="/" onClick={props.logoutCb}>
                Logout
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="navbar-nav">
            <li className="nav-item3">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
          </ul>
        )}
        <li>
          <NavLink to="/" style={{ textDecoration: "none", color: "black" }}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/LeveledMoves"
            style={{ textDecoration: "none", color: "black" }}
          >
            Stops
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/TurnView"
            style={{ textDecoration: "none", color: "black" }}
          >
            Turns
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/TheMap"
            style={{ textDecoration: "none", color: "black" }}
          >
            Map
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
