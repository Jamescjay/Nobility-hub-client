// src/components/OTPPage.js
import React from "react";
import '../styling/OTPPage.css';

const OTPPage = () => {
  return (
    <form className="form">
      <div className="title">OTP</div>
      <div className="title">Verification Code</div>
      <p className="message">We have sent a verification code to your email</p>
      <div className="inputs">
        <input id="input1" type="text" maxLength="1" />
        <input id="input2" type="text" maxLength="1" />
        <input id="input3" type="text" maxLength="1" />
        <input id="input4" type="text" maxLength="1" />
      </div>
      <button className="action">Verify Me</button>
    </form>
  );
};

export default OTPPage;
