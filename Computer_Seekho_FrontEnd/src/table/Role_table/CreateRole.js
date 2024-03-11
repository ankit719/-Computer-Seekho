import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FacultyDashBoard from "../../Pages/FacultyDashBoard";
import DashboardPage from "../../Pages/DashboardPage ";
export default function CreateRole(){
    const [createrole,setCreateRole]=useState({});
    let navigate=useNavigate();
    const handleChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setCreateRole(values=>({...values,[name]:value}))
    }
    const handleSubmit=(event)=>{
        let demo=JSON.stringify(createrole);

        console.log(JSON.parse(demo));
        fetch("http://localhost:8080/api/role",
        {
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:demo
        })
        event.preventDefault();
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
    return(
        <div>

        {(() => {
           const role = sessionStorage.getItem('Role');
           if (role === 'staff') {
              return <FacultyDashBoard />;
           } else if (role === 'admin') {
              return <DashboardPage />;
           }
        })()}


        <div className="cardD" >
        <form onSubmit={handleSubmit} style={{ overflowX: 'auto'}}>
            <label>role_id:</label>
            <input
               type="text"
               name="role_id"
               disabled = "true"
               onChange={handleChange}
            />
           
            <br/><label>role:</label>
            <input
               type="text"
               name="role"
               onChange={handleChange}
            />
            <input type="submit"/>
        </form>
        </div>
        </div>
    )
}