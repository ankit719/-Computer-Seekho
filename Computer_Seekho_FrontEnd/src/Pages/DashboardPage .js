import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './DashboardPage.css'; // Import the CSS file
import Sidebar from '../AdminDashboard/Sidebar';
import  DashboardNavbar  from '../AdminDashboard/DashboardNavbar';

const DashboardPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const name = queryParams.get('name');


    return (
        <div>
       <DashboardNavbar name={name} />
<Sidebar/>
</div>
       
    );
};

export default DashboardPage;
