import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import styles from "./Calendar.css";

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

  return (
    <div className={styles.calendarContainer}>
      <h2 className={styles.calendarTitle}>Upcoming Events</h2>

      {calendarEvents.map((event, index) => (
        <div key={index} className={styles.eventCard}>
          <h3 className={styles.eventTitle}>{event.title}</h3>
          <p className={styles.eventDate}>Date: {event.date}</p>
          <p className={styles.eventDescription}>
            Description: {event.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Calendar;
