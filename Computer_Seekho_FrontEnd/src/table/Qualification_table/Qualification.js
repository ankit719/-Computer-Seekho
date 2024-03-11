import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Qualification() {
    const [qualification, setQualification] = useState({});
    const { id } = useParams();
    
    useEffect(() => {
        fetch('http://localhost:8080/api/Qualification/'+id)
            .then(res => res.json())
            .then(result => {
                setQualification(result);
            })
            .catch(error => {
                console.error('Error fetching qualification data:', error);
            });
    }, [id]); 

    return (
        <div>
            <h2>Qualification Details</h2>
            <label>Qualification ID:</label> {qualification.qualification_id}<br/>
            <label>Qualification:</label> {qualification.qualification}<br/>
        </div>
    );
}
