import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import io from 'socket.io-client';
import './Chatting.css';
import { doctors } from '../Doctor/Doctor';
import ChatMessage from '../ChatMessage';

const socket = io('http://localhost:4500'); // Replace with your backend URL

const Chatting = () => {
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const doctor = doctors.find(d => d.id === parseInt(doctorId));

  useEffect(() => {
    const handleMessage = (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    socket.on('message', handleMessage);

    return () => {
      socket.off('message', handleMessage);
    };
  }, []);

  const sendMessage = () => {
    if (input.trim()) {
      const message = { text: input, user: 'user', doctor: doctor.name };
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

  const handleDoctorSelect = (id) => {
    navigate(`/chat/${id}`);
  };

  return (
    <div className="chat-page-container">
      <div className="doctor-list-sidebar">
        <h2 className="chat-heading">Chat with Doctors</h2>
        <ul className="doctor-list">
          {doctors.map((doctor) => (
            <li
              key={doctor.id}
              onClick={() => handleDoctorSelect(doctor.id)}
              className={doctor.id === parseInt(doctorId) ? 'active' : ''}
            >
              <img src={doctor.image} alt={doctor.name} className="doctor-thumbnail" />
              <div>
                <h4 className='doctor-name'>{doctor.name}</h4>
                <p className='doctor-domain'>{doctor.domain}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="chat-container">
        {doctor && (
          <>
            <div className="doctor-info">
              <img src={doctor.image} alt={doctor.name} className="doctor-thumbnail" />
              <h3>{doctor.name}</h3>
              <p className='doctorchat-domain'>{doctor.domain}</p>
            </div>
            <div className="messages">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`message ${message.user === 'user' ? 'user-message-container' : 'doctor-message-container'}`}
                >
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
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
              />
              <button onClick={sendMessage}>Send</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Chatting;
