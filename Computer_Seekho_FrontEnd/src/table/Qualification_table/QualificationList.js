import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function QualificationList() {
  const [qualification, setQualification] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/Qualification")
      .then((res) => res.json())
      .then((result) => {
        setQualification(result);
      })
      .catch((error) => {
        console.error('Error fetching qualification data:', error);
      });
  }, []);

  return (
    <div>
      <h4>
        <Link to="/AddQualification">Add Qualification</Link>
      </h4>
      <h2>Qualification Data...</h2>
      <table>
        <thead>
          <tr>
            <th>Qualification ID</th>
            <th>Qualification</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {qualification.map((qlf) => (
            <tr key={qlf.qualification_id}>
              <td>{qlf.qualification_id}</td>
              <td>{qlf.qualification}</td>
              <td>
                <Link to={`/Qualification/${qlf.qualification_id}`}>Display</Link>
                {' | '}
                <Link to={`/UpdateQualification/${qlf.qualification_id}`}>Edit</Link>
                {' | '}
                <Link to={`/DeleteQualification/${qlf.qualification_id}`}>Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default QualificationList;
