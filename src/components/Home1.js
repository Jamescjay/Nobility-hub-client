
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "./home.css";

const Home = () => {
  return (
    <div className={`${styles.content} ${styles.homeContainer}`}>
      <h2>Welcome to Software Engineering Courses</h2>
      <p>
        Explore our comprehensive software engineering courses designed to build
        a strong foundation, explore advanced topics, and apply practical
        skills.
      </p>

      <h3>Featured Courses</h3>

      <ul className="featured-courses">
        <li>
          <Link to="/dashboard1/courses">
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            Software Engineering FT 06 Phase 0
          </Link>
        </li>
        <li>
          <Link to="/dashboard1/courses">
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            Software Engineering FT 06 Phase 1
          </Link>
        </li>
      </ul>

      <div className="cta-section">
        <div className="cta-tab">
          <h3>Ready to Start Your Journey?</h3>
          <p>
            Explore our courses and take the first step towards your career in
            software engineering.
          </p>
          <Link to="/dashboard1/courses" className="button">
            View All Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
