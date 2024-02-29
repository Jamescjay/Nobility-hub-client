import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import HttpCall from './HttpCall';
import ChatComponent from './ChatComponent'; 

function MessagingSection() {
  const [socketInstance, setSocketInstance] = useState(null);
  const [loading, setLoading] = useState(true);
  const [buttonStatus, setButtonStatus] = useState(false);

  const handleClick = () => {
    setButtonStatus(!buttonStatus);
  };

  useEffect(() => {
    if (buttonStatus === true) {
      const socket = io("http://localhost:5555/", {
        transports: ['websocket'],
        cors: {
          origin: "http://localhost:3000",
          credentials: true
        }
      });

      setSocketInstance(socket);

      socket.on('connected', (data) => {
        console.log(data);
      });

      setLoading(false);

      socket.on('disconnect', (data) => {
        console.log(data);
      });

      return function cleanup() {
        socket.disconnect();
      };
    }
  }, [buttonStatus]);

  return (
    <div className="App">
      <h3>Nobility chat</h3>
      <div className='line'>
        <HttpCall />
      </div>
      {!buttonStatus ? (
        <button onClick={handleClick}>Turn Chat On</button>
      ) : (
        <>
          <button onClick={handleClick}>Turn Chat off</button>
          <div className='line'>
            {!loading && <ChatComponent socket={socketInstance} />} {/* Use ChatComponent */}
          </div>
        </>
      )}
    </div>
  );
}

export default MessagingSection;
