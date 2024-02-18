// src/components/AdminLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      const { success, token, user_email, role } = data;

      if (success) {
        localStorage.setItem('token', token);
        navigate('/dashboard');
      } else {
        setErrorMessage('Invalid credentials');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('An error occurred during login');
    }
  };

  return (
    <div>
      <h1 style={{ color: '#333', marginBottom: '20px' }}>Admin Login</h1>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <label style={{ color: '#333', display: 'block', marginBottom: '8px' }}>Email:</label>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '5px' }}
      />
      <label style={{ color: '#333', display: 'block', marginBottom: '8px' }}>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '5px' }}
      />
      <button
        onClick={handleLogin}
        style={{
          background: '#ff4b2b',
          color: '#fff',
          padding: '12px',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Login
      </button>
    </div>
  );
};

export default AdminLogin;