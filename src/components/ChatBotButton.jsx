import React, { useState, useCallback } from 'react';
import ChatBox from './ChatBox'; // Chat component
import { VideoConferencePopup } from './VideoConferencePopup'; // Video conference popup
import closeAi from '../assets/closeAi.svg'; // Close AI icon
import chatMessageIcon from '../assets/chatMessage.svg'; // Chat message icon
import miaMaestraLogo from '../assets/miaMaestraLogo.svg'; // AI logo
import closeChatMessageIcon from '../assets/closeChat.svg'; // Close chat message icon
import { Button } from 'primereact/button'; // PrimeReact button

const ChatBotButton = () => {
    // States to control the visibility of AI and Chatbot
    const [isAiOpen, setIsAiOpen] = useState(false); // Tracks if AI (video conference) popup is open
    const [isAiChatOpen, setIsAiChatOpen] = useState(false); // Tracks if ChatBox is open

    console.log("isAiChatOpen", isAiChatOpen);
    console.log("isAiOpen", isAiOpen);

    // Toggle the AI popup state
    const toggleAi = useCallback(() => setIsAiOpen(prev => !prev), []);

    // Toggle the ChatBox state
    const toggleAiChat = useCallback(() => setIsAiChatOpen(prev => !prev), []);

    // Determine the icon to be used based on the state
    const getAiIcon = () => (isAiOpen ? closeAi : miaMaestraLogo);
    const getChatIcon = () => (isAiChatOpen ? closeChatMessageIcon : chatMessageIcon);

    return (
        <div>
            {/* Floating Button Container */}
            <div className="flex justify-center gap-5 items-center fixed bottom-5 right-5 z-50">

                {/* Button to toggle the ChatBox, only visible if AI is open */}
                {isAiOpen && (
                    <Button
                        className="text-white rounded-full transform transition-transform duration-300 hover:scale-110"
                        onClick={toggleAiChat} // When clicked, it toggles ChatBox visibility
                        aria-label={isAiChatOpen ? 'Close chatbot' : 'Open chatbot'}
                    >
                        <img
                            src={getChatIcon()} // Dynamically selects the appropriate chat icon
                            alt={isAiChatOpen ? 'Close Chatbot Icon' : 'Chatbot Icon'}
                            className="w-9 aspect-square transition-opacity duration-300"
                        />
                    </Button>
                )}

                {/* Button to toggle the AI (Video Conference) popup */}
                <Button
                    className="text-white transform transition-transform duration-300 hover:scale-110"
                    onClick={toggleAi} // When clicked, it toggles AI popup visibility
                    aria-label={isAiOpen ? 'Close AI' : 'Open AI'}
                >
                    <img
                        src={getAiIcon()} // Dynamically selects the appropriate AI icon
                        alt={isAiOpen ? 'Close AI Icon' : 'AI Icon'}
                        className="w-12 aspect-square transition-opacity duration-300"
                    />
                </Button>
            </div>

            {/* Conditional Rendering for ChatBox and Video Conference Popup */}
            {/* {isAiChatOpen && <ChatBox onClose={() => setIsAiOpen(false)} />} */}
            {isAiOpen && <VideoConferencePopup isAiChatOpen={isAiChatOpen} onClose={() => setIsAiChatOpen(false)} />}
        </div>
    );
};

export default ChatBotButton;
