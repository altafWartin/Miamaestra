// src/components/MessageInput.jsx
import React, { useState, useContext } from 'react';
import { ChatContext } from '../context/ChatContext';
// import { getAIResponse } from '../services/aiService';

const MessageInput = () => {
  const [input, setInput] = useState('');
  const { addMessage } = useContext(ChatContext);

  const handleSend = async () => {
    if (input.trim()) {
      addMessage({ type: 'user', text: input });
    //   const reply = await getAIResponse(input);
    //   addMessage({ type: 'ai', text: reply });
      setInput('');
    }
  };

  return (
    <div className="flex">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-grow p-2 border rounded-l"
        placeholder="Type your message"
      />
      <button onClick={handleSend} className="bg-blue-500 text-white px-4 rounded-r">
        Send
      </button>
    </div>
  );
};

export default MessageInput;