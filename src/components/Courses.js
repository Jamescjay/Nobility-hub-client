import React from "react";
import { useState, useEffect } from "react";

const Courses = () => {
  const coursesData = [
    {
      title: "Software Engineering FT 06 Phase 0",
      enrolled: true,
      published: true,
    },
    {
      title: "Software Engineering FT 06 Phase 1",
      enrolled: true,
      published: true,
    },
    {
      title: "Software Engineering FT 06 Phase 2",
      enrolled: true,
      published: true,
    },
    {
      title: "Software Engineering FT 06 Phase 3",
      enrolled: true,
      published: true,
    },
    {
      title: "Software Engineering FT 06 Phase 4",
      enrolled: true,
      published: true,
    },
    {
      title: "Software Engineering FT 06 Phase 5",
      enrolled: true,
      published: true,
    },
  ];

  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCourseClick = (index) => {
    setSelectedCourse(index === selectedCourse ? null : index);
  };

  return (
    <div className="courses-container">
      <h2>Courses</h2>
      <div className="course-list">
        {coursesData.map((course, index) => (
          <div
            className={`course-card ${
              selectedCourse === index ? "selected" : ""
            }`}
            key={index}
            onClick={() => handleCourseClick(index)}
          >
            <h3>{course.title}</h3>
            {selectedCourse === index && (
              <div className="course-details">
                <p>Enrolled as Student: {course.enrolled ? "Yes" : "No"}</p>
                <p>Published: {course.published ? "Yes" : "No"}</p>
               
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;