import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FacultyDashBoard from "../../Pages/FacultyDashBoard";
import DashboardPage from "../../Pages/DashboardPage ";
export default function Studentdel() {
    const [stu, setStudent_Entity] = useState({});
    const { student_id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8080/api/student/" + student_id)
            .then(res => res.json())
            .then((result) => {
                setStudent_Entity(result);
            });
    }, [student_id]);

    const handleDelete = () => {
        fetch("http://localhost:8080/api/student/" + student_id, {
            method: 'DELETE'
        })
        .then(res => {
            if (res.ok) {
                console.log("Deleted successfully");
                // Redirect to a different page after successful deletion
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
           if (role === 'staff') {
              return <FacultyDashBoard />;
           } else if (role === 'admin') {
              return <DashboardPage />;
           }
        })()}


        <div className="cardD" style={{ maxWidth: '100%', overflowX: 'auto' }}>
      
            <h1 style={{ color: 'red' }}>Are you sure you want to delete?</h1>
            <label>Student_Id:</label> {stu.student_id}<br/>
            <label>Student_Name:</label> {stu.student_name}<br/>
            <label>Enquiry_Id:</label> {stu.enquiry_id}<br/>
            <label>Batch_Id:</label>{stu.batch_id} <br/>
            <label>Registration_Date:</label>{stu.registration_date} <br/>
            <label>Payment_Id:</label>{stu.payment_id} <br/>
            <label>Photo:</label>{stu.photo} <br/>
            <label>Contact_No:</label>{stu.contact_no} <br/>
            <label>Email:</label>{stu.email} <br/>
            <label>Gender:</label>{stu.gender} <br/>
            <label>Location_Id:</label>{stu.location_id} <br/>
            <label>Date_Of_Birth:</label>{stu.date_of_birth} <br/>
            <label>Qualification_Id:</label>{stu.qualification_id} <br/>
            <label>Course_Id:</label>{stu.course_id} <br/>
            <label>Total_Fees:</label>{stu.total_fees} <br/>
            <label>Fees_Paid:</label>{stu.fees_paid} <br/>
            
            <button onClick={handleDelete}>Delete</button>
        </div>
        </div>
    );
}

