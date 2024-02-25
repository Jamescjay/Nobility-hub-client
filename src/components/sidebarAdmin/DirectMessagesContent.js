// DirectMessagesContent.jsx

import React from 'react';
//import '../styling/DirectMessagesContent.css'; // Import your styling for DirectMessagesContent

const DirectMessagesContent = ({ data }) => {
  return (
    <div className="direct-messages-container">
      <h2>Direct Messages</h2>
      {/* Add your messaging content and logic here */}
      <div className="messages-list">
        {/* Display the list of direct messages */}
        <div className="message-item">
          <div className="message-avatar">
            {/* Display the sender's avatar */}
          </div>
          <div className="message-details">
            <h3>Sender Name</h3>
            <p>Last message preview</p>
          </div>
        </div>
        {/* Add more message items as needed */}
      </div>
      {/* Add a message input form or any other messaging components as needed */}
    </div>
  );
};

export default DirectMessagesContent;
