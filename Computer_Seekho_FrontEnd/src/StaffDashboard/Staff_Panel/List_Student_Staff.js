import React from 'react';
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
export default function List_Student_Staff() {
    const [searchName, setSearchName] = useState("");
    const [stu, setStudent_Entity] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/api/student")
            .then(res => res.json())
            .then((result) => { setStudent_Entity(result); }
            );
    }, []);
    const handleSearch = () => {
        if (searchName.trim() !== "") {
          fetch("http://localhost:8080/api/student/getbyname/"+searchName)
            .then((res) => res.json())
            .then((result) => {
                setStudent_Entity(result);
            });
        } else {
          // If search input is empty, fetch all data again
          fetch("http://localhost:8080/api/student")
            .then((res) => res.json())
            .then((result) => {
                setStudent_Entity(result);
            });
        }
      };

    return (
        <div style={{ maxWidth: '100%', overflowX: 'auto' }}>
            <button>
                <h4><Link to="/CreateStudent">Create</Link></h4>
            </button>
            <div>
        <input
          type="text"
          placeholder="Search by name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
            </div>
            <h2 >Student data...</h2>


            <table style={{ borderCollapse: 'collapse', width: '100%', backgroundColor: '#f0f0f0', borderRadius: '10px' }}>
                <thead>
                    <tr>
                        <th>Student_Id</th>
                        <th>Student_Name</th>
                        <th>Enquiry_Id</th>
                        <th>Batch_Id</th>
                        <th>Registration_Date</th>
                        <th>Payment_Id</th>
                        <th>Photo</th>
                        <th>Contact_No</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Location_Id</th>
                        <th>Date_Of_Birth</th>
                        <th>Qualification</th>
                        <th>Course_Id</th>
                        <th>Total_Fees</th>
                        <th>Fees_Paid</th>
                    </tr>
                </thead>
                <tbody>
                    {stu.map(p => (
                        <tr key={p.student_id}>
                            <td>{p.student_id}</td>
                            <td>{p.student_name}</td>
                            <td>{p.enquiry_id}</td>
                            <td>{p.batch_id}</td>
                            <td>{p.registration_date}</td>
                            <td>{p.payment_id}</td>
                            <td>{p.photo}</td>
                            <td>{p.contact_no}</td>
                            <td>{p.email}</td>
                            <td>{p.gender}</td>
                            <td>{p.location_id}</td>
                            <td>{p.date_of_birth}</td>
                            <td>{p.qualification}</td>
                            <td>{p.course_id}</td>
                            <td>{p.total_fees}</td>
                            <td>{p.fees_paid}</td>

                            <td><a href={'/fee_receipt/' + p.student_id}>Fee Receipt</a></td>
                            <td><a href={'/Studentup/' + p.student_id}>Edit</a></td>
                            <td><a href={'/Studentdel/' + p.student_id}>delete</a></td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    )
}
