import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import "./navbar.css";
import Content from "./Content";
import OfficerLogin from "./OfficerLogin";
import UserRegistration from "./UserRegistration";
import AboutUs from "./AboutUs";

const Navbar = ({ onUserLogin }) => {
  // const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleAdminLogin = () => {
    // setIsUserLoggedIn(true);
    onUserLogin();
  };

  return (
    <div>
      <nav className="main-nav">
        <div className="heading">
          <h1>Anonymous WitnessHub</h1>
        </div>
        <div className="menu-icon"></div>
        <div className="navmenu">
          <ul className="menu-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/officers-login">Officer login</a>
            </li>
            <li>
              <a href="/users-registration">User Registration</a>
            </li>
            <li>
              <a href="/aboutus">About us</a>
            </li>
            <li>
              <div className="navbutton">
                <button className="button" onClick={handleAdminLogin}>
                  User login
                </button>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route index element={<Content />} />
        <Route path="/officers-login" element={<OfficerLogin />} />
        <Route path="/users-registration" element={<UserRegistration />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </div>
  );
};

export default Navbar;
