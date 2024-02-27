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
            <button onClick={handleSendMessage}className="sent-button">
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
            </div>
            <span>Send</span>
          </button>
          }
        />
      </div>
    </div>
  );
}

export default ChatComponent;
