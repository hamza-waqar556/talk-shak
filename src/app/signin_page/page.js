"use client";
// Importing header and footer from components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { useState } from "react";
// sign in form 
import SignInForm from "@/components/SignInForm";

// sign up form 
import SignUpForm from "@/components/SignUpForm";

export default function SignInPage() {
    const [isRightPanelActive, setRightPanelActive] = useState(false);

    const handleSignUpClick = () => {
        setRightPanelActive(false);
    };

    const handleSignInClick = () => {
        setRightPanelActive(true);
    };
    return (
        <>
         <Header />
            <div className="bg-[#F5FFFE] py-8">
                <div className="container px-4 md:w-md lg:w-lg xl:w-xl">
                    <div className={`flex relative h-[550px] md:h-[500px] overflow-hidden rounded-2xl shadow-lg bg-white ${isRightPanelActive ? "right-panel-active" : ""}`}>
                        <div className={`w-full  relative h-full flex items-center justify-center bg-white transition-all ease-in-out duration-700 transform ${isRightPanelActive ? "translate-x-full" : ""}`}>
                            <div className={`w-full md:w-2/4 left-0 h-full p-8 flex items-center flex-col justify-center bg-white absolute transition-all ease-in-out duration-700 transform ${isRightPanelActive ? "translate-x-full md:-translate-x-full md:opacity-0 z-0" : "translate-x-0 md:translate-x-0 md:opacity-100 z-[3]"}`}>
                                <SignInForm />
                                <div onClick={handleSignInClick} className={`text-black text-sm block md:hidden mt-5`}>
                                    I don't have an account! <span className="text-primary-color font-semibold">Sign Up</span>
                                </div>
                            </div>
                            <div className={`w-full md:w-2/4 left-0 h-full p-8 flex items-center flex-col justify-center bg-white absolute transition-all ease-in-out duration-700 transform ${isRightPanelActive ? "-translate-x-full md:opacity-100 z-[5] md:animate-showForm" : "-translate-x-full md:translate-x-0 md:opacity-0 z-[1] md:animate-hideForm"}`}>
                                <SignUpForm />
                                <div onClick={handleSignUpClick} className={`text-black text-sm block md:hidden mt-5`}>
                                    I already have an account! <span className="text-primary-color font-semibold">Sign In</span>
                                </div>
                            </div>
                        </div>
                        <div className={`hidden md:block w-2/4 absolute right-0 h-full overflow-hidden bg-theme-gradient transition-all ease-in-out duration-700 transform ${isRightPanelActive ? "-translate-x-full" : ""}`}>
                            <div className={`relative h-full w-[200%] -left-full flex items-center justify-center transition-all ease-in-out duration-700 transform ${isRightPanelActive ? "translate-x-2/4" : ""}`}>
                                <div className={`text-white absolute w-2/4  transition-all duration-700 p-8 ease-in-out transform right-0 ${isRightPanelActive ? "translate-x-[20%]" : "translate-x-0"}`}>
                                    <h1 className="text-center font-semibold text-2xl md:text-4xl mb-5">Welcome To TalkShak</h1>
                                    <p className="text-center text-lg md:text-2xl mb-5">
                                        Enter your personal details and start
                                        journey with us
                                    </p>
                                    <div className="flex items-center justify-center">
                                        <button onClick={handleSignInClick} className="font-semibold text-white border border-white transition-all capitalize md:h-46px w-52 rounded-full flex items-center justify-center gap-1 hover:scale-105 active:scale-95 ">
                                            <span className="text-white text-xl font-semibold">Sign Up</span>
                                        </button>
                                    </div>
                                </div>
                                <div className={`text-white absolute w-2/4  transition-all duration-700 p-8 ease-in-out transform left-0 ${isRightPanelActive ? "translate-x-0" : "translate-x-[-20%]"}`}>
                                    <h1 className="text-center font-semibold text-2xl md:text-4xl mb-5">Welcome To TalkShak</h1>
                                    <p className="text-center text-lg md:text-2xl mb-5">
                                        To keep connected with us please
                                        login with your personal info
                                    </p>
                                    <div className="flex items-center justify-center">
                                        <button onClick={handleSignUpClick} className="font-semibold text-white border border-white transition-all capitalize md:h-46px w-52 rounded-full flex items-center justify-center gap-1 hover:scale-105 active:scale-95 ">
                                            <span className="text-white text-xl font-semibold">Sign In</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <Footer />
        </>
    );
}