import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
//import './style/Sidebar.css'; // Import your CSS file for styling

const Sidebar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [showAccounts, setShowAccounts] = useState(false);
  

  const toggleAccounts = () => {
    setShowAccounts(!showAccounts);
  };

  const handleSubmenuClick = (path) => {
    navigate(path);
  };

  const sidebarStyle = {
    width: '200px',
    backgroundColor: '#000080',
    padding: '20px',
    position: 'fixed',
    left: 0,
    top: 0,
    height: '100%',
  };

  const linkStyle = {
    color: '#FFFFFF',
    textDecoration: 'none',
    marginBottom: '10px',
  };
  

  return (
    <div  style={sidebarStyle} className="sidebar">
      <div className="sidebar-header">
        <h2  style={{ color: '#FFFFFF' }}>Nobility</h2>
      </div>
      <ul  style={{ listStyle: 'none', padding: 0 }} className="sidebar-menu">
        <li style={{ color: '#FFFFFF' }} className={`menu-item ${showAccounts ? 'active' : ''}`} onClick={toggleAccounts}>
          Accounts
          {showAccounts && (
            <ul className="submenu">
              <li style={linkStyle} onClick={() => handleSubmenuClick('/accounts/canvas')}>Canvas</li>
              <li  style={linkStyle} onClick={() => handleSubmenuClick('/accounts/cohort')}>Cohort</li>
              
            </ul>
          )}
        </li>
        <li style={{ color: '#FFFFFF' }} className={`menu-item ${pathname === '/messages' && 'active'}`}>
          <Link to="/messages">messages</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;