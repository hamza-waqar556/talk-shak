// Importing fontawesomes  icons
import { FaFilter } from 'react-icons/fa';


export default function ChannelsNameFilter() {
    return (
        <div>
            <div className="flex items-center justify-between mb-3 capitalize h-full text-base">
                <div className="font-medium">
                    all channels
                </div>
                <FaFilter />
            </div>
            <div className="flex items-start gap-2 flex-wrap h-80 md:h-40 lg:h-60 2xl:h-96 overflow-y-scroll scrollbar-custom">
                <span className="cursor-pointer text-sm inline-block py-1 px-2 bg-second-bg-color rounded-lg border border-border-color">
                    Fun
                </span>
                <span className="cursor-pointer text-sm inline-block py-1 px-2 bg-second-bg-color rounded-lg border border-border-color">
                    Urdu
                </span>
                <span className="cursor-pointer text-sm inline-block py-1 px-2 bg-second-bg-color rounded-lg border border-border-color">
                    Science
                </span>
            </div>
        </div>
    )
}