import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import FacultyDashBoard from '../../Pages/FacultyDashBoard';
import DashboardPage from '../../Pages/DashboardPage ';
function Companyup(){
    const [company, setCompany] = useState({});
    const { id } = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        fetch("http://localhost:8080/api/companys/" + id)
            .then(res => res.json())
            .then((result) => {
                setCompany(result);
            }
            ).catch((e)=>console.log(e));
    }, []);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setCompany(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        let demo = JSON.stringify(company);
        console.log(JSON.parse(demo));
        fetch("http://localhost:8080/api/companys/" + id, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: demo
        }).then(r => { console.log(r) })
        event.preventDefault();
        try {
            const role = sessionStorage.getItem('Role');
            if (role == 'staff') {
                navigate("/StaffDashBoard");
            }
            if (role == 'admin') {
                navigate("/AdminDashBoard")
            }
        } catch (error) {
            console.error("Error processing close:", error);
        }

        
    }
    return(
        <div >

        {(() => {
            const role = sessionStorage.getItem('Role');
            if (role === 'staff') {
                return <FacultyDashBoard />;
            } else if (role === 'admin') {
                return <DashboardPage />;
            }
        })()}




        <div className="cardD" >
        <form onSubmit={handleSubmit} style={{overflowX:'auto'}}>
        <label>Id:</label>
        <input
            type="number"
            name="company_id"
            value={company.company_id ?? ""}
            disabled={true}
            onChange={handleChange}
        />
        <br />           
         <label>company name:</label>
        <input
            type="text"
            name="company_name"
            value={company.company_name ?? ""}
            onChange={handleChange}
        />
        <br />          
          <label>location:</label>
        <input
            type="number"
            name="Location_Id"
            value={company.location_id || ""}
            onChange={handleChange}
        />
        <br />           
         <label>Total_Placement:</label>
        <input
            type="number"
            name="total_placement"
            value={company.total_placement || ""}
            onChange={handleChange}
        />
        <br />
        
        <br />      
                   <input type="submit" />
    </form>
    </div></div>
    )
}

export default Companyup;