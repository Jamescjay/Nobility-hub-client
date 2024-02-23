// NavigationBar.js
import React from 'react';
// import '../styling/NavigationBar.css';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const NavigationBarLearner = ({ handleDirectMessagesToggle }) => {
  const navigate = useNavigate();

  //logging out the learner
  const handleLogout = () => {
    // Clear user data on logout
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Notify the user about successful logout
    toast.success("Logout successful");

    // Redirect the user to the home page
    navigate("/");
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
            <li><i className="uil uil-user-circle"></i> Profile</li>
            <li><i className="uil uil-setting"></i> Settings</li>
            <li onClick={handleLogout}><i className="uil uil-sign-out-alt"></i> Logout</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavigationBarLearner;
