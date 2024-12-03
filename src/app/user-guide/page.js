// Import Image component from next
import Image from 'next/image';

// Import Link component from next
import Link from 'next/link'

// Importing header and footer from components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function UserGuide() {
    return (
        <>
            <Header />
            <section id="user-guide-banner" className="py-10 md:py-60px bg-main-bg-color text-white">
                <div className="container px-4 md:w-md lg:w-lg xl:w-xl">
                    <div className="flex flex-col lg:flex-row justify-start md:items-end lg:items-center gap-x-4 gap-y-4 md:justify-between">
                        <div className="w-full lg:w-3/5">
                            <h1 className="text-4xl lg:text-6xl font-semibold mb-3">
                                Essential User Guidelines
                            </h1>
                            <p className="text-2xl lg:text-3xl mb-5">
                                Connect, learn, and grow with the world&rsquo;s most versatile calling platform—100% free.
                            </p>
                            <Link href="/signin_page" className="w-fit inline-block">
                                <button className="font-medium bg-theme-gradient transition-all capitalize  h-46px w-40 md:w-52 rounded-md flex items-center justify-center hover:scale-105 active:scale-95 ">
                                    Join Now
                                </button>
                            </Link>
                        </div>
                        <div className="w-full lg:w-2/5">
                            <div className="relative w-full h-60 lg:h-96">
                                <Image
                                    src="/images/user-guide-img.png"
                                    alt="user-guide-img"
                                    layout="fill"  // This makes the image fill the parent container
                                    // objectFit="contain"  // Ensures the image maintains its aspect ratio
                                    className="object-contain"  // Optional: any other styling
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="user-guide-section-2" className="py-10 md:py-60px bg-white">
                <div className="container px-4 md:w-md lg:w-lg xl:w-xl">
                    <div className="">
                        <h1 className="text-3xl md:text-4xl font-semibold mb-8 text-primary-color text-center">
                            TalkShak Community Guidelines
                        </h1>
                        <div className="mb-4">
                            <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                                Introduction & Call to Action
                            </h3>
                            <p className="text-sm md:text-lg">
                                <span className='font-semibold'>TalkShak –</span>  Free Video & Audio Calling for Learning, Teaching, Business, and Fun!
                                <br />
                                Connect, learn, and grow with the world&rsquo;s most versatile calling platform—100% free.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                                What is TalkShak?
                            </h3>
                            <p className="text-sm md:text-lg mb-3">
                                TalkShak is a free video and audio calling app
                                designed for people to connect across the globe
                                for a wide range of purposes. Whether you&rsquo;re looking
                                to learn a new skill, teach others, expand your business
                                network, or just have a fun chat, TalkShak makes it easy
                                to connect anytime, anywhere.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                                Why Choose TalkShak?
                            </h3>
                            <ul className="text-sm md:text-lg list-disc ps-5 mb-3">
                                <li>
                                    <span className='font-semibold'>100% Free, Always:</span> No subscriptions or hidden fees. Connect without limits.
                                </li>
                                <li>
                                    <span className='font-semibold'>All-in-One Platform:</span> Learning, teaching, business networking, and entertainment in one place.
                                </li>
                                <li>
                                    <span className='font-semibold'>High-Quality Calls:</span> Crystal-clear video and audio to ensure every conversation is smooth.
                                </li>
                                <li>
                                    <span className='font-semibold'>User-Friendly Interface:</span> Simple, intuitive design for easy navigation.
                                </li>
                            </ul>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                                Key Features:
                            </h3>
                            <ul className="text-sm md:text-lg list-disc ps-5 mb-3">
                                <li>
                                    <span className='font-semibold'>Free Video and Audio Calls:</span> Make high-quality video and audio calls with anyone, anywhere in the world. From one-on-one calls to group chats, TalkShak ensures every call is seamless.
                                </li>
                                <li>
                                    <span className='font-semibold'>Learning & Teaching Channels:</span> Engage in real-time learning sessions or teach others via video or audio calls. Great for online tutoring, study groups, and knowledge sharing.
                                </li>
                                <li>
                                    <span className='font-semibold'>Business Networking & Collaboration:</span> Grow your professional network with TalkShak! Set up virtual meetings, collaborate with colleagues, and expand your business connections globally.
                                </li>
                                <li>
                                    <span className='font-semibold'>Entertainment & Meetups:</span> Connect with new people for fun chats or casual meetups. Join group calls and virtual events to make new friends and enjoy socializing.
                                </li>
                            </ul>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                                How TalkShak Works
                            </h3>
                            <ol className="text-sm md:text-lg list-decimal ps-5 mb-3">
                                <li>
                                    <span className='font-semibold'>Download and Sign Up:</span> Create your free account in seconds.
                                </li>
                                <li>
                                    <span className='font-semibold'>Explore Your Options:</span> Start or join calls for learning, teaching, business, or entertainment.
                                </li>
                                <li>
                                    <span className='font-semibold'>Connect Instantly:</span> Invite friends, family, colleagues, or meet new people.
                                </li>
                                <li>
                                    <span className='font-semibold'>Enjoy Unlimited Calls:</span> All features are free, with no time limits or hidden fees.
                                </li>
                            </ol>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                                Who is TalkShak For?
                            </h3>
                            <ul className="text-sm md:text-lg list-disc ps-5 mb-3">
                                <li>
                                    <span className='font-semibold'>Learners & Educators:</span> Find mentors, join study groups, and share your knowledge.
                                </li>
                                <li>
                                    <span className='font-semibold'>Professionals & Entrepreneurs:</span> Expand your network, collaborate, and host virtual meetings.
                                </li>
                                <li>
                                    <span className='font-semibold'>Social Butterflies:</span> Meet new friends, join casual group calls, and enjoy online meetups.
                                </li>
                                <li>
                                    <span className='font-semibold'>Casual Users:</span> Perfect for anyone looking to stay connected with family and friends.
                                </li>
                            </ul>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                                Testimonials
                            </h3>
                            <p className="text-sm md:text-lg">
                                TalkShak has completely transformed my online tutoring experience. The calls are smooth, and it&rsquo;s so easy to use!
                                With TalkShak, I&rsquo;ve been able to grow my business network without spending a cent. Great quality and even better features!
                            </p>
                        </div>
                        <div className="">
                            <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                                Call to Action
                            </h3>
                            <p className="text-sm md:text-lg">
                                Ready to connect with the world? Join TalkShak today and discover how easy it is to learn, teach, network, and have fun!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="user-guide-section-3" className="py-10 md:py-60px bg-main-bg-color text-white border-b border-border-color">
                <div className="container px-4 md:w-md lg:w-lg xl:w-xl">
                    <div className="">
                        <h1 className="text-3xl md:text-4xl font-semibold mb-8  text-center">
                            Frequently Asked Questions (FAQ)
                        </h1>
                        <div className="mb-5">
                            <h3 className="text-2xl md:text-3xl font-semibold mb-1">
                                Is TalkShak really free?
                            </h3>
                            <p className="text-sm md:text-lg">
                                Yes! TalkShak offers all of its features completely free, with no hidden charges.
                            </p>
                        </div>
                        <div className="mb-5">
                            <h3 className="text-2xl md:text-3xl font-semibold mb-1">
                                Can I use TalkShak for business meetings?
                            </h3>
                            <p className="text-sm md:text-lg">
                                Absolutely. TalkShak is perfect for professional networking, meetings, and collaborations.
                            </p>
                        </div>
                        <div className="">
                            <h3 className="text-2xl md:text-3xl font-semibold mb-1">
                                What devices can I use TalkShak on?
                            </h3>
                            <p className="text-sm md:text-lg">
                                TalkShak is compatible with all major devices. Simply download the app to get started.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}