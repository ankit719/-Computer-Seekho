import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Campuslifecreate() {
  const [Campus, setCampus] = useState([]);
  const [Batch, setBatch] = useState({
    photo: "",
    batchId: "",
    staff_id: "",
    video: "",
  });
  const [Staff, setStaff] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/api/batches")
      .then((res) => res.json())
      .then((result) => {
        console.log("batches--->", result);
        setCampus(result);
      })
      .catch((error) => console.error("Error fetching batches:", error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/api/facultys")
      .then((res) => res.json())
      .then((result) => {
        console.log("faculty---->", result);
        setStaff(result);
      })
      .catch((error) => console.error("Error fetching faculties:", error));
  }, []);

  const handleChange = (event) => {
    setBatch((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/campuslife/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Batch),
      });

      if (response.ok) {
        console.log("Inserted successfully.");
      } else {
        console.error("Failed to insert.");
      }

      // Optionally, you can handle the response data here
      // const responseData = await response.json();
    } catch (error) {
      console.error("Error during submission:", error);
    }

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <br />
      <label>photo:</label>
      <input type="text" name="photo" onChange={handleChange} />

      <label>BatchId:</label>
      <select name="batchId" onChange={handleChange}>
        <option value="">Select Option</option>
        {Campus.map((campus) => (
          <option key={campus.batchId} value={campus.batchId}>
            {campus.batchName}
          </option>
        ))}
      </select>
      <br />

      <label>staffid:</label>
      <select name="staff_id" onChange={handleChange}>
        <option value="">Select Option</option>
        {Staff.map((faculty) => (
          <option key={faculty.staffId} value={faculty.staffId}>
            {faculty.name}
          </option>
        ))}
      </select>

      <br />
      <label>video:</label>
      <input type="text" name="video" onChange={handleChange} />
      <button type="submit">SUBMIT</button>
    </form>
  );
}
