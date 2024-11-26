// Import Link component from next
import Link from 'next/link'

export default function SignInForm() {
    return (
        <>
            <h1 className="text-center font-semibold text-primary-color text-3xl md:text-4xl mb-6 sm:mb-8">Sign In</h1>
            <form action="/" className="w-full">
                <div className=" h-12 w-full mb-5">
                    <input type="text" placeholder="Enter Your Name..." className="px-5 text-primary-color w-full h-full bg-light-primary-color border border-primary-color rounded-lg placeholder:text-primary-color focus-visible:outline-none focus-visible:border-primary-color focus-visible:border-2" />
                </div>
                <div className=" h-12 w-full mb-5">
                    <input type="password" placeholder="Enter Your Password..." className="px-5 text-primary-color w-full h-full bg-light-primary-color border border-primary-color rounded-lg placeholder:text-primary-color focus-visible:outline-none focus-visible:border-primary-color focus-visible:border-2" />
                </div>
                <p className="text-sm md:text-base text-primary-color text-center mb-5">
                    Forgot your password?
                </p>
                <div className="flex items-center justify-center">
                    <button className="font-semibold text-white bg-theme-gradient transition-all capitalize h-46px w-52 rounded-full flex items-center justify-center gap-1 hover:scale-105 active:scale-95 ">
                        Sign In
                    </button>
                </div>
            </form>
        </>
    )
}