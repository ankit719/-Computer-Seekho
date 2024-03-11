import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FacultyDashBoard from "../../Pages/FacultyDashBoard";
import DashboardPage from "../../Pages/DashboardPage ";

export default function CreateStudent() {
    const [stu, setStudent_Entity] = useState({});
    const [qualifications, setQualifications] = useState([]);
    const [cou, setCourses] = useState([]);
    const [enq, setEnquiry] = useState([]);
    const [bat, setBatch] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8080/api/Qualification")
            .then(res => res.json())
            .then(result => {
                console.log("from qualification---->", result);
                setQualifications(result);
            })
            .catch(error => console.error("Error fetching qualifications:", error));
    }, []);

    useEffect(() => {
        fetch("http://localhost:8080/api/courses")
            .then(res => res.json())
            .then(result => {
                console.log("from courses---->", result);
                setCourses(result);
            })
            .catch(error => console.error("Error fetching course:", error));
    }, []);

    useEffect(() => {
        fetch("http://localhost:8080/api/enquiry")
            .then(res => res.json())
            .then(result => {
                console.log("from enquiry---->", result);
                setEnquiry(result);
            })
            .catch(error => console.error("Error fetching enquiry:", error));
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

    const handleChange = (event) => {
        setStudent_Entity({
            ...stu,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Create a new location entry
            const locationResponse = await fetch("http://localhost:8080/api/location", {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    city: stu.city,
                    country: stu.country,
                    landmark: stu.landmark,
                    pincode: stu.pincode
                })
            });

            if (!locationResponse.ok) {
                throw new Error("Failed to create location entry");
            }

            const allLocationsResponse = await fetch("http://localhost:8080/api/location");
            const allLocationsData = await allLocationsResponse.json();

            if (!allLocationsResponse.ok || !Array.isArray(allLocationsData)) {
                throw new Error("Failed to retrieve all location entries");
            }
            const latestLocation = allLocationsData.length > 0 ? allLocationsData[allLocationsData.length - 1] : null;

            if (!latestLocation) {
                throw new Error("Unable to determine the latest location ID");
            }
            const studentResponse = await fetch("http://localhost:8080/api/student", {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    ...stu,
                    location_id: latestLocation.location_Id
                })
            });

            if (!studentResponse.ok) {
                throw new Error("Failed to store student information");
            }
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
        } catch (error) {
            console.error("Error:", error.message);
        }
    };

    return (
        <div >

            {(() => {
                const role = sessionStorage.getItem('Role');
                if (role === 'staff') {
                    return <FacultyDashBoard />;
                } else if (role === 'admin') {
                    return <DashboardPage />;
                }
            })()}




            <div className="cardD" >
                <form onSubmit={handleSubmit} style={{ overflow: 'auto' }}>
                    <br /><label>Student_Name:</label>
                    <input
                        type="text"
                        name="student_name"
                        onChange={handleChange}
                    />
                    <br /><label>Enquiry_Id:</label>
                    <select name="enquiry_id" onChange={handleChange}>
                        <option>Select Option</option>
                        {enq.map(q => (
                            <option key={q.enquiry_Id} value={q.enquiry_Id}>
                                {q.enquireerName}
                            </option>
                        ))}
                    </select>

                    <br /><label>Batch_Id:</label>
                    <select name="batch_id" onChange={handleChange}>
                        <option>Select Option</option>
                        {bat.map(q => (
                            <option key={q.batchId} value={q.batchId}>
                                {q.batchName}
                            </option>
                        ))}
                    </select>

                    <br /><label>Registration_Date:</label>
                    <input
                        type="date"
                        name="registration_date"
                        onChange={handleChange}
                    />

                   
                    <br /><label>Photo:</label>
                    <input
                        type="text"
                        name="photo"
                        onChange={handleChange}
                    />
                    <br /><label>Contact_No:</label>
                    <input
                        type="text"
                        name="contact_no"
                        onChange={handleChange}
                    />
                    <br /><label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                    />
                    <br /><label>Gender:</label>
                    <select name="gender" onChange={handleChange}>
                        <option>Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    <br />

                    <label>Location:</label>
                    <br /><label>city:</label>
                    <input
                        type="text"
                        name="city"
                        onChange={handleChange}
                    />
                    <br /><label>country:</label>
                    <input
                        type="text"
                        name="country"
                        onChange={handleChange}
                    />
                    <br /><label>landmark:</label>
                    <input
                        type="text"
                        name="landmark"
                        onChange={handleChange}
                    />
                    <br /><label>pincode:</label>
                    <input
                        type="text"
                        name="pincode"
                        onChange={handleChange}
                    />

                    <br /><label>Date_Of_Birth:</label>
                    <input
                        type="date"
                        name="date_of_birth"
                        onChange={handleChange}
                    />
                    <br />
                    <label>Qualification:</label>
                    <select name="qualification" onChange={handleChange}>
                        <option>Select Option</option>
                        {qualifications.map(q => (
                            <option key={q.qualification_id} value={q.qualification}>
                                {q.qualification}
                            </option>
                        ))}
                    </select>

                    <br /><label>Course_Id:</label>
                    <select name="course_id" onChange={handleChange}>
                        <option>Select Option</option>
                        {cou.map(q => (
                            <option key={q.course_id} value={q.course_id}>
                                {q.course_name}
                            </option>
                        ))}
                    </select>

                    <br /><label>Fees_Paid:</label>
                    <input
                        type="number"
                        name="fees_paid"
                        onChange={handleChange}
                    />
                    <br /><label>Total_Paid:</label>
                    <input
                        type="number"
                        name="total_fees"
                        onChange={handleChange}
                    />
                    <div style={{ alignItems: 'center' }}>
                        <button type="submit" >Add Student</button>
                    </div>

                </form>
            </div>
        </div>
    );
}
