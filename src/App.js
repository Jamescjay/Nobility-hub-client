import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLoginPage from "./components/AdminLoginPage";
import LearnersLogin from "./components/LearnersLogin";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import LearnersDashboard from "./components/Learnersdashboard";
import Canvas from "./components/sidebarAdmin/CanvasAdminDashboard";
import CanvasHome from "./components/sidebarLearner/CanvasDashboard";
import Overall from "./components/sidebarAdmin/Overall";
import CanvasAdminHome from "./components/CanvasAdminHome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/adminlogin" element={<AdminLoginPage />} />
        <Route path="/dashboard" element={<Dashboard />}></Route>

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
