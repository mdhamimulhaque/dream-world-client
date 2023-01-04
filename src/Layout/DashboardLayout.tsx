import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { HiSquares2X2, HiUserGroup, HiArrowLeftOnRectangle, HiBookOpen, HiChatBubbleLeftRight, HiFolderPlus } from 'react-icons/hi2';
import { useState, useContext } from 'react';
import LOGO from '../img/logo.png'
import { signOut } from 'firebase/auth';
import { auth } from '../Context/AuthProvider';
import { toast } from 'react-toastify';


const DashboardLayout: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);


    const handleLogOut = async () => {

        signOut(auth)
            .then(() => {
                toast.success('logout successfully')
            }).catch((error) => {
                toast.error(error.message)
            });
    }

    return (
        <div className='flex'>
            <aside className={`h-screen duration-300 p-5 pt-8 fixed bg-gray-800 text-white ${isSidebarOpen ? 'w-72' : 'w-20'}`}>
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

                    <div className="nav_items_area mt-4 ">

                        <Link to='/dashboard/home' className={` p-2 mb-2 rounded hover:bg-green-400 inline-block hover:text-gray-800 ${isSidebarOpen && 'flex gap-3 items-center p-1'}`}>
                            <div className='flex items-center gap-1'>
                                <HiSquares2X2 className='text-xl' /> {isSidebarOpen && <span>Dashboard</span>}
                            </div>
                        </Link>
                        <Link to='/dashboard/all-users' className={` p-2 mb-2 rounded hover:bg-green-400 inline-block hover:text-gray-800 ${isSidebarOpen && 'flex gap-3 items-center p-1'}`}>
                            <div className='flex items-center gap-1'>
                                <HiUserGroup className='text-xl' /> {isSidebarOpen && <span>ALL Users</span>}
                            </div>
                        </Link>
                        <Link to='/dashboard/all-posts' className={`p-2 mb-2 rounded hover:bg-green-400 inline-block hover:text-gray-800 ${isSidebarOpen && 'flex gap-3 items-center p-1'}`}>
                            <div className='flex items-center gap-1'>
                                <HiBookOpen className='text-xl' /> {isSidebarOpen && <span>ALL Posts</span>}
                            </div>
                        </Link>
                        <Link to='/dashboard/all-comments' className={`p-2 mb-2 rounded hover:bg-green-400 inline-block hover:text-gray-800 ${isSidebarOpen && 'flex gap-3 items-center p-1'}`}>
                            <div className='flex items-center gap-1'>
                                <HiChatBubbleLeftRight className='text-xl' /> {isSidebarOpen && <span>ALL Comments</span>}
                            </div>
                        </Link>
                        <Link to='add-newPost' className={`p-2 mb-2 rounded hover:bg-green-400 inline-block hover:text-gray-800 ${isSidebarOpen && 'flex gap-3 items-center p-1'}`}>
                            <div className='flex items-center gap-1'>
                                <HiFolderPlus className='text-xl' /> {isSidebarOpen && <span>Add New Post</span>}
                            </div>
                        </Link>
                        {/* logout */}
                        <Link to='/' onClick={handleLogOut} className={`p-2 mb-2 rounded text-red-500 inline-block hover:text-semibold hover:underline ${isSidebarOpen && 'flex gap-3 items-center p-1'}`}>
                            <div className='flex items-center gap-1'>
                                <HiArrowLeftOnRectangle className='text-xl' /> {isSidebarOpen && <span>Logout</span>}
                            </div>
                        </Link>

                    </div>
                </div>
            </aside>

            {/* main body area */}

            <main className={`body_wrapper px-5 
        ${isSidebarOpen ? 'w-[calc(100%-288px)] ml-72' : 'w-[calc(100%-80px)] ml-20'}`}>
                <Outlet />
            </main>



        </div>
    );
};

export default DashboardLayout;