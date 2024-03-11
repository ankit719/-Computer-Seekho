import React from 'react';
import { Link ,useNavigate} from "react-router-dom"
import { useState, useEffect } from "react";
function Listcompany(){
    const [company, setCompany] = useState([]);
    const navigate = useNavigate();
    const chks = sessionStorage.getItem('key');
  
    useEffect(() => {
      if (chks === '') {
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
      }
    }, [chks, navigate]);
  
    useEffect(() => {
      fetch('http://localhost:8080/api/companys')
        .then(res => res.json())
        .then(result => setCompany(result));
    }, []);
    return(
        <div >
        <Link to="/AfterLogOut" >LogOut</Link>
           <h4><Link to="/CreateCompany" >Create</Link></h4>
            <h2>Company Data...</h2>
            
            <table> <thead>
                <tr>
                    <th>Company_Id</th>
                    <th>Company_Name</th>
                    <th>Logo</th>
                    <th>Location_Id</th>
                    <th>Total_Placement</th>
                    <th>Action Del</th>
                    <th>Action up</th>
                </tr>
            </thead>
                <tbody>
                    {company.map(c =>(
                        <tr key={c.company_id}>
                            <td>{c.company_id}</td>
                            <td>{c.company_name}</td>
                            <td>{c.logo}</td>
                            <td>{c.location_id}</td>
                            <td>{c.total_placement}</td>
                            <td> <a href={'/cmpdel/' + c.company_id}>Delete</a></td>
                            <td> <a href={'/cmpup/' + c.company_id}>Update</a></td>
                        </tr>
                     ))
                    }
                </tbody> </table>
        </div>
    )
}
export default Listcompany;