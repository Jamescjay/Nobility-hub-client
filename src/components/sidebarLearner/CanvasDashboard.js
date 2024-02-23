import React from "react";
import { Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBook,
  faUser,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import CanvasHome from "../CanvasHomePage";
import Courses from "../Courses";
import Grades from "../Grades";
import Calendar from "../Calendar";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import styles from "./CanvasDashboard.css";

const CanvasDashboard = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Nob-hub Logo</Navbar.Brand>
      </Navbar>

      <Container fluid>
        <Row>
          <Col md={3} className="sidebar">
            <Nav className="flex-column">
              <Nav.Link href="/CanvasHome">
                <FontAwesomeIcon icon={faHome} /> Home
              </Nav.Link>
              <Nav.Link href="/CanvasHome/Courses">
                <FontAwesomeIcon icon={faBook} /> Courses
              </Nav.Link>
              <Nav.Link href="/CanvasHome/grades">
                <FontAwesomeIcon icon={faUser} /> Grades
              </Nav.Link>
              <Nav.Link href="/CanvasHome/calendar">
                <FontAwesomeIcon icon={faCalendar} /> Calendar
              </Nav.Link>
            </Nav>
          </Col>
          <Col md={9} className="content">
            <Routes>
              <Route path="*" element={<CanvasHome />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/grades" element={<Grades />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CanvasDashboard;
