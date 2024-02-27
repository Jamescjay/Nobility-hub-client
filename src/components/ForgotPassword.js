import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../styling/ForgotPassword.css';

const ForgotPassword = () => {
  const [userType, setUserType] = useState("student");
  const [email, setEmail] = useState("");

  const handleNext = () => {
    // Add validation logic here if needed

    // For simplicity, assuming the input is valid
    // You can replace this with your actual logic to move to the OTP page
    toast.success("Moving to OTP page", {
      autoClose: 1000,
      onClose: () => {
        // Navigate to OTP page or update the component state to render OTP
        // For now, just logging to console
        console.log("Navigating to OTP page");
      },
    });
  };

  return (
    <div className="center-container">
      <div className="container">
        <div className="heading">Forgot Password</div>
        <form className="form">
          <div className="select-container">
            <label htmlFor="userType">Select User Type:</label>
            <select
              id="userType"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="student">Student</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <input
            required
            className="input"
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="next-button" onClick={handleNext}>
            Next
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ForgotPassword;
