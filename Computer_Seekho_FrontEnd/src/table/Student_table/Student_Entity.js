
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FacultyDashBoard from "../../Pages/FacultyDashBoard";
import DashboardPage from "../../Pages/DashboardPage ";
export function Student_Entity(){
    const[stu,setStudent_Entity]=useState({});
    const { t } = useParams();

  

    useEffect(()=>{
        fetch("http://localhost:8080/api/student/"+t)
        .then(res=>res.json())
        .then((result)=>{setStudent_Entity(result);});
    },[]);
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


    <div className="cardD" style={{ maxWidth: '100%', overflowX: 'auto' }}>
    
            <label>Student_Id:</label> {stu.student_id}<br/>
            <label>Student_Name:</label> {stu.student_name}<br/>
            <label>Enquiry_Id:</label> {stu.enquiry_id}<br/>
            <label>Batch_Id:</label>{stu.batch_id} <br/>
            <label>Registration_Date:</label>{stu.registration_date} <br/>
            <label>Payment_Id:</label>{stu.payment_id} <br/>
            <label>Photo:</label>{stu.photo} <br/>
            <label>Contact_No:</label>{stu.contact_no} <br/>
            <label>Email:</label>{stu.email} <br/>
            <label>Gender:</label>{stu.gender} <br/>
            <label>Location_Id:</label>{stu.location_id} <br/>
            <label>Date_Of_Birth:</label>{stu.date_of_birth} <br/>
            <label>Qualification_Id:</label>{stu.qualification_id} <br/>
            <label>Course_Id:</label>{stu.course_id} <br/>
            <label>Total_Fees:</label>{stu.total_fees} <br/>
            <label>Fees_Paid:</label>{stu.fees_paid} <br/>
            
       
    </div>
    </div>
    );
}
