// WebSocketCall.jsx

import React, { useState, useEffect } from 'react';
import '../../styling/MessagingSection.css';


function WebSocketCall({ socket }) {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    const handleInputChange = (e) => {
        const inputMessage = e.target.value;
        setMessage(inputMessage);
    };

    const handleSubmit = () => {
        if (!message.trim()) {
            return;
        }

        // Emit the message as a JSON string
        socket.emit('data', JSON.stringify({ data: message }));
        setMessage("");
    };

    useEffect(() => {
        const handleData = (data) => {
            try {
                const parsedData = JSON.parse(data.data);
                setMessages((prevMessages) => [...prevMessages, { text: parsedData.data, id: parsedData.id }]);
            } catch (error) {
                console.error("Error parsing JSON data:", error);
            }
        };

        socket.on('data', handleData);

        return () => {
            socket.off('data', handleData);  // Remove the specific 'data' event listener
        };
    }, [socket]);

    return (
        <div className="message-container">
            <h2>Chat Communication</h2>

            <div className="messages-container">
                <div className="incoming-messages">
                    {messages.map((msg, index) => (
                        <div key={index} className={msg.id === socket.id ? "outgoing-message" : "incoming-message"}>
                            {msg.text}
                        </div>
                    ))}
                </div>
            </div>

            <div className="input-container">
                <input type="text" onChange={handleInputChange} value={message} />

                {/* Modified button with SVG */}
                <button className="sent-button" onClick={handleSubmit}>
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
            </div>
        </div>
    );
}

export default WebSocketCall;
