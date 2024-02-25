import React, { useState } from "react";
import Modal from "react-modal";
import "../styling/Cohort.css";

const Cohort = ({ cohort, onView }) => {
  const { name, status, startDate, endDate } = cohort;
  const isActive = status === "Active";
  const isApply = status === "Apply";

  return (
    <div
      className={`cohort ${isActive ? "active" : ""} ${isApply ? "apply" : ""}`}
    >
      <h3>{name}</h3>
      <p>Status: {status}</p>
      <p>Start Date: {startDate}</p>
      <p>End Date: {endDate}</p>
      <button className="view-button" onClick={(e) => onView(e, cohort)}>
        view
      </button>
    </div>
  );
};

const CohortSelection = () => {
  const [showModal, setShowModal] = useState(false);

  const cohorts = [
    {
      name: "SDF-FT05",
      status: "Inactive",
      startDate: "July 15, 2023",
      endDate: "December 15, 2023",
    },
    {
      name: "SDFT-FT06",
      status: "Active",
      startDate: "September 15, 2023",
      endDate: "March 15, 2024",
    },
    {
      name: "SDF-FT07",
      status: "Apply",
      startDate: "April 17, 2024",
      endDate: "September 17, 2024",
    },
    // Add more cohort entries as needed
  ];

  const handleView = (e, cohort) => {
    e.preventDefault();
    const status = cohort.status;

    if (status === "Active" || status === "Apply") {
      setShowModal(true);
    } else {
      alert("This cohort is currently inactive. Please select another cohort.");
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Cohorts</button>
      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        contentLabel="Cohort Modal"
        style={{
          content: {
            width: "1100px",
            height: "600px",
            margin: "auto",
            backgroundColor: "#22577a",
            color: "white",
          },
        }}
      >
        <button onClick={handleCloseModal} style={{ backgroundColor: "red" }}>
          Close
        </button>
        <div className="cohort-container">
          {cohorts.map((cohort, index) => (
            <Cohort key={index} cohort={cohort} onView={handleView} />
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default CohortSelection;
