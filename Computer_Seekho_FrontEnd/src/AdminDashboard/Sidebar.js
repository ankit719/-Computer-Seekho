
import './Sidebar.css';
import CardAdminDashboard from '../AdminDashboard/CardAdminDashboard'
import { useState } from 'react';
export default function Sidebar() {

  const [selectedOption, setSelectedOption] = useState("staff_table/Listfaculty"); // Set the default value here


  sessionStorage.setItem("pageContext",selectedOption)
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    const path=JSON.stringify(option);
    sessionStorage.setItem("pageContext",path)
  };
 

  return (

    <div className="sidebar">
    <ul>

      <div onClick={() => handleOptionClick("Campus_lifetable/Campuslifelist")}>
        Campus Life
      </div>
      <br/>
      <div onClick={() => handleOptionClick("Company_table/Listcompany")}>
        Company
      </div>
      <br/>
      <div onClick={() => handleOptionClick("Course_table/Listcourse")}>
        Course
      </div>
      <br/>
      <div onClick={() => handleOptionClick("Enquiry_table/EnquiryList")}>
        Enquiry
      </div>
      <br/>
      <div onClick={() => handleOptionClick("Followup_table/List_Followup")}>
        Follow UP
      </div>
      <br/>
      
     
      <div onClick={() => handleOptionClick("staff_table/Listfaculty")}>
        Payment
      </div>
      <br/>
      <div onClick={() => handleOptionClick("Placement_table/ListPlacement")}>
        Placement
      </div>
      <br/>
     
      <div onClick={() => handleOptionClick("staff_table/Listfaculty")}>
        Staff
      </div>
      <br/>
      <div onClick={() => handleOptionClick("Student_table/Liststudent")}>
        Student
      </div>
      <br/>
      <div onClick={() => handleOptionClick("Closure_table/ClosureList")}>
        Closure
      </div>
      <br/>
      
      <div onClick={() => handleOptionClick("Designation_table/ListDesignation")}>
        Designation
      </div>
      <br/>
      <div onClick={() => handleOptionClick("Course_table/Listcourse")}>
        Duration
      </div>
      <br/>
      <div onClick={() => handleOptionClick("Enquiry_Source_table/EnquirySourceList")}>
        Enquiry Source
      </div>
      <br/>
      <div onClick={() => handleOptionClick("Payment_infotable/Payment_infolist")}>
        Payment Information
      </div>
      <br/>
      <div onClick={() => handleOptionClick("Qualification_table/QualificationList")}>
        Qualification
      </div>
      <br/>
      <div onClick={() => handleOptionClick("Role_table/ListRole")}>
        Role
      </div>
      
    </ul>


  
      <CardAdminDashboard />
   
  </div>
  );
};

