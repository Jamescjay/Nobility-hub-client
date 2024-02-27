// ChatComponent.jsx
import React, { useState, useEffect } from 'react';
import { MessageList, Input } from 'react-chat-elements';
import 'react-chat-elements/dist/main.css';
import '../../styling/MessagingSection.css';

function ChatComponent({ socket }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleInputChange = (e) => {
    const inputMessage = e.target.value;
    setMessage(inputMessage);
  };

  const handleSendMessage = () => {
    if (!message.trim()) {
      return;
    }

    // Emit the message as a JSON string
    socket.emit('data', JSON.stringify({ data: message }));
    setMessage("");
  };

  useEffect(() => {
    const handleReceivedData = (data) => {
      try {
        const parsedData = JSON.parse(data.data);
        setMessages((prevMessages) => [...prevMessages, { text: parsedData.data, id: parsedData.id }]);
      } catch (error) {
        console.error("Error parsing JSON data:", error);
      }
    };

    socket.on('data', handleReceivedData);

    return () => {
      socket.off('data', handleReceivedData);  // Remove the specific 'data' event listener
    };
  }, [socket]);

  return (
    <div className="chat-container">
      <MessageList
        className="message-list"
        lockable={true}
        toBottomHeight={'100%'}
        dataSource={messages.map(msg => ({
          position: msg.id === socket.id ? 'right' : 'left',
          type: 'text',
          text: msg.text,
          date: new Date(),
        }))}
      />

      <div className="input-container">
        <Input
          placeholder="Type your message..."
          multiline={false}
          onChange={handleInputChange}
          value={message}
          rightButtons={
            <button className="send-button" onClick={handleSendMessage}>
              Send
            </button>
          }
        />
      </div>
    </div>
  );
}

export default ChatComponent;
