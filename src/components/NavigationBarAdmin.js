import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const NavigationBarAdmin = ({ handleDirectMessagesToggle }) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    // Get the user's name from localStorage
    const user = localStorage.getItem("user");
    if (user) {
      const userData = JSON.parse(user);
      setUserName(userData.name);
    }
  }, []);

  //logging out the user
  const handleLogout = () => {
    // Display confirmation dialog
    const isConfirmed = window.confirm("Are you sure you want to log out?");
  
    // If user confirms, proceed with logout
    if (isConfirmed) {
      // Clear user data on logout
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      // Notify the user about successful logout
      toast.success("Logout successful");

      // Redirect the user to the home page
      navigate("/");
    }
  };

  return (
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
      <div className="learners-user-profile" onClick={handleDirectMessagesToggle}>
        <i className="uil uil-user"></i>
        <div className="learners-user-dropdown">
          <ul>
            <li><i className="uil uil-user-circle"></i> {userName ? userName : 'Profile'}</li>
            <li><i className="uil uil-setting"></i> Settings</li>
            <li onClick={handleLogout}><i className="uil uil-sign-out-alt"></i> Logout</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavigationBarAdmin;
