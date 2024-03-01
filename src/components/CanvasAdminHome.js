import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const CanvasAdminHome = () => {
  const containerStyle = {
    maxWidth: "800px",
    margin: "5px auto",
    padding: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
  };

  const starIconStyle = {
    color: "#f39c12",
    marginRight: "10px",
  };

  const featuredCoursesStyle = {
    listStyle: "none",
    padding: "0",
  };

  const featuredCoursesItemStyle = {
    marginBottom: "15px",
  };

  const ctaSectionStyle = {
    marginTop: "20px",
  };

  const ctaTabStyle = {
    backgroundColor: "#f8f8f8",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    transition: "background-color 0.3s ease, transform 0.3s ease",
  };

  const hoverStyle = {
    backgroundColor: "#e0e0e0",
    transform: "scale(1.02)",
  };

  const h3Style = {
    fontSize: "1.4em",
    color: "#333",
    marginBottom: "10px",
  };

  const pStyle = {
    fontSize: "1.1em",
    lineHeight: "1.6",
    color: "#555",
    marginBottom: "15px",
  };

  const buttonStyle = {
    backgroundColor: "#3498db",
    color: "#ffffff",
    padding: "12px 20px",
    fontSize: "1em",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
    display: "inline-block",
    textDecoration: "none",
  };

  const buttonHoverStyle = {
    backgroundColor: "#e74c3c",
  };

  return (
    <div style={containerStyle}>
      <h2>Welcome, Admin</h2>
      <p>
        Manage and oversee the software engineering courses with powerful tools.
      </p>

      <h3>Featured Courses</h3>

      <ul style={featuredCoursesStyle}>
        <li style={featuredCoursesItemStyle}>
          <Link to="/CanvasHome/Courses" style={{ color: "#3498db" }}>
            <FontAwesomeIcon icon={faStar} style={starIconStyle} />
            Software Engineering FT 06 Phase 0
          </Link>
        </li>
        <li style={featuredCoursesItemStyle}>
          <Link to="/CanvasHome/Courses" style={{ color: "#3498db" }}>
            <FontAwesomeIcon icon={faStar} style={starIconStyle} />
            Software Engineering FT 06 Phase 1
          </Link>
        </li>
      </ul>

      <div style={ctaSectionStyle}>
        <div style={{ ...ctaTabStyle, ...hoverStyle }}>
          <h3 style={h3Style}>Manage Courses</h3>
          <p style={pStyle}>
            Effectively administer software engineering courses and resources.
          </p>
          <Link
            to="/Canvas/ManageCourses"
            style={{ ...buttonStyle, ...buttonHoverStyle }}
          >
            Manage Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CanvasAdminHome;
