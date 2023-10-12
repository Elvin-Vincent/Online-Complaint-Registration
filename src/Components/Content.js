import React from "react";
import "./navbar.css";
export default function Content() {
  return (
    <div>
      <div className="description-container">
        <div className="discription">
          <div className="dis-head">
            <p>ONLINE COMPLAINT REGISTRATION</p>
          </div>
          <div className="dis-body">
            <p>
              At this website, we prioritize your privacy while empowering you
              to make a positive impact on society. Our platform allows you to
              send images to the authorities discreetly and without revealing
              any personal information about yourself.
            </p>
          </div>
          <button className="register-button">New Complaint</button>
        </div>
        <img
          src="https://blog-assets.freshworks.com/freshdesk/wp-content/uploads/2021/02/17214252/Illustration-detailing-customer-service-experience-1024x536.png"
          alt="Description Image"
          className="description-image"
        />
      </div>
    </div>
  );
}
