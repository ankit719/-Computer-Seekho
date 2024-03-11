import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
function Courseup(){
    const [course, setCourse] = useState({});
    const { id } = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        fetch("http://localhost:8080/api/courses/" + id)
            .then(res => res.json())
            .then((result) => {
                setCourse(result);
            }
            ).catch((e)=>console.log(e));
    }, []);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setCourse(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        let demo = JSON.stringify(course);
        console.log(JSON.parse(demo));
        fetch("http://localhost:8080/api/courses/" + id, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: demo
        }).then(r => { console.log(r) })
        event.preventDefault();
        navigate('/Listcourse');

        
    }
    return(
        <form onSubmit={handleSubmit}>
    <label>Course ID:</label>
    <input
        type="number"
        name="course_id"
        value={course.course_id || ""}
        onChange={handleChange}
    />
    <br />
    <label>Course Name:</label>
    <input
        type="text"
        name="course_name"
        value={course.course_name || ""}
        onChange={handleChange}
    />
    <br />
    <label>Duration ID:</label>
    <input
        type="number"
        name="duration_id"
        value={course.duration_id || ""}
        onChange={handleChange}
    />
    <br />
    <label>Capacity:</label>
    <input
        type="number"
        name="capacity"
        value={course.capacity || ""}
        onChange={handleChange}
    />
    <br />
    <label>Qualification ID:</label>
    <input
        type="number"
        name="qualification_id"
        value={course.qualification_id || ""}
        onChange={handleChange}
    />
    <br />
    <label>Age Group:</label>
    <input
        type="number"
        name="age_group"
        value={course.age_group || ""}
        onChange={handleChange}
    />
    <br />
    <label>Description:</label>
    <input
        type="text"
        name="description"
        value={course.description || ""}
        onChange={handleChange}
    />
    <br />
    <label>Syllabus:</label>
    <input
        type="text"
        name="syallbus"
        value={course.syallbus || ""}
        onChange={handleChange}
    />
    <br />
    <label>Video:</label>
    <input
        type="text"
        name="video"
        value={course.video || ""}
        onChange={handleChange}
    />
    <br />
    <label>Photo:</label>
    <input
        type="text"
        name="photo"
        value={course.photo || ""}
        onChange={handleChange}
    />
    <br />
    <label>Is Active:</label>
    <input
        type="number"
        name="isactive"
        value={course.isactive || ""}
        onChange={handleChange}
    />
    <br />
    <input type="submit" />
</form>

    )
}

export default Courseup;