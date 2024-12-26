import React, { useState } from "react";

function ChatInput({ onSend }) {
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSend(input.trim());
      setInput("");
    }
  };

  return (
    <form 
      onSubmit={handleSend}
      className="flex overflow-hidden gap-10 py-3 pr-3 pl-6 text-sm font-semibold bg-white border border-solid border-neutral-200 max-w-[302px] rounded-[50px] text-zinc-400"
    >
      <label htmlFor="chatInput" className="sr-only">Type your message</label>
      <input
        type="text"
        id="chatInput"
        className="my-auto bg-transparent border-none outline-none w-full"
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        aria-label="Chat input"
      />
      <button 
        type="submit"
        aria-label="Send message"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8bdb13362df53577af16169a30ba48ae16789ba6eb8ad02871fd4b288608e783?placeholderIfAbsent=true&apiKey=b84dd30bad284682bdd2468de5480c9b"
          alt=""
          className="object-contain shrink-0 w-8 rounded-2xl aspect-square"
        />
      </button>
    </form>
  );
}

export default ChatInput;
