import React from "react";
import './OfficerContent.css';

function OfficerContent() {
  return (
    <div>
      <div className="head">
      <h1> Officer Dashboard</h1>
      </div>
      <ul className="list" >
        <li>
          view profile
        </li>
        <li>
          view new Complaint
        </li>
        <li>
          view complaint history
        </li>
        <li>
          view feedback
        </li>
      </ul>
     
    </div>
  );
}

export default OfficerContent;
