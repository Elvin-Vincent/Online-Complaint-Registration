import React from "react";
import { Route, Routes } from "react-router-dom";

import "./navbar.css";
import Content from "./Content";
import OfficerLogin from "./OfficerLogin";
import UserRegistration from "./UserRegistration";
import AboutUs from "./AboutUs";
import WalletCard from "./WalletCard";
import UploadImage from "./UploadImage";

const Navbar = ({ onUserLogin }) => {
  // const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  

  

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
              
                <a href="/user-login">New Complaint</a>
               
            </li>
            <li>
              <a href="/officers-login">Officer login</a>
            </li>
            <li>
              <a href="/user-registration">User registration</a>
            </li>
            <li>
              <a href="/aboutus">About us</a>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route index element={<Content />} />
        <Route path="/officers-login" element={<OfficerLogin />} />
        <Route path="/user-registration" element={<UserRegistration />} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/user-login" element={<WalletCard/>} />
        <Route path="/UploadImage" element={<UploadImage />} />
      </Routes>
    </div>
  );
};

export default Navbar;
