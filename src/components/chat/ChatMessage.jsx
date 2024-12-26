import React from "react";

function ChatMessage({ isUser, message, avatar }) {
    return (
        <div className={`flex ${isUser ? "justify-end" : "justify-start"} items-center space-x-2`}>
            {!isUser && (
                <img
                    src={avatar}
                    alt="Bot Avatar"
                    className="w-8 h-8 rounded-full object-cover"
                    loading="lazy"
                />
            )}
            <div
                className={`p-3 rounded-lg text-xs text-white ${isUser ? "border border-1 border-blue-500" : "bg-blue-500"
                    } max-w-xs md:max-w-sm lg:max-w-md`}
            >
                {message}
            </div>
        </div>
    );
}

export default ChatMessage;
