// src/components/Dashboard.js
import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar';
import SearchBar from './SearchBar';

const Dashboard = ({ user }) => {
//const navigate = useNavigate();
const [displayedItem, setDisplayedItem] = useState('');

  //Check if user is defined before accessing properties
 // if (!user || !user.email || !user.role) {
    //return (
      //<div>
      //  <p>Error: User data is not available.</p>
       // <button onClick={() => navigate('/adminlogin')}>Go to Login</button>
     // </div>
    //);
  //}

 //const handleLogout = () => {
    //localStorage.removeItem('token');
   // navigate('/adminlogin');
 //};

  const handleSidebarSelect = (item) => {
    setDisplayedItem(item);
  };

  const handleSearch = (searchQuery) => {
    setDisplayedItem(searchQuery);
  };

  return (
    
    <div>
      <Sidebar onSelect={handleSidebarSelect} />

      <SearchBar onSearch={handleSearch} />
      <div>
        {/* Display the selected item */}
        {displayedItem && (
          <div>
            <h2>Displayed Item:</h2>
            <p>{displayedItem}</p>
          </div>
        )}
      </div>
    </div>
    //<div>
      //<h1>Welcome to the Dashboard, {user.email}!</h1>
      //<p>Role: {user.role}</p>
      //<button onClick={handleLogout}>Logout</button>
    //</div>
  );
};

export default Dashboard;