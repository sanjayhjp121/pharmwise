import React from 'react';
import './ChatMessage.css';

const ChatMessage = ({ message, isReceived }) => {
  return (
    <div className={isReceived ? 'received-message' : 'sent-message'}>
      {message}
    </div>
  );
};

export default ChatMessage;
