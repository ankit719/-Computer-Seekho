import React from 'react';
import { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom"

function Facultydel(){
    const [faculty, setFaculty] = useState({});
    const { id } = useParams()
    const navigate= useNavigate();
   
    useEffect(() => {
        fetch("http://localhost:8080/api/staff/"+id)
            .then(res => res.json())
            .then((result) => { setFaculty(result); }
            );
            
    }, [id]);
    const handeldel = (event) => {
        event.preventDefault();
        fetch("http://localhost:8080/api/staff/" + id, {
            method: 'Delete'
        })
            .then(res => res)
            .then((result) => {
                console.log(result)
            }); 
            navigate('/Listfaculty');
    }
    return(
        <div>
        <h1 style={{ color:'red' }}>R you sure</h1>
        <label>Id:</label>
        {faculty.staff_id}<br />
        <label>name:</label>
        {faculty.name}<br />
        <label>Email:</label>
        {faculty.email}<br />
        <label>Username:</label>
        {faculty.username}
        <label>Role_Id:</label>
        {faculty.role_id}
        <label>contact_no:</label>
        {faculty.contact_no}
        <form onSubmit={handeldel}>
            <input type="submit" />
        </form>
    </div>
    )
}

export default Facultydel;