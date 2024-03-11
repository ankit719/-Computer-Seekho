import React, { useState, useEffect } from 'react';
import './Card'; // Import the CSS file

function CardCampus({ campus }) {
 
  return (
    <div className="card-container">
      <div className="card">
      <h3>Campus</h3>
      <img src={campus.photo} />
     <p>photo: {campus.batchId}</p>
    </div>
    </div>
  );
}

export default CardCampus;
