import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
function ClosureUp() {
    const [clo, setClosure] = useState([]);
    const { id } = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        fetch("http://localhost:8080/api/closure/" + id)
            .then(res => res.json())
            .then((result) => {
                setClosure(result);
            }
            ).catch((e)=>console.log(e));
    }, [id]);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setClosure(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        let demo = JSON.stringify(clo);
        console.log(JSON.parse(demo));
        fetch("http://localhost:8080/api/closure/" + id, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: demo
        }).then(r => { console.log(r) })
        event.preventDefault();
        navigate('/');

        
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Id: </label>
            <input
                type="number"
                name="closure_Id"
                value={clo.closure_Id ?? ""}
                disabled={true}
                onChange={handleChange}
            />
            <br />
            <label>Reason: </label>
            <input
                type="text"
                name="closure_Reason"
                value={clo.closure_Reason ?? ""}
                onChange={handleChange}
            />
            <br/>      
            <input type="submit" />
        </form>
    );
} export default ClosureUp;
