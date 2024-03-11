
import React from 'react';
import { useNavigate} from "react-router-dom"
import { useState, useEffect } from "react";
import Card from '../Components/Card';

function ListCompanyHome() {
    const [company, setCompany] = useState([]);
    const navigate = useNavigate();
    const chks = sessionStorage.getItem('key');
  
    useEffect(() => {
      if (chks === '') {
        navigate('/');
      }
    }, [chks, navigate]);
  
    useEffect(() => {
      fetch('http://localhost:8080/api/companys')
        .then(res => res.json())
        .then(result => setCompany(result));
    }, []);
  
    return (
      <div>
        <br></br>
        <br></br>
        
        <div className="company-container">
          {company.map(c => (
            <Card key={c.company_id} company={c} />
          ))}
        </div>
      </div>
    );
  }
export default ListCompanyHome;