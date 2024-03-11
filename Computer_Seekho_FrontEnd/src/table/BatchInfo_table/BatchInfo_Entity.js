import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FacultyDashBoard from "../../Pages/FacultyDashBoard";
import DashboardPage from "../../Pages/DashboardPage ";

export function BatchInfo_Entity(){
    const[batchinfo,setBatchInfo_Entity]=useState({});
    const { temp1 } = useParams();
    
    useEffect(()=>{
        fetch("http://localhost:8080/api/batchinfo/"+temp1)
        .then(res=>res.json())
        .then((result)=>{setBatchInfo_Entity(result);});
    },[]);
return (
    <div>

         {(() => {
            const role = sessionStorage.getItem('Role');
            if (role === 'Staff') {
               return <FacultyDashBoard />;
            } else if (role === 'admin') {
               return <DashboardPage />;
            }
         })()}


         <div className="cardD" style={{ maxWidth: '100%', overflowX: 'auto' }}>
  
        
            <label>Batch_Info_Id:</label> {batchinfo.batch_Info_Id}<br/>
            <label>BatchId:</label> {batchinfo.batchId}<br/>
            <label>Staff_Id:</label> {batchinfo.staff_Id}<br/>
            <label>Subject:</label>{batchinfo.subject} <br/>
    </div>
    </div>
    );
}
