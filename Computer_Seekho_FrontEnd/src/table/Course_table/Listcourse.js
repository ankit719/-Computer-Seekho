import React from 'react';
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
function Listcourse(){
    const [courses, setcourse] = useState([]);


    useEffect(() => {
        
        fetch("http://localhost:8080/api/courses")
            .then(res => res.json())
            .then((result) => { setcourse(result); }
            );
    }, []);
    return(
        <div >
         <Link to="/AfterLogOut" >LogOut</Link>
        <h4><Link to="/Createcourse" >Create</Link></h4>
        <h2>course Data...</h2>
        <table>
    <thead>
        <tr>
            <th>Course ID</th>
            <th>Course Name</th>
            <th>Duration ID</th>
            <th>Capacity</th>
            <th>Qualification ID</th>
            <th>Age Group</th>
            <th>Description</th>
            <th>Syllabus</th>
            <th>Video</th>
            <th>Photo</th>
            <th>Is Active</th>
            <th>Action Up</th>
            <th>Action Del</th>
        </tr>
    </thead>
    <tbody>
        {courses.map(course => (
            <tr key={course.course_id}>
                <td>{course.course_id}</td>
                <td>{course.course_name}</td>
                <td>{course.duration_id}</td>
                <td>{course.capacity}</td>
                <td>{course.qualification_id}</td>
                <td>{course.age_group}</td>
                <td>{course.description}</td>
                <td>{course.syllabus}</td>
                <td>{course.video}</td>
                <td>{course.photo}</td>
                <td>{course.isactive}</td>
                <td><a href={`/couup/${course.course_id}`}>Edit</a></td>
                <td><a href={`/coudel/${course.course_id}`}>Delete</a></td>
            </tr>
        ))}
    </tbody>
</table>

    </div>
    )
}

export default Listcourse;