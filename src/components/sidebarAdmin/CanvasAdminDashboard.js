import React from "react";
import { Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBook,
  faUser,
  faCalendar,
  faStar, 
} from "@fortawesome/free-solid-svg-icons";
import CanvasAdminHome from "../CanvasAdminHome";
import ManageCourses from "../ManageCourses";
import Grades from "../ViewGrades";
import Calendar from "../Calendar";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import styles from "./Canvas.css";

const CanvasDashboard = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <FontAwesomeIcon icon={faStar} /> Nob-hub
        </Navbar.Brand>
      </Navbar>

      <Container fluid>
        <Row>
          <Col md={3} className="sidebar">
            <Nav className="flex-column">
              <Nav.Link href="/Canvas" className={styles.sidebarLink}>
                <FontAwesomeIcon icon={faHome} /> Dashboard
              </Nav.Link>
              <Nav.Link
                href="/Canvas/ManageCourses"
                className={styles.sidebarLink}
              >
                <FontAwesomeIcon icon={faBook} /> Manage Courses
              </Nav.Link>
              <Nav.Link
                href="/Canvas/viewgrades"
                className={styles.sidebarLink}
              >
                <FontAwesomeIcon icon={faUser} /> View Grades
              </Nav.Link>
              <Nav.Link
                href="/Canvas/calendar"
                className={styles.sidebarLink}
              >
                <FontAwesomeIcon icon={faCalendar} /> Event Calendar
              </Nav.Link>
            </Nav>
          </Col>
          <Col md={9} className="content">
            <Routes>
              <Route path="*" element={<CanvasAdminHome />} />
              <Route path="/managecourses" element={<ManageCourses />} />
              <Route path="/viewgrades" element={<Grades />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CanvasDashboard;
