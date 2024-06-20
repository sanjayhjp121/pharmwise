import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import './DoctorChat.css';
import ChatMessage from '../ChatMessage';

const socket = io('http://localhost:4500');  // Replace with your backend URL

const DoctorChat = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const handleMessage = (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    };
  
    // Check if the event listener has already been added
    const messageListener = (message) => handleMessage(message);
    if (!socket.hasListeners('message')) {
      socket.on('message', messageListener);
    }
  
    return () => {
      // Remove the event listener when the component unmounts
      socket.off('message', messageListener);
    };
  }, []);

  const sendMessage = () => {
    if (input.trim()) {
      const message = { text: input, user: 'doctor', userName: user.name };
      socket.emit('message', message);
      setMessages((prevMessages) => [...prevMessages, message]);
      setInput('');
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chat-container">
      <div className="user-info">
        <h3>Chatting with {user.name}</h3>
      </div>
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.user === 'doctor' ? 'doctor-message-container' : 'user-message-container'}`}>
            <ChatMessage message={message.text} isReceived={message.user === 'doctor'} />
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyUp={handleKeyPress}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default DoctorChat;
