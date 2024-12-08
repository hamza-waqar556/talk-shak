// Import Link component from next
import Link from 'next/link'

// Import Image component from next
import Image from 'next/image';

// This is logo image variable
const logoIcon = "/images/logo-icon.png";

// Importing fontawesomes  icons
import { } from 'react-icons/fa';
import { FaGear } from 'react-icons/fa6';

export default function DashboardContent() {
    return (
        <div className="h-full p-4 md:p-5 flex items-start flex-wrap gap-5 justify-between">
            <div className="relative w-full md:w-2/4 xl:w-1/3 bg-main-bg-color p-4 h-60 rounded-lg">
                <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                        <div className="relative h-10 w-10">
                            <Image
                                src={logoIcon}
                                alt="logoIcon"
                                layout="fill"  // This makes the image fill the parent container
                                // objectFit="contain"  // Ensures the image maintains its aspect ratio
                                className="object-contain"  // Optional: any other styling
                            />
                        </div>
                        <div className="">
                            <h2 className="font-medium text-sm text-white truncate">Channel Category</h2>
                            <p className="text-secondary-color text-xs truncate">Channel topic</p>
                        </div>
                    </div>
                    <div className="text-secondary-color text-xl cursor-pointer">
                        <FaGear />
                    </div>
                </div>
                <div className="flex items-center gap-3 flex-wrap mb-5">
                    <div className="h-16 w-16 rounded-full border border-dashed border-secondary-color">
                    </div>
                    <div className="h-16 w-16 rounded-full border border-dashed border-secondary-color">
                    </div>
                </div>
                <div className="flex items-start justify-center absolute bottom-4 left-0 w-full">
                    <Link href="/dashboard/join-channel" className="w-fit">
                        <button className="py-[6px] text-sm px-5 rounded-lg text-white border border-dashed border-secondary-color transition-all hover:scale-105 active:scale-95">
                            Join Channel
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}