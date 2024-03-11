import { useState} from "react";
import { useNavigate} from "react-router-dom"


function Createcourse(){
    const [course, setCourse] = useState({});
     let navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setCourse(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        let demo = JSON.stringify(course);
        console.log(JSON.parse(demo));
        fetch("http://localhost:8080/api/courses", {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: demo
        }).then(r => {  })
        event.preventDefault();
        navigate('/Listcourse');

        alert(course);
    }
    return(
        <form onSubmit={handleSubmit} className="form-container">
        <h1>Enter Course Detail</h1>
        <label className="form-label">Coursename:</label>
        <input
            type="text"
            name="course_name"
            className="form-input"
            onChange={handleChange}
            required
        />
        <br />
        <label className="form-label">Duration ID:</label>
        <input
            type="number"
            name="duration_id"
            className="form-input"
            onChange={handleChange}
        />
        <br />
        <label className="form-label">Capacity:</label>
        <input
            type="number"
            name="capacity"
            className="form-input"
            onChange={handleChange}
        />
        <br />
        <label className="form-label">Qualification_id:</label>
        <input
            type="number"
            name="qualification_id"
            className="form-input"
            onChange={handleChange}
        />
        <br />
        <label className="form-label">Age_group:</label>
        <input
            type="number"
            name="age_group"
            className="form-input"
            onChange={handleChange}
        />
        <br />
        <label className="form-label">Description:</label>
        <input
            type="text"
            name="description"
            className="form-input"
            onChange={handleChange}
        />
        <br />
        <label className="form-label">Syllabus:</label>
        <input
            type="text"
            name="syallbus"
            className="form-input"
            onChange={handleChange}
        />
        <br />
        <label className="form-label">Video URL:</label>
        <input
            type="text"
            name="video"
            className="form-input"
            onChange={handleChange}
        />
        <br />
        <label className="form-label">Photo URL:</label>
        <input
            type="text"
            name="photo"
            className="form-input"
            onChange={handleChange}
        />
        <br />
        <label className="form-label">isactive:</label>
        <input
            type="text"
            name="isactive"
            className="form-input"
            onChange={handleChange}
            required
        />
       
        <br />
        <input type="submit" value="Submit" />
    </form>
    )
}

export default Createcourse;