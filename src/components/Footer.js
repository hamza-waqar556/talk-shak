"use client"

// Import Image component from next
import Image from 'next/image';

// This is logo image variable
const Logo = "/images/logo.png";

// Import Link component from next
import Link from 'next/link'

// Importing fontawesomes  icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faFacebookF, faInstagram, faPinterestP, faTelegram, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';


export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-main-bg-color text-white">
      <div className="container px-4 md:w-md lg:w-lg xl:w-xl">
        {/* This is footer top area */}
        <div className="footer-top-area py-10 md:py-60px">
          <div className="flex flex-col mb-7 md:mb-10 flex-wrap lg:flex-nowrap md:flex-row gap-y-5 gap-x-4 md:gap-x-0  lg:gap-x-4 items-start justify-between">
            <div className=" w-full md:w-2/4 lg:w-1/3">
              <div className="relative flex start-0 w-56 h-14 lg:h-16 lg:w-72 mb-4">
                <Image
                  src={Logo}
                  alt="Logo"
                  layout="fill"  // This makes the image fill the parent container
                  // objectFit="contain"  // Ensures the image maintains its aspect ratio
                  className="object-contain"  // Optional: any other styling
                />
              </div>
              <p className='text-sm sm:text-lg'>
                <span className='font-semibold'>TalkShak.com</span> – Free audio and video calls for learning, teaching,
                business, entertainment, and meetups. Connect and thrive
                anywhere, anytime!
              </p>
            </div>
            <div className=" w-full md:w-2/4 lg:w-1/3  flex flex-col items-start md:items-center">
              <div className="mb-4">
                <h3 className='capitalize text-2xl md:text-3xl font-semibold mb-3'>
                  email
                </h3>
                <p className='text-sm sm:text-lg'>
                  call@talkshak.com
                </p>
              </div>
              <div className="">
                <h3 className='capitalize text-2xl md:text-3xl font-semibold mb-3'>
                  Useful links
                </h3>
                <ul>
                <li>
                    <Link href="/" className='text-sm sm:text-lg hover:text-secondary-color transition-all'>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/user_guide" className='text-sm sm:text-lg hover:text-secondary-color transition-all'>
                      User Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact_us" className='text-sm sm:text-lg hover:text-secondary-color transition-all'>
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/signin_page" className='text-sm sm:text-lg hover:text-secondary-color transition-all'>
                      Sign In
                    </Link>
                  </li>

                </ul>
              </div>
            </div>
            <div className=" w-full md:w-2/4 lg:w-1/3">
              <h3 className='capitalize text-2xl md:text-3xl font-semibold mb-3'>
                Follow TalkShak
              </h3>
              <ul className="flex items-center gap-3 sm:gap-4">
                <li>
                  <Link href="https://www.facebook.com/talkshakcalling" target="_blank" rel="noopener noreferrer">
                    <span className="text-2xl sm:text-3xl w-8 h-8 sm:w-10 sm:h-10 flex items-end p-1 justify-center rounded-full text-white bg-[#039BE5] transition-all hover:scale-105">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/talkshakfree/" target="_blank" rel="noopener noreferrer">
                    <span className="text-2xl sm:text-4xl w-8 h-8 sm:w-10 sm:h-10 flex items-center p-1 justify-center rounded-xl bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white transition-all hover:scale-105">
                      <FontAwesomeIcon icon={faInstagram} />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.pinterest.com/freetalkshak/" target="_blank" rel="noopener noreferrer">
                    <span className="text-2xl sm:text-3xl w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full text-white bg-[#E60023] transition-all hover:scale-105">
                      <FontAwesomeIcon icon={faPinterestP} />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="https://whatsapp.com/channel/0029VauTtrlJkK7CAqxAki2J" target="_blank" rel="noopener noreferrer">
                    <span className="text-2xl sm:text-3xl w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full text-white bg-[#40C351] transition-all hover:scale-105">
                      <FontAwesomeIcon icon={faWhatsapp} />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="https://t.me/talkshakfree" target="_blank" rel="noopener noreferrer">
                    <span className="text-4xl sm:text-[42px] w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white text-[#1B9DE3] transition-all hover:scale-105">
                      <FontAwesomeIcon icon={faTelegram} />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="https://t.me/talkshakfree" target="_blank" rel="noopener noreferrer">
                    <span className="text-3xl sm:text-[42px] w-8 h-4 sm:w-10 sm:h-4 flex items-center justify-center rounded-full bg-white text-[#E60023] transition-all hover:scale-105">
                      <FontAwesomeIcon icon={faYoutube} />
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <h3 className="text-xl md:text-2xl font-semibold md:text-center mb-5">
              If you enjoy TalkShak, please share it with friends using the buttons below. Thanks!
            </h3>
            <ul className="flex items-center md:justify-center gap-3 sm:gap-4">
              <li>
                <Link href="https://mail.google.com/mail" target="_blank" rel="noopener noreferrer">
                  <span className="text-xl sm:text-2xl w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full text-white bg-[#039BE5] transition-all hover:scale-105">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                </Link>
              </li>
              <li>
                <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <span className="text-2xl sm:text-3xl w-8 h-8 sm:w-10 sm:h-10 flex items-end p-1 justify-center rounded-full text-white bg-[#039BE5] transition-all hover:scale-105">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </span>
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <span className="text-2xl sm:text-4xl w-8 h-8 sm:w-10 sm:h-10 flex items-center p-1 justify-center rounded-xl bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white transition-all hover:scale-105">
                    <FontAwesomeIcon icon={faInstagram} />
                  </span>
                </Link>
              </li>
              <li>
                <Link href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
                  <span className="text-2xl sm:text-3xl w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full text-white bg-[#E60023] transition-all hover:scale-105">
                    <FontAwesomeIcon icon={faPinterestP} />
                  </span>
                </Link>
              </li>
              <li>
                <Link href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                  <span className="text-2xl sm:text-3xl w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full text-white bg-[#40C351] transition-all hover:scale-105">
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </span>
                </Link>
              </li>
              <li>
                <Link href="https://telegram.org/" target="_blank" rel="noopener noreferrer">
                  <span className="text-4xl sm:text-[42px] w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white text-[#1B9DE3] transition-all hover:scale-105">
                    <FontAwesomeIcon icon={faTelegram} />
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* This is footer bottom area */}
        <div className="footer-bottom-area py-4 border-t border-border-color">
          <p className="text-sm sm:text-base text-center">
            Copyright &copy; {currentYear} TalkShak. All rights reserved. | <Link href="/">Privacy Policy</Link>
          </p>
          <p className="text-center text-sm sm:text-base mt-1.5">
            Developed by: <Link href="/" className="font-semibold text-secondary-color">Webion Soft</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}



