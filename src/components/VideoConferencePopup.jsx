import React, { useState } from "react";
import { Draggable } from "./Draggable";
import aiBackgroundImageWithChat from "../assets/aiBackgroundImageWithChat.jpg";
import avatarImage from "../assets/avatarImage.svg";
import { ChatContainer } from "./chat/ChatContainer";
import { Button } from "primereact/button";
import MicButtonWithEffect from "./MicButtonWithEffect";

const ImageComponent = ({ src, alt, className }) => (
    <img loading="lazy" src={src} alt={alt} className={className} />
);

export const VideoConferencePopup = ({ isAiChatOpen, onClose }) => {
    console.log("isAiChatOpen inside VideoConferencePopup:", isAiChatOpen);
    const [isChatContainerVisible, setIsChatContainerVisible] = useState(true);


    const toggleChatContainer = () => {
        setIsChatContainerVisible(!isChatContainerVisible);
    };

    const headerImages = [
        {
            src: "https://cdn.builder.io/api/v1/image/assets/TEMP/70945a468d6576a9dc0a671d57fb1921f09ad90d43b9cb51d5785e8884403251?placeholderIfAbsent=true&apiKey=b84dd30bad284682bdd2468de5480c9b",
            alt: "MiaMaestra Logo",
            className: "object-contain shrink-0 self-stretch my-auto w-9 aspect-square",
        },
        {
            src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ead1c97f33023aee9e48b742bc5eb112cf037161c783e8006843dae706c9eaf9?placeholderIfAbsent=true&apiKey=b84dd30bad284682bdd2468de5480c9b",
            alt: "AI Indicator",
            className: "object-contain absolute bottom-px right-3.5 z-0 aspect-[2.14] h-[7px] w-[15px]",
        },
        {
            src: "https://cdn.builder.io/api/v1/image/assets/TEMP/723e49b5c78e159d4d874d1a2a53e77752ae025340c4f9148273a8ea55ad98ac?placeholderIfAbsent=true&apiKey=b84dd30bad284682bdd2468de5480c9b",
            alt: "Control Icon",
            className: "object-contain z-10 shrink-0 aspect-square w-[41px]",
        },
        {
            src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1407e9865e9337ee9e618798036359956e6a7833d4154faa42bb5312a4697937?placeholderIfAbsent=true&apiKey=b84dd30bad284682bdd2468de5480c9b",
            alt: "Settings Icon",
            className: "object-contain shrink-0 w-10 aspect-[0.98]",
        },
    ];

    return (
        <Draggable
            initialPosition={{ x: window.innerWidth - 480, y: window.innerHeight - 600 }}
        >
            <div
                className={`flex overflow-hidden flex-col bg-white rounded-xl transform transition-all ${isAiChatOpen ? "w-[835px]" : "w-[435px]"
                    } h-[515px]`}
            >
                <div className="flex overflow-hidden gap-10 px-2.5 py-1.5 w-full border-b border-zinc-400">
                    <div className="flex flex-auto gap-2.5 my-auto">
                        <div className="flex gap-1.5 items-center font-semibold">
                            <ImageComponent {...headerImages[0]} />
                            <div className="flex relative flex-col self-stretch my-auto w-[81px]">
                                <div className="z-0 text-sm text-zinc-800">MiaMaestra</div>
                                <div className="z-0 text-xs text-stone-500">
                                    <span className="italic text-stone-500">charged by</span>
                                    <span className="text-stone-500"> AI</span>
                                </div>
                                <ImageComponent {...headerImages[1]} />
                            </div>
                        </div>
                        <div className="my-auto text-xs font-bold basis-auto text-zinc-800">
                            Video conference Assistant
                        </div>
                    </div>
                    <div className="flex">
                        <ImageComponent {...headerImages[2]} />
                        <ImageComponent {...headerImages[3]} />
                    </div>
                </div>
                <div className="flex overflow-hidden relative items-center flex-grow">
                    <ImageComponent
                        src={aiBackgroundImageWithChat}
                        alt="Video Conference Background"
                        className="object-cover absolute inset-0 size-full"
                    />

                    <div className="flex w-full justify-between items-center relative z-10 px-4">
                        <div
                            className={`${isAiChatOpen ? " w-3/5" : "w-full"
                                } flex flex-col items-center`}
                        >

                            <ImageComponent
                                src={avatarImage}
                                alt="Avatar"
                                className="object-contain mt-[4.3rem]"
                            />
                            <MicButtonWithEffect />
                       
                        </div>


                        {isAiChatOpen && (
                            <div className="w-2/5 h-[30rem] flex justify-center">
                                <ChatContainer />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Draggable >
    );
};
