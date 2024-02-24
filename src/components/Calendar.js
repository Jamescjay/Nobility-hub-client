import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Calendar = () => {
  const calendarEvents = [
    {
      title: "Assignment Deadline",
      date: "2024-02-25",
      description: "Submit Phase 3 Code Challenge",
    },
    {
      title: "Quiz",
      date: "2024-03-05",
      description: "Quiz on Software Engineering Principles",
    },
    {
      title: "Lab Session",
      date: "2024-03-15",
      description: "Hands-on lab session on ReactJS",
    },
    {
      title: "Project Presentation",
      date: "2024-03-30",
      description: "Final project presentation and evaluation",
    },
  ];

  const calendarContainerStyle = {
    padding: "20px",
  };

  const calendarTitleStyle = {
    fontSize: "24px",
    color: "#333",
    marginBottom: "20px",
  };

  const eventCardStyle = {
    backgroundColor: "#f8f8f8",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    marginBottom: "20px",
  };

  const eventTitleStyle = {
    fontSize: "20px",
    color: "#555",
    marginBottom: "10px",
  };

  const eventDateDescriptionStyle = {
    fontSize: "16px",
    color: "#666",
  };

  return (
    <div style={calendarContainerStyle}>
      <h2 style={calendarTitleStyle}>Upcoming Events</h2>

      {calendarEvents.map((event, index) => (
        <div key={index} style={eventCardStyle}>
          <h3 style={eventTitleStyle}>{event.title}</h3>
          <p style={eventDateDescriptionStyle}>Date: {event.date}</p>
          <p style={eventDateDescriptionStyle}>
            Description: {event.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Calendar;
