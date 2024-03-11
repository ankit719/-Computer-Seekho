import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
function Facultyup(){
    const [faculty, setFaculty] = useState({});
    const { id } = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        fetch("http://localhost:8080/api/staff/" + id)
            .then(res => res.json())
            .then((result) => {
                setFaculty(result);
            }
            ).catch((e)=>console.log(e));
    }, []);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFaculty(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        let demo = JSON.stringify(faculty);
        console.log(JSON.parse(demo));
        fetch("http://localhost:8080/api/staff/" + id, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: demo
        }).then(r => { console.log(r) })
        event.preventDefault();
        navigate('/Listfaculty');

        
    }
    return(
        <form onSubmit={handleSubmit}>
        <label>Id:</label>
        <input
            type="number"
            name="staff_id"
            value={faculty.staff_id ?? ""}
            disabled={true}
            onChange={handleChange}
        />
        <br />            <label>name:</label>
        <input
            type="text"
            name="name"
            value={faculty.name ?? ""}
            onChange={handleChange}
        />
        <br />            <label>Email:</label>
        <input
            type="text"
            name="email"
            value={faculty.email || ""}
            onChange={handleChange}
        />
        <br />           
         <label>Department:</label>
        <input
            type="number"
            name="role_id"
            value={faculty.role_id || ""}
            onChange={handleChange}
        />
        <br />
        <label>Password:</label>
        <input
            type="text"
            name="password"
            value={faculty.password || ""}
            onChange={handleChange}
        />
        <br />
        <label>Experience:</label>
        <input
            type="text"
            name="experience"
            value={faculty.experience || ""}
            onChange={handleChange}
        />
        <br />
        <label>contact_no:</label>
        <input
            type="text"
            name="contact_no"
            value={faculty.contact_no || ""}
            onChange={handleChange}
        />
        <br />
        <label>Location_id:</label>
        <input
            type="number"
            name="location_id"
            value={faculty.location_id || ""}
            onChange={handleChange}
        />
        <br />
        
        <br />      
                   <input type="submit" />
    </form>
    )
}

export default Facultyup;