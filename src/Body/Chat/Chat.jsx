import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ChatWithDoctor.css';
import { doctors } from '../Doctor/Doctor';

const ChatWithDoctor = () => {
  const navigate = useNavigate();

  const handleChat = (doctorId) => {
    navigate(`/chat/${doctorId}`);
  };

  return (
    <div className="doctor-chat-container">
      <div className="doctor-chat-list">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="doctor-chat-card">
            <img src={doctor.image} alt={doctor.name} className="doctor-chat-thumbnail" />
            <div className="doctor-chat-info">
              <h3 className="doctor-chat-name">{doctor.name}</h3>
              <p className="doctor-chat-domain">{doctor.domain}</p>
              <button onClick={() => handleChat(doctor.id)} className="doctor-chat-button">
                Chat Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatWithDoctor;
