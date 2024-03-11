import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Location() {
    const [location, setLocation] = useState([]);
    const { id } = useParams();

    console.log(location);

    useEffect(() => {
        fetch("http://localhost:8080/api/location/" + id)
            .then(res => res.json())
            .then(result => {
                setLocation(result);
            })
            .catch(error => {
                console.error('Error fetching location:', error);
            });
    }, [id]);

    return (
        <div>
            {location.map((loc) => (
                <div key={loc.location_Id}>
                    <label>Id:</label> {loc.location_Id}<br />
                    <label>City:</label> {loc.city}<br />
                    <label>Country:</label> {loc.country}<br />
                    <label>Landmark:</label> {loc.landmark}<br />
                    <label>Pincode:</label> {loc.pincode}<br />
                </div>
            ))}
        </div>
    );
};
