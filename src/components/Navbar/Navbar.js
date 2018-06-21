import React from "react";
//import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar">
    <ul>
      <li>
        {/* <Link className="navbar-brand" to="/"> */}
          memoryGame
        {/* </Link> */}
      </li>
      <li>
        Click an image to begin!
      </li>
      <li>
        Score: {props.score}| Top Score: {props.topScore}
      </li>
    </ul>
  </nav>
);

export default Navbar;
