import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FacultyDashBoard from "../../Pages/FacultyDashBoard";
import DashboardPage from "../../Pages/DashboardPage ";

export default function Create_Followup() {
    const [Followup, setFollowup] = useState({});
    const [Enquiry, setEnquiry] = useState([]);
    const [Staff, setStaff] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8080/api/enquiry")
            .then((res) => res.json())
            .then((result) => {
                console.log("enquiry--->", result);
                setEnquiry(result);
            })
            .catch((error) => console.error("Error fetching enquiry:", error));

        fetch("http://localhost:8080/api/staff")
            .then((res) => res.json())
            .then((result) => {
                console.log("staff---->", result);
                setStaff(result);
            })
            .catch((error) => console.error("Error fetching staff:", error));
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'enquiry_id') {
            const selectedEnquiry = Enquiry.find(enquiry => enquiry.enquireerName === value);
            if (selectedEnquiry) {
                setFollowup(prev => ({
                    ...prev,
                    [name]: selectedEnquiry.enquiry_Id
                }));
            } else {
                console.error("Corresponding enquiry not found for selected enquirerName:", value);
            }
        } else {
            setFollowup(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (event) => {
        try {
            const response = await fetch("http://localhost:8080/api/Followup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(Followup),
            });

            const responseData = await response.json();
            console.log("Server Response:", response.status, responseData);

            if (response.ok) {
                console.log("Inserted successfully.");
            } else {
                console.error("Failed to insert.");
            }
        } catch (error) {
            console.error("Error during submission:", error);
        }

        // Optionally, handle the response data
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
        <div>
            <h2>Followup</h2>
            <form onSubmit={handleSubmit}>
                <label>enquiry_id:</label>
                <select
                    name="enquiry_id"
                    onChange={handleChange}
                    value={Followup.enquiry_id || ""}
                >
                    <option value="" disabled>
                        Select Option
                    </option>
                    {Enquiry.map((enquiry) => (
                        <option key={enquiry.enquiry_id} value={enquiry.enquiry_id}>
                            {enquiry.enquireerName}
                        </option>
                    ))}
                </select>


                <br />
                <label>followup_Date:</label>
                <input
                    type="date"
                    name="followup_Date"
                    onChange={handleChange}
                    value={Followup.followup_Date || ""}
                />
                <br />
                <label>followup_Message:</label>
                <input
                    type="text"
                    name="followup_Message"
                    onChange={handleChange}
                    value={Followup.followup_Message || ""}
                />
                <br />
                <label>staff_id:</label>
                <select
                    name="staff_id"
                    onChange={handleChange}
                    value={Followup.staff_id || ""}
                >
                    <option value="" disabled>
                        Select Option
                    </option>
                    {Staff.map((staff) => (
                        <option key={staff.staff_id} value={staff.staff_id}>
                            {staff.name}
                        </option>
                    ))}
                </select>

                <br />
                <label>Attempts:</label>
                <input
                    type="number"
                    name="attempts"
                    onChange={handleChange}
                    value={Followup.attempts}
                />
                <br />
                <input type="submit" />
            </form>
        </div>
        </div>
    );
}
