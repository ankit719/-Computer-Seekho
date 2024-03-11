import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
function PRNGeneratorUp() {
    const [prngen, setPRNGenerator] = useState({});
    const { id } = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        fetch("http://localhost:8080/api/prngen/" + id)
            .then(res => res.json())
            .then((result) => {
                setPRNGenerator(result);
            }
            ).catch((e)=>console.log(e));
    }, [id]);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setPRNGenerator(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        let demo = JSON.stringify(prngen);
        console.log(JSON.parse(demo));
        fetch("http://localhost:8080/api/prngen/" + id, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: demo
        }).then(r => { console.log(r) })
        event.preventDefault();
        navigate('/');

        
    }
    return (
        <form onSubmit={handleSubmit}>
            
            <label>PRN:</label>
            <input
                type="number"
                name="prn"
                value={prngen.prn ?? ""}
                disabled={true}
                onChange={handleChange}
            />
            <br />
            <label>Student ID:</label>
            <input
                type="number"
                name="student_Id"
                value={prngen.student_Id ?? ""}
                onChange={handleChange}
            />
            <br/>      
            <input type="submit" />
        </form>
    );
} export default PRNGeneratorUp;
