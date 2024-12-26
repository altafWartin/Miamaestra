import React, { useState, useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

export function ChatContainer() {
    const [messages, setMessages] = useState([
        {
            isUser: false,
            message: "Hey, can I help you with something?",
            avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/e35e63a97cfe2fc90f0f2cee6cfeaacfe1d06e2771612221e8fd9af8bd1db5d9?placeholderIfAbsent=true&apiKey=b84dd30bad284682bdd2468de5480c9b",
        },
    ]);

    const defaultBotAvatar =
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e35e63a97cfe2fc90f0f2cee6cfeaacfe1d06e2771612221e8fd9af8bd1db5d9?placeholderIfAbsent=true&apiKey=b84dd30bad284682bdd2468de5480c9b";
    const defaultUserAvatar =
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e35e63a97cfe2fc90f0f2cee6cfeaacfe1d06e2771612221e8fd9af8bd1db5d9?placeholderIfAbsent=true&apiKey=b84dd30bad284682bdd2468de5480c9b";

    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSendMessage = (newMessage) => {
        setMessages((prev) => [
            ...prev,
            { isUser: true, message: newMessage, avatar: defaultUserAvatar },
        ]);

        // Simulate bot response
        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                {
                    isUser: false,
                    message: "I'm just a bot. Let me know how I can assist further!",
                    avatar: defaultBotAvatar,
                },
            ]);
        }, 1000);
    };

    return (
        <div className="flex flex-col  mt-8 w-full rounded-md ">
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                {messages.map((msg, index) => (
                    <ChatMessage
                        key={index}
                        isUser={msg.isUser}
                        message={msg.message}
                        avatar={msg.avatar}
                    />
                ))}
                <div ref={messagesEndRef} />
            </div>
            <div className="p-4">
                <ChatInput onSend={handleSendMessage} />
            </div>
        </div>
    );
}

export default ChatContainer;
