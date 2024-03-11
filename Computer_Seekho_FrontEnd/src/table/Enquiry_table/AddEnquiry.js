import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FacultyDashBoard from "../../Pages/FacultyDashBoard";
import DashboardPage from "../../Pages/DashboardPage ";



export default function AddEnquiry() {
   const [enquiry, setEnquiry] = useState({});
   const [course, setCourse] = useState([]);
   const [enquiry_Source, setEnquirySource] = useState([]);
   const [qualification, setQualification] = useState([]);
   const [enqu, setEnqu] = useState([]);
   let navigate = useNavigate();

   useEffect(() => {

      const fetchData = async () => {
         try {

            const courseResponse = await fetch("http://localhost:8080/api/courses");
            const courseResult = await courseResponse.json();
            setCourse(courseResult);

            const qualificationResponse = await fetch("http://localhost:8080/api/Qualification");
            const qualificationResult = await qualificationResponse.json();
            setQualification(qualificationResult);

            const enquirySourceResponse = await fetch("http://localhost:8080/api/enquirysrc");
            const enquirySourceResult = await enquirySourceResponse.json();
            setEnquirySource(enquirySourceResult);

            const latestEnquiryResponse = await fetch("http://localhost:8080/api/findLatestEnquiry");
            const latestEnquiryResult = await latestEnquiryResponse.json();
            setEnqu(latestEnquiryResult);

         } catch (error) {
            console.error("Error fetching data:", error);
         }
      };

      fetchData();

   }, []);


   const handleChange = (event) => {
      const { name, value } = event.target;
      let newName = name === "course_id" ? "course_Id" : name;
      const newValue = name === "course_id" ? parseInt(value, 10) : value;
      setEnquiry((prevEnquiry) => ({
         ...prevEnquiry,
         [newName]: newValue
      }));
   };


   const calculateFollowUpDate = () => {
      const currentDate = new Date();
      const followUpDate = new Date(currentDate);
      followUpDate.setDate(currentDate.getDate() + 3);
      return followUpDate.toISOString().split("T")[0];
   };


   const handleSubmit = async (event) => {
      event.preventDefault();


      try {
         const demo = {
            ...enquiry,
            enquiry_Date: new Date().toISOString(),
            other_Closure_Reason: "-",
            staff_Id: sessionStorage.getItem("userID"),
            closure: "Admission Successful"
         };

         const response = await fetch("http://localhost:8080/api/enquiry", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(demo)
         });

         if (response.ok) {
            console.log("Enquiry inserted successfully.");
            navigate("/CreateStudent");
          
          
            // try {
            //    const role = sessionStorage.getItem('Role');
            //    if (role == 'Staff') {
            //       navigate("/FacultyDashBoard?page=table/Student_table/CreateStudent");
            //    }

            //    if (role == 'Admin') {
            //       navigate("/AdminDashBoard?page=table/Student_table/CreateStudent")
            //    }
            // } catch (error) {
            //    console.error("Error processing close:", error);
            // }



         } else {
            console.error("Error inserting enquiry:", response.statusText);
         }

      } catch (error) {
         console.error("Error processing enquiry submission:", error);
      }
   };




   
   const handleFollowUp = async () => {
      try {
         const followUpDate = calculateFollowUpDate();

         const demo = {
            ...enquiry,
            next_Followup_Date: followUpDate,
            enquiry_Date: new Date().toISOString(),
            staff_Id: sessionStorage.getItem("userID"),
            other_Closure_Reason: "-",
            closure: "Pending..."

         };

         console.log(demo);

         const response = await fetch("http://localhost:8080/api/enquiry", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(demo)
         });

         if (response.ok) {
            console.log("Enquiry inserted successfully.");
            const followUpData = {
               "enquiry_id": enqu.length > 0 ? enqu[0].enquiry_Id + 1 : null,
               "followup_Date": new Date().toISOString(),
               "attempts": 0,
               "staff_id": sessionStorage.getItem("userID"),
               "followup_Message": "Follow Up generated",
               "next_Followup_date": calculateFollowUpDate()
            };

            console.log(followUpData);

            const createFollowUpResponse = await fetch("http://localhost:8080/api/Followup", {
               method: "POST",
               headers: { "Content-Type": "application/json" },
               body: JSON.stringify(followUpData)
            });

            if (createFollowUpResponse.ok) {
               console.log("Follow-up created successfully.");
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
               console.error("Error creating follow-up:", createFollowUpResponse.statusText);
            }

         } else {
            console.error("Error inserting enquiry:", response.statusText);
         }
      } catch (error) {
         console.error("Error processing follow-up:", error);
      }
   };


   const handleClose = async (event) => {
      try {
         const role = sessionStorage.getItem('Role');
         if (role === 'staff') {
            navigate("/StaffDashBoard");
         }
         if (role === 'admin') {
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


         <div className="cardD" style={{ maxWidth: '100%', overflowX: 'auto' }}>
            <form onSubmit={handleSubmit} style={{ overflow: 'auto' }} >

               <br /><label>enquirer_name:</label>
               <input
                  type="text"
                  name="enquireerName"
                  onChange={handleChange}
               />

               <br /><label>student_name:</label>
               <input
                  type="text"
                  name="student_Name"
                  onChange={handleChange}
               />

               <br /><label>email:</label>
               <input
                  type="email"
                  name="email"
                  onChange={handleChange}
               />

               <br /><label>contact_no:</label>
               <input
                  type="text"
                  name="contact_No"
                  onChange={handleChange}
               />

               <br /><label>enquirer_query:</label>
               <input
                  type="text"
                  name="enquireer_Query"
                  onChange={handleChange}
               />

               <br /><label>date_Of_Birth:</label>
               <input
                  type="Date"
                  name="date_Of_Birth"
                  onChange={handleChange}
               />

               <br /><label htmlFor="qualification">qualification:</label>
               <select name="qualification" onChange={handleChange}>
                  <option>Select Option</option>
                  {qualification.map(emp => (
                     <option key={emp.qualification_id} value={emp.qualification}>{emp.qualification}</option>
                  ))}
               </select>

               <br /><label htmlFor="course">Course ID:</label>
               <select name="course" onChange={handleChange}>
                  <option>Select Option</option>
                  {course.map(emp => (
                     <option key={emp.course_id} value={emp.course_name}>{emp.course_name}</option>
                  ))}
               </select>


               <br /><label htmlFor="enquiry_Source">enquiry source:</label>
               <select name="enquiry_Source" onChange={handleChange}>
                  <option>Select Option</option>
                  {enquiry_Source.map(emp => (
                     <option key={emp.enquiry_Source_Id} value={emp.enquiry_Source}>{emp.enquiry_Source}</option>
                  ))}
               </select>

               <br /><label>location:</label>
               <input
                  type="text"
                  name="location"
                  onChange={handleChange}
               />

               <div style={{  alignItems: 'center' }}>
                  <button type="submit" >Add Student</button>
                  <button type="button" onClick={handleFollowUp}>Follow Up</button>
                  <button type="close" onClick={handleClose}>Close</button>
               </div>
            </form>
         </div>
      </div>
   )
}
