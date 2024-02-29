import React, { useState } from 'react';
import NavigationBarLearner from './NavigationBarLearner';
import SidebarLearner from './SidebarLearner';

import '../styling/Dashboard.css';
import Chatroom from './messaging/Chatroom';


const Learnersdashboard = ({user}) => {
  const [nobilityHubOpen, setNobilityHubOpen] = useState(false);
  const [channelsOpen, setChannelsOpen] = useState(false);
  const [studentsDropdownOpen, setStudentsDropdownOpen] = useState(false);
  
  const [selectedSection, setSelectedSection] = useState(null);


  const handleLogout = () => {
    console.log('Logout clicked');
    // Implement your logout logic here
  };

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  
  return (
    <div className="learners-dashboard-container">
      <NavigationBarLearner handleLogout={handleLogout} />
      <div className="learners-main-content">
        <SidebarLearner
          handleSectionClick={handleSectionClick}
          nobilityHubOpen={nobilityHubOpen}
          setNobilityHubOpen={setNobilityHubOpen}
          channelsOpen={channelsOpen}
          setChannelsOpen={setChannelsOpen}
          studentsDropdownOpen={studentsDropdownOpen}
          setStudentsDropdownOpen={setStudentsDropdownOpen}
        />
        <Chatroom />
      </div>
    </div>
  );
};

export default Learnersdashboard;
