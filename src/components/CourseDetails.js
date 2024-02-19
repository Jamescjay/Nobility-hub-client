import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const { phase, week } = useParams();
  const [weekContent, setWeekContent] = useState(null);

  useEffect(() => {
    const fetchWeekContent = async () => {
      try {
        
        const response = await fetch(
          ``
        );
        const data = await response.json();

        
        setWeekContent(data);
      } catch (error) {
        console.error("Error fetching week content:", error);
      }
    };

    fetchWeekContent();
  }, [week]);

  return (
    <div className="course-details-container">
      <h2>
        Phase {phase} - Week {week} - Course Details
      </h2>
      {weekContent && (
        <div>
         
          <p>{weekContent.title}</p>
          <p>{weekContent.description}</p>
         
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
