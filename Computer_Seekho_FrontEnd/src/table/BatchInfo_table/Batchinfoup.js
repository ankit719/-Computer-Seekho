import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FacultyDashBoard from "../../Pages/FacultyDashBoard";
import DashboardPage from "../../Pages/DashboardPage ";

function Batchinfoup() {
    const { batch_Info_Id } = useParams();
    const navigate = useNavigate();
    const [batchinfo, setBatchinfoentity] = useState({});
    const [staff, setStaff] = useState([]);
    const [bat, setBatch] = useState([]);

    useEffect(() => {
        fetchData();
        fetchStaff(); // Fetch staff data
    }, []);

    const fetchData = () => {
        fetch(`http://localhost:8080/api/batchinfo/${batch_Info_Id}`)
            .then(res => res.json())
            .then(result => {
                setBatchinfoentity(result);
            })
            .catch(error => console.error(error));
    };


    useEffect(() => {
        fetch("http://localhost:8080/api/batches")
            .then(res => res.json())
            .then(result => {
                console.log("from batch---->", result);
                setBatch(result);
            })
            .catch(error => console.error("Error fetching batches:", error));
    }, []);


    const fetchStaff = () => { 
        fetch("http://localhost:8080/api/staff")
            .then(res => res.json())
            .then(result => {
                console.log("staff:", result);
                setStaff(result.map(staff => ({
                    label: staff.username,
                    value: staff.staff_id
                })));
            })
            .catch(error => console.error("Error fetching staff data:", error));
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setBatchinfoentity(prevState => ({ ...prevState, [name]: value }));
    }
    
    const handleStaff = (selectedStaffId) => {
        setBatchinfoentity(prevData => ({ ...prevData, staff_Id: selectedStaffId }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const demo = JSON.stringify(batchinfo);
        fetch(`http://localhost:8080/api/batchinfo/${batch_Info_Id}`, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: demo
        })
        .then(response => {
            if (response.ok) {
                console.log("Batch updated successfully");
                navigate('/');
            } else {
                console.error("Failed to update batch");
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    }

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
        <form onSubmit={handleSubmit} style ={{overflowX:'auto'}}>
            <label>Batch_Info_Id:</label>
            <input
                type="int"
                name="batch_Info_Id"
                value={batchinfo.batch_Info_Id}
                disabled={true}
                onChange={handleChange}
            />
            <br />
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
            <label htmlFor="staff_id">Staff ID:</label>
            <select name="staff_id" onChange={(e) => handleStaff(e.target.value)}>
                <option>Select Staff</option>
                {staff.map((com, index) => (
                    <option key={index} value={com.value}>{com.label}</option>
                ))}
            </select>
            <br />
            <label>Subject:</label>
            <input
                type="text"
                name="subject"
                value={batchinfo.subject || ""}
                onChange={handleChange}
            />
            <br />
            <input type="submit" value="Submit" />
        </form>
        </div>
        </div>
    );
}

export default Batchinfoup;
