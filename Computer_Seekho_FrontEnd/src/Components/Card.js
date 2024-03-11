import React, { useState, useEffect } from 'react';
import './Card.css'; // Import the CSS file

function Card({ company }) {

 

  return (
    <div className="card-container">
      <div className="card">
      <h3>{company.company_name}</h3>
      <img src={company.logo} alt="Company Logo" style={{maxHeight:'100px'}}/>
      <p>City: {company.location}</p>
      <p>Total Placement: {company.total_placement}</p>
        {/* You can add more details as needed */}
      </div>
    </div>
  );
}

export default Card;
