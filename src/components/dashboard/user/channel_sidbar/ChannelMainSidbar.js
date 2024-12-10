"use client";

import React, { useState } from "react";
import { IoShareSocialOutline, IoSettingsOutline } from "react-icons/io5";
import { GrAppsRounded } from "react-icons/gr";
import { RiFullscreenFill } from "react-icons/ri";
import { BsChatRightText } from "react-icons/bs";


// component for channel sidebar
import ChannelSidebar from "./ChannelSidebar";

// component for chat sidebar inner content
import ChatSidebarContent from "./channel_chat_component/ChatSidebarContent";

// component for share sidebar settings
import ShareSidebarContent from "./channel_share_component/ShareSidebarContent";

export default function ChannelMainSidbar() {
    const [activeSidebar, setActiveSidebar] = useState(null);

    const handleButtonClick = (sidebarName) => {
        setActiveSidebar(sidebarName === activeSidebar ? null : sidebarName);
    };

    return (
        <>
            <div className="w-full h-full bg-main-bg-color flex flex-col items-center relative z-10">
                {/* Buttons */}
                <button
                    onClick={() => handleButtonClick("chat")}
                    className={`w-full h-[60px] md:h-20 2xl:h-[100px] border-b border-border-color flex items-center justify-center text-3xl md:text-4xl hover:text-secondary-color transition-all ${activeSidebar === "chat" ? "text-secondary-color" : "text-white "
                        }`}
                >
                    <BsChatRightText />
                </button>
                <button
                    onClick={() => handleButtonClick("share")}
                    className={`w-full h-[60px] md:h-20 2xl:h-[100px] border-b border-border-color flex items-center justify-center text-3xl md:text-4xl hover:text-secondary-color transition-all ${activeSidebar === "share" ? "text-secondary-color" : "text-white "
                        }`}
                >
                    <IoShareSocialOutline />
                </button>
                <button
                    onClick={() => handleButtonClick("apps")}
                    className={`w-full h-[60px] md:h-20 2xl:h-[100px] border-b border-border-color flex items-center justify-center text-3xl md:text-4xl hover:text-secondary-color transition-all ${activeSidebar === "apps" ? "text-secondary-color" : "text-white "
                        }`}
                >
                    <GrAppsRounded />
                </button>
                <button
                    onClick={() => handleButtonClick("settings")}
                    className={`w-full h-[60px] md:h-20 2xl:h-[100px] border-b border-border-color flex items-center justify-center text-3xl md:text-4xl hover:text-secondary-color transition-all ${activeSidebar === "settings" ? "text-secondary-color" : "text-white "
                        }`}
                >
                    <IoSettingsOutline />
                </button>
                <button
                    onClick={() => handleButtonClick("fullscreen")}
                    className={`w-full h-[60px] md:h-20 2xl:h-[100px] border-b border-border-color flex items-center justify-center text-3xl md:text-4xl hover:text-secondary-color transition-all ${activeSidebar === "fullscreen" ? "text-secondary-color" : "text-white "}`}>
                    <RiFullscreenFill />
                </button>
            </div>

            {/* Sidebars */}

            {/* chat */}
            <ChannelSidebar
                isOpen={activeSidebar === "chat"}
                onClose={() => setActiveSidebar(null)}
            >
                <ChatSidebarContent />
            </ChannelSidebar>

            {/* share */}
            <ChannelSidebar
                isOpen={activeSidebar === "share"}
                onClose={() => setActiveSidebar(null)}
            >
                <ShareSidebarContent />
            </ChannelSidebar>

            {/* apps */}
            <ChannelSidebar
                isOpen={activeSidebar === "apps"}
                onClose={() => setActiveSidebar(null)}
            >
                <h2>Apps ChannelSidebar Content</h2>
                <p>Content for the Apps sidebar.</p>
            </ChannelSidebar>

            {/* settings */}
            <ChannelSidebar
                isOpen={activeSidebar === "settings"}
                onClose={() => setActiveSidebar(null)}
            >
                <h2>Settings ChannelSidebar Content</h2>
                <p>Content for the Settings sidebar.</p>
            </ChannelSidebar>
        </>
    );
}
