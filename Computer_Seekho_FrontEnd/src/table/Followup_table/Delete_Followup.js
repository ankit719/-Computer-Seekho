import React from 'react'
import FacultyDashBoard from '../../Pages/FacultyDashBoard';
import DashboardPage from '../../Pages/DashboardPage ';
import { useState,useEffect} from "react";
import { useNavigate} from "react-router-dom";
import { useParams } from 'react-router-dom';

export default function Delete_Followup() {

    const [followup, setFollowup] = useState({});
    const { id } = useParams()
    const navigate= useNavigate();
    useEffect(() => {
        fetch("http://localhost:8080/api/Followup/"+id)
            .then(res => res.json())
            .then((result) => { setFollowup(result); }
            );
    }, {});
    const handeldel = (event) => {
        fetch("http://localhost:8080/api/Followup/"+id, {
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


  return (
    <div>

    {(() => {
      const role = sessionStorage.getItem('Role');
      if (role === 'staff') {
        return <FacultyDashBoard />;
      } else if (role === 'admin') {
        return <DashboardPage />;
      }
    })()}


    <div className="cardD">
    <h1 style={{ color:'red' }}>R you sure</h1>
         <label>Id:</label>
         {followup.followup_id}<br />
         <label>Enquiry ID:</label>
         {followup.enquiry_id}<br />
         <label>followup_Date:</label>
         {followup.followup_Date}<br />
         <label>Message:</label>
         {followup.followup_Message}<br />
         <label>Staff ID:</label>
         {followup.staff_id}<br />
         <label>Attempts:</label>
         {followup.attempts}<br />
         <form onSubmit={handeldel}>
             <input type="submit" />
         </form>
 </div>
 </div>
  )
}
