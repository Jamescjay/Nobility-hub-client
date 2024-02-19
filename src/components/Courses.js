import React, { useState } from "react";
import { Link } from "react-router-dom";
import CourseDetails from "./CourseDetails";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css"; 
import { Navbar, Nav, Container } from "react-bootstrap";

const Courses = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Software Engineering FT 06 Phase 0",
      phase: 0,
      description: "Introduction to Software Engineering",
      course_url:
        "https://docs.google.com/document/d/1pwh_MLe5LBgDtsg2c2EI7nAd8kzLg4zN_aQ6Fojh_v8/edit",
      materials: [
        { title: "Phase 0 Overview", content: "Your content here" },
        
      ],
    },
    {
      id: 2,
      title: "Software Engineering FT 06 Phase 1",
      phase: 1,
      description: "Building a Strong Foundation",
      course_url: "https://your-cohort-url.com",
      materials: [
        { title: "Phase 1 Overview", content: "Your content here" },
        
      ],
    },
    {
      id: 3,
      title: "Software Engineering FT 06 Phase 2",
      phase: 2,
      description: "Exploring Advanced Topics",
      course_url: "https://your-cohort-url.com",
      materials: [
        { title: "Phase 2 Overview", content: "Your content here" },
        
      ],
    },
    {
      id: 4,
      title: "Software Engineering FT 06 Phase 3",
      phase: 3,
      description: "Practical Application of Skills",
      course_url: "https://your-cohort-url.com",
      materials: [
        { title: "Phase 3 Overview", content: "Your content here" },
        
      ],
    },
    {
      id: 5,
      title: "Software Engineering FT 06 Phase 4",
      phase: 4,
      description: "Codility",
      course_url: "https://your-cohort-url.com",
      materials: [
        { title: "Phase 4 Overview", content: "Your content here" },
        
      ],
    },
    {
      id: 6,
      title: "Software Engineering FT 06 Phase 5",
      phase: 5,
      description: "Capstone Project Development",
      course_url: "https://your-cohort-url.com",
      materials: [
        { title: "Phase 5 Overview", content: "Your content here" },
        
      ],
    },
  ]);

  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCourseClick = (course) => {
    if (course.course_url) {
     
      window.open(course.course_url, "_blank");
    } else {
      
      console.error("Course URL not available");
    }
  };

  return (
    <>
   
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">Brand</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

     
      <Container fluid>
        <div className="row">
         
          <div className="col-md-3 sidebar">
            <h5>Sidebar Content</h5>
         
          </div>

          
          <div className="col-md-9 courses-container">
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

            {selectedCourse && <CourseDetails course={selectedCourse} />}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Courses;