import React from "react";
import { Route, Routes } from "react-router-dom";

import "./navbar.css";
import Content from "./Content";
import OfficerLogin from "./OfficerLogin";

import AboutUs from "./AboutUs";
import WalletCard from "./WalletCard";
import UploadImage from "./UploadImage";
import logo from './logo.png';

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
              <a href="/aboutus">About us</a>
            </li>
          </ul>
          <div >
      <img className="image" src={logo} alt="Logo" />
    </div>

        </div>
      </nav>
      <Routes>
        <Route index element={<Content />} />
        <Route path="/officers-login" element={<OfficerLogin />} />
       
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/user-login" element={<WalletCard/>} />
        <Route path="/UploadImage" element={<UploadImage />} />
      </Routes>
    </div>
  );
};

export default Navbar;
