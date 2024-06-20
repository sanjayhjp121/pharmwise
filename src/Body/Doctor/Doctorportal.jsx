import React, { useState } from 'react';
import DoctorChat from './DoctorChat';
import './Doctorportal.css';

const users = [
  { id: 1, name: 'Shyamlal' },
  { id: 2, name: 'Raju' },
  // Add more users as needed
];

const DoctorPortal = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleChat = (userId) => {
    setSelectedUser(users.find(user => user.id === userId));
  };

  return (
    <div className="doctor-portal-container">
      <div className="user-list">
        <h2>Patients</h2>
        {users.map(user => (
          <div key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <button onClick={() => handleChat(user.id)} className="chat-button">
              Chat Now
            </button>
          </div>
        ))}
      </div>
        {selectedUser && <DoctorChat user={selectedUser} />}
    </div>
  );
};

export default DoctorPortal;
