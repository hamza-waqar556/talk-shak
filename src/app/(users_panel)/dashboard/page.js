// importing dashboard sidebar layout 
import SidebarLayout from "@/components/dashboard/user/SidebarLayout"

// importing dashboard header
import DashboardHeader from "@/components/dashboard/user/DashboardHeader"

export default function DashBoard() {
    return (
        <div className="h-screen overflow-hidden flex items-start">
            <div className="min-w-[300px] w-1/4 bg-main-bg-color h-full">
                <SidebarLayout />
            </div>
            <div className="w-3/4 h-full bg-second-bg-color">
                <DashboardHeader />
            </div>
        </div>
    )
}