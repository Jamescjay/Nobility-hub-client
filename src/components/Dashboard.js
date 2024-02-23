import React, { useState } from 'react';
import NavigationBar from './NavigationBarAdmin';
import SidebarAdmin from './SidebarAdmin';
import DirectMessagesContent from './sidebarAdmin/DirectMessagesContent';
import Canvas from './sidebarAdmin/Canvas'; // Import Canvas component
import '../styling/Dashboard.css';

const Admindashboard = () => {
  const [nobilityHubOpen, setNobilityHubOpen] = useState(false);
  const [channelsOpen, setChannelsOpen] = useState(false);
  const [studentsDropdownOpen, setStudentsDropdownOpen] = useState(false);
  const [directMessagesOpen, setDirectMessagesOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);
  const [apiData, setApiData] = useState(null); // State to store fetched API data

  const handleLogout = () => {
    console.log('Logout clicked');
    // Implement your logout logic here
  };

  const handleSectionClick = async (section) => {
    setSelectedSection(section);

    // Fetch data from backend API based on the clicked section
    try {
      const data = await fetchData(section);
      setApiData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchData = async (section) => {
    // Implement logic to fetch data from backend API based on the section
    // Example:
    // const response = await fetch(`/api/${section}`);
    // const data = await response.json();
    // return data;

    // For demonstration.
    return { message: `Data for ${section}` };
  };

  const handleDirectMessagesToggle = () => {
    setDirectMessagesOpen(!directMessagesOpen);
  };

  return (
    <div className="learners-dashboard-container">
      <NavigationBar handleDirectMessagesToggle={handleDirectMessagesToggle} handleLogout={handleLogout} />
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
        {selectedSection === 'Canvas' && <Canvas />} {/* Render Canvas component */}
        {selectedSection === 'directMessages' && <DirectMessagesContent />}
        <div className='dashcard'>
        {/* Render API data */}
        {apiData && <div>    {apiData.message} </div>}
        </div>
      </div>
    </div>
  );
};

export default Admindashboard;
