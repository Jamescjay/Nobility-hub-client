import React from "react";
import { Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIconName } from "@fortawesome/free-solid-svg-icons";
import {
  faHome,
  faBook,
  faUser,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import Home from "./Home1";
import Courses from "./Courses";
import Grades from "./Grades";
import Calendar from "./Calendar";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import styles from "./Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Nob-hub Logo</Navbar.Brand>
      </Navbar>

      <Container fluid>
        <Row>
          <Col md={3} className="sidebar">
            <Nav className="flex-column">
              <Nav.Link href="/dashboard1">
                <FontAwesomeIcon icon={faHome} /> Home
              </Nav.Link>
              <Nav.Link href="/dashboard1/courses">
                <FontAwesomeIcon icon={faBook} /> Courses
              </Nav.Link>
              <Nav.Link href="/dashboard1/grades">
                <FontAwesomeIcon icon={faUser} /> Grades
              </Nav.Link>
              <Nav.Link href="/dashboard1/calendar">
                <FontAwesomeIcon icon={faCalendar} /> Calendar
              </Nav.Link>
            </Nav>
          </Col>
          <Col md={9} className="content">
            <Routes>
              <Route path="/" element={<Home />} />
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

export default Dashboard;
