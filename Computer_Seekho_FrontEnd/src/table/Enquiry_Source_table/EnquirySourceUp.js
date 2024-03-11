import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"

function EnquirySourceUp() {
    const [enquirysrc, setEnquirySource] = useState([]);
    const { id } = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        fetch("http://localhost:8080/api/enquirysrc/" + id)
            .then(res => res.json())
            .then((result) => {
                setEnquirySource(result);
            }
            ).catch((e)=>console.log(e));
    }, [id]);
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setEnquirySource(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        let demo = JSON.stringify(enquirysrc);
        console.log(JSON.parse(demo));
        fetch("http://localhost:8080/api/enquirysrc/" + id, {
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
                name="enquiry_Source_Id"
                value={enquirysrc.enquiry_Source_Id ?? ""}
                disabled={true}
                onChange={handleChange}
            />
            <br />
            <label>Enquiry Source: </label>
            <input
                type="text"
                name="enquiry_Source"
                value={enquirysrc.enquiry_Source ?? ""}
                onChange={handleChange}
            />
            <br/>      
            <input type="submit" />
        </form>
    );
} export default EnquirySourceUp;
