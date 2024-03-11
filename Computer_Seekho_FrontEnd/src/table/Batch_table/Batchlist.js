import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FacultyDashBoard from "../../Pages/FacultyDashBoard";
import DashboardPage from "../../Pages/DashboardPage ";

function Batchlist() {
  const [Batch, setBatch] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/batches")
      .then((res) => res.json())
      .then((result) => {
        setBatch(result);
      });
  }, []);
  

  return (
    <div>

         {(() => {
            const role = sessionStorage.getItem('Role');
            if (role === 'Staff') {
               return <FacultyDashBoard />;
            } else if (role === 'admin') {
               return <DashboardPage />;
            }
         })()}


         <div className="cardD" style={{ maxWidth: '100%', overflowX: 'auto' }}>

      <h2>Batch data...</h2>
      <h4>
        <Link to="/Batchcreate">Create</Link>
      </h4>
     
      
      <table style={{ borderCollapse: 'collapse', width: '100%',backgroundColor: '#f0f0f0' , borderRadius:'10px'}}>
        <thead className="thead-dark">
        
          <tr>
            <th>Id</th>
            <th>Batch_Name</th>
            <th>Batch_Year</th>
            <th>Batch_Logo</th>
            <th>Start_date</th>
            <th>End_date</th>
            <th>Course_Id</th>
            <th>Final_Presentation_Date</th>
            <th>Cover_Photo</th>
            
          </tr>
        </thead>
        <tbody>
          {Batch.map((entity1) => (
            <tr key={entity1.batchId}>
              <td>{entity1.batchId}</td>
              <td>{entity1.batchName}</td>
              <td>{entity1.batchYear}</td>
              <td>{entity1.batchLogo}</td>
              <td>{entity1.startDate}</td>
              <td>{entity1.endDate}</td>
              <td>{entity1.courseId}</td>
              <td>{entity1.finalPresentationDate}</td>
              <td>{entity1.coverPhoto}</td>
              
              <td>
                <Link to={`/Batch/${entity1.batchId}`}>Display</Link>
                <Link to={`/Batchup/${entity1.batchId}`}>Edit</Link>
                <Link to={`/Batchdel/${entity1.batchId}`}>Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default Batchlist;
