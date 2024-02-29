import React, { useState } from 'react';
import NavigationBarAdmin from './NavigationBarAdmin';
import SidebarAdmin from './SidebarAdmin';
import '../styling/Dashboard.css';
import Chatarea from './messaging/Chatarea';


const Admindashboard = () => {

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
     <NavigationBarAdmin handleLogout={handleLogout} />
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
       <Chatarea/>
     </div>
   </div>
 );
};


export default Admindashboard;



