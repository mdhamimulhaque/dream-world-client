import React from 'react';
import { HiOutlinePencilSquare, HiOutlineArchiveBoxXMark, HiOutlineCalendarDays, HiOutlineChatBubbleLeftRight, HiOutlineHeart } from "react-icons/hi2";

const AuthorPostCard = () => {
    return (
        <div className="mb-4 p-0 sm:p-4 col-span-12 md:col-span-6 lg:col-span-3 gap-2">
            <div className="group h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center transition duration-500 ease-in-out transform group-hover:scale-105" src="https://fancytailwind.com/static/6ece2efec568b8df783085f6db194128/17574/city1.webp" alt="blog" />
                <div className='flex justify-between items-center px-6 mt-6'>
                    <h2 className="text-sm font-semibold text-green-300">My Category</h2>
                    <div className="icon_box flex items-center gap-2 text-lg cursor-pointer">
                        <HiOutlinePencilSquare className='hover:text-blue-500' />
                        <HiOutlineArchiveBoxXMark className='hover:text-red-500' />
                    </div>
                </div>
                <div className="py-1 px-6">
                    <h1 className="mb-3 inline-block title-font text-xl font-extrabold text-gray-800 tracking-wide cursor-pointer">Fancy Blog Card 1</h1>
                    <p className="line-clamp-6 mb-3 overflow-hidden leading-relaxed text-gray-500 cursor-pointer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, illum cum autem incidunt magni voluptatum alias reiciendis possimus doloremque, enim consequuntur quia. Voluptas exercitationem soluta debitis labore aliquam molestiae illum?</p>
                </div>
                <div className="pt-1 pb-4 px-6 flex justify-between items-center flex-wrap">

                    <div className="post_info flex gap-2 md:gap-3">
                        <div className='flex gap-1 items-center'>
                            <HiOutlineCalendarDays className='text-green-500' />
                            <small className='text-xs'>22/12/22</small>
                        </div>
                        <span className='text-green-500'>-</span>
                        <div className='flex gap-1 items-center'>
                            <HiOutlineChatBubbleLeftRight className='text-green-500' />
                            <small className='text-xs'>55</small>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <HiOutlineHeart className='text-green-500' />
                            <small className='text-xs'>20</small>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AuthorPostCard;