import React from 'react';
import './navbar.css'; 

const AboutUs = () => {
  return (
    
      <div>
        <div className="description-container">
          <div className="discription">
            <div className="dis-head">
              <p>ONLINE COMPLAINT REGISTRATION</p>
            </div>
            <div className="dis-body">
              <p>
              An online complaint registration website that safeguards the anonymity of individuals making reports brings 
              forth a multitude of advantages. By assuring complete privacy, this platform encourages transparency and accountability,
               emboldening individuals to voice concerns and report misconduct without fear of reprisal. 
              </p>
            </div>
            <button className="register-button">Send feedback & suggestions</button>
          </div>
          <img
            src="https://img.freepik.com/premium-vector/people-library-persons-reading-books-sitting-chair-students-studying-college-knowledge-university-library-concept_53562-10876.jpg"
            alt="Description Image"
            className="description-image"
          />
        </div>
      </div>
    );
 
}

export default AboutUs;


