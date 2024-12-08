// importing channel main sidebar
import ChannelMainSidbar from "@/components/dashboard/user/channel_sidbar/ChannelMainSidbar"


export default function JoinChannel() {
    return (
        <div className="w-full overflow-hidden h-screen flex items-start bg-second-bg-color bg-dashboard-bg bg-cover bg-center bg-no-repeat">
            <div className="w-[calc(100%-60px)] md:w-[calc(100%-80px)] 2xl:w-[calc(100%-100px)] h-full ">

            </div>
            <div className="w-[60px] md:w-20 2xl:w-[100px] h-full bg-main-bg-color border-l border-border-color">
                <ChannelMainSidbar />
            </div>

        </div>
    )
}