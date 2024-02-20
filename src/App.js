
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLoginPage from "./components/AdminLoginPage";
import LearnersLogin from "./components/LearnersLogin";
import Dashboard from "./components/Dashboard";


function App() { 
  return (
    
    <Router>
      <Routes>
        <Route path="/adminlogin" element={<AdminLoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/LearnersLogin" element={<LearnersLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
