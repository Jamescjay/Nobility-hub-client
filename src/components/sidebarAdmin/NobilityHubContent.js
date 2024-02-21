import React from 'react';

const NobilityHubContent = ({ data }) => {
  return (
    <div>
      {/* Content for Nobility Hub section */}
      {data ? <p>{data.content}</p> : <p>No data available.</p>}
      <h2>Nobility Hub Content</h2>
      {/* Add your specific content here */}
    </div>
  );
};

export default NobilityHubContent;