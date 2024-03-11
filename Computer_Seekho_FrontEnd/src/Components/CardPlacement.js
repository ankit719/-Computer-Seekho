import React, { useState, useEffect } from 'react';
import './Card'; // Import the CSS file

function CardPlacement({ placement }) {
 
  return (
    <div className="card-container">
      <div className="card">
      <h3>{placement.placement_Id}</h3>
      <img src='/fantasia.png' />
     <p>status: {placement.status}</p>
     <p>designation: {placement.designation}</p>
     <p>company_Id: {placement.company_Id}</p>
     <p>p_Id: {placement.p_Id}</p> {/* You can add more details as needed */}
      </div>
    </div>
  );
}

export default CardPlacement;
