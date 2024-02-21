// import React, { useState } from 'react';
import '../Css/Cohort.css';


const Cohort = ({ cohort, onEnroll }) => {
  const { name, status, startDate, endDate } = cohort;
  const isActive = status === 'Active';
  const isApply = status === 'Apply';

  return (
    <div className={`cohort ${isActive ? 'active' : ''} ${isApply ? 'apply' : ''}`}>
      <h3>{name}</h3>
      <p>Status: {status}</p>
      <p>Start Date: {startDate}</p>
      <p>End Date: {endDate}</p>
      <button className="enroll-button" onClick={(e) => onEnroll(e, cohort)}>Enroll</button>
    </div>
  );
};

const CohortSelection = () => {
  const cohorts = [
    { name: 'SDF-FT05', status: 'Inactive', startDate: 'July 15, 2023', endDate: 'December 15, 2023' },
    { name: 'SDFT-FT06', status: 'Active', startDate: 'September 15, 2023', endDate: 'March 15, 2024' },
    { name: 'SDF-FT07', status: 'Apply', startDate: 'April 17, 2024', endDate: 'September 17, 2024' },
    // Add more cohort entries as needed
  ];

  const handleEnroll = (e, cohort) => {
    e.preventDefault();
    const status = cohort.status;

    if (status === 'Active' || status === 'Apply') {
      window.location.href = '#'; // Replace with the actual enrollment link
    } else {
      alert('This cohort is currently inactive. Please select another cohort.');
    }
  };

  return (
    <div className="cohort-container">
      {cohorts.map((cohort, index) => (
        <Cohort key={index} cohort={cohort} onEnroll={handleEnroll} />
      ))}
    </div>
  );
};

export default CohortSelection;