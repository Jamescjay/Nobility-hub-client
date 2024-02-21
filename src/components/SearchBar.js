import React, { useState } from 'react';

const searchBarStyle = {
  backgroundColor: '#000080',
  padding: '8px',
  borderRadius: '5px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  position: 'fixed',
  top: '20px',
  left: '54%',
  transform: 'translateX(-50%)',
  display: 'flex',
  alignItems: 'center', // Align items vertically
};

const inputStyle = {
  flex: '1', 
  marginRight: '15px',
  padding: '8px',
  border: 'none',
  borderRadius: '5px',
};

const buttonStyle = {
  padding: '8px 15px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#007bff',
  color: '#fff',
  cursor: 'pointer',
};

const SearchBar = ({ setDisplay }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
    // Example: Handle search action
    setDisplay(searchQuery);
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };
  return (
    <form onSubmit={handleSubmit} style={searchBarStyle} className="searchbar">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleChange}
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>Search</button>
    </form>
  );
};

export default SearchBar;