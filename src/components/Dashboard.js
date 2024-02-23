import React, { useState } from 'react';
import NavigationBar from './NavigationBarAdmin';
import SidebarAdmin from './SidebarAdmin';
import MessagingSectionAdmin from './messaging/MessagingSectionAdmin';
 // Import Canvas component
import '../styling/Dashboard.css';

const Admindashboard = () => {
  const [nobilityHubOpen, setNobilityHubOpen] = useState(false);
  const [channelsOpen, setChannelsOpen] = useState(false);
  const [studentsDropdownOpen, setStudentsDropdownOpen] = useState(false);
 
  const [selectedSection, setSelectedSection] = useState(null);

  const handleLogout = () => {
    console.log('Logout clicked');
    // Implement your logout logic here
  };

  // const handleSectionClick = (section) => {
  //   setSelectedSection(section);
  // };

  const handleSectionClick = (section) => {
  setSelectedSection(section);
  };

  return (
    <div className="learners-dashboard-container">
      <NavigationBar  handleLogout={handleLogout} />
      <SidebarAdmin
        handleSectionClick={handleSectionClick}
        nobilityHubOpen={nobilityHubOpen}
        setNobilityHubOpen={setNobilityHubOpen}
        channelsOpen={channelsOpen}
        setChannelsOpen={setChannelsOpen}
        studentsDropdownOpen={studentsDropdownOpen}
        setStudentsDropdownOpen={setStudentsDropdownOpen}
        
      />
      <MessagingSectionAdmin />
    </div>
  );
};

export default Admindashboard;
