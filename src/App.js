import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import WalletCard from "./Components/WalletCard";
 

const App = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const handleUserLogin = () => {
    setIsUserLoggedIn(true);
  };

  return (
    <div className="App">
      {isUserLoggedIn ? (
        <WalletCard />
      ) : (
        <Navbar onUserLogin={handleUserLogin} />
      )}
    </div>
  );
};

export default App;
