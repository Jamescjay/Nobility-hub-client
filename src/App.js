
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLoginPage from "./components/AdminLoginPage";
import LearnersLogin from "./components/LearnersLogin";
import Dashboard from "./components/Dashboard";
import Courses from "./components/Courses";
import CourseDetails from "./components/CourseDetails";


function App() { 
  return (
    <Router>
      <Routes>
        <Route path="/adminlogin" element={<AdminLoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/LearnersLogin" element={<LearnersLogin />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
       
      </Routes>
    </Router>
  );
}

export default App;
