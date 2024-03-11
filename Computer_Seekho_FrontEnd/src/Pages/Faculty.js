import React from 'react';
import { useNavigate} from "react-router-dom"
import { useState, useEffect } from "react";
import CardFaculty from '../Components/CardFaculty';

function Faculty() {
    const [faculty, setFaculty] = useState([]);
    const navigate = useNavigate();
    const chks = sessionStorage.getItem('key');
  
    useEffect(() => {
      if (chks === '') {
        navigate('/');
      }
    }, [chks, navigate]);
  
    useEffect(() => {
      fetch('http://localhost:8080/api/staff')
        .then(res => res.json())
        .then(result => setFaculty(result));
    }, []);
  
    return (
      <div>
        
        <div className="company-container">
          {faculty.map(c => (
            <CardFaculty key={c.staff_id} faculty={c} />
          ))}
        </div>
      </div>
    );
}

export default Faculty;
