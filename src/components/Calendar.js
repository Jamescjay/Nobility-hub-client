import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const AdminCalendar = () => {
  const [events, setEvents] = useState([
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
  ]);

  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  const addEvent = () => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
    setNewEvent({
      title: "",
      date: "",
      description: "",
    });
  };

  const removeEvent = (index) => {
    setEvents((prevEvents) => [
      ...prevEvents.slice(0, index),
      ...prevEvents.slice(index + 1),
    ]);
  };

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
    position: "relative",
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

  const addButtonStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    cursor: "pointer",
    color: "#3498db",
  };

  const trashButtonStyle = {
    position: "absolute",
    bottom: "10px",
    right: "10px",
    cursor: "pointer",
    color: "#e74c3c",
  };

  return (
    <div style={calendarContainerStyle}>
      <h2 style={calendarTitleStyle}>Admin Event Calendar</h2>

      {events.map((event, index) => (
        <div key={index} style={eventCardStyle}>
          <FontAwesomeIcon
            icon={faPlus}
            style={addButtonStyle}
            onClick={() => addEvent(index)}
          />
          <FontAwesomeIcon
            icon={faTrash}
            style={trashButtonStyle}
            onClick={() => removeEvent(index)}
          />
          <h3 style={eventTitleStyle}>{event.title}</h3>
          <p style={eventDateDescriptionStyle}>Date: {event.date}</p>
          <p style={eventDateDescriptionStyle}>
            Description: {event.description}
          </p>
        </div>
      ))}

      <div style={eventCardStyle}>
        <h3 style={eventTitleStyle}>New Event</h3>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newEvent.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="date"
          placeholder="Date (YYYY-MM-DD)"
          value={newEvent.date}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newEvent.description}
          onChange={handleInputChange}
        />
        <FontAwesomeIcon
          icon={faPlus}
          style={{ cursor: "pointer", color: "#3498db" }}
          onClick={addEvent}
        />
      </div>
    </div>
  );
};

export default AdminCalendar;
