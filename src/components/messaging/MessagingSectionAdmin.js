// MessagingSectionAdmin.js
import React, { useState } from 'react';
import '../../styling/MessagingSectionAdmin.css';


const MessagingSectionAdmin = () => {
 const [messageInput, setMessageInput] = useState('');
 const [messages, setMessages] = useState([]);


 const handleInputChange = (event) => {
   setMessageInput(event.target.value);
 };


 const sendMessageToBackend = async () => {
   try {
     // Simulating API call
     console.log('Message sent to backend:', messageInput);


     // Update the state with the new message
     setMessages([
       ...messages,
       { text: messageInput, sender: 'user', timestamp: new Date() },
     ]);


     // Clear the message input
     setMessageInput('');
   } catch (error) {
     console.error('Message error', error);
   }
 };


 const handleSentMessage = () => {
   sendMessageToBackend();
 };


 return (
   <div className="messaging-section">
     <div className="notification-area">
       <div className="notification">New Message!</div>
     </div>


     <div className="search-and-recent-chats">
       <input type="text" placeholder="Search for people..." />
       <div className="recent-chats">
         <div className="chat-item">User 1</div>
         <div className="chat-item">User 2</div>
       </div>
     </div>


     <div className="learners-conversation-container">
       <div className="learners-chat-container">
         {messages.map((msg, index) => (
           <div
             key={index}
             className={`learners-message ${msg.sender === 'user' ? 'sent' : 'received'}`}
           >
             <div className="message-text">{msg.text}</div>
             <div className="message-timestamp">
               {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
             </div>
           </div>
         ))}
       </div>
     </div>


     <div className="learners-message-input">
       <div className="textarea-wrapper">
         <textarea
           placeholder="Type your message..."
           value={messageInput}
           onChange={handleInputChange}
         ></textarea>
         <button onClick={handleSentMessage} className="sent-button">
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
   </div>
 );
};


export default MessagingSectionAdmin;



