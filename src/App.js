import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home1";
import AdminLoginPage from "./components/AdminLoginPage";
import LearnersLogin from "./components/LearnersLogin";
import Dashboard from "./components/Dashboard";
import Courses from "./components/Dashboard1";
import Dashboard1 from "./components/Dashboard1";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/adminlogin" element={<AdminLoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/LearnersLogin" element={<LearnersLogin />} />
        <Route path="/dashboard1/*" element={<Dashboard1 />} />
      </Routes>
    </Router>
  );
}

export default App;
