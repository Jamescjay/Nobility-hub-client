import React, { useState } from 'react';
import NavigationBarLearner from './NavigationBarLearner';
import SidebarLearner from './SidebarLearner';
import DirectMessagesContent from './sidebarAdmin/DirectMessagesContent';
import '../styling/Dashboard.css';

const Learnersdashboard = () => {
  const [nobilityHubOpen, setNobilityHubOpen] = useState(false);
  const [channelsOpen, setChannelsOpen] = useState(false);
  const [studentsDropdownOpen, setStudentsDropdownOpen] = useState(false);
  const [directMessagesOpen, setDirectMessagesOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);

  const handleLogout = () => {
    console.log('Logout clicked');
    // Implement your logout logic here
  };

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  const handleDirectMessagesToggle = () => {
    setDirectMessagesOpen(!directMessagesOpen);
  };

  return (
    <div className="learners-dashboard-container">
      <NavigationBarLearner handleDirectMessagesToggle={handleDirectMessagesToggle} handleLogout={handleLogout} />
      <SidebarLearner
        handleSectionClick={handleSectionClick}
        nobilityHubOpen={nobilityHubOpen}
        setNobilityHubOpen={setNobilityHubOpen}
        channelsOpen={channelsOpen}
        setChannelsOpen={setChannelsOpen}
        studentsDropdownOpen={studentsDropdownOpen}
        setStudentsDropdownOpen={setStudentsDropdownOpen}
        directMessagesOpen={directMessagesOpen}
      />
      <div className="learners-right-content">
        {selectedSection === 'directMessages' && <DirectMessagesContent />}
      </div>
    </div>
  );
};

export default Learnersdashboard;
