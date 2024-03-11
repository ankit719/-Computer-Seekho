import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function DeleteQualification() {
  const [qual, setQualification] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    
    fetch(`http://localhost:8080/api/Qualification/` + id)
      .then((res) => res.json())
      .then((result) => {
        setQualification(result);
        console.log(result);
      })
      .catch((error) => {
        console.error("Error fetching qualification:", error);
      });
  }, [id]);

  const handleDelete = (event) => {
    event.preventDefault();
    fetch(`http://localhost:8080/api/Qualification/` + id, {
      method: "DELETE",
    })  
      .then((res) => {
        if (res.status === 200) {
          console.log("Qualification deleted successfully.");
          navigate("/");
        } else {
          console.log("Failed to delete qualification.");
        }
      })
      .catch((error) => {
        console.error("Error deleting qualification:", error);
      });
  };

  return (
    <div>
      <h1 style={{ color: "blue" }}>
        Are you sure you want to delete the record?
      </h1>
      <label>Qualification ID:</label> {qual.qualification_id}
      <br />
      <label>Qualification:</label> {qual.qualification}
      <br />
      <form onSubmit={handleDelete}>
        <button type="submit" className="btn btn-danger">
          Delete
        </button>
      </form>
    </div>
  );
}
