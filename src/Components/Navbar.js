import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <div>
                    <NavLink to="/" className="logo">
                        Dictionary App
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/home" className="link_1">
                        Home
                    </NavLink>
                    <NavLink to="/history" className="link_2">
                        History
                    </NavLink>
                </div>
            </nav>

            <Outlet />
        </div>
    );
};

export default Navbar;
