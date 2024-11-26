
// Import Image component from next
import Image from 'next/image';

// Import Link component from next
import Link from 'next/link'

// This is logo image variable
const logoIcon = "/images/logo-icon.png";

// Importing fontawesomes  icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'

export default function DashboardHeader() {
    return (
        <div className="w-full px-5 py-3 bg-main-bg-color sticky top-0 z-20">
            <div className="flex items-center justify-between">
                <Link href="/dashboard">
                    <div className="relative h-12 md:h-16 w-12 md:w-16">
                        <Image
                            src={logoIcon}
                            alt="logoIcon"
                            layout="fill"  // This makes the image fill the parent container
                            // objectFit="contain"  // Ensures the image maintains its aspect ratio
                            className="object-contain"  // Optional: any other styling
                        />
                    </div>
                </Link>

                <div className="flex items-center gap-3 md:gap-4">
                    <button className="font-medium text-white bg-theme-gradient transition-all capitalize h-10 md:h-46px px-3 md:px-5 rounded-md flex items-center justify-center gap-2 hover:scale-105 active:scale-95 ">
                        <span className="" >
                            <FontAwesomeIcon icon={faPlus} />
                        </span>
                        <span className='hidden md:block'>
                            Create Channel
                        </span>
                    </button>

                    <button className="font-medium text-white border border-primary-color transition-all capitalize h-10 md:h-46px px-3 md:px-5 rounded-md flex items-center justify-center gap-2 hover:scale-105 active:scale-95 ">
                        <span className="bg-primary-color w-8 h-8 rounded-full flex items-center justify-center" >
                            <FontAwesomeIcon icon={faUser} />
                        </span>
                        <span className='hidden md:block'>
                            User name
                        </span>
                        <span className="text-sm">
                            <FontAwesomeIcon icon={faChevronDown} />
                        </span>
                    </button>

                </div>
            </div>
        </div>
    );
}