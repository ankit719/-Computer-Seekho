import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FacultyDashBoard from "../../Pages/FacultyDashBoard";
import DashboardPage from "../../Pages/DashboardPage ";

function UpdateEnquiry() {
  const [enquiry, setEnquiry] = useState({});
  const [course, setCourse] = useState([]);
  const [staff, setStaff] = useState([]);
  const { id } = useParams();
  let navigate = useNavigate();
  
  useEffect(() => {
    fetch("http://localhost:8080/api/enquiry/" + id)
      .then((res) => res.json())
      .then((result) => {
        setEnquiry(result);
      })
      .catch((e) => console.log(e));
    }, [id]);

  useEffect(() => {
    fetch("http://localhost:8080/api/courses")
    .then(res => res.json())
    .then((result) => {
      console.log(result);
      setCourse(result);
    });
  }, [id]);

useEffect(() => {
    fetch("http://localhost:8080/api/staff")
    .then(res => res.json())
    .then((result) => {
      console.log(result);
      setStaff(result);
    });
  }, [id]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setEnquiry((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    let demo = JSON.stringify(enquiry);
    console.log(JSON.parse(demo));
    fetch("http://localhost:8080/api/enquiry/"+ id, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: demo,
    }).then((r) => {
      console.log(r);
    });
    event.preventDefault();
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


    <div className="cardD" >
    <form onSubmit={handleSubmit}  style={{ maxWidth: '100%', overflowX: 'auto' }}>
      <label>Enquiry Id:</label>
      <input
          type="number"
          name="enquiry_Id"
          value={enquiry.enquiry_Id ?? ""}
          disabled={true}
          onChange={handleChange}
      />
      <br />
      <label>enquireerName:</label>
      <input
          type="text"
          name="enquireerName"
          value={enquiry.enquireerName ?? ""}
          onChange={handleChange}
      />
      <br/>     
      <label>qualification:</label>
      <input
          type="text"
          name="qualification"
          value={enquiry.qualification ?? ""}
          onChange={handleChange}
      />
      <br />
      <label>contact_No:</label>
      <input
          type="text"
          name="contact_No"
          value={enquiry.contact_No ?? ""}
          onChange={handleChange}
      />
      <br/>   
      <label>email:</label>
      <input
          type="text"
          name="email"
          value={enquiry.email ?? ""}
          onChange={handleChange}
      />
      <br />
      <label>Enquiry Date:</label>
      <input
          type="date"
          name="enquiry_Date"
          value={enquiry.enquiry_Date ?? ""}
          onChange={handleChange}
      />
      <br/>   
      <label>enquiry_Source:</label>
      <input
          type="text"
          name="enquiry_Source"
          value={enquiry.enquiry_Source ?? ""}
          onChange={handleChange}
      />
      <br />
      <label>student_Name:</label>
      <input
          type="text"
          name="student_Name"
          value={enquiry.student_Name ?? ""}
          onChange={handleChange}
      />
      <br/>   
      <label>location_Id:</label>
      <input
          type="number"
          name="location_Id"
          value={enquiry.location_Id ?? ""}
          onChange={handleChange}
      />
      <br />
      <label>closure:</label>
      <input
          type="text"
          name="closure"
          value={enquiry.closure ?? ""}
          onChange={handleChange}
      />
      <br/>   
      <label>next_Followup_Date:</label>
      <input
          type="date"
          name="next_Followup_Date"
          value={enquiry.next_Followup_Date ?? ""}
          onChange={handleChange}
      />
      <br />
      <label>Course:</label>
      <select name="course_Id" onChange={handleChange}>
        <option>Select Course</option>
        {course.map(emp => (
          <option key={emp.course_id} value={emp.course_id}>{emp.course_name}</option>
        ))}
      </select>
      <br/>   
      <label>date_Of_Birth:</label>
      <input
          type="date"
          name="date_Of_Birth"
          value={enquiry.date_Of_Birth ?? ""}
          onChange={handleChange}
      />
      <br />
      <label>Staff ID:</label>
      <select name="staff_Id" onChange={handleChange}>
        <option>Select Staff</option>
        {staff.map(emp => (
          <option key={emp.staff_id} value={emp.staff_id}>{emp.username}</option>
        ))}
      </select>
      <br/>   
      <label>other_Closure_Reason:</label>
      <input
          type="text"
          name="other_Closure_Reason"
          value={enquiry.other_Closure_Reason ?? ""}
          onChange={handleChange}
      />
      <br />
      <label>enquireer_Query:</label>
      <input
          type="text"
          name="enquireer_Query"
          value={enquiry.enquireer_Query ?? ""}
          onChange={handleChange}
      />
      <br/>    
      <input type="submit" />
    </form>
    </div>
    </div>
  );
}
export default UpdateEnquiry;
