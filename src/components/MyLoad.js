// MyLoad.js
import React from "react";
import "../styling/MyLoad.css"; // Import the CSS file for Loader styling

const MyLoad = () => {
  return (
    <div className="loader-container wrapper">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="shadow"></div>
      <div className="shadow"></div>
      <div className="shadow"></div>
    </div>
  );
};

export default MyLoad;
