import React, { useState } from "react";
import "../App.css"; 
import wideImage from "./wider-image.jpg"; 
import { FcGoogle } from "react-icons/fc";


const LearnersLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();

    if (email && password) {
      const apiUrl = ""; 

      fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setSuccessMessage("Successfully signed in: " + data.message);
            setErrorMessage(""); 
          } else {
            setErrorMessage("Error signing in: " + data.message);
            setSuccessMessage(""); 
          }
        })
        .catch((error) => {
          setErrorMessage("Error signing in: " + error.message);
          setSuccessMessage("");
        });
    } else {
      initiateGoogleAuthentication();
    }
  };

  const initiateGoogleAuthentication = () => {
    const clientId =
      "903014081128-03ap17fghal5cugp545qt6uu315lf7e4.apps.googleusercontent.com";
    const redirectUri = `http://localhost:3000`;

    window.location.href = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=email profile openid`;
  };

  const handleLoginClick = () => {
    initiateGoogleAuthentication();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const emailInput = e.target.elements.email.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput)) {
      alert("Please enter a valid email address");
      return;
    }

    console.log("Form submitted with email:", emailInput);

    setEmail("");
    setPassword("");
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
            technology sector. Through our groundbreaking educational methods,
            we equip students with the essential skills and expertise required
            to embark on prosperous career paths. Come join us and be a pioneer
            of tomorrow!
          </p>
        </div>
      </div>
      <div className="right-section">
        <p>
          Already have an account?
          <a href="#" onClick={handleLoginClick}>
            Log in
          </a>
        </p>
        <div className="cta-section">
          <div className="cta-tab">
            <h2>Connect, Collaborate, Learn</h2>
            <div>
              {successMessage && (
                <p className="success-message">{successMessage}</p>
              )}
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <form onSubmit={handleFormSubmit}>
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
