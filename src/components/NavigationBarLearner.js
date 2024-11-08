// NavigationBar.js
import React, { useState, useEffect, useContext } from 'react';
import '../styling/Navigation.css';
import { useNavigate} from "react-router-dom";
//import { toast } from "react-toastify";
import { AuthContext } from './AuthContext';
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-modal";




function SettingsModal({ isOpen, onRequestClose, toggleTheme }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
    toggleTheme(selectedTheme);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Settings Modal"
      style={{
        overlay: {
          zIndex: 9999,
        },
        content: {
          width: "600px",
          height: "600px",
          margin: "auto",
        },
      }}
    >
      <h2>Settings</h2>
      <div>
        <label>
          <input
            type="radio"
            value="light"
            checked={theme === "light"}
            onChange={() => handleThemeChange("light")}
          />
          Light Mode
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="dark"
            checked={theme === "dark"}
            onChange={() => handleThemeChange("dark")}
          />
          Dark Mode
        </label>
      </div>
    </Modal>
  );
}

function Profile({ userDetails }) {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <text onClick={() => setShowModal(true)}>Profile</text>
      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        contentLabel="Profile Modal"
        style={{
          content: {
            width: "600px",
            height: "600px",
            margin: "auto",
            backgroundColor: "#22577a",
            color: "white",
          },
        }}
        overlayClassName="modal-overlay"
      >
        <button className="close-modal-button" onClick={handleCloseModal}>
          X
        </button>
        <h2>My Profile</h2>
        <div>
          <ul>
            <li>First Name: {userDetails.first_name}</li>
            <li>Last Name: {userDetails.last_name}</li>
            <li>Username: {userDetails.username}</li>
            <li>Gender: {userDetails.gender}</li>
            <li>Email: {userDetails.email}</li>
            <li>Phone Number: {userDetails.phone}</li>
          </ul>
        </div>
      </Modal>
    </div>
  );
}


const NavigationBarLearner = () => {
  const navigate = useNavigate();
  const {logout} = useContext(AuthContext)
  const userId = localStorage.getItem("userId")
  const [userDetails, setUserDetails] = useState()
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleSettingsModal = () => {
    setSettingsModalOpen(!settingsModalOpen);
  };

  const toggleTheme = (selectedTheme) => {
    setTheme(selectedTheme);
    document.body.style.backgroundColor =
      selectedTheme === "dark" ? "#222" : "#fff";
  };

  useEffect(() => {
    toggleTheme(theme);
  }, []);


  const fetchUserDetails = async () => {
    if (userId) {
      try {
        const response = await fetch(
          `https://nobility-hub-backend.onrender.com/register/${userId}`
        );
        if (response.ok) {
          const data = await response.json();
          setUserDetails(data);
        } else {
         
        }
      } catch (error) {
       
        console.error("Error fetching user details:", error);
      }
    }
  };

  useEffect(() => {
    if (userId) {
      fetchUserDetails();
    }
  }, [userId]);

  const getAbbreviation = (name) => {
    return name ? name.charAt(0).toUpperCase() : "";
  };

  const getCircleColor = () => {
    
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
  };
  const handleLogout = () => {
    logout(); 
   
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
      
      <div className="user-profile">
        {userDetails && (
          <>
            <i onClick={fetchUserDetails}>
              <div
                className="user-circle"
                style={{
                  backgroundColor: getCircleColor(),
                }}
              >
                {getAbbreviation(userDetails.first_name) +
                  getAbbreviation(userDetails.last_name)}
              </div>
              <Dropdown>
                <Dropdown.Toggle>{userDetails.username}</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Profile userDetails={userDetails} />
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Dropdown.Item onClick={toggleSettingsModal}>Settings</Dropdown.Item>
                  </Dropdown.Item>
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <SettingsModal
                isOpen={settingsModalOpen}
                onRequestClose={toggleSettingsModal}
                toggleTheme={toggleTheme}
              />
            </i>
          </>
        )}
      </div>
    </div>
  );
};

export default NavigationBarLearner;
