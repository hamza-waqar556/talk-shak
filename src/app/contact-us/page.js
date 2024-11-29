// Import Image component from next
import Image from 'next/image';

// Import Link component from next
import Link from 'next/link'

import ContactForm from '../../components/ContactForm';

// Importing header and footer from components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactUs() {
    return (
        <>
            <Header />
            <section id="user-guide-banner" className="py-10 md:py-60px bg-white">
                <div className="container px-4 md:w-md lg:w-lg xl:w-xl">
                    <div className="flex flex-col lg:flex-row justify-start md:items-end lg:items-center gap-x-4 gap-y-4 md:justify-between mb-8 lg:mb-10">
                        <div className="w-full lg:w-3/5">
                            <h1 className="text-4xl lg:text-6xl text-primary-color font-semibold mb-3">
                                Contact Us-TalkShak.com
                            </h1>
                            <div className="">
                                <p className="text-base lg:text-xl mb-3">
                                    We&apos;re here to help! If you have questions, need assistance, or just want to connect with us, feel free to reach out through any of the following channels.
                                </p>
                                <h3 className="text-xl lg:text-2xl mb-3 font-semibold">
                                    Customer Support
                                </h3>
                                <p className="text-base lg:text-xl">
                                    Our support team is available to assist you with any queries, feedback, or technical issues you may encounter on Talkshak. We&apos;re just a message away!
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:w-2/5">
                            <div className="relative w-full h-60 lg:h-96">
                                <Image
                                    src="/images/contact-page-img.png"
                                    alt="contact-page-img"
                                    layout="fill"  // This makes the image fill the parent container
                                    // objectFit="contain"  // Ensures the image maintains its aspect ratio
                                    className="object-contain"  // Optional: any other styling
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-start md:items-end lg:items-start gap-x-8 gap-y-4 md:justify-between">
                        <div className="w-full lg:w-3/5">
                            <ContactForm />
                        </div>
                        <div className="w-full lg:w-2/5">
                            <div className="w-full p-5 bg-light-primary-color border border-primary-color rounded-lg">
                                <div className="text-base md:text-xl mb-4">
                                    <h3 className="text-xl font-semibold md:text-2xl">
                                        Email:
                                    </h3>
                                    <p className="">
                                        call@talkshak.com
                                    </p>
                                </div>
                                <div className="text-base md:text-xl mb-4">
                                    <h3 className="text-xl font-semibold md:text-2xl">
                                        Phone:
                                    </h3>
                                    <p className="">
                                        +1 (123) 456-7890
                                    </p>
                                </div>
                                <div className="text-base md:text-xl">
                                    <h3 className="text-xl font-semibold md:text-2xl">
                                        Support Hours:
                                    </h3>
                                    <p className="">
                                        Monday - Friday, 9:00 AM - 6:00 PM (EST)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}