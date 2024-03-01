// Home.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "../styling/Home.css";

import MyLoad from "../components/MyLoad";
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
                <a href="#about" className="scroll-link">
                  About
                </a>
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

          <section id="about" className="about-section">
            <div className="about-container">
              <h2 className="about-heading">About Us</h2>
              <p className="about-text">
                Nobility Hub is a platform providing a conducive learning and
                development environment. Offering a wide range of courses tailored to meet our learners 
                needs. Our courses are designed to help you become a certified software
                engineer. We also offer a variety of resources to help you learn and grow in your
                career.
              </p>

            
            </div>
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
