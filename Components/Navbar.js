import React, { useState } from 'react';
import { Route,Routes,Navigate } from 'react-router-dom';

import './navbar.css';
import Content from './Content';
import OfficerLogin from './OfficerLogin';


const Navbar = ({ onAdminLogin }) => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleAdminLogin = () => {
    setIsAdminLoggedIn(true);
    onAdminLogin();
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className='main-nav'>
        <div className='heading'>
          <h1>Anonymous WitnessHub</h1>
        </div>
        <div className='menu-icon' >
          
        </div>
        <div className="navmenu">
          <ul className='menu-links'>
            <li>
              <a href='/content'>Home</a>
            </li>
            <li>
            
               <a href ='/officers-login'>Officer login</a>
                
            </li>
            <li>
              <a href='#'>User Registration</a>
            </li>
            <li>
              <a href='#'>About us</a>
            </li>
            <li>
              <div className='navbutton'>
                <button className='button' onClick={handleAdminLogin}>
                  User login
                </button>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
       <Route index  path='/content' element={<Content/>}/>
        {/* <Route  path='/officers-login' element={<OfficerLogin/>}/> */}
      </Routes>
     
    </div>
  );
};

export default Navbar;
