import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../index.css";
import SignupForm from "./SignUp";

const Chat = ({ username }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:5555/message/${username}`
        );
        setMessages(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMessages();
  }, [username]);

  const sendMessage = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5555/message", {
        sender: "currentUser",
        content: newMessage,
        recipient: username,
      });
      setMessages([...messages, response.data]);
      setNewMessage("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="chat-container">
      <h1>Direct messages with {username}</h1>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            <strong>{message.sender.username}:</strong> {message.content}
          </li>
        ))}
      </ul>
      <div className="chat-input-container">
        <input
          type="text"
          className="chat-input"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
