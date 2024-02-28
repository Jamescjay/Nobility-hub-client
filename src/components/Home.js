// Home.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "../styling/Home.css"; // Import the common CSS file
import Loader from "../components/Loader"; // Import the Loader component
import MyLoad from "../components/MyLoad";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      
      <div className="home-container">
        {loading && <MyLoad />} {/* MyLoad will be visible only during loading */}
        {!loading && (
          <>
            <Loader /> {/* Loader will always be visible, you can customize this */}
            <h1 className="main-heading">
              Nobility HUb{" "}
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
          </>
        )}

      </div>
    </>
  );
};

export default Home;
