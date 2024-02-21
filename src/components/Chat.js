import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import moment from "moment";
import "../index.css";

const Chat = ({ username, otherUser }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          `/api/messages/${username}/${otherUser}`
        );
        setMessages(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMessages();
  }, [username, otherUser]);

  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/messages", {
        sender: username,
        recipient: otherUser,
        content: newMessage,
      });
      setNewMessage("");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat-container" >
      <div className="chat-area">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${
              message.sender === username ? "sent" : "received"
            }`}
          >
            <div className="message-content">
              <div className="message-username">{message.sender}</div>
              <div className="message-text">{message.content}</div>
              <div className="message-timestamp">
                {moment(message.timestamp).format("h:mm A")}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="chat-input-container">
        <div className="chat-input">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
