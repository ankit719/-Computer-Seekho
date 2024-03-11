
import React from 'react';
import { useNavigate} from "react-router-dom"
import { useState, useEffect } from "react";
import CardPlacement from '../Components/CardPlacement';

function Placement() {
    const [placement, setplacement] = useState([]);
    const navigate = useNavigate();
    const chks = sessionStorage.getItem('key');
  
    useEffect(() => {
      if (chks === '') {
        navigate('/');
      }
    }, [chks, navigate]);
  
    useEffect(() => {
      fetch('http://localhost:8080/api/placement')
        .then(res => res.json())
        .then(result => setplacement(result));
    }, []);
  
    return (
      <div>
        <br></br>
        <br></br>
        
        <h1>Placemet Data...</h1>
        <div className="company-container">
          {placement.map(c => (
            <CardPlacement key={c.placement_Data_Id} placement={c} />
          ))}
        </div>
      </div>
    );
  }
export default Placement;