

export default function MessagesArea() {
    return (
        <>
            <div className="">
                <div className="flex items-start gap-2 justify-between text-white ">
                    <div className="w-[30px] h-[30px] rounded-full bg-primary-color flex items-center justify-center">
                       
                    </div>
                    <div className="w-[calc(100%-40px)]">
                        <h1 className="text-sm">
                            Mian Rohan
                        </h1>
                        <div className="group w-full rounded-lg rounded-tl-none bg-second-bg-color border border-border-color p-2 text-sm">
                            <p className="">
                                Hello World
                            </p>
                            <div className="text-xs flex items-center justify-end">
                                <span>
                                    2:56 AM
                                </span>
                            </div>
                            <div className="opacity-0 origin-top scale-y-0 h-0 invisible group-hover:opacity-100 group-hover:scale-y-100 group-hover:visible group-hover:h-auto transition-all flex items-center justify-between mt-1">
                                <div className="flex items-center gap-1 cursor-pointer capitalize">
                                    emoji
                                </div>
                                <div className="flex items-center gap-1 cursor-pointer capitalize">
                                    delete
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}