// the homepage of the app
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "../styling/Home.css"// Import the custom CSS file

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="main-heading">
        Nobility HUb {" "}
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
    </div>
  );
};

export default Home;