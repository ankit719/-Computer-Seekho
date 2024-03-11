import React from 'react';
import { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom"
function Coursedel(){
    const [course, setCourse] = useState({});
    const { id } = useParams()
    const navigate= useNavigate();
   
    useEffect(() => {
        fetch("http://localhost:8080/api/courses/"+id)
            .then(res => res.json())
            .then((result) => { setCourse(result); }
            );
            
    }, [id]);
    const handeldel = (event) => {
        event.preventDefault();
        fetch("http://localhost:8080/api/courses/" + id, {
            method: 'Delete'
        })
            .then(res => res)
            .then((result) => {
                console.log(result)
            }); 
            navigate('/Listcourse');
    }
    return(
        <div>
    <h1 style={{ color:'red' }}>Are you sure?</h1>
    <label>Course ID:</label>
    {course.course_id}<br />
    <label>Course Name:</label>
    {course.course_name}<br />
    <label>Duration ID:</label>
    {course.duration_id}<br />
    <label>Capacity:</label>
    {course.capacity}<br />
    <label>Qualification ID:</label>
    {course.qualification_id}<br />
    <label>Age Group:</label>
    {course.age_group}<br />
    <label>Description:</label>
    {course.description}<br />
    <label>Syllabus:</label>
    {course.syllabus}<br />
    <label>Video:</label>
    {course.video}<br />
    <label>Photo:</label>
    {course.photo}<br />
    <label>Is Active:</label>
    {course.isactive}<br />
    <form onSubmit={handeldel}>
        <input type="submit" />
    </form>
</div>

    )
}

export default Coursedel;