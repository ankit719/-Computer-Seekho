import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FacultyDashBoard from "../../Pages/FacultyDashBoard";
import DashboardPage from "../../Pages/DashboardPage ";
export default function Batchcreate() {
  const [batch, setBatch] = useState({
    batchId: "",
    batchName: "",
    batchLogo: "",
    batchYear: "",
    startDate: "",
    endDate: "",
    courseId: "",
    finalPresentationDate: "",
    coverPhoto: "",
  });
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/api/batches")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        
        if (result.length > 0) {
          setBatch(result[0]);
        }
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/api/courses")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setCourses(result);
      });
  }, []);

  const handleInput = (event) => {
    setBatch((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/batches", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(batch),
      });

      if (response.ok) {
        console.log("Batch inserted successfully.");
        
      } else {
        console.error("Failed to insert batch.");
      }
    } catch (error) {
      console.error("Error during batch insertion:", error);
    }

    navigate("/");
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


         <div className="cardD" style={{ maxWidth: '100%', overflowX: 'auto' }}>
      <form onSubmit={handleSubmit} style={{ overflowX: 'auto'}}>
        <br />
        <label>batchId:</label>
        <input type="number" name="batchId" onChange={handleInput} />
        <br />
        <label>batchName:</label>
        <input type="text" name="batchName" onChange={handleInput} />
        <br />
        <label>batchLogo:</label>
        <input type="text" name="batchLogo" onChange={handleInput} />
        <br />
        <label>batchYear:</label>
        <input type="date" name="batchYear" onChange={handleInput} />
        <br />
        <label>startDate:</label>
        <input type="date" name="startDate" onChange={handleInput} />
        <br />
        <label>endDate:</label>
        <input type="date" name="endDate" onChange={handleInput} />
        <label htmlFor="courseId">Course:</label>
        <select name="courseId" onChange={handleInput}>
          <option value="">Select Option</option>
          {courses.map(course => (
  <option key={course.course_id} value={course.course_id}>{course.course_name}</option>
))}
        </select>
        <br />
        <label>finalPresentationDate:</label>
        <input type="date" name="finalPresentationDate" onChange={handleInput} />
        <br />
        <label>coverPhoto:</label>
        <input type="text" name="coverPhoto" onChange={handleInput} />
        <br />
        <button type="submit">SUBMIT</button>
        <br />
      </form>
    </div>
    </div>
  );
}
