
// Import Image component from next
import Image from 'next/image';

// This is logo image variable
const logoIcon = "/images/logo-icon.png";

import CreateChannelBtn from './header_components/CreateChannelBtn';

import EditProfileBtn from './header_components/EditProfileBtn';


export default function DashboardHeader() {
    return (
        <div className="w-full px-5 py-3 bg-main-bg-color sticky top-0 z-20">
            <div className="flex items-center justify-between">
                    <div className="relative h-12 md:h-16 w-12 md:w-16">
                        <Image
                            src={logoIcon}
                            alt="logoIcon"
                            layout="fill"  // This makes the image fill the parent container
                            // objectFit="contain"  // Ensures the image maintains its aspect ratio
                            className="object-contain"  // Optional: any other styling
                        />
                    </div>

                <div className="flex items-center gap-3 md:gap-4">
                    <CreateChannelBtn />
                    <EditProfileBtn />
                </div>
            </div>
        </div>
    );
}