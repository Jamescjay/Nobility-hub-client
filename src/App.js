
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLoginPage from "./components/AdminLoginPage";
import LearnersLogin from "./components/LearnersLogin";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import SignupForm from "./components/SignUp";

import Chat from "./components/Chat";





function App() { 
  return (
    <Router>
      <Routes>
        <Route path="/adminlogin" element={<AdminLoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/LearnersLogin" element={<LearnersLogin />} />
        <Route path="/landing-page" element={<Home  />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </Router>
  );
}

export default App;
