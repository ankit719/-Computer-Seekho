import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FacultyDashBoard from "../../Pages/FacultyDashBoard";
import DashboardPage from "../../Pages/DashboardPage ";
export default function Batchinfodel() {
    const [batchinfo, setBatchInfo] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8080/api/batchinfo/"+id)
            .then(res => res.json())
            .then((result) => {
                setBatchInfo(result);
                console.log(batchinfo);
            });
    }, []);

    const handleDelete = () => {
        fetch("http://localhost:8080/api/batchinfo/"+id, {
            method: 'DELETE'
        })
        .then(res => {
            if (res.ok) {
                console.log("Deleted successfully");
                // Redirect to a different page after successful deletion
                try{
                    const role = sessionStorage.getItem('Role');
                    if (role === 'Staff') {
                      navigate('/StaffDashBoard');
                    }
                    if (role === 'Admin') {
                      navigate('/AdminDashBoard');
                    }
                  } catch (error) {
                    console.error('Error processing close:', error);
                  }
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

      {(() => {
        const role = sessionStorage.getItem('Role');
        if (role === 'Staff') {
          return <FacultyDashBoard />;
        } else if (role === 'admin') {
          return <DashboardPage />;
        }
      })()}


      <div className="cardD">
            <h1 style={{ color: 'red' }}>Are you sure you want to delete?</h1>
            
            {batchinfo && (
                <>
                    <label>Batch_Info_Id:</label> {batchinfo.batch_Info_Id}<br/>
                    <label>BatchId:</label> {batchinfo.batchId}<br/>
                    <label>Staff_Id:</label> {batchinfo.staff_Id}<br/>
                    <label>Subject:</label>{batchinfo.subject} <br/>
                </>
            )}

            <button onClick={handleDelete}>Delete</button>
        </div>
        </div>
    );
}
