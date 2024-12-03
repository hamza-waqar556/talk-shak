// Importing fontawesomes icons
import { FaSearch } from "react-icons/fa";

import SelectCategary from "./SelectCategary";

export default function TabChannelArea() {
    return (
        <>
            <div className="mb-4 lg:mb-5 flex items-center justify-center border border-border-color bg-second-bg-color focus-within:border-primary-color rounded-lg">
                <input type="text" className="capitalize bg-transparent placeholder:text-white focus-visible:border-none focus-visible:outline-none w-full p-3 pe-0 " placeholder="Search Channels.... " />
                <span className="p-3 h-fullF">
                    <FaSearch />
                </span>
            </div>
            <SelectCategary />

        </>
    )

}