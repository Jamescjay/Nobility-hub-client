// Home.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "../styling/Home.css";

import MyLoad from "../components/MyLoad"; // Import the MyLoad component
import Cash from "../components/loads/Cash";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      {loading ? (
        <MyLoad />
      ) : (
        <>
          <header className="header-container">
            <nav className="navigation">
              <div className="logo">Nobility Hub</div>
              <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
              </div>
              <div className="button-container">
                <Link className="primary-button" to="/adminlogin">
                  Admin's Login <ArrowRight className="arrow-icon" />
                </Link>
                <Link className="secondary-button" to="/LearnersLogin">
                  Learner's Login <ArrowRight className="arrow-icon" />
                </Link>
              </div>
            </nav>
          </header>

          <section className="home-container">
            
            <div className="loader-left">
              <div className="loader"></div>
              <div className="loader"></div>
              <div className="loader"></div>
            </div>
            <div className="content-container">
              <h1 className="main-heading">
                Nobility Hub <span className="text-blue-600">worksession</span>
              </h1>
              <p className="sub-text">
                Study online and become a Nobility hub certified Software Engineer in:
              </p>
            </div>
          </section>

          <section className="cash-section">
            <Cash />
          </section>

          <footer className="footer-container">
            <p>&copy; 2024 Nobility Hub. All rights reserved.</p>
          </footer>
        </>
      )}
    </>
  );
};

export default Home;
