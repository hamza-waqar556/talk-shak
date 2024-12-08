// Importing fontawesomes  icons
import { FaChevronDown, FaUser } from 'react-icons/fa';

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


// importing profile info 
import ProfileInfo from './edit_profile_components/ProfileInfo';

// Importing profile fuction component
import ProfileFunctions from './edit_profile_components/ProfileFunctions';


export default function EditProfileBtn() {
    return (
        <Sheet>
            <SheetTrigger className="font-medium text-white border border-primary-color transition-all capitalize h-10 md:h-46px px-3 md:px-5 rounded-md flex items-center justify-center gap-2 hover:scale-105 active:scale-95 ">
                <span className="bg-primary-color w-8 h-8 rounded-full flex items-center justify-center" >
                    <FaUser />
                </span>
                <span className='hidden md:block'>
                    User name
                </span>
                <span className="text-sm">
                    <FaChevronDown />
                </span>
            </SheetTrigger>
            <SheetContent className="bg-main-bg-color text-white border-l-0 overflow-auto scrollbar-custom">
                <SheetHeader className="hidden">
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </SheetDescription>
                </SheetHeader>
                <ProfileInfo />
                <ProfileFunctions />
            </SheetContent>
        </Sheet>
    )
}