import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// inporting friends tab content
import FriendsTabContent from "./FriendsTabContent";

// inporting followers tab content
import FollowersTabContent from "./FollowersTabContent";

export default function ShareSidebarContent() {
    return (
        <div>
            <Tabs defaultValue="share" className="w-full">
                <TabsList className="mb-3 lg:mb-4 bg-transparent flex gap-x-3 pt-0 p-2 lg:pb-4  h-auto border-b border-border-color rounded-none">
                    <TabsTrigger
                        value="friends"
                        className="p-0 capitalize text-sm md:text-base flex-grow h-10 flex items-center justify-center rounded-md font-medium data-[state=active]:bg-theme-gradient data-[state=active]:text-white data-[state=inactive]:bg-transparent border border-primary-color data-[state=inactive]:text-white">
                        friends
                    </TabsTrigger>
                    <TabsTrigger
                        value="followers"
                        className="p-0 capitalize text-sm md:text-base flex-grow h-10 flex items-center justify-center rounded-md font-medium data-[state=active]:bg-theme-gradient data-[state=active]:text-white data-[state=inactive]:bg-transparent border border-primary-color data-[state=inactive]:text-white">
                        followers
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="friends" className="text-white">
                    <FriendsTabContent />
                </TabsContent>
                <TabsContent value="followers" className="text-white">
                    <FollowersTabContent />
                </TabsContent>
            </Tabs>
        </div>
    );
}
