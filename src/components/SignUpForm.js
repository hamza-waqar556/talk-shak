"use client";

import { useState } from "react";
import Link from 'next/link';

export default function SignUpForm() {
    const [isNextStep, setNextStep] = useState(false);

    const handleNextStep = (e) => {
        e.preventDefault();
        setNextStep(true);
    };

    const handleBackStep = (e) => {
        e.preventDefault();
        setNextStep(false);
    };

    return (
        <div className="w-full overflow-hidden">
            <h1 className="text-center  font-semibold text-primary-color text-2xl md:text-4xl mb-8">Sign Up</h1>
            <div className={!isNextStep ? "block" : "hidden"}>
                <form>
                    <div className="h-12 w-full mb-5">
                        <input
                            type="text"
                            placeholder="Full Name..."
                            className="px-5 text-primary-color w-full h-full bg-light-primary-color border border-primary-color rounded-lg placeholder:text-primary-color focus-visible:outline-none focus-visible:border-primary-color focus-visible:border-2"
                        />
                    </div>
                    <div className="h-12 w-full mb-5">
                        <input
                            type="text"
                            placeholder="User Name..."
                            className="px-5 text-primary-color w-full h-full bg-light-primary-color border border-primary-color rounded-lg placeholder:text-primary-color focus-visible:outline-none focus-visible:border-primary-color focus-visible:border-2"
                        />
                    </div>
                    <div className="h-12 w-full mb-5">
                        <input
                            type="email"
                            placeholder="Email..."
                            className="px-5 text-primary-color w-full h-full bg-light-primary-color border border-primary-color rounded-lg placeholder:text-primary-color focus-visible:outline-none focus-visible:border-primary-color focus-visible:border-2"
                        />
                    </div>
                    <div className="h-12 w-full mb-5">
                        <input
                            type="password"
                            placeholder="Enter Your Password..."
                            className="px-5 text-primary-color w-full h-full bg-light-primary-color border border-primary-color rounded-lg placeholder:text-primary-color focus-visible:outline-none focus-visible:border-primary-color focus-visible:border-2"
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            onClick={handleNextStep}
                            className="font-semibold text-white bg-theme-gradient transition-all capitalize md:h-46px w-52 rounded-full flex items-center justify-center gap-1 hover:scale-105 active:scale-95"
                        >
                            Next
                        </button>
                    </div>
                </form>
            </div>

            <div className={isNextStep ? "block" : "hidden"}>
                <form>
                    <div className="flex items-center justify-center mb-5">
                        <label >
                            <input type="file" name="" id=""  className="hidden"/>
                            <div className="w-36 h-36 flex text-center items-center justify-center bg-light-primary-color border rounded-full border-primary-color">
                                <span className="text-primary-color">
                                    Upload a Profile Picture 
                                </span>
                            </div>
                        </label>
                    </div>
                    <div className="h-12 w-full mb-5">
                        <select name="" id="" className="px-5 text-primary-color w-full h-full bg-light-primary-color border border-primary-color rounded-lg placeholder:text-primary-color focus-visible:outline-none focus-visible:border-primary-color focus-visible:border-2">
                            <option defaultValue value="" >
                                Choose Your Country
                            </option>
                        </select>
                    </div>
                    <div className="h-12 w-full mb-5">
                        <select name="" id="" className="px-5 text-primary-color w-full h-full bg-light-primary-color border border-primary-color rounded-lg placeholder:text-primary-color focus-visible:outline-none focus-visible:border-primary-color focus-visible:border-2">
                            <option defaultValue value="" >
                                Choose Your Language
                            </option>
                        </select>
                    </div>
                    <div className="flex items-center justify-between px-4">
                        <button
                            onClick={handleBackStep}
                            className="font-semibold text-white bg-theme-gradient transition-all capitalize md:h-46px w-52 rounded-full flex items-center justify-center gap-1 hover:scale-105 active:scale-95"
                        >
                            Back
                        </button>
                        <button className="font-semibold text-white bg-theme-gradient transition-all capitalize md:h-46px w-52 rounded-full flex items-center justify-center gap-1 hover:scale-105 active:scale-95">
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
