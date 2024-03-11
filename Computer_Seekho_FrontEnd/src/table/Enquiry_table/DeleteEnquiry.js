import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FacultyDashBoard from "../../Pages/FacultyDashBoard";
import DashboardPage from "../../Pages/DashboardPage ";
export function DeleteEnquiry() {
  const [enquiry, setEnquiry] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8080/api/enquiry/`+ id)
      .then((res) => res.json())
      .then((result) => {
        setEnquiry(result);
      });
  }, [id]);

  const handleDelete = (event) => {
    event.preventDefault();

    fetch(`http://localhost:8080/api/enquiry/`+id, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status === 200) {
          console.log("Enquiry deleted successfully.");
          navigate(-1);
        } else {
          console.log("Failed to delete Enquiry.");
        }
      })
      .catch((error) => {
        console.error("Error deleting Enquiry:", error);
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
      <h1 style={{ color: "blue" }}>
        Are you sure you want to delete the record?
      </h1>
            <label>enquiry_id :</label>
            {enquiry.enquiry_Id}
            <br/>
            
            <label>closure :</label>
            {enquiry.closure}
            <br/>

            <label>contact_no :</label>
            {enquiry.contact_No}
            <br/>

            <label>course_id :</label>
            {enquiry.course_Id}
            <br/>

            <label>date_of_birth :</label>
            {enquiry.date_Of_Birth}
            <br/>

            <label>email :</label>
            {enquiry.email}
            <br/>

            <label>enquireer_query :</label>
            {enquiry.enquireer_Query}
            <br/>

            <label>enquirer_name :</label>
            {enquiry.enquireerName}
            <br/>

            <label>enquiry_date :</label>
            {enquiry.enquiry_Date}
            <br/>

            <label>enquiry_source :</label>
            {enquiry.enquiry_Source}
            <br/>

            <label>location_id :</label>
            {enquiry.location_Id}
            <br/>

            <label>next_followup_date :</label>
            {enquiry.next_Followup_Date}
            <br/>

            <label>other_closure_reason :</label>
            {enquiry.other_Closure_Reason}
            <br/>

            <label>qualification :</label>
            {enquiry.qualification}
            <br/>

            <label>staff_id :</label>
            {enquiry.staff_Id}
            <br/>

            <label>student_name :</label>
            {enquiry.student_Name}
            <br/>

      <form onSubmit={handleDelete}>
        <button type="submit" className="btn btn-danger">
          Delete
        </button>
      </form>
    </div>
    </div>
  );
}

export default DeleteEnquiry;
