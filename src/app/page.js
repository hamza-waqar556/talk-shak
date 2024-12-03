// Import Image component from next
import Image from 'next/image';

// Import Link component from next
import Link from 'next/link'

// Importing header and footer from components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <section id="banner" className="py-10 md:py-60px bg-main-bg-color text-white">
        <div className="container px-4 md:w-md lg:w-lg xl:w-xl">
          <div className="flex flex-col lg:flex-row justify-start md:items-end lg:items-center gap-x-4 gap-y-4 md:justify-between">
            <div className="w-full lg:w-3/5">
              <h1 className="text-4xl lg:text-6xl font-semibold mb-3">
                Talk to Anyone, Anytime.
              </h1>
              <p className="text-2xl lg:text-3xl mb-5">
                <span className='font-semibold'>TalkShak.com</span> – Free audio and video calls for learning,
                teaching, business, entertainment, and meetups. Connect and thrive,
                anywhere, anytime!
              </p>
              <Link href="/accounts" className="w-fit inline-block">
                <button className="font-medium bg-theme-gradient transition-all capitalize  h-46px w-40 md:w-52 rounded-md flex items-center justify-center hover:scale-105 active:scale-95 ">
                  Join Now
                </button>
              </Link>
            </div>
            <div className="w-full lg:w-2/5">
              <div className="relative w-full h-60 lg:h-80">
                <Image
                  src="/images/section-1-img.png"
                  alt="section-1-img"
                  layout="fill"  // This makes the image fill the parent container
                  // objectFit="contain"  // Ensures the image maintains its aspect ratio
                  className="object-contain"  // Optional: any other styling
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="section-2" className="py-10 md:py-60px bg-white">
        <div className="container px-4 md:w-md lg:w-lg xl:w-xl">
          <div className="flex flex-col lg:flex-row justify-start md:items-end lg:items-center gap-y-4 gap-x-4 md:justify-between">
            <div className="w-full lg:w-2/5">
              <div className="relative w-full h-60 lg:h-72">
                <Image
                  src="/images/section-2-img.png"
                  alt="section-2-img"
                  layout="fill"  // This makes the image fill the parent container
                  // objectFit="contain"  // Ensures the image maintains its aspect ratio
                  className="object-contain"  // Optional: any other styling
                />
              </div>
            </div>
            <div className="w-full lg:w-3/5">
              <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-primary-color">
                What We Do at TalkShak.com
              </h1>
              <p className="text-sm md:text-lg mb-3">
                At <span className='font-semibold'>TalkShak.com,</span>
                we make connecting easy and meaningful. We offer free
                audio and video calls that bring people together for a range of purposes:
              </p>
              <ol className="text-sm md:text-lg list-decimal ps-5 mb-3">
                <li>
                  <span className='font-semibold'>Learning:</span> Access knowledge and connect with experts worldwide.
                </li>
                <li>
                  <span className='font-semibold'>Teaching:</span> Share your skills and make an impact.
                </li>
                <li>
                  <span className='font-semibold'>Business:</span> Network, collaborate, and grow professionally.
                </li>
                <li>
                  <span className='font-semibold'>Entertainment:</span> Have fun and meet new people.
                </li>
                <li>
                  <span className='font-semibold'>Meetups:</span> Host or join virtual gatherings anytime, anywhere.
                </li>
              </ol>
              <p className="text-sm md:text-lg">
                <span className='font-semibold'>TalkShak.com -</span> where every connection opens new possibilities!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="section-3" className="py-10 md:py-60px bg-main-bg-color text-white">
        <div className="container px-4 md:w-md lg:w-lg xl:w-xl">
          <div className="flex flex-col lg:flex-row justify-start md:items-end lg:items-center gap-y-4 gap-x-4 md:justify-between">
            <div className="w-full lg:w-3/5">
              <h1 className="text-3xl md:text-4xl font-semibold mb-4">
                Why TalkShak.com is Different
              </h1>
              <p className="text-sm md:text-lg mb-3">
                At <span className='font-semibold'>TalkShak.com,</span>
                we&rsquo;re not just another calling platform—we&rsquo;re your gateway to meaningful connections
                and purpose-driven interactions. Here&rsquo;s what sets us apart:
              </p>
              <ol className="text-sm md:text-lg list-decimal ps-5 mb-3">
                <li>
                  <span className="font-semibold">100% Free, Always:</span> No hidden fees or subscriptions. All our features are free, ensuring that everyone can connect without barriers.
                </li>
                <li>
                  <span className="font-semibold">Diverse Purpose, One Platform:</span> TalkShak combines learning, teaching, business, entertainment, and meetups in one place. Whether you&apos;re here to gain knowledge, grow your network, or simply relax with friends, we&rsquo;ve got it all.
                </li>
                <li>
                  <span className="font-semibold">User-Friendly and Accessible:</span> Simple, intuitive, and accessible for everyone. No complex setups—just seamless connections.
                </li>
                <li>
                  <span className="font-semibold">Focus on Community and Growth:</span> We prioritize genuine connections that foster learning, collaboration, and entertainment, making every interaction valuable and enriching.
                </li>
              </ol>
              <p className="text-sm md:text-lg mb-3">
                With <span className='font-semibold'>TalkShak.com,</span> you&rsquo;re not just making a call—you&rsquo;re opening doors to endless possibilities.
              </p>
            </div>
            <div className="w-full lg:w-2/5">
              <div className="relative w-full h-60 lg:h-96">
                <Image
                  src="/images/section-3-img.png"
                  alt="section-3-img"
                  layout="fill"  // This makes the image fill the parent container
                  // objectFit="contain"  // Ensures the image maintains its aspect ratio
                  className="object-contain"  // Optional: any other styling
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="section-4" className="py-10 md:py-60px bg-white">
        <div className="container px-4 md:w-md lg:w-lg xl:w-xl">
          <div className="flex flex-col lg:flex-row justify-start md:items-end lg:items-center gap-y-4 gap-x-4 md:justify-between">
            <div className="w-full lg:w-2/5">
              <div className="relative w-full h-60 lg:h-72">
                <Image
                  src="/images/section-4-img.png"
                  alt="section-4-img"
                  layout="fill"  // This makes the image fill the parent container
                  // objectFit="contain"  // Ensures the image maintains its aspect ratio
                  className="object-contain"  // Optional: any other styling
                />
              </div>
            </div>
            <div className="w-full lg:w-3/5">
              <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-primary-color">
                Start Chat With Talk Shak
              </h1>
              <p className="text-sm md:text-lg mb-3">
                Getting started is easy and quick. Just pick your chat mode
                (text, audio, video or uncensored), agree to our terms, and
                you&apos;re ready to go! You can customize your experience by adding
                interests and connecting your webcam and mic. With TalkShak, chat
                anywhere, anytime, with anyone. Join us at TalkShak for a super cool
                online chat experience that&apos;s anonymous, fun, and all about you!
              </p>
              <Link href="/accounts" className="w-fit inline-block">
                <button className="font-medium bg-theme-gradient transition-all capitalize text-white h-46px w-40 md:w-52 rounded-md flex items-center justify-center hover:scale-105 active:scale-95 ">
                  Join Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
