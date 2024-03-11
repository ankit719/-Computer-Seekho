import React from 'react';
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
export default function List_Enquiry_Staff() {

  const [enquiry, setEnquiry] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchContactNo, setSearchContactNo] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/enquiry")
      .then((res) => res.json())
      .then((result) => {
        setEnquiry(result);
      });
  }, []);

  const handleSearch = () => {
    if (searchName.trim() !== "") {
      fetch("http://localhost:8080/api/GetEnquiriesByStudentName/"+searchName)
        .then((res) => res.json())
        .then((result) => {
          setEnquiry(result);
        });
    } else {
      // If search input is empty, fetch all data again
      fetch("http://localhost:8080/api/enquiry")
        .then((res) => res.json())
        .then((result) => {
          setEnquiry(result);
        });
    }
  };

  const handleSearch1 = () => {
    if (searchContactNo.trim() !== "") {
      fetch(`http://localhost:8080/api/enquiry/getbycontact/${searchContactNo}`)
        .then((res) => res.json())
        .then((result) => {
          setEnquiry(result);
        });
    } else {
      // If search input is empty, fetch all data again
      fetch("http://localhost:8080/api/enquiry")
        .then((res) => res.json())
        .then((result) => {
          setEnquiry(result);
        });
    }
  };

  const handleSearch2 = () => {
    fetch("http://localhost:8080/api/findLatestEnquiry")
      .then((res) => res.json())
      .then((result) => {
        setEnquiry(result);
      })
      .catch((error) => console.error("Error fetching latest enquiry:", error));
  };

  return (
    <div style={{ maxWidth: '100%', overflowX: 'auto' }}>
      <button>
        <h4>
          <Link to="/AddEnquiry">AddEnquiry</Link>
        </h4>
      </button>
<br/><br/>
      <div>
        <input
          type="text"
          placeholder="Search by name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
<br/>
      <div>
        <input
          type="text"S
          placeholder="Search by contact number"
          value={searchContactNo}
          onChange={(e) => setSearchContactNo(e.target.value)}
        />
        <button onClick={handleSearch1}>Search</button>
      </div>
<br/>
      <div>
        <button onClick={handleSearch2}>Get Latest Enquiry</button>
      </div>
      <h2>Enquiry Data</h2>
      <table style={{ borderCollapse: 'collapse', width: '90%', backgroundColor: '#f0f0f0', borderRadius: '10px' }}>
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
              <td>{e.course}</td>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
