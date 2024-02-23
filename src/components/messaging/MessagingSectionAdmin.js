// MessagingSection.js
import React from 'react';
import '../../styling/MessagingSectionAdmin.css'; // Import the messaging section styles

const MessagingSectionAdmin = () => {
  return (
    <div className="learners-right-content">
      <div className="learners-conversation-container">
        {/* Your messaging content goes here */}
        {/* <div className="learners-message">Received message</div>
        <div className="learners-message sender">Sent message</div> */}
      </div>
      <div className="learners-message-input">
        <textarea placeholder="Type your message..."></textarea>
        {/* Add send button or any other controls as needed */}
      </div>
    </div>
  );
};

export default MessagingSectionAdmin;
