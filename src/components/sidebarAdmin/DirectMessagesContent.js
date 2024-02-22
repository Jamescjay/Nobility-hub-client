import React from 'react';

const DirectMessagesContent = ({ data }) => {
  return (
    <div>
      {/* Content for Direct Messages section */}
      {data ? <p>{data.content}</p> : <p>No data available.</p>}
      <h2>Direct Messages Content</h2>
      {/* Add your specific content here */}
    </div>
  );
};

export default DirectMessagesContent;
