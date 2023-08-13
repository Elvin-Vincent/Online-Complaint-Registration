import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Admin from './Components/Admin';


const App = () => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isOfficerLoggedIn, setIsOfficerLoggedIn] = useState(false); // Add officer login state

  const handleAdminLogin = () => {
    setIsAdminLoggedIn(true);
    setIsOfficerLoggedIn(false); // Ensure officer is logged out when admin logs in
  };

  const handleOfficerLogin = () => {
    setIsOfficerLoggedIn(true);
  };

  return (
    <div>
      {isAdminLoggedIn ? (
        <Admin />
      ) : (
        <Navbar
        />
      )}
    </div>
  );
};

export default App;
