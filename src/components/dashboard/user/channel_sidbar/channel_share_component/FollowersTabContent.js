export default function FollowersTabContent(){
    return (
        <div className="h-[calc(100vh-160px)] md:h-[calc(100vh-170px)] overflow-y-auto scrollbar-custom">
        <div className="flex items-center gap-2 p-2 rounded transition-all hover:bg-second-bg-color">
            <div className="w-10 h-10 rounded-full bg-primary-color flex items-center justify-center text-base">
                <div>
                    f
                </div>
            </div>
            <div className="w-[calc(100%-50px)]">
                <div className="flex items-center justify-between w-full">
                    <div className="capitalize">
                        follower
                    </div>
                    <button className="capitalize px-3 py-1 text-sm border border-secondary-color hover:bg-secondary-color transition-all rounded">
                        invite
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
}