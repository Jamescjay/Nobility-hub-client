import React from 'react';
import DirectMessagesContent from './sidebarAdmin/DirectMessagesContent';
import { Link } from 'react-router-dom';

const SidebarAdmin = ({
  handleSectionClick,
  nobilityHubOpen,
  setNobilityHubOpen,
  channelsOpen,
  setChannelsOpen,
  studentsDropdownOpen,
  setStudentsDropdownOpen,
  directMessagesOpen
}) => {
 

  return (
    <div className="learners-sidebar">
      {/* Nobility Hub Section */}
      <div className="learners-nobility-hub" onClick={() => handleSectionClick('nobilityHub')}>
        <div className="learners-hub-label">
          <span
            className="dropdown-toggle"
            onClick={() => setNobilityHubOpen(!nobilityHubOpen)}
          >
            {nobilityHubOpen ? '-' : '+'}
          </span>{' '}
          <i className="uil uil-estate"></i>
          Nobility Hub
        </div>
        {nobilityHubOpen && (
          <div className="learners-hub-dropdown">
            <ul>
              <li><Link to="/Canvas">Canvas</Link></li>
              <li><Link to="/Overall">Overall</Link></li>
              
            </ul>
          </div>
        )}
      </div>

      {/* Channels Section */}
      <div className="learners-channels-section" onClick={() => handleSectionClick('channels')}>
        <div className="learners-channels-label">
          <span
            className="dropdown-toggle"
            onClick={() => setChannelsOpen(!channelsOpen)}
          >
            {channelsOpen ? '-' : '+'}
          </span>{' '}
          <i className="uil uil-chat"></i>
          Channels
        </div>
        {channelsOpen && (
          <div className="learners-channels-dropdown">
            <ul>
              <li>Off-Topic</li>
              <li> SDF-FT06-Bravo</li>
              <li><i className="uil uil-align-justify"></i> Town Square</li>
            </ul>
          </div>
        )}
      </div>

      {/* Cohort Section */}
      <div className="learners-students-section" onClick={() => handleSectionClick('students')}>
        <div className="learners-students-label">
          <span
            className="dropdown-toggle"
            onClick={() => setStudentsDropdownOpen(!studentsDropdownOpen)}
          >
            {studentsDropdownOpen ? '-' : '+'}
          </span>{' '}
          <i className="uil uil-book-reader"></i>
          Learners
        </div>
        {studentsDropdownOpen && (
          <div className="learners-students-dropdown">
            <ul>
              <li>Add New Learners</li>
              <li>View Learners</li>
            </ul>
          </div>
        )}
      </div>

      <div className="learners-students-section" onClick={() => handleSectionClick('students')}>
        <div className="learners-students-label">
          <span
            className="dropdown-toggle"
            onClick={() => setStudentsDropdownOpen(!studentsDropdownOpen)}
          >
            {studentsDropdownOpen ? '-' : '+'}
          </span>{' '}
          <i className="uil uil-book-reader"></i>
          Cohort Placement
        </div>
        {studentsDropdownOpen && (
          <div className="learners-students-dropdown">
            <ul>
              <li>cohorts</li>
              
            </ul>
          </div>
        )}
      </div>
      {/* Direct Messages Section */}
      <div className="learners-direct-messages" onClick={() => handleSectionClick('directMessages')}>
        <div className="learners-dm-label">Direct Messages</div>
        {directMessagesOpen && (
          <div className="learners-direct-messages-content">
            <DirectMessagesContent />
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarAdmin;
