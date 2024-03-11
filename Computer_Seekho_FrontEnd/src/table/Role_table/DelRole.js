import { useEffect, useState } from "react";
import React from 'react';
import { useNavigate, useParams } from "react-router-dom";

export default function DelRole() {
    const [delrole,setDelRole] = useState({});
    const { role_id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8080/api/role/"+ role_id)
            .then(res => res.json())
            .then((result) => {
                setDelRole(result);
            });
    }, [role_id]);

    const handleDelete = () => {
        fetch("http://localhost:8080/api/role/" + role_id, {
            method: 'DELETE'
        })
        .then(res => {
            if (res.ok) {
                console.log("Deleted successfully");
                // Redirect to a different page after successful deletion
                navigate('/'); // Example: Redirecting to the homepage
            } else {
                console.error("Failed to delete");
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    };

    return (
        <div>
            <h1 style={{ color: 'red' }}>Are you sure you want to delete?</h1>
            <label>role_id: {delrole.role_id}</label>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}