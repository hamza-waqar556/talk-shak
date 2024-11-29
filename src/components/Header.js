"use client"

// Import Image component from next
import Image from 'next/image';

// This is logo image variable
const Logo = "/images/logo.png";

// Import Link component from next
import Link from 'next/link'

// Importing fontawesomes  icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket, faBars } from '@fortawesome/free-solid-svg-icons'

// dropdown
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {
  return (
    <header className="bg-main-bg-color text-white py-4 sticky top-0 z-50 border-b border-border-color">
      <div className="container px-4 md:w-md lg:w-lg xl:w-xl">
        <nav className="flex items-center justify-between">
          <Link href="/">
            <div className="relative w-32 h-10 md:h-46px md:w-200px ">
              <Image
                src={Logo}
                alt="Logo"
                layout="fill"  // This makes the image fill the parent container
                // objectFit="contain"  // Ensures the image maintains its aspect ratio
                className="object-contain"  // Optional: any other styling
              />
            </div>
          </Link>

          <div className="flex items-center gap-4 md:gap-5">
            <ul className="hidden m-0 gap-5 md:flex">
              <li className="">
                <Link href="/dashboard" className="text-white hover:text-secondary-color transition-all capitalize">
                  dashboard
                </Link>
              </li>
              <li className="">
                <Link href="/" className="text-white hover:text-secondary-color transition-all capitalize">
                  Home
                </Link>
              </li>
              <li className="">
                <Link href="/user_guide" className="text-white hover:text-secondary-color transition-all capitalize">
                  User Guide
                </Link>
              </li>
              <li className="">
                <Link href="/contact_us" className="text-white hover:text-secondary-color transition-all capitalize">
                  Contact Us
                </Link>
              </li>
            </ul>
            {/* This is for mobile screen */}
            <DropdownMenu className="">
              <DropdownMenuTrigger className="border border-primary-color md:hidden h-10 w-10 rounded-md flex items-center justify-center focus-visible:outline-none focus-visible:shadow-none">
                <FontAwesomeIcon icon={faBars} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="!bg-main-bg-color !text-white !border-none">
                <DropdownMenuItem className="hover:text-secondary-color transition-all capitalize">
                  <Link href="/">
                    Home
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:text-secondary-color transition-all capitalize">
                  <Link href="/user_guide">
                    User Guide
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:text-secondary-color transition-all capitalize">
                  <Link href="/contact_us">
                    Contact Us
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/signin_page" >
              <button className="bg-theme-gradient transition-all capitalize h-10 md:h-46px w-10 md:w-120px rounded-md flex items-center justify-center gap-1 hover:scale-105 active:scale-95">
                <span className="" >
                  <FontAwesomeIcon icon={faArrowRightToBracket} />
                </span>
                <span className='hidden md:block'>
                  Sign In
                </span>
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
