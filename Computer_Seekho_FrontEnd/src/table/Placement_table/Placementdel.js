


import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Placementdel() {
    const [placement_Data, setPlacement_Data] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8080/api/placement/" + id)
            .then(res => res.json())
            .then((result) => {
                setPlacement_Data(result);
            });
    }, [id]);

    const handleDelete = () => {
        fetch("http://localhost:8080/api/placement/" + id, {
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
            <label>Placement_Data_Id:</label> {placement_Data.placement_Data_Id}<br/>
            <label>P_Id:</label> {placement_Data.p_Id}<br/>
            <label>Placement_Id:</label> {placement_Data.placement_Id}<br/>
            <label>Company_Id:</label>{placement_Data.company_Id} <br/>
            <label>Designation:</label>{placement_Data.designation} <br/>
            <label>Batch_Id:</label> {placement_Data.batch_Id}<br/>
            <label>Status:</label>{placement_Data.status} <br/>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

