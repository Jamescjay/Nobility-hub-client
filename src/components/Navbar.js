import React from "react";
import "../index.css";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
   const { logout } = React.useContext(AuthContext);
   const userId = localStorage.getItem("userId");
   const [userDetails, setUserDetails] = React.useState();
   const navigate = useNavigate();

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

   React.useEffect(() => {
     if (userId) {
       fetchUserDetails();
     }
   }, [userId]);

   const handleLogout = () => {
     localStorage.removeItem("userId");
     logout();
     // Show toast message
     alert("Logged out");
     // Redirect to LearnersLogin page
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
            <i onClick={fetchUserDetails}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                />
              </svg>
              <span>{`Hello ${userDetails.username}`}</span>
            </i>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
