
import React from 'react';
import { useNavigate} from "react-router-dom"
import { useState, useEffect } from "react";
import CardCourse from '../Components/CardCourse';

function Course() {
    const [course, setCourse] = useState([]);
    const navigate = useNavigate();
    const chks = sessionStorage.getItem('key');
  
    useEffect(() => {
      if (chks === '') {
        navigate('/');
      }
    }, [chks, navigate]);
  
    useEffect(() => {
      fetch('http://localhost:8080/api/courses')
        .then(res => res.json())
        .then(result => setCourse(result));
    }, []);
  
    return (
      <div>
        <br></br>
        <br></br>
        
        <h1>Course Data...</h1>
        <div className="company-container">
          {course.map(c => (
            <CardCourse key={c.course_id} course={c} />
          ))}
        </div>
      </div>
    );
  }
export default Course;