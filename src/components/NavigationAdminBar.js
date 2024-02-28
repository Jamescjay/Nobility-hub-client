import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/CanvasAdminHome">Home</Link>
        </li>
        <li>
          <Link to="/ManageCourses">ManageCourses</Link>
        </li>
        <li>
          <Link to="/viewgrades">Grades</Link>
        </li>
        <li>
          <Link to="/calendar">Calendar</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
