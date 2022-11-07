import React from "react";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";

function NavBar(props) {
  return (
    <nav className="Navbar">
      <ul>
        {props.user ? (
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to={`/users/${props.user.id}`}>
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              {/* Log out user. Then go to home page. */}
              <Link className="nav-link" to="/" onClick={props.logoutCb}>
                Logout
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
          </ul>
        )}
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
          <NavLink to="/TheMap">Map</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
