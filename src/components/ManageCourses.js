import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col, Modal, Button, Form } from "react-bootstrap";

const AdminCourses = () => {
  const [courses, setCourses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [newCourse, setNewCourse] = useState({
    title: "",
    phase: 0,
    description: "",
    course_url: "",
  });

  
  const fetchCourses = async () => {
  try {
    const response = await fetch("http://127.0.0.1:5555/courses");
    if (!response.ok) {
      throw new Error("Failed to fetch courses");
    }

    const data = await response.json();
    setCourses(data);
  } catch (error) {
    console.error("Error fetching courses:", error.message);
  }

    
    setTimeout(() => {
      const mockData = [
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
          course_url:
            "https://docs.google.com/document/d/11BTyO0k7fmmh53g-3A-ex8LbpCe4XadkQTxf7qauWEc/edit?usp=sharing",
          materials: [
            { title: "Phase 1 Overview", content: "Your content here" },
          ],
        },
      ];

      setCourses(mockData);
    }, 1); 
  };

  
  useEffect(() => {
    fetchCourses();
  }, []);

  const handleCourseClick = (course) => {
    if (course.course_url) {
      window.open(course.course_url, "_blank");
    } else {
      console.error("Course URL not available");
    }
  };

  const handleEditCourse = (course) => {
    setEditingCourse(course);
    setShowModal(true);
  };

  const handleDeleteCourse = (course) => {
    setSelectedCourse(course);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    setCourses(courses.filter((course) => course.id !== selectedCourse.id));
    setShowDeleteModal(false);
    setSelectedCourse(null);
  };

  const handleAddCourse = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowDeleteModal(false);
    setSelectedCourse(null);
  };

  const handleSaveCourse = () => {
    setCourses([...courses, { id: courses.length + 1, ...newCourse }]);
    setShowModal(false);
    setNewCourse({ title: "", phase: 0, description: "", course_url: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse((prevCourse) => ({ ...prevCourse, [name]: value }));
  };

  return (
    <div className="courses-container">
      <div className="course-list">
        {courses.map((course) => (
          <div
            className="course-card"
            key={course.id}
            style={{ width: "450px" }}
          >
            <h3>{course.title}</h3>
            <p className="phase-info">Phase: {course.phase}</p>
            <p className="description">{course.description}</p>
            <div className="action-buttons">
              <button onClick={() => handleCourseClick(course)}>
                <FontAwesomeIcon icon={faBook} /> View Details
              </button>
              <button onClick={() => handleEditCourse(course)}>
                <FontAwesomeIcon icon={faEdit} /> Edit
              </button>
              <button onClick={() => handleDeleteCourse(course)}>
                <FontAwesomeIcon icon={faTrash} /> Delete
              </button>
            </div>
          </div>
        ))}
        <div className="add-course-button">
          <button
            onClick={handleAddCourse}
            style={{ backgroundColor: "#3498db", color: "#ffffff" }}
          >
            Add Course
          </button>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                name="title"
                value={newCourse.title}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formPhase">
              <Form.Label>Phase</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter phase"
                name="phase"
                value={newCourse.phase}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter description"
                name="description"
                value={newCourse.description}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formCourseUrl">
              <Form.Label>Course URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter course URL"
                name="course_url"
                value={newCourse.course_url}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveCourse}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showDeleteModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this course?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminCourses;
