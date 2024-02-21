import React, { useState } from 'react';
import '../styling/Dashboard.css';

const LearnersDashboard = () => {
  const [nobilityHubOpen, setNobilityHubOpen] = useState(false);
  const [channelsOpen, setChannelsOpen] = useState(false);
  const [userProfileOpen, setUserProfileOpen] = useState(false);

  // Placeholder function for logout
  const handleLogout = () => {
    // Implement your logout logic here
    console.log('Logout clicked');
    // For example, you can make an API request to log the user out
  };

  return (
    <div className="learners-dashboard-container">
      {/* Top Navigation Bar */}
      <div className="learners-top-nav">
        <div className="learners-left-section">
          <div className="learners-channels-icon">
            <i className="uil uil-chat"></i> Channels
          </div>
        </div>
        <div className="learners-search-bar">
          <i className="uil uil-search-alt"></i>
          <input type="text" placeholder="Type to Search..." />
        </div>
        <div
          className="learners-user-profile"
          onClick={() => setUserProfileOpen(!userProfileOpen)}
        >
          <i className="uil uil-user"></i>
          {userProfileOpen && (
            <div className="learners-user-dropdown">
              <ul>
                <li>Profile</li>
                <li>Settings</li>
                <li onClick={handleLogout}><i class="uil uil-sign-out-alt"></i> Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Sidebar */}
      <div className="learners-sidebar">
        {/* Nobility Hub Section */}
        <div className="learners-nobility-hub">
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
                <li>View Canvas</li>
                <li>Overall</li>
              </ul>
            </div>
          )}
        </div>

        {/* Channels Section */}
        <div className="learners-channels-section">
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
                <li>SDF-FT06-Bravo</li>
                <li><i class="uil uil-align-justify"></i> Town Square</li>
              </ul>
            </div>
          )}
        </div>

        {/* Direct Messages Section (Placeholder) */}
        <div className="learners-direct-messages">
          <div className="learners-dm-label">Direct Messages</div>
          {/* You can implement the direct messages section here */}
        </div>
      </div>
    </div>
  );
};

export default LearnersDashboard;
