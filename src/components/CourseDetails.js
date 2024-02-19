import React from "react";

const CourseDetails = ({ title, details, materials }) => {
  return (
    <div className="course-details">
      <h2>{title}</h2>
      <div className="details">{details}</div>
      <div className="materials">{materials}</div>
    </div>
  );
};

export default CourseDetails;
