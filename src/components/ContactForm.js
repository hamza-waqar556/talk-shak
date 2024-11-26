"use client"

export default function ContactForm() {
    return (
        <form action="/" className="w-full">
            <div className=" h-12 w-full mb-5">
                <input type="text" placeholder="Enter Your Name..." className="px-5 text-primary-color w-full h-full bg-light-primary-color border border-primary-color rounded-lg placeholder:text-primary-color focus-visible:outline-none focus-visible:border-primary-color focus-visible:border-2" />
            </div>
            <div className=" h-12 w-full mb-5">
                <input type="text" placeholder="Enter Your Email..." className="px-5 text-primary-color w-full h-full bg-light-primary-color border border-primary-color rounded-lg placeholder:text-primary-color focus-visible:outline-none focus-visible:border-primary-color focus-visible:border-2" />
            </div>
            <div className=" h-36 w-full mb-5">
                <textarea name="" className="px-5 py-3 text-primary-color w-full h-full bg-light-primary-color border border-primary-color rounded-lg placeholder:text-primary-color focus-visible:outline-none focus-visible:border-primary-color focus-visible:border-2 resize-none" placeholder="Enter Your Message..." id=""></textarea>
            </div>
            <button className="font-semibold text-white bg-theme-gradient transition-all capitalize h-10 md:h-46px w-full md:w-2/4 rounded-md flex items-center justify-center gap-1 hover:scale-105 active:scale-95 ">
                Sign In
            </button>
        </form>
    )

}