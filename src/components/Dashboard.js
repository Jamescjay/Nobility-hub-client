// src/components/Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ user }) => {
  const navigate = useNavigate();

  // Check if user is defined before accessing properties
  if (!user || !user.email || !user.role) {
    return (
      <div>
        <p>Error: User data is not available.</p>
        <button onClick={() => navigate('/adminlogin')}>Go to Login</button>
      </div>
    );
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/adminlogin');
  };

  return (
    <div>
      <h1>Welcome to the Dashboard, {user.email}!</h1>
      <p>Role: {user.role}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
