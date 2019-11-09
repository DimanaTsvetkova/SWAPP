import React from "react";
import { NavLink } from "react-router-dom";
import { useApolloClient } from '@apollo/react-hooks';
import "../styles/nav.scss"
function Navbar() {
    const client = useApolloClient();

    const handleLogout = () => {
        localStorage.removeItem('token');
        client.cache.reset();
        client.writeData({ data: { authenticated: false } });
    };

    return (
        <nav className="nav">
            <NavLink to="/" className="nav-logo">
                <h1 >SWAPP</h1>

            </NavLink>

            <ul className="r-links">
                <li>
                    <NavLink to="/episodes" className="link">
                        Episodes
                </NavLink>
                </li>
                <li>
                    <NavLink to="/characters" className="link">
                        Characters
                </NavLink>

                </li>
                <li>
                    <NavLink to="/login" className="link" onClick={handleLogout}>Logout</NavLink>

                </li>

            </ul>
        </nav>
    )
};

export default Navbar;