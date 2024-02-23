import React from 'react';

const ChannelsContent = ({ data }) => {
  return (
    <div>
      {/* Content for Channels section */}
      {data ? <p>{data.content}</p> : <p>No data available.</p>} 
      <h2>Channels Content</h2>
      {/* Add your specific content here */}
    </div>
  );
};

export default ChannelsContent;