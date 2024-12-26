import React, { useState, useEffect } from "react";

const MicButtonWithEffect = () => {
    const [isSpeaking, setIsSpeaking] = useState(false);

    useEffect(() => {
        // Initialize SpeechRecognition
        const SpeechRecognition =
            window.SpeechRecognition || window.webkitSpeechRecognition;

        if (!SpeechRecognition) {
            console.warn("SpeechRecognition is not supported in this browser.");
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;

        // Handle speech start
        recognition.onstart = () => {
            console.log("Speech recognition started");
        };

        // Detect speech and update state
        recognition.onresult = (event) => {
            console.log("Speech detected");
            setIsSpeaking(true);
            clearTimeout(stopEffectTimeout); // Clear previous timeout if speaking continues
            stopEffectTimeout = setTimeout(() => {
                console.log("No speech detected for 2 seconds. Stopping effect.");
                setIsSpeaking(false);
            }, 2000); // Delay to stop effect
        };

        // Handle speech end
        recognition.onend = () => {
            console.log("Speech recognition stopped");
            setIsSpeaking(false);
        };

        // Handle errors
        recognition.onerror = (event) => {
            console.error("Speech recognition error:", event.error);
        };

        // Start listening
        recognition.start();
        console.log("Speech recognition initialized and started.");

        return () => {
            recognition.stop();
            console.log("Speech recognition stopped and cleaned up.");
        };
    }, []);

    let stopEffectTimeout;

    return (
        <button
            className={`absolute bottom-6 ${
                isSpeaking
                    ? "animate-pulse bg-red-300 shadow-[0_0_15px_rgba(255,0,0,0.5)]"
                    : "shadow-[0px_0px_8px_rgba(0,0,0,0.25)]"
            } rounded-full`}
            style={{
                width: "78px",
                height: "78px",
            }}
        >
            <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8874b519e35563f0b13fde81e41ac62b4f80ae316d6d0ac2ad0790e491764269?placeholderIfAbsent=true&apiKey=b84dd30bad284682bdd2468de5480c9b"
                alt="Mic Icon"
                className="object-contain aspect-square rounded-full"
            />
        </button>
    );
};

export default MicButtonWithEffect;
