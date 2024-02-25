import React, { useContext, useEffect, useState } from "react";
import "../index.css";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";

function SettingsModal({ isOpen, onRequestClose }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
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
          width: "400px",
          height: "300px",
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
            onChange={toggleTheme}
          />{" "}
          Light Mode
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="dark"
            checked={theme === "dark"}
            onChange={toggleTheme}
          />{" "}
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
            width: "400px",
            height: "300px",
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

const Navbar = () => {
  const { logout } = useContext(AuthContext);
  const userId = localStorage.getItem("userId");
  const [userDetails, setUserDetails] = useState();
  const navigate = useNavigate();
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);

  const toggleSettingsModal = () => {
    setSettingsModalOpen(!settingsModalOpen);
  };

  const fetchUserDetails = async () => {
    if (userId) {
      try {
        const response = await fetch(
          `http://127.0.0.1:5555/register/${userId}`
        );
        if (response.ok) {
          const data = await response.json();
          setUserDetails(data);
        } else {
          // Handle non-OK responses
        }
      } catch (error) {
        // Handle fetch errors
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
    navigate("/LearnersLogin");
  };

  return (
    <div className="navbar">
      <div className="left-section">
        <i className="fa fa-comment-o icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chat-left-dots-fill"
            viewBox="0 0 16 16"
          >
            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
          </svg>
        </i>
        <span>Channels</span>
      </div>
      <div className="middle-section">
        <input type="text" placeholder="Search" />
      </div>
      <div className="right-section">
        {userDetails && (
          <>
            <div
              className="user-icon"
              style={{
                backgroundColor: getCircleColor(),
              }}
            >
              {getAbbreviation(userDetails.first_name)}
            </div>
            <span>{`Hello ${userDetails.username}`}</span>
            <div
              className="learners-user-dropdown"
              style={{ cursor: "pointer" }}
            >
              <ul>
                <li>
                  <Profile userDetails={userDetails} />
                </li>
                <li>
                  <li onClick={toggleSettingsModal}>Settings</li>
                </li>
                <li onClick={handleLogout}>Logout</li>
              </ul>
            </div>
          </>
        )}
      </div>
      <SettingsModal
        isOpen={settingsModalOpen}
        onRequestClose={toggleSettingsModal}
      />
    </div>
  );
};

export default Navbar;
