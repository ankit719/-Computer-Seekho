
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function EnquiryList() {
  const [enquiry, setEnquiry] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:8080/api/enquiry")
      .then((res) => res.json())
      .then((result) => {
        setEnquiry(result);
      });
  }, []);

  return (
    <div className="cardD" style={{ maxWidth: '100%', overflowX: 'auto' }}>
      <h4>
        <Link to="/AddEnquiry">AddEnquiry</Link>
      </h4>
      <h2>Enquiry Data</h2>
      <table>
        <thead>
          <tr>
            <th>enquiry_id</th>
            <th>closure</th>
            <th>contact_no</th>
            <th>course_id</th>
            <th>date_of_birth</th>
            <th>email</th>
            <th>enquireer_query</th>
            <th>enquirer_name</th>
            <th>enquiry_date</th>
            <th>enquiry_source</th>
            <th>location</th>
            <th>next_followup_date</th>
            <th>other_closure_reason</th>
            <th>qualification</th>
            <th>staff_id</th>
            <th>student_name</th>          
          </tr>
        </thead>
        <tbody>
          {enquiry.map((e) => (
            <tr key={e.enquiry_Id}>
              <td>{e.enquiry_Id}</td>
              <td>{e.closure}</td>
              <td>{e.contact_No}</td>
              <td>{e.course_Id}</td>
              <td>{e.date_Of_Birth}</td>
              <td>{e.email}</td>
              <td>{e.enquireer_Query}</td>
              <td>{e.enquireerName}</td>
              <td>{e.enquiry_Date}</td>
              <td>{e.enquiry_Source}</td>
              <td>{e.location}</td>
              <td>{e.next_Followup_Date}</td>
              <td>{e.other_Closure_Reason}</td>
              <td>{e.qualification}</td>
              <td>{e.staff_Id}</td>
              <td>{e.student_Name}</td>
                 
              <td><Link to={`/Enquiry/${e.enquiry_Id}`}>Display</Link></td>
              <td><Link to={`/UpdateEnquiry/${e.enquiry_Id}`}>Edit</Link></td>
              <td><Link to={`/DeleteEnquiry/${e.enquiry_Id}`}>Delete</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EnquiryList;
