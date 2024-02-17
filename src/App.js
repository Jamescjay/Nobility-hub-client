import React from "react";
import "./App.css";
import wideImage from "./wider-image.jpg"; 

function App() {
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
          {" "}
          Already have an account?
          <a href="#" onClick={() => window.location.reload()}>
            Log in
          </a>
        </p>
        <div className="cta-section">
          <div className="cta-tab">
            <h2>Connect, Collaborate, Learn</h2>
            <button className="sign-in-button">Sign In with Nob Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
