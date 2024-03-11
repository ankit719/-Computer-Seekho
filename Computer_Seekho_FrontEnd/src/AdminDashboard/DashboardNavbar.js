import { Link } from 'react-router-dom';
import React from 'react';
import './DashboardNavbar.css'

const DashboardNavbar = () => {

  const name=sessionStorage.getItem('user');

  return (
    <nav className="navbar2">
      <div className="navbar-logo2">Computer Seekho</div>
      <div className="navbar-textfield2">
       {name} your Dashboard
      </div>
      <div>
        
      <div> <Link to="/AfterLogOut" className="navbar-link">LogOut</Link></div> {/* Apply class for navbar link */}
      </div>
     
    </nav>
  );
};

export default DashboardNavbar;