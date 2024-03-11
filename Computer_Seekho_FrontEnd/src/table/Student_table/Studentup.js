
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Studentup() {
    const { Id } = useParams();
    const navigate = useNavigate();
    const [stu, setStudent_Entity] = useState({});
    const [enq, setEnquiry] = useState([]);
    const [qua, setQualifications] = useState([]);
    const [bat,setBatch] = useState([]);
    const [loc,setLocation] = useState([]);
    const [cou,setCourse] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch(`http://localhost:8080/api/student/${Id}`)
            .then(res => res.json())
            .then(result => {
                setStudent_Entity(result);
            })
            .catch(error => console.error(error));

          

            
        fetch("http://localhost:8080/api/Qualification")
        .then(res => res.json())
        .then((result) => {
            setQualifications (result);
        })
        .catch(error => console.error("Error fetching data:", error));

                fetch("http://localhost:8080/api/enquiry")
                .then(res => res.json())
                .then((result) => {
                    setEnquiry (result);
                })
                .catch(error => console.error("Error fetching data:", error));

                
            fetch("http://localhost:8080/api/batches")
            .then(res => res.json())
            .then(result => {
                console.log("from batch---->",result);
                setBatch(result.map(m=>({
                    label:m.batchName,
                    value:m.batchId
                })))
            }).catch(error => console.error("Error fetching batch data:", error));

            fetch("http://localhost:8080/api/location")
            .then(res => res.json())
            .then(result => {
                console.log("from location---->",result);
                setLocation(result.map(loc=>({
                    label:loc.city,
                    value:loc.location_Id
                })))
            }).catch(error => console.error("Error fetching location data:", error));
            
            fetch("http://localhost:8080/api/courses")
            .then(res => res.json())
            .then(result => {
                console.log("from courses---->",result);
                setCourse(result);
            });
    };


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setStudent_Entity(prevState => ({ ...prevState, [name]: value }));
    };

    
    const handleBatchSelect = (selectedBatchId) => {
        setStudent_Entity(prevData => ({ ...prevData, batch_id: selectedBatchId }));
    }
    const handleLocationSelect = (selectedLocationId) => {
        setStudent_Entity(prevData => ({ ...prevData, location_id: selectedLocationId }));
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const demo = JSON.stringify(stu);
        fetch(`http://localhost:8080/api/studentbyid/${Id}`, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: demo
        })
        .then(response => {
            if (response.ok) {
                console.log("Student updated successfully");
                try {
                    const role = sessionStorage.getItem('Role');
                    if (role == 'staff') {
                        navigate("/StaffDashBoard");
                    }
                    if (role == 'admin') {
                        navigate("/AdminDashBoard")
                    }
                } catch (error) {
                    console.error("Error processing close:", error);
                }
            } else {
                console.error("Failed to update placement");
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Student_Id:</label>
            <input
                type="int"
                name="student_id"
                value={stu.student_id || ""}
                disabled={true}
                onChange={handleChange}
            />
            <br />
            <label>Student_Name:</label>
            <input
                type="text"
                name="student_name"
                value={stu.student_name || ""}
                onChange={handleChange}
            />
            <br />
            <br /><label>Enquiry_Id:</label>
            <select name="enquiry_id" onChange={handleChange} value={setStudent_Entity.enquiry_id}>
                <option>Select Option</option>
                {enq.map((q,index) => (
                    <option key={index} value={q.enquiry_id}>
                        {q.enquirer_name}
                    </option>
                ))}
            </select>       
            <br />
            <label htmlFor="batch_id">Batch Name:</label>
            <select name="batch_id" onChange={(e) => handleBatchSelect(e.target.value)} value={setStudent_Entity.batch_id}>
                <option>Select Batch</option>
                {bat.map((batch, index) => (
                    <option key={index} value={batch.value}>{batch.label}</option>
                ))}
            </select>
            <br />
            <label>Registration_Date:</label>
            <input
                type="date"
                name="registration_date"
                value={stu.registration_date || ""}
                onChange={handleChange}
            />
            <br />
            <label>Payment_Id:</label>
            <input
                type="int"
                name="payment_id"
                value={stu.payment_id || ""}
                onChange={handleChange}
            />
            <br />
            <label>Photo:</label>
            <input
                type="text"
                name="photo"
                value={stu.photo || ""}
                onChange={handleChange}
            />
            <br />
            <label>Contact_No:</label>
            <input
                type="text"
                name="contact_no"
                value={stu.contact_no || ""}
                onChange={handleChange}
            />
            <br />
            <label>Email:</label>
            <input
                type="text"
                name="email"
                value={stu.email || ""}
                onChange={handleChange}
            />
            <br />
            <label>Gender:</label>
                <select name="gender" onChange={handleChange}>
                <option>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Transgender">Transgender</option>
            </select>
            
            <br />
            <label htmlFor="location_id">Location:</label>
            <select name="location_id" onChange={(e) => handleLocationSelect(e.target.value)} value={setStudent_Entity.location_id}>
                <option>Select location</option>
                {loc.map((l, index) => (
                    <option key={index} value={l.value}>{l.label}</option>
                ))}
            </select>
            <br />
            <label>Date_Of_Birth:</label>
            <input
                type="date"
                name="date_of_birth"
                value={stu.date_of_birth || ""}
                onChange={handleChange}
            />
            <br />
            <label>Qualification_Id:</label>
            <select name="qualification_id" onChange={handleChange} value ={setStudent_Entity.qualification_id}>
                <option>Select Option</option>
                {qua.map(q => (
                    <option key={q.qualification_id} value={q.qualification_id}>
                        {q.qualification}
                    </option>
                ))}
            </select>
            <br />
            <label>Course Id:</label>
            <select name="course_id" onChange={handleChange} value ={setStudent_Entity.course_id}>
                <option>Select Option</option>
                {cou.map(q => (
                    <option key={q.course_id} value={q.course_id}>
                        {q.course_name}
                    </option>
                ))}
                </select>
            <br />
            <label>Total_Fees:</label>
            <input
                type="int"
                name="total_fees"
                value={stu.total_fees || ""}
                onChange={handleChange}
            />
            <br />
            <label>Fees_Paid:</label>
            <input
                type="int"
                name="fees_paid"
                value={stu.fees_paid || ""}
                onChange={handleChange}
            />
            <br />

            <input type="submit" value="Submit" />
        </form>
    );
}

export default Studentup;





