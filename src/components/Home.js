// Home.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Menu } from "lucide-react";
import "../styling/Home.css"; // Import the common CSS file
import Loader from "../components/Loader"; // Import the Loader component
import MyLoad from "../components/MyLoad";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false); // State to manage dropdown visibility

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Entire layout */}
      {loading ? (
        // Show Loader while loading
        <MyLoad />
      ) : (
        // Content and other sections
        <>
          {/* Header */}
          <header className="header-container">
            <nav className="navigation">
              <div className="logo">Nobility Hub</div>
              <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
              </div>
              <div className="dropdown-container">
                <button
                  className="dropdown-button"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  Menu <Menu className="dropdown-icon" />
                </button>
                {showDropdown && (
                  <div className="dropdown-menu">
                    <Link to="/adminlogin">Admin's Login</Link>
                    <Link to="/LearnersLogin">Learner's Login</Link>
                  </div>
                )}
              </div>
            </nav>
          </header>

          {/* Section (Your existing content) */}
          <section className="home-container">
            <Loader />
            <h1 className="main-heading">
              Nobility Hub{" "}
              <span className="text-blue-600">worksession</span> innovating through technology.
            </h1>
            <p className="sub-text">
              We firmly believe in granting everyone the chance to thrive in the technology and programming sector.
              Through our groundbreaking educational methods, we equip students with the essential skills and expertise required to embark on prosperous career paths.
              Come join us and be a pioneer of tomorrow!
            </p>
            <div className="button-container">
              <Link className="primary-button" to={"/adminlogin"}>
                Admin's Login <ArrowRight className="arrow-icon" />
              </Link>
              <Link className="secondary-button" to={"/LearnersLogin"}>
                Learner's Login <ArrowRight className="arrow-icon" />
              </Link>
            </div>
          </section>

          {/* Footer */}
          <footer className="footer-container">
            <p>&copy; 2024 Nobility Hub. All rights reserved.</p>
          </footer>
        </>
      )}
    </>
  );
};

export default Home;
