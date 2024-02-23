import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SignupForm from "./SignUp";
import CohortSelection from "./Cohort";
import Learners from "./Learners";

const SideNav = () => {
  const [usernames, setUsernames] = useState([]);

  useEffect(() => {
    const fetchUsernames = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5555/register");
        setUsernames(response.data.map((user) => user.username));
      } catch (error) {
        console.error("Error fetching usernames:", error);
      }
    };

    fetchUsernames();
  }, []);

  const channels = [
    "#general",
    "#random",
    "#design",
    "#development",
    "#marketing",
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="dropdown">
          <button className="dropbtn">Nobility Classroom</button>
          <div className="dropdown-content">
            <p>Go To Canvas</p>
          </div>
        </div>
     <button><SignupForm/></button>
     <button><CohortSelection/></button>
        <h3>Channels</h3>
        <ul className="channel-list">
          {channels.map((channel, index) => (
            <li key={index}>{channel}</li>
          ))}
        </ul>
<button><Learners/></button>
        <h3>Direct Messages</h3>
        <ul className="direct-message-list">
          {usernames.map((username, index) => (
            <li key={index}>
              <Link to="/chat">{username}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
