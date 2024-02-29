import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5555/courses");
        if (response.ok) {
          const data = await response.json();
          setCourses(data);
        } else {
          console.error("Failed to fetch courses");
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []); 

  const handleCourseClick = (course) => {
    if (course.course_url) {
      window.open(course.course_url, "_blank");
    } else {
      console.error("Course URL not available");
    }
  };

  return (
    <div className="courses-container">
      <div className="course-list">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            <h3>{course.title}</h3>
            <p className="phase-info">Phase: {course.phase}</p>
            <p className="description">{course.description}</p>
            <div className="action-buttons">
              <button onClick={() => handleCourseClick(course)}>
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
