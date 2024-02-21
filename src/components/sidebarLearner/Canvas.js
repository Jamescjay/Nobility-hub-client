// Canvas.js

import React from 'react';

const Canvas = () => {
  const canvasStyles = {
    container: {
      padding: '20px',
      backgroundColor: '#f0f0f0',
      border: '1px solid #ccc',
      borderRadius: '8px',
      margin: '20px',
    },
    heading: {
      color: '#333',
    },
  };

  return (
    <div style={canvasStyles.container}>
      <h2 style={canvasStyles.heading}>Canvas</h2>
      {/* Add your specific content here */}
    </div>
  );
};

export default Canvas;
