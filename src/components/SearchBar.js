import React, { useState } from 'react';

const searchBarStyle = {
  backgroundColor: '#000080',
  padding: '8px',
  borderRadius: '5px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  position: 'fixed',
  top: '20px',
  left: '50%', // Changed to center
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


const SearchBar = ({ setDisplay }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/search?query=${query}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setDisplay(data); // Assuming data is the appropriate format for your display
      setError(null); // Clear error if search is successful
    } catch (error) {
      setLoading(false);
      setError('Error searching. Item not Found.'); // Set custom error message
    }
  };

  const handleChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    handleSearch(query); // Call handleSearch on every change
  };

  return (
    <form style={searchBarStyle} className="searchbar">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleChange}
        style={inputStyle}
        disabled={loading}
      />
      {error && <div>Error: {error}</div>}
      {/* Include a button if needed */}
      {/* <button style={buttonStyle}>Search</button> */}
    </form>
  );
};

export default SearchBar;
