import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatBotButton from './components/ChatBotButton';
import { ChatProvider } from './context/ChatContext';
import { VideoConferencePopup } from './components/VideoConferencePopup';

const App = () => (
  <ChatProvider>
    <Router>
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <Routes>
          <Route path="/" element={<ChatBotButton />} />
          <Route path="/video" element={<VideoConferencePopup />} /> {/* Add the /video route */}
        </Routes>
      </div>
    </Router>
  </ChatProvider>
);

export default App;
