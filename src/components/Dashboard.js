import React, { useState, useEffect } from 'react';
import '../styling/Dashboard.css';
import NobilityHubContent from './sidebarAdmin/NobilityHubContent';
import ChannelsContent from './sidebarAdmin/ChannelsContent';
import StudentsContent from './sidebarAdmin/StudentsContent';
import DirectMessagesContent from './sidebarAdmin/DirectMessagesContent';

// Mock API functions for the sidebar
const fetchNobilityHubData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ content: 'Nobility Hub Data' });
    }, 1000);
  });
};

const fetchChannelsData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ content: 'Channels Data' });
    }, 1000);
  });
};

const fetchStudentsData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ content: 'Students Data' });
    }, 1000);
  });
};

const fetchDirectMessagesData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ content: 'Direct Messages Data' });
    }, 1000);
  });
};

const Admindashboard = () => {
  const [nobilityHubOpen, setNobilityHubOpen] = useState(false);
  const [channelsOpen, setChannelsOpen] = useState(false);
  const [studentsDropdownOpen, setStudentsDropdownOpen] = useState(false);
  const [directMessagesOpen, setDirectMessagesOpen] = useState(false);

  const [selectedSection, setSelectedSection] = useState(null);
  const [sectionData, setSectionData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selectedSection) return;

    setLoading(true);

    // Determine which API function to call based on the selected section
    const fetchData = async () => {
      switch (selectedSection) {
        case 'nobilityHub':
          fetchNobilityHubData().then(data => {
            setSectionData(data);
            setLoading(false);
          });
          break;
        case 'channels':
          fetchChannelsData().then(data => {
            setSectionData(data);
            setLoading(false);
          });
          break;
        case 'students':
          fetchStudentsData().then(data => {
            setSectionData(data);
            setLoading(false);
          });
          break;
        case 'directMessages':
          fetchDirectMessagesData().then(data => {
            setSectionData(data);
            setLoading(false);
          });
          break;
        default:
          setSectionData(null);
          setLoading(false);
          break;
      }
    };

    fetchData();
  }, [selectedSection]);

  // Placeholder function for logout
  const handleLogout = () => {
    // Implement your logout logic here
    console.log('Logout clicked');
    // For example, you can make an API request to log the user out
  };

  const handleSectionClick = (section) => {
    setSelectedSection(section);
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
          onClick={() => setDirectMessagesOpen(!directMessagesOpen)}
        >
          <i className="uil uil-user"></i>
          {directMessagesOpen && (
            <div className="learners-user-dropdown">
              <ul>
                <li><i className="uil uil-user-circle"></i> Profile</li>
                <li><i className="uil uil-setting"></i> Settings</li>
                <li onClick={handleLogout}><i className="uil uil-sign-out-alt"></i> Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Sidebar */}
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
                <li>View Canvas</li>
                <li>Overall</li>
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

        {/* Students Section */}
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

      {/* Right Content Section */}
      <div className="learners-right-content">
        {loading && <div> Loading...! </div>} 
        {!loading && selectedSection === 'nobilityHub' && <NobilityHubContent data={sectionData} />}
        {!loading && selectedSection === 'channels' && <ChannelsContent data={sectionData} />}
        {!loading && selectedSection === 'students' && <StudentsContent data={sectionData} />}
        {!loading && selectedSection === 'directMessages' && <DirectMessagesContent data={sectionData} />}
      </div>
    </div>
  );
};

export default Admindashboard;
