import React from 'react';
import { HiOutlineChevronRight } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const CategorySection = () => {
    return (
        <>
            <ul className='category_items my-3'>
                {/* item */}
                <li className='category_item mb-2'>
                    <Link to='#' className='flex items-center justify-between '>
                        <div className="category_name  flex items-center flex-2">
                            <HiOutlineChevronRight className='text-green-500' />
                            <span className='text-gray-800 duration-300 hover:text-green-500'>Technology</span>
                        </div>
                        <div className=' text-gray-800'>(10)</div>
                    </Link>
                </li>
                <li className='category_item mb-2'>
                    <Link to='#' className='flex items-center justify-between '>
                        <div className="category_name  flex items-center flex-2">
                            <HiOutlineChevronRight className='text-green-500' />
                            <span className='text-gray-800 duration-300 hover:text-green-500'>Academic</span>
                        </div>
                        <div className=' text-gray-800'>(10)</div>
                    </Link>
                </li>
                <li className='category_item mb-2'>
                    <Link to='#' className='flex items-center justify-between '>
                        <div className="category_name  flex items-center flex-2">
                            <HiOutlineChevronRight className='text-green-500' />
                            <span className='text-gray-800 duration-300 hover:text-green-500'>Sports</span>
                        </div>
                        <div className=' text-gray-800'>(10)</div>
                    </Link>
                </li>
                <li className='category_item mb-2'>
                    <Link to='#' className='flex items-center justify-between '>
                        <div className="category_name  flex items-center flex-2">
                            <HiOutlineChevronRight className='text-green-500' />
                            <span className='text-gray-800 duration-300 hover:text-green-500'>Global</span>
                        </div>
                        <div className=' text-gray-800'>(10)</div>
                    </Link>
                </li>
            </ul>
        </>
    );
};

export default CategorySection;