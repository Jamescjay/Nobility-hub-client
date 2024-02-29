import React, { useState, useContext } from "react";
import "../styling/Navigation.css";
import { useNavigate } from "react-router-dom";
//import { toast } from "react-toastify";
import { AuthContext } from "./AuthContext";

const NavigationBarAdmin = () => {
  const navigate = useNavigate();
  const { adminLogout } = useContext(AuthContext);

  const handleLogout = () => {
    adminLogout();

    alert("Logged out");

    navigate("/");
  };

  return (
    <div className="learners-top-nav">
      <div className="learners-left-section">
        <div className="learners-channels-icon">
          <i className="uil uil-chat"></i> Nobility Hub
        </div>
      </div>
      <div className="learners-search-bar">
        <i className="uil uil-search-alt"></i>
        <input type="text" placeholder="Type to Search..." />
      </div>

      <div className="learners-user-profile">
        <i className="uil uil-user">
          <text>Admin</text>
        </i>
        <div className="learners-user-dropdown">
          <ul>
            <li>
              <i className="uil uil-setting"></i> Settings
            </li>
            <li onClick={handleLogout}>
              <i className="uil uil-sign-out-alt"></i> Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavigationBarAdmin;
