import React from 'react';
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";

function Listfaculty() {
    const [faculty, setFaculty] = useState([]);
   
    useEffect(() => {
        
        fetch("http://localhost:8080/api/staff")
            .then(res => res.json())
            .then((result) => { setFaculty(result); }
            );
           
    }, []);
    return (
        <div >
            <Link to="/AfterLogOut" >LogOut</Link>
            <h4><Link to="/Createfaculty">Create</Link></h4>
            <h2>faculty Data...</h2>
            <table>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Staff ID</th>
                    <th>Name</th>
                    <th>Designation ID</th>
                    <th>Qualification ID</th>
                    <th>Experience</th>
                    <th>Contact No</th>
                    <th>Email</th>
                    <th>Photo</th>
                    <th>Location ID</th>
                    <th>Joining Date</th>
                    <th>Recover Date</th>
                    <th>Recovery Password</th>
                    <th>Role ID</th>
                    <th>Action Up</th>
                    <th>Action del</th>
                </tr>
            </thead>
            <tbody>
                {faculty.map(fac => (
                    <tr key={fac.staff_id}>
                        <td>{fac.username}</td>
                        <td>{fac.password}</td>
                        <td>{fac.staff_id}</td>
                        <td>{fac.name}</td>
                        <td>{fac.designation_id}</td>
                        <td>{fac.qualification_id}</td>
                        <td>{fac.experience}</td>
                        <td>{fac.contact_no}</td>
                        <td>{fac.email}</td>
                        <td>{fac.photo}</td>
                        <td>{fac.location_id}</td>
                        <td>{fac.joining_Date}</td>
                        <td>{fac.recover_date}</td>
                        <td>{fac.recovery_password}</td>
                        <td>{fac.role_id}</td>
                            <td> <a href={'/facup/' + fac.staff_id}>Edit</a></td>
                            <td> <a href={'/facdel/' + fac.staff_id}>delete</a></td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
}

export default Listfaculty;
