import React, { useState } from "react";
import NavigationBar from "./NavigationBarAdmin";
import SidebarAdmin from "./SidebarAdmin";
import DirectMessagesContent from "./sidebarAdmin/DirectMessagesContent";
import Canvas from "./sidebarAdmin/CanvasAdminDashboard"; // Import Canvas component
import "../styling/Dashboard.css";

const Admindashboard = () => {
  const [nobilityHubOpen, setNobilityHubOpen] = useState(false);
  const [channelsOpen, setChannelsOpen] = useState(false);
  const [studentsDropdownOpen, setStudentsDropdownOpen] = useState(false);
  const [directMessagesOpen, setDirectMessagesOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);

  const handleLogout = () => {
    console.log("Logout clicked");
    // Implement your logout logic here
  };

  // const handleSectionClick = (section) => {
  //   setSelectedSection(section);
  // };

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  const handleDirectMessagesToggle = () => {
    setDirectMessagesOpen(!directMessagesOpen);
  };

  return (
    <div className="learners-dashboard-container">
      <NavigationBar
        handleDirectMessagesToggle={handleDirectMessagesToggle}
        handleLogout={handleLogout}
      />
      <SidebarAdmin
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
        {/* Render content based on selectedSection */}
        {selectedSection === "Canvas" && <Canvas />}{" "}
        {/* Render Canvas component */}
        {selectedSection === "directMessages" && <DirectMessagesContent />}
        {/* Add conditions for other sections if needed */}
      </div>
    </div>
  );
};

export default Admindashboard;
