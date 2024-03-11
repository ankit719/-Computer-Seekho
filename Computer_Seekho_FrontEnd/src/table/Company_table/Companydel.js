import React from 'react';
import { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom"
import FacultyDashBoard from '../../Pages/FacultyDashBoard';
import DashboardPage from '../../Pages/DashboardPage ';
function Companydel(){
    const [company, setCompany] = useState({});
    const { id } = useParams()
    const navigate= useNavigate();
   
    useEffect(() => {
        fetch("http://localhost:8080/api/companys/"+id)
            .then(res => res.json())
            .then((result) => { setCompany(result); }
            );
            
    }, [id]);
    const handeldel = (event) => {
        event.preventDefault();
        fetch("http://localhost:8080/api/companys/" + id, {
            method: 'Delete'
        })
            .then(res => res)
            .then((result) => {
                console.log(result)
            }); 
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

        <h1 style={{ color:'red' }}>R you sure</h1>
        <label>Id:</label>
        {company.company_id}<br />
        <label>name:</label>
        {company.company_name}<br />
        <label>location:</label>
        {company.location_id}<br />
        <label>Total_Placement:</label>
        {company.total_placement}
        <form onSubmit={handeldel}>
            <input type="submit" />
        </form>
    </div>
    </div>
    )
}

export default Companydel;