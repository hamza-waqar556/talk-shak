// Importing fontawesomes  icons
import { FaBars, FaFilter, FaSearch } from 'react-icons/fa';



export default function MobileSidebar(props) {

    const setMobileSidebar = props.setSideBarActive;

    return(
        <div className="border-r border-border-color p-3 sm:p-4 ba block md:hidden text-white relative z-10 h-full bg-main-bg-color">
            <ul className="flex flex-col gap-3 ">
                <li>
                    <button onClick={() => setMobileSidebar(true)} className="text-base sm:text-xl  w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center border border-primary-color rounded">
                    <FaBars />
                    </button>
                </li>
                <li>
                    <button onClick={() => setMobileSidebar(true)} className="text-base sm:text-xl  w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center border border-primary-color rounded">
                    <FaSearch />
                    </button>
                </li>
                <li>
                    <button onClick={() => setMobileSidebar(true)} className="text-base sm:text-xl  w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center border border-primary-color rounded">
                    <FaFilter />
                    </button>
                </li>
            </ul>
        </div>
    )
}