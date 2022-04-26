import { FaBars, FaTimes, FaHome, FaGamepad } from 'react-icons/fa';
import { useState } from 'react';
import NextLink from 'next/link';

export default function Sidebar() {
    const [sidebar, setSidebar] = useState(false);
    const handleSidebar = () => {
        setSidebar(!sidebar)
    }
    return (
        <>
            { /* navbar */}
            <div className="bg-black fixed flex h-14 inset-x-0 items-center justify-between px-10 shadow-lg top-0 text-white top-0s">
                {/* navbar open sidebar button */}
                <button className="p-2 rounded-full transition hover:bg-blue-600" onClick={handleSidebar}>
                    <FaBars />
                </button>
                {/* navbar logo */}
                <div>
                    ClockWork
                </div>
            </div>

            {/* sidebar container */}
            <div class="sidebarContainer" className='z-20'>
                {/* sidebar */}
                <div className={sidebar ? 'bg-black duration-300 fixed inset-y-0 py-14 transition-left left-0 w-64' : 'bg-black duration-500 fixed inset-y-0 py-14 -left-full transition-left w-64'}>
                    {/* sidebar close button */}
                    <button className='absolute left-8 p-3 rounded-full text-gray-500 top-2 transition hover:bg-red-400' onClick={handleSidebar}>
                        <FaTimes />
                    </button>
                    {/* sidebar menu */}
                    <ul className='font-normal text-gray-100'>
                        <li>
                            <NextLink href="/">
                                {/* active item */}
                                <a className='bg-gray-500 font-medium inline-flex items-center left-2 px-4 py-2 transition w-full hover:bg-black'>
                                    <FaHome className="mr-3 items-center" />
                                    Home
                                </a>
                            </NextLink>
                        </li>
                        <li>
                            <NextLink href="/About">
                                {/* active item */}
                                <a className='bg-gray-500 font-medium inline-flex items-center left-2 px-4 py-2 transition w-full hover:bg-black'>
                                    <FaGamepad className="mr-3 items-center" />
                                    About
                                </a>
                            </NextLink>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}
