import React, { useState, useContext } from "react";
import "../App.css";
import wideImage from "./wider-image.jpg";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "./AuthContext";

const LearnersLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext); // Accessing login function from AuthContext

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:5555/learners-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const { id, access_token } = await response.json();
        login(id, access_token);
        toast.success("Successfully signed in", {
          autoClose: 100,
          onClose: () => {
            window.location.href = "landing-page";
          },
        });
      } else {
        toast.error("Invalid email or password");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const initiateGoogleAuthentication = () => {
    const clientId =
      "903014081128-03ap17fghal5cugp545qt6uu315lf7e4.apps.googleusercontent.com";
    const redirectUri = `http://localhost:3000`;

    window.location.href = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=email profile openid`;
  };

  return (
    <div className="app-container">
      <div className="left-section">
        <div className="title-section">
          <h1>Welcome to Nobility Hub</h1>
        </div>
        <div className="image-section">
          <img src={wideImage} alt="Wide Image" className="wide-image" />
        </div>
        <div className="description-section">
          <p>
            We firmly believe in granting everyone the chance to thrive in the
            technology and programming sector. Through our groundbreaking
            educational methods, we equip students with the essential skills and
            expertise required to embark on prosperous career paths. Come join
            us and be a pioneer of tomorrow!
          </p>
        </div>
      </div>
      <div className="right-section">
        <div className="cta-section">
          <div className="cta-tab">
            <h2>Connect, Collaborate, Learn</h2>
            <div>
              <ToastContainer />
              <form onSubmit={handleSignIn}>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button className="sign-in-button" type="submit">
                  Sign In with Nob Hub Account
                </button>
              </form>
              <button
                className="sign-in-button-google"
                onClick={initiateGoogleAuthentication}
              >
                <FcGoogle className="google-logo" />
                Sign In with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnersLogin;
