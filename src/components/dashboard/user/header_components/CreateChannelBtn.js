// Importing fontawesomes  icons
import { FaPlus } from 'react-icons/fa';

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

// import select component for select members limit
import MembersLimit from './create_channel_popup/MembersLimit';

// language selector
import ChannelLanguage from './create_channel_popup/ChannelLanguage';

// channel category
import ChannelCategory from './create_channel_popup/ChannelCategory';

export default function CreateChannelBtn() {
    return (
        <>
            <AlertDialog>
                <AlertDialogTrigger className="font-medium text-white bg-theme-gradient transition-all capitalize h-10 md:h-46px px-3 md:px-5 rounded-md flex items-center justify-center gap-2 hover:scale-105 active:scale-95 ">
                    <span className="" >
                        <FaPlus />
                    </span>
                    <span className='hidden md:block'>
                        Create Channel
                    </span>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-main-bg-color border-border-color text-white ">
                    <AlertDialogHeader>
                        <AlertDialogTitle className="capitalize text-center text-xl md:text-2xl">
                            Create new channel
                        </AlertDialogTitle>
                        <form action="" className="text-white mt-4">
                            <div className="mb-4 flex items-start gap-3 flex-col md:flex-row ">
                                <div className="w-full md:w-3/4 ">
                                    <label className="w-full block">
                                        <div className="text-base font-medium mb-2 text-start">
                                            Topic
                                        </div>
                                        <input type="text" className="text-sm border border-border-color bg-second-bg-color placeholder:text-white focus-visible:border-primary-color rounded-md focus-visible:outline-none w-full p-2" placeholder="Create a topic" />
                                    </label>
                                </div>
                                <div className="w-full md:w-1/4">
                                    <label className="w-full block">
                                        <div className="text-base font-medium mb-2 text-start">
                                            Max People
                                        </div>
                                        <MembersLimit />
                                    </label>
                                </div>
                            </div>
                            <div className="mb-4 flex items-start gap-3 flex-col md:flex-row ">
                                <div className="w-full md:w-2/4 ">
                                    <label className="w-full block">
                                        <div className="text-base font-medium mb-2 text-start">
                                            Language
                                        </div>
                                        <ChannelLanguage />
                                    </label>
                                </div>
                                <div className="w-full md:w-2/4">
                                    <label className="w-full block">
                                        <div className="text-base font-medium mb-2 text-start">
                                            Category
                                        </div>
                                        <ChannelCategory />
                                    </label>
                                </div>
                            </div>
                        </form>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel className="flex-grow hover:scale-105 active:scale-95 text-secondary-color bg-transparent border border-secondary-color hover:bg-transparent hover:text-secondary-color transition-all">
                            Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction className="flex-grow bg-secondary-color hover:bg-secondary-color hover:scale-105 active:scale-95 transition-all" style={{ backgroundColor: "#6cbaeb" }}>
                            Create
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>

    )
}