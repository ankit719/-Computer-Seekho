import React from "react";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import FacultyDashBoard from "../../Pages/FacultyDashBoard";
import DashboardPage from "../../Pages/DashboardPage ";

function ListBatchInfo()
{
    const [batchinfo,setBatchInfo_Entity]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:8080/api/batchinfo")
        .then(res=>res.json())
        .then((result)=>{setBatchInfo_Entity(result);}
        );
    },[]);
    return(
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
        <div>
            <h4><Link to="/CreateBatchInfo">Create</Link></h4>
            <h2>Batch data...</h2>
            <table><thead>
                <tr>
                    <th>Batch_Info_Id</th>
                    <th>BatchId</th>
                    <th>Staff_Id</th>
                    <th>Subject</th>
                </tr>
            </thead>
                <tbody>
                    {batchinfo.map(p=>(
                        <tr key={p.batch_Info_Id}>
                            <td>{p.batch_Info_Id}</td>
                            <td>{p.batchId}</td>
                            <td>{p.staff_Id}</td>
                            <td>{p.subject}</td>
            
                            
                            <td><a href={'/BatchInfo_Entity/'+p.batch_Info_Id}>display</a></td>
                            <td><a href={'/Batchinfoup/'+p.batch_Info_Id}>Edit</a></td>
                            <td><a href={'/Batchinfodel/'+p.batch_Info_Id}>delete</a></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
        </div>
        </div>
    );
}
export default ListBatchInfo;