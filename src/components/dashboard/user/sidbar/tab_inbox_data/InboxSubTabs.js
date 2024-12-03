import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function InboxSubTabs() {
    return (
        <div>
            <Tabs defaultValue="friends" className="w-full">
                <TabsList className="mb-4 lg:mb-5 bg-transparent flex gap-x-3 p-0 px-2 pb-2 h-auto border-b border-border-color rounded-none">
                    <TabsTrigger
                        value="friends"
                        className="p-0 capitalize text-base md:text-lg flex-grow  flex items-center justify-center rounded-md font-medium data-[state=active]:bg-transparent data-[state=active]:text-secondary-color data-[state=inactive]:bg-transparent data-[state=inactive]:text-white">
                        friends
                    </TabsTrigger>
                    <TabsTrigger
                        value="following"
                        className="p-0 capitalize text-base md:text-lg flex-grow  flex items-center justify-center rounded-md font-medium data-[state=active]:bg-transparent data-[state=active]:text-secondary-color data-[state=inactive]:bg-transparent data-[state=inactive]:text-white">
                        following
                    </TabsTrigger>
                    <TabsTrigger
                        value="followers"
                        className="p-0 capitalize text-base md:text-lg flex-grow  flex items-center justify-center rounded-md font-medium data-[state=active]:bg-transparent data-[state=active]:text-secondary-color data-[state=inactive]:bg-transparent data-[state=inactive]:text-white">
                        followers
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="friends" className="text-white">
                    friends area
                </TabsContent>
                <TabsContent value="following" className="text-white">
                    following area
                </TabsContent>
                <TabsContent value="followers" className="text-white">
                    followers area
                </TabsContent>
            </Tabs>
        </div>
    )
}