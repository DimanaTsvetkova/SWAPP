import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/nav.scss"
function Navbar(){
    return(
        <nav className="nav">
            <NavLink to = "/" className="nav-logo">
            <h1 >SWAPP</h1>

            </NavLink>

            <ul className="r-links">
                <li>
                <NavLink to = "/episodes" className="link">
                    Episodes
                </NavLink>
                </li>
                <li>
                <NavLink to = "/characters" className="link">
                    Characters
                </NavLink>
                </li>
                <li>
                <NavLink to = "/logout">
                    logout
                </NavLink>
                </li>
                
            </ul>
        </nav>
    )
};

export default Navbar;