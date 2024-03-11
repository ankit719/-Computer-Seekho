import { useState} from "react";
import { useNavigate} from "react-router-dom"
import './FormStyles.css'


function Createfaculty(){
    const [faculty, setFaculty] = useState({});
     let navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFaculty(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        let demo = JSON.stringify(faculty);
        console.log(JSON.parse(demo));
        fetch("http://localhost:8080/api/staff", {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: demo
        }).then(r => {  })
        event.preventDefault();
        navigate('/Listfaculty');

        alert(faculty);
    }
    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h1>Enter Faculty Detail</h1>
            <label className="form-label">Username:</label>
            <input
                type="text"
                name="username"
                className="form-input"
                onChange={handleChange}
                required
            />
            <br />
            <label className="form-label">Role ID:</label>
            <input
                type="number"
                name="role_id"
                className="form-input"
                onChange={handleChange}
            />
            <br />
            <label className="form-label">Password:</label>
            <input
                type="password"
                name="password"
                className="form-input"
                onChange={handleChange}
                required
            />
            <br />
            <label className="form-label">Name:</label>
            <input
                type="text"
                name="name"
                className="form-input"
                onChange={handleChange}
                required
            />
            <br />
            <label className="form-label">Designation ID:</label>
            <input
                type="number"
                name="designation_id"
                className="form-input"
                onChange={handleChange}
            />
            <br />
            <label className="form-label">Qualification ID:</label>
            <input
                type="number"
                name="qualification_id"
                className="form-input"
                onChange={handleChange}
            />
            <br />
            <label className="form-label">Experience:</label>
            <input
                type="text"
                name="experience"
                className="form-input"
                onChange={handleChange}
            />
            <br />
            <label className="form-label">Contact No:</label>
            <input
                type="text"
                name="contact_no"
                className="form-input"
                onChange={handleChange}
            />
            <br />
            <label className="form-label">Email:</label>
            <input
                type="email"
                name="email"
                className="form-input"
                onChange={handleChange}
            />
            <br />
            <label className="form-label">Photo:</label>
            <input
                type="text"
                name="photo"
                className="form-input"
                onChange={handleChange}
            />
            <br />
            <label className="form-label">Location ID:</label>
            <input
                type="number"
                name="location_id"
                className="form-input"
                onChange={handleChange}
            />
            <br />
            <label className="form-label">Joining Date:</label>
            <input
                type="date"
                name="joining_Date"
                className="form-input"
                onChange={handleChange}
            />
            <br />
            <label className="form-label">Recover Date:</label>
            <input
                type="date"
                name="recover_date"
                className="form-input"
                onChange={handleChange}
            />
            <br />
            <label className="form-label">Recovery Password:</label>
            <input
                type="password"
                name="recovery_password"
                className="form-input"
                onChange={handleChange}
            />
            <br />
            <input type="submit" value="Submit" />
        </form>
    );
}

export default Createfaculty;