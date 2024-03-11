import { useState} from "react";
import { useNavigate} from "react-router-dom"
import FacultyDashBoard from "../../Pages/FacultyDashBoard";
import DashboardPage from "../../Pages/DashboardPage ";
function CreateCompany(){
    const [company, setCompany] = useState({});
     let navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setCompany(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        let demo = JSON.stringify(company);
        console.log(JSON.parse(demo));
        fetch("http://localhost:8080/api/companys", {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: demo
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

        alert(company);
    }
    return(
        <div >

        {(() => {
            const role = sessionStorage.getItem('Role');
            if (role === 'staff') {
                return <FacultyDashBoard />;
            } else if (role === 'admin') {
                return <DashboardPage />;
            }
        })()}




        <div className="cardD" >
        <form onSubmit={handleSubmit} className="form-container" style={{overflowX:'auto'}}>
            <h1>Enter company Detail</h1>
        <label className="form-label">company_name:</label>
        <input
            type="text"
            name="company_name"
            className="form-input"
            onChange={handleChange}
        />
        <br /><label className="form-label">Logo:</label>
        <input
            type="text"
            name="logo"
            className="form-input"
            onChange={handleChange}
        />
        <br />            <label className="form-label">Location_Id:</label>
        <input
            type="number"
            name="location_id"
            className="form-input"
            onChange={handleChange}
        />
        <br />  
        <br />            <label className="form-label">Total_Placement:</label>
        <input
            type="number"
            name="total_placement"
            className="form-input"
            onChange={handleChange}
        />
        <br />   
        <input type="submit" />
    </form>
    </div>
    </div>
    )
}
export default CreateCompany;