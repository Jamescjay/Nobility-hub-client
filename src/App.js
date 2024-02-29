import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLoginPage from "./components/AdminLoginPage";
import LearnersLogin from "./components/LearnersLogin";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import LearnersDashboard from "./components/Learnersdashboard";
import Canvas from "./components/sidebarAdmin/CanvasAdminDashboard";
import Overall from "./components/sidebarAdmin/Overall";
import AboutUs from "./components/AboutUs";
import ForgotPassword from "./components/ForgotPassword";

import CanvasHome from "./components/sidebarLearner/CanvasDashboard";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/adminlogin" element={<AdminLoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />


        <Route path="/Canvas" element={<Canvas />} />
        <Route path="/Overall" element={<Overall />} />

        <Route path="/Learnersdashboard" element={<LearnersDashboard />} />
        <Route path="/CanvasHome/*" element={<CanvasHome />} />
        <Route path="/Canvas/*" element={<Canvas />} />
        <Route path="/LearnersLogin" element={<LearnersLogin />} />
      </Routes>
    </Router>
  );
}

export default App;