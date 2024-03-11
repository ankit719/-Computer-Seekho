
import React from 'react';
import { useNavigate} from "react-router-dom"
import { useState, useEffect } from "react";
import CardCampus from '../Components/CardCampus';

function Campus() {
    const [campus, setCampus] = useState([]);
    const navigate = useNavigate();
    const chks = sessionStorage.getItem('key');
  
    useEffect(() => {
      if (chks === '') {
        navigate('/');
      }
    }, [chks, navigate]);
  
    useEffect(() => {
      fetch('http://localhost:8080/api/campuslife')
        .then(res => res.json())
        .then(result => setCampus(result));
    }, []);
  
    return (
      <div>
        <br></br>
        <br></br>
        
        <div className="company-container">
          {campus.map(c => (
            <CardCampus key={c.campusLifeId} campus={c} />
          ))}
        </div>
      </div>
    );
  }
export default Campus;