import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function AddQualification() {
  const [qualification, setQualification] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setQualification((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const pid = "your_dynamic_id_here"; 

    fetch('http://localhost:8080/api/Qualification', {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(qualification),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
      navigate("/"); 
    };
    
    return (
      <form onSubmit={handleSubmit}>
      <label>Qualification_id:</label>
      <input
        type="number"
        name="qualification_id"
        onChange={handleChange}
        required 
        />

      <br />
      <label>Qualification:</label>
      <input
        type="text"
        name="qualification"
        onChange={handleChange}
        required 
        />
      <input type="submit" value="Submit" />
    </form>
  );
}
