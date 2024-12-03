import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Import Image component from next
import Image from 'next/image';

// importing channel tabs data 
import TabChannelArea from "./sidbar/tab_channel_data/TabChannelArea";

// importing inbox tabs data 
import InboxSubTabs from "./sidbar/tab_inbox_data/InboxSubTabs";

// This is logo image variable
const Logo = "/images/logo.png";

export default function SidebarLayout() {
    return (
        <>
            <div className="pt-0 lg:pt-7 p-3 lg:p-4 h-full">
                <div className="flex items-center justify-center mb-4 lg:mb-5">
                    <div className="relative h-46px w-200px ">
                        <Image
                            src={Logo}
                            alt="Logo"
                            layout="fill"  // This makes the image fill the parent container
                            className="object-contain"  // Optional: any other styling
                        />
                    </div>
                </div>

                <Tabs defaultValue="channels" className="w-full">
                    <TabsList className="mb-4 lg:mb-5 bg-transparent flex gap-x-3 px-2 py-3 lg:py-4 h-auto border-b border-border-color rounded-none">
                        <TabsTrigger
                            value="channels"
                            className="p-0 capitalize text-base md:text-lg flex-grow h-46px flex items-center justify-center rounded-md font-medium data-[state=active]:bg-theme-gradient data-[state=active]:text-white data-[state=inactive]:bg-transparent border border-primary-color data-[state=inactive]:text-white">
                            channels
                        </TabsTrigger>
                        <TabsTrigger
                            value="inbox"
                            className="p-0 capitalize text-base md:text-lg flex-grow h-46px flex items-center justify-center rounded-md font-medium data-[state=active]:bg-theme-gradient data-[state=active]:text-white data-[state=inactive]:bg-transparent border border-primary-color data-[state=inactive]:text-white">
                            inbox
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="channels" className="text-white">
                        <TabChannelArea />
                    </TabsContent>
                    <TabsContent value="inbox" className="text-white">
                        <InboxSubTabs />
                    </TabsContent>
                </Tabs>

            </div>

        </>
    )
}