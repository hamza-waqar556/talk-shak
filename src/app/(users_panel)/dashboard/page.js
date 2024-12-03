"use client";

// importing dashboard sidebar layout
import SidebarLayout from "@/components/dashboard/user/SidebarLayout";

// importing dashboard header
import DashboardHeader from "@/components/dashboard/user/DashboardHeader";

// importing mobile sidebar
import MobileSidebar from "@/components/dashboard/user/sidbar/MobileSidebar";

// importing dashboard content area 
import DashboardContent from "@/components/dashboard/user/DashboardContent";

import { useState, useRef, useEffect } from "react";

// Importing fontawesomes icons
import { FaTimes } from "react-icons/fa";

export default function DashBoard() {
    const [isSideBarActive, setSideBarActive] = useState(false);
    const sidebarRef = useRef(null);

    // Close the sidebar if clicked outside
    useEffect(() => {
        function handleClickOutside(event) {
            // If the click is outside the sidebar or not on a child element of the sidebar
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setSideBarActive(false); // Close the sidebar
            }
        }
    
        // Add event listener to detect clicks
        document.addEventListener("mousedown", handleClickOutside);
    
        return () => {
            // Cleanup event listener on component unmount
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div
            className={`relative h-screen overflow-hidden flex items-start ${isSideBarActive ? "sidebar-active" : ""
                }`} onMouseDown={(e) => e.stopPropagation()} 
        >
            {/* Sidebar */}
            <div
                ref={sidebarRef}
                className={`min-w-[300px] border-r border-border-color w-1/4 bg-main-bg-color h-full absolute top-0 lg:relative z-10 transition ${isSideBarActive
                    ? "z-30 transform translate-x-0 lg:translate-x-0" : "z-30 transform -translate-x-full lg:translate-x-0"
                    }`}
            >
                <div className="flex items-center justify-end py-2 px-3 lg:hidden">
                    {/* Close Button */}
                    <span
                        onClick={() => setSideBarActive(false)}
                        className="text-2xl sm:text-3xl text-white"
                    >
                        <FaTimes />
                    </span>
                </div>
                <SidebarLayout />
            </div>

            {/* Mobile Sidebar Toggle */}
            <MobileSidebar setSideBarActive={setSideBarActive} />

            {/* Main Content */}
            <div className="w-full lg:w-3/4 h-full bg-second-bg-color bg-dashboard-bg bg-cover bg-center bg-no-repeat">
                <DashboardHeader />
                <DashboardContent />
            </div>
        </div>
    );
}
