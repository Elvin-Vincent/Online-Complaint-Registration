import React from "react";
import './OfficerContent.css';
import { Route, Routes } from "react-router-dom";
import NewComplaints from "./NewComplaints";

function OfficerContent() {
  return (
    <div className="officer-content">
      <div className="sidebar">
        <div className="head">
          <h1>Officer Dashboard</h1>
        </div>
        <ul className="navigation-list">
        <li>
          <a href="#view-new-complaint">View New Complaint</a>
        </li>
        <li>
          <a href="#view-profile">View Profile</a>
        </li>
        <li>
          <a href="#view-complaint-history">View Complaint History</a>
        </li>
        <li>
          <a href="#view-feedback">View Feedback</a>
        </li>
      
        <li className="logout">
          <a href="#logout">Logout</a>
        </li>
        </ul>
      </div>
      <div className="content">
        <Routes>
        <Route index element={< NewComplaints/>} />
        </Routes>
      </div>
    </div>
  );
}

export default OfficerContent;
