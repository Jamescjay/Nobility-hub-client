import React, { useState } from "react";
import SidebarAdmin from "./SidebarAdmin";
import MessagingSection from "./messaging/MessagingSection";
import "../styling/Dashboard.css";
import NavigationBarAdmin from "./NavigationBarAdmin";

const Admindashboard = () => {
  const [nobilityHubOpen, setNobilityHubOpen] = useState(false);
  const [channelsOpen, setChannelsOpen] = useState(false);
  const [studentsDropdownOpen, setStudentsDropdownOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);

  const handleLogout = () => {
    console.log("Logout clicked");
    // Implement your logout logic here
  };

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="learners-dashboard-container">
      <NavigationBarAdmin />
      <div className="learners-main-content">
        <SidebarAdmin
          handleSectionClick={handleSectionClick}
          nobilityHubOpen={nobilityHubOpen}
          setNobilityHubOpen={setNobilityHubOpen}
          channelsOpen={channelsOpen}
          setChannelsOpen={setChannelsOpen}
          studentsDropdownOpen={studentsDropdownOpen}
          setStudentsDropdownOpen={setStudentsDropdownOpen}
        />
        <MessagingSection />
      </div>
    </div>
  );
};

export default Admindashboard;
