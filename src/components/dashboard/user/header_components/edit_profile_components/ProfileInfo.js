

export default function ProfileInfo() {
    return (
        <div className="">
            <div className="w-full flex items-center justify-center flex-col gap-3 py-3 border-b border-border-color mb-3">
                <div className="w-40 h-40 rounded-full bg-primary-color text-5xl flex items-center justify-center">
                    M
                </div>
                <div className="text-center text-white text-xl font-semibold">
                    Mian Rohan
                </div>
            </div>
            <div className="w-full py-3 border-b border-border-color mb-3">
                <div className="flex items-start md:items-center gap-0 md:gap-2 flex-col md:flex-row mb-2">
                    <div className="capitalize text-lg font-medium">
                        email:
                    </div>
                    <div className="text-base">
                        mianrohan@gmail.com
                    </div>
                </div>
                <div className="flex items-start md:items-center gap-0 md:gap-2 flex-col md:flex-row mb-2">
                    <div className="capitalize text-lg font-medium">
                        user id:
                    </div>
                    <div className="text-base">
                        22hdu38u8hf4992
                    </div>
                </div>
                <div className="flex items-start md:items-center gap-0 md:gap-2 flex-col md:flex-row mb-2">
                    <div className="capitalize text-lg font-medium">
                        created at:
                    </div>
                    <div className="text-base flex items-center justify-between gap-2 w-full md:w-auto">
                        <span>
                            11/2/2024
                        </span>
                        <span>
                            5:34 pm
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex items-start justify-between w-full py-3 border-b border-border-color mb-3">
                <div className="flex items-center gap-2 flex-col">
                    <span className="capitalize text-lg font-medium">
                        friends
                    </span>
                    <span className="text-base">
                        50k
                    </span>
                </div>
                <div className="flex items-center gap-2 flex-col">
                    <span className="capitalize text-lg font-medium">
                        followers
                    </span>
                    <span className="text-base">
                        70k
                    </span>
                </div>
                <div className="flex items-center gap-2 flex-col">
                    <span className="capitalize text-lg font-medium">
                        following
                    </span>
                    <span className="text-base">
                        100
                    </span>
                </div>
            </div>
        </div>
    )
}