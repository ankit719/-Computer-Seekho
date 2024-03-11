import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FacultyDashBoard from "../../Pages/FacultyDashBoard";
import DashboardPage from "../../Pages/DashboardPage ";
function Batch() {
    const [batch, setBatch] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:8080/api/batches/${id}`)
            .then(res => res.json())
            .then((result) => {
                setBatch(result);
            });
    }, [id]);

    

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
        
            <label>BatchId:</label> {batch.batchId}<br />
            <label>BatchName:</label> {batch.batchName}<br />
            <label>BatchYear:</label> {batch.batchYear}<br />
            <label>BatchLogo:</label> {batch.batchLogo}<br />
            <label>StartDate:</label> {batch.startDate}<br />
            <label>EndDate:</label> {batch.endDate}<br />
            <label>CourseId:</label> {batch.courseId}<br />
           
            <label>FinalPresentationDate:</label> {batch.finalPresentationDate}<br />
            <label>CoverPhoto:</label> {batch.coverPhoto}<br />
           
            </div>
        </div>
    );
}
export default Batch;