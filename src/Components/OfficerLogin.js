import React, { useState } from "react";

import './OfficerLogin.css'
import OfficerContent from "./OfficerContent";

function OfficerLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    if (id === "username") {
      setUsername(value);
    } else if (id === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission

    // Perform login validation
    if (
      (username === "example1@gmail.com" && password === "password") ||
      (username === "example2@gmail.com" && password === "password")
    ) {
      setIsLoggedIn(true); // Set isLoggedIn to true upon successful login
      
    } else {
      setErrorMessage("Invalid Username or Password. Please try again.");
    }
  };

  return (
    <>
    {
      isLoggedIn?(
        <OfficerContent />
        
        
      ):(
        <div className="container">
        <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            <form onSubmit={handleSubmit} className="sign-in-form" id="card">
              <div className="heading">
                <h2>OFFICERS LOGIN</h2>
              </div>
              <div className="actual-form">
                <div className="input-wrap">
                  <input
                    type="text"
                    minLength="4"
                    className="input-field"
                    autoComplete="off"
                    required
                    id="username"
                    value={username}
                    placeholder="Username"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="input-wrap">
                  <input
                    type="password"
                    minLength="4"
                    className="input-field"
                    autoComplete="off"
                    required
                    id="password"
                    value={password}
                    placeholder="Password"
                    onChange={handleInputChange}
                  />
                </div>
                <input type="submit" value="Sign In" className="sign-btn" />
              </div>
            </form>
            <p id="errorMessage" className="error">
              {errorMessage}
            </p>
          </div>
        </div>
        </div>
        </div>
      )
    }
    </>
   
  );
}

export default OfficerLogin;
