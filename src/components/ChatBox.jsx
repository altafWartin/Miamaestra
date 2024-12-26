// src/components/ChatBox.jsx
import React, { useContext } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { ChatContext } from '../context/ChatContext';

const ChatBox = ({ onClose }) => (
  <div className="fixed bottom-20 right-5 bg-white w-80 h-96 rounded-lg shadow-lg flex flex-col">
    <header className="p-3 bg-blue-500 text-white flex justify-between items-center">
      <span>Miamaestra Chat</span>
      <button onClick={onClose} className="text-white">✕</button>
    </header>
    <div className="flex-grow p-2 overflow-y-auto">
      <MessageList />
    </div>
    <div className="p-2">
      <MessageInput />
    </div>
  </div>
);

export default ChatBox;