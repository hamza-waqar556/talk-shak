"use client"

// importing dashboard sidebar layout 
import SidebarLayout from "@/components/dashboard/user/SidebarLayout"

// importing dashboard header
import DashboardHeader from "@/components/dashboard/user/DashboardHeader"

// importing mobile sidebar
import MobileSidebar from "@/components/dashboard/user/sidbar/MobileSidebar";

// Import Image component from next
import Image from 'next/image';

import {useState} from "react";

// Importing fontawesomes  icons
import {FaTimes} from 'react-icons/fa';

export default function DashBoard() {
    const [isSideBarActive, setSideBarActive] = useState();

    return (
        <div
            className={`relative h-screen overflow-hidden flex items-start  ${isSideBarActive ? "sidebar-active" : ""}`}>
            <MobileSidebar setSideBarActive={setSideBarActive}/>
            <div
                className={`min-w-[300px] border-r border-border-color w-1/4 bg-main-bg-color h-full absolute top-0 md:relative z-10 transition  ${isSideBarActive ? "z-30 transform translate-x-0 md:translate-x-0" : "z-30 transform -translate-x-full md:translate-x-0"}`}>
                <div className="flex items-center justify-end py-2 px-3 md:hidden">
                    <span onClick={() => setSideBarActive(false)} className="text-2xl sm:text-3xl text-white">
                        <FaTimes />
                    </span>
                </div>
                <SidebarLayout/>

            </div>
            <div className="w-full md:w-3/4 h-full bg-second-bg-color">
                <Image src="/images/main_bg_img.png"
                       alt="main_bg_img"
                       layout="fill"  // This makes the image fill the parent container
                    // objectFit="contain"  // Ensures the image maintains its aspect ratio
                       className="object-cover !fixed -z-0 top-0 right-0 left-0 bottom-0 !w-full"  // Optional: any other styling
                />

                <DashboardHeader/>
            </div>
        </div>
    )
}