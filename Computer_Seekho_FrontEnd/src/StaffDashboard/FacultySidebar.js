
import './FacultySidebar.css';
import { useState,useEffect } from 'react';
import CardFacultyDashboard from './CardFacultyDashboard'

const FacultySidebar=()=> 
{
  const [selectedOption, setSelectedOption] = useState("StaffDashboard/Staff_Panel/List_FollowUp_Home"); // Set the default value here
  

  sessionStorage.setItem("pageContext",selectedOption)
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    const path=JSON.stringify(option);
    console.log(path);
    sessionStorage.setItem("pageContext",path)
  }; 

  return (

    <div className="sidebarF">
  
    <ul>
    <div onClick={() => handleOptionClick("StaffDashboard/Staff_Panel/List_FollowUp_Home")}>
      Dashboard Home
      </div>
      <br/>
      <div onClick={() => handleOptionClick("StaffDashboard/Staff_Panel/List_Enquiry_Staff")}>
      Enquiry
      </div>
      <br/>
      <div onClick={() => handleOptionClick("StaffDashboard/Staff_Panel/List_FollowUpStaff")}>
      Followup
      </div>
      <br/>
      <div onClick={() => handleOptionClick("StaffDashboard/Staff_Panel/List_Course_Staff")}>
      Course
      </div>
      <br/>
      <div onClick={() => handleOptionClick("StaffDashboard/Staff_Panel/List_Batch_staff")}>
      Batch
      </div>
      <br/>
      <div onClick={() => handleOptionClick("StaffDashboard/Staff_Panel/List_BatchInfo_Staff")}>
      Batch Information
      </div>
      <br/>
      <div onClick={() => handleOptionClick("StaffDashboard/Staff_Panel/List_Student_Staff")}>
      Student
      </div>
      <br/>
      <div onClick={() => handleOptionClick("StaffDashboard/Staff_Panel/List_Payment_Staff")}>
      Payment
      </div>
      <br/>
      <div onClick={() => handleOptionClick("StaffDashboard/Staff_Panel/List_Company_Staff")}>
      Company
      </div>
      <br/>
      <div onClick={() => handleOptionClick("StaffDashboard/Staff_Panel/List_Placement_Data")}>
      Placement
      </div>
    </ul>
      <CardFacultyDashboard />
   
  </div>
  );
};

export default FacultySidebar;