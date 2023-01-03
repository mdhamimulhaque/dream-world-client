import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { AiFillRedditCircle } from 'react-icons/ai';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { RxDashboard } from 'react-icons/rx';
import { useState } from 'react';
import LOGO from '../img/logo.png'

const DashboardLayout: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)

    return (
        <div className='flex'>
            <aside className={`h-screen duration-300 p-5 pt-8 relative bg-gray-800 text-white ${isSidebarOpen ? 'w-72' : 'w-20'}`}>
                <BsArrowLeftCircle
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className={`absolute top-3 -right-3 text-2xl cursor-pointer text-gray-800 bg-white rounded-full border-3 border-gray-800
                ${!isSidebarOpen && 'rotate-180'}`}
                />
                <div className="sidebar_content_area cursor-pointer">
                    <Link to='/' className="logo text-white flex items-center gap-3">
                        <img src={LOGO} alt="logo" className='w-8' />
                        {isSidebarOpen && <span className='text-xl'>KnowledgeTunes</span>}
                    </Link>

                    <div className="nav_items_area mt-4">
                        <ul>
                            <li className={` p-2 mb-2 rounded hover:bg-green-400 inline-block hover:text-gray-800 ${isSidebarOpen && 'flex gap-3 items-center p-1'}`}>
                                <Link to='/dashboard/home' className='flex items-center gap-1'>
                                    <RxDashboard /> {isSidebarOpen && <span>Dashboard</span>}
                                </Link>
                            </li>
                            <li className={` p-2 mb-2 rounded hover:bg-green-400 inline-block hover:text-gray-800 ${isSidebarOpen && 'flex gap-3 items-center p-1'}`}>
                                <Link to='/dashboard/all-users' className='flex items-center gap-1'>
                                    <HiOutlineUserGroup /> {isSidebarOpen && <span>ALL Users</span>}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>



            <main className={`body_wrapper px-5 bg-green-500 
        ${isSidebarOpen ? 'w-[calc(100%-288px)]' : 'w-[calc(100%-80px)]'}`}>
                <Outlet />
            </main>

        </div>
    );
};

export default DashboardLayout;