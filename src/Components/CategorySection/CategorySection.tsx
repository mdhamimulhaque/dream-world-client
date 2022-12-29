import React from 'react';
import { HiOutlineChevronRight } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const CategorySection = () => {
    return (
        <>
            <ul className='category_items my-3'>
                {/* item */}
                <li className='category_item mb-2'>
                    <Link to='#' className='flex items-center justify-between duration-300 hover:text-green-500'>
                        <div className="category_name text-sm flex items-center flex-2">
                            <HiOutlineChevronRight />   <span>item</span>
                        </div>
                        <div className='text-xs'>(10)</div>
                    </Link>
                </li>
                <li className='category_item mb-2'>
                    <Link to='#' className='flex items-center justify-between duration-300 hover:text-green-500'>
                        <div className="category_name text-sm flex items-center flex-2">
                            <HiOutlineChevronRight />   <span>item</span>
                        </div>
                        <div className='text-xs'>(10)</div>
                    </Link>
                </li>
                <li className='category_item mb-2'>
                    <Link to='#' className='flex items-center justify-between duration-300 hover:text-green-500'>
                        <div className="category_name text-sm flex items-center flex-2">
                            <HiOutlineChevronRight />   <span>item</span>
                        </div>
                        <div className='text-xs'>(10)</div>
                    </Link>
                </li>
            </ul>
        </>
    );
};

export default CategorySection;