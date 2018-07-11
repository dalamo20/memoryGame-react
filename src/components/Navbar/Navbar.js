import React from "react";
//import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar sticky-top">
 
      <div>
        {/* <Link className="navbar-brand" to="/"> */}
          Cat Memory
        {/* </Link> */}
      </div>
      <div>
        Click an image to begin!
      </div>
      
        Score: {props.score} || Top Score: {props.topScore}
      
    
  </nav>
);

export default Navbar;
