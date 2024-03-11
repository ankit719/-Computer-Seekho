import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Campuslifelist() {
  const [campuslife, setCampuslife] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/campuslife")
      .then((res) => res.json())
      .then((result) => {
        setCampuslife(result);
      });
  }, []);

  return (
    <div>
      <h4>
        <Link to="/Campuslifecreate">Create</Link>
      </h4>
      <h2>Campuslife data...</h2>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>CampuslifeId</th>
            <th>Photo</th>
            <th>Batchid</th>
            <th>Staffid</th>
            <th>Video</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {campuslife.map((entity1) => (
            <tr key={entity1.campusLifeId}>
              
              <td>{entity1.campusLifeId}</td>
              <td>{entity1.photo}</td>
              <td>{entity1.batchId}</td>
              <td>{entity1.staffId}</td>
              <td>{entity1.video}</td>
              <td>
                <Link to={`/Campuslife/${entity1.campusLifeId}`}>Display</Link>
                <Link to={`/Campuslifeup/${entity1.campusLifeId}`}>Edit</Link>
                <Link to={`/Campuslifedel/${entity1.campusLifeId}`}>Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Campuslifelist;
