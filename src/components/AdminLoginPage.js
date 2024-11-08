import React, { useState, useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styling/Login.css";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { adminLogin } = useContext(AuthContext);

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://nobility-hub-backend.onrender.com/admin-login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        const { access_token } = await response.json();
        adminLogin(access_token);
        toast.success("Successfully signed in", {
          autoClose: 100,
          onClose: () => {
            window.location.href = "Dashboard";
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
    <div className="center1-container1">
      <div className="container1">
        <div className="heading">Sign In</div>
          <form onSubmit={handleSignIn} className="form">
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
            <input
              required
              className="input"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="forgot-password">
              <Link to="/ForgotPassword">Forgot Password?</Link>
            </span>
            <input className="login-button" type="submit" value="Sign In" />
          </form>
          <div className="social-account-container">
            <span className="title">Or Sign in with</span>
            <div className="social-accounts">
              <button
                className="social-button google"
                onClick={initiateGoogleAuthentication}
              >
                <FcGoogle className="svg" />
              </button>

              <button class="social-button apple">
                <svg class="svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
                </svg>
              </button>

              <button class="social-button twitter">
              <svg class="svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
              </svg>
            </button>

            </div>
          </div>
          <span className="agreement">
            <a href="#">Learn user licence agreement</a>
          </span>
        <ToastContainer />
      </div>
    </div>
  );
};

export default AdminLogin;
