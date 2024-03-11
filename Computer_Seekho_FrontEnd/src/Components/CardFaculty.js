import React, { useState, useEffect } from 'react';
import './Card.css';

function CardFaculty({ faculty }) {
    const [role, setRole] = useState(null);
    const [cityName, setCityName] = useState(null);

    useEffect(() => {
        const fetchRole = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/e/${faculty.role_id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch role data');
                }
                const roleData = await response.json();
                console.log(roleData);
                setRole(roleData); // Set the fetched role data
            } catch (error) {
                console.error('Error fetching role:', error);
            }
        };

        fetchRole(); // Call the fetchRole function when the component mounts
    }, [faculty.role_id]); // Run the effect whenever faculty.role_id changes

    useEffect(() => {
        const fetchCityName = async () => {
          try {
            const response = await fetch(`http://localhost:8080/api/location/${faculty.location_id}`);
            if (!response.ok) {
              throw new Error('Failed to fetch city name');
            }
            const data = await response.json();
            console.log(data);
            setCityName(data); // Set cityName to the city property of the response
          } catch (error) {
            console.error('Error fetching city name:', error);
          }
        };
    
        fetchCityName(); // Call the fetchCityName function when the component mounts
      }, [faculty.location_id]);
    return (
        <div className="card-container">
            <div className="card">
                <h3>{faculty.name}</h3>
                <img src={faculty.photo} alt="faculty pic" />
                <p>Role: {faculty.role}</p>
                <p>Designation: {faculty.designation}</p>
                <p>Qualification: {faculty.qualification}</p>
                <p>Experience: {faculty.experience}</p>
                <p>Contact No: {faculty.contact_no}</p>
                <p>Email: {faculty.email}</p>
                <p>Joining Date: {new Date(faculty.joining_Date).toLocaleDateString()}</p>
            </div>
        </div>
    );
}

export default CardFaculty;
