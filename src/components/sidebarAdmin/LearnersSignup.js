import React from 'react';

const LearnsSignup = ({ data }) => {
  return (
    <div>
      {/* Content for Students section */}
      {data ? <p>{data.content}</p> : <p>No data available.</p>}
      <h2>Students Content</h2>
      {/* Add your specific content here */}
    </div>
  );
};

export default LearnsSignup;