// App.js
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLoginPage from "./components/AdminLoginPage";
import LearnersLogin from "./components/LearnersLogin";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import LearnersDashboard from "./components/Learnersdashboard";
import Canvas from "./components/sidebarAdmin/Canvas";
import Overall from "./components/sidebarAdmin/Overall";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adminlogin" element={<AdminLoginPage />} />
        <Route path="/dashboard" element={<Dashboard />}>
         
        
        </Route>
        <Route path="/Canvas" element={<Canvas />} />
        <Route path="/Overall" element={<Overall />} />

        <Route path="/Learnersdashboard" element={<LearnersDashboard />} />
        <Route path="/LearnersLogin" element={<LearnersLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
