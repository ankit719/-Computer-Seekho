import React, { useState, useEffect } from 'react';
import './Card'; // Import the CSS file

function CardCourse({ course }) {
 
  return (
    <div className="card-container">
      <div className="card">
      <h3>{course.course_name}</h3>
      <img src={course.photo} />
     <p>Duration: {course.duration}</p>
     <p>Capacity: {course.capacity}</p>
     <p>Qualification needed: {course.qualification}</p>
     <p>age_group: {course.age_group}</p>
     <p>description: {course.description}</p>
     <p>isactive: {course.isactive}</p>  {/* You can add more details as needed */}
      </div>
    </div>
  );
}

export default CardCourse;
