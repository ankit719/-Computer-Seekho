import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
function Locationup() {
    const [location, setLocation] = useState({});
    const { id } = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        fetch("http://localhost:8080/api/location/" + id)
            .then(res => res.json())
            .then((result) => {
                setLocation(result);
            }
            ).catch((e)=>console.log(e));
    }, [id]);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setLocation(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        let demo = JSON.stringify(location);
        console.log(JSON.parse(demo));
        fetch("http://localhost:8080/api/location/" + id, {
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
                name="location_Id"
                value={location.location_Id ?? ""}
                disabled={true}
                onChange={handleChange}
            />
            <br />
            <label>City:</label>
            <input
                type="text"
                name="city"
                value={location.city ?? ""}
                onChange={handleChange}
            />
            <br />
            <label>Country:</label>
            <input
                type="text"
                name="country"
                value={location.country ?? ""}
                onChange={handleChange}
            />
            <br />
            <label>Landmark:</label>
            <input
                type="text"
                name="landmark"
                value={location.landmark ?? ""}
                onChange={handleChange}
            />
            <br />
            <label>Pincode:</label>
            <input
                type="number"
                name="pincode"
                value={location.pincode ?? ""}
                onChange={handleChange}
            />
            <br/>      
            <input type="submit" />
        </form>
    );
} 
export default Locationup;
