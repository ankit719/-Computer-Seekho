import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FacultyDashBoard from "../../Pages/FacultyDashBoard";
import DashboardPage from "../../Pages/DashboardPage ";

export function Enquiry() {
    const [e, setEnquiry] = useState({});
    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        fetch(`http://localhost:8080/api/enquiry/${id}`)
            .then(res => res.json())
            .then(result => {
                setEnquiry(result);
            })
            .catch(error => {
                console.error('Error fetching Enquiry:', error);
            });
    }, [id]);

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


            <div className="cardD" style={{ maxWidth: '100%', overflowX: 'auto'}}>
                <label>Enquiry Id: {e.enquiry_Id}</label> 
                <br />

                <label>Enquireer Name: {e.enquireerName}</label>
                <br />

                <label>Course ID: {e.course_Id}</label>
                <br />

                <label>Staff ID: {e.staff_Id}</label>
                <br />

                <label>Student Name: {e.student_Name}</label>
                <br />

                <label>Enquireer Query: {e.enquireer_Query}</label>
                <br />

                <label>Qualification: {e.qualification}</label>
                <br />
                

                <label>Location ID: {e.location_Id}</label>
                <br />
                
                <label>Contact No: {e.contact_No}</label>
                <br />

                <label>Email: {e.email}</label>
                <br />

                <label>Enquiry Date: {e.enquiry_Date}</label>
                <br />

                <label>Enquiry Source: {e.enquiry_Source}</label>
                <br />

                <label>Closure: {e.closure}</label>
                <br />

                <label>Next Followup Date: {e.next_Followup_Date}</label>
                <br />

                <label>Other Closure Reason: {e.other_Closure_Reason}</label>
                <br />
            </div>
        </div>
    );
};

export default Enquiry;
