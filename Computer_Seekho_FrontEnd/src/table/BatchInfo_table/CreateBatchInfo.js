import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FacultyDashBoard from "../../Pages/FacultyDashBoard";
import DashboardPage from "../../Pages/DashboardPage ";
export default function CreateBatchInfo() {
    const [batchinfo, setBatchinfoentity] = useState({});
    const [staff, setStaff] = useState([]);
    const [bat, setBatch] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        fetch("http://localhost:8080/api/batches")
            .then(res => res.json())
            .then(result => {
                console.log("from batch---->", result);
                setBatch(result);
            })
            .catch(error => console.error("Error fetching batches:", error));
    }, []);

    const fetchData = () => {
        fetch("http://localhost:8080/api/staff")
            .then(res => res.json())
            .then(result => {
                console.log("staff:", result);
                setStaff(result);
            })
            .catch(error => console.error("Error fetching staff data:", error));
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setBatchinfoentity(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:8080/api/batchinfo", {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(batchinfo)
        }).then(() => {
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
            
        });
    };

    return (
        <div>

        {(() => {
          const role = sessionStorage.getItem('Role');
          if (role === 'staff') {
            return <FacultyDashBoard />;
          } else if (role === 'admin') {
            return <DashboardPage />;
          }
        })()}
  
  
        <div className="cardD">
        <form onSubmit={handleSubmit} style={{overflowX: 'auto'}}>
            <label>Batch_Id:</label>
            <select name="batchId" onChange={handleChange}>
                <option>Select Batch</option>
                {bat.map(q => (
                    <option key={q.batchId} value={q.batchId}>
                        {q.batchName}
                    </option>
                ))}
            </select>

            <br />
            <label>Staff_Id:</label>
            <select name="staff_Id" onChange={handleChange}>
                <option>Select Staff</option>
                {staff.map((q) => (
                    <option key={q.staff_id} value={q.staff_id}>
                        {q.username}
                    </option>
                ))}
            </select>

            <br />
            <label>Subject:</label>
            <input
                type="text"
                name="subject"
                onChange={handleChange}
            />
            <br />
            <input type="submit" />
        </form>
        </div>
        </div>
    );
}
