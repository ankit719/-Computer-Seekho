import React from 'react';
import { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom"
export function Locationdel(){
    const [location, setLocation] = useState([]);
    const { id } = useParams()
    const navigate= useNavigate();
    useEffect(() => {
        fetch("http://localhost:8080/api/location/" + id)
            .then(res => res.json())
            .then((result) => { setLocation(result); }
            );
    }, [id]);
    const handledel = (event) => {
        fetch("http://localhost:8080/api/location/" + id, {
            method: 'DELETE'
        })
        .then(res => res)
        .then((result) => {
            console.log(result)
        }); 
        navigate('/');
    }
    return (
                <div>
                    <h1 style={{ color:'green' }}>Are You Sure Want to Delete?</h1>
                    {location.map((loc)=>
                        <>
                        <label>ID:</label>
                        {loc.location_Id}<br />
                        <label>City:</label>
                        {loc.city}<br />
                        <label>Country:</label>
                        {loc.country}<br />
                        <label>Landmark:</label>
                        {loc.landmark}<br />
                        <label>Pincode:</label>
                        {loc.pincode}<br />
                        </>
                    )}
                    <form onSubmit={handledel}>
                        <input type="submit" />
                    </form>
                </div>
        );
    }
export default Locationdel;
        