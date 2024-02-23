import React, { useState } from 'react';
import '../../styling/MessagingSectionAdmin.css';

const MessagingSectionAdmin = () => {
  const [messageInput, setMessageInput] = useState('');

  const handleInputChange = (event) => {
    setMessageInput(event.target.value);
  };

  const sendMessageToBackend = async () => {
    try {
      // getting the Api from the backend developer regarding message sending
      const response = await fetch('http://127.0.0.1:5555/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: messageInput,
          receiver: 'id', // we are making the receiver to get the message with their unique ID
        }),
      });

      if (response.ok) {
        console.log('Message successfully sent');
      } else {
        console.error('Failed to send message');
      }
    } catch (error) {
      console.error('Message error', error);
    }
  };

  const handleSentMessage = () => {
    sendMessageToBackend();
    setMessageInput('');
  };

  return (
    <div className="learners-right-content">
      <div className="learners-conversation-container">
        {/* Your messaging content goes here */}
        <div className="learners-message">Received message</div>
        <div className="learners-message sender">Sent message</div>
      </div>
      <div className="learners-message-input">
        <textarea
          placeholder="Type your message..."
          value={messageInput}
          onChange={handleInputChange}
        ></textarea>
        {/* Add send button or any other controls as needed */}
        <button onClick={handleSentMessage} className="sent-button">
          Send
        </button>
      </div>
    </div>
  );
};

export default MessagingSectionAdmin;
