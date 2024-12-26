// src/components/MessageList.jsx
import React, { useContext } from 'react';
import { ChatContext } from '../context/ChatContext';

const MessageList = () => {
  const { messages } = useContext(ChatContext);

  return (
    <ul>
      {messages.map((msg, index) => (
        <li
          key={index}
          className={`p-2 rounded my-1 ${msg.type === 'user' ? 'bg-blue-100' : 'bg-gray-200'}`}
        >
          {msg.text}
        </li>
      ))}
    </ul>
  );
};

export default MessageList;