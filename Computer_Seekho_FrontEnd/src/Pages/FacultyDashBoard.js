import React from 'react';
import {useLocation } from 'react-router-dom';
import DashboardNavbar from '../AdminDashboard/DashboardNavbar';
import './FacultyDashBoard.css';
import FacultySidebar from '../StaffDashboard/FacultySidebar';


 const FacultyDashBoard=()=>{
    
    return (
        <div>
        <DashboardNavbar />

 <FacultySidebar />
 
 </div>
    );
};
export default FacultyDashBoard;