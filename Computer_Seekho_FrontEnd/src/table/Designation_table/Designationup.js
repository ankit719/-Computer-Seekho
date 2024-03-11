import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
function Designationup() {
    const [desig, setDesignation] = useState([]);
    const { id } = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        fetch("http://localhost:8080/api/designation/" + id)
            .then(res => res.json())
            .then((result) => {
                setDesignation(result);
            }
            ).catch((e)=>console.log(e));
    }, [id]);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setDesignation(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        let demo = JSON.stringify(desig);
        console.log(JSON.parse(demo));
        fetch("http://localhost:8080/api/designation/" + id, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: demo
        }).then(r => { console.log(r) })
        event.preventDefault();
        navigate('/');

        
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Id:</label>
            <input
                type="number"
                name="designation_Id"
                value={desig.designation_Id ?? ""}
                disabled={true}
                onChange={handleChange}
            />
            <br />
            <label>Designation:</label>
            <input
                type="text"
                name="designation"
                value={desig.designation ?? ""}
                onChange={handleChange}
            />
            <br/>      
            <input type="submit" />
        </form>
    );
} export default Designationup;
