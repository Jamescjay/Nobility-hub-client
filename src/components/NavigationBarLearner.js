// NavigationBar.js
import React, { useState, useEffect, useContext } from 'react';
import '../styling/Navigation.css';
import { useNavigate} from "react-router-dom";
//import { toast } from "react-toastify";
import { AuthContext } from './AuthContext';

const NavigationBarLearner = () => {
  const navigate = useNavigate();
  const {logout} = useContext(AuthContext)
  const userId = localStorage.getItem("userId")
  const [userDetails, setUserDetails] = useState()

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
       <img src="nobility.png" alt="" className="logo-image" /> 
        Nob Hub
      </div>

      <div className="learners-search-bar">
        <input  className="input" type="text" placeholder=" Search..." />
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
                {getAbbreviation(userDetails.first_name) + getAbbreviation(userDetails.last_name)}
              </div>
              {/*<span>{userDetails.username}</span>*/}
            </i>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </div>
  );
};

export default NavigationBarLearner;
