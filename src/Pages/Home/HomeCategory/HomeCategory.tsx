import React from 'react';
import { HiAcademicCap, HiGlobeAsiaAustralia, HiCursorArrowRipple, HiUserGroup } from "react-icons/hi2";


const HomeCategory = () => {
    return (
        <>
            <div className="home_category_box bg-cyan-100 shadow-sm hover:shadow hover:text-cyan-500 duration-300 cursor-pointer p-4 flex justify-center flex-col">
                <span className='flex justify-center'>
                    <HiCursorArrowRipple className='text-5xl duration-300 text-cyan-500' />
                </span>
                <h3 className='text-2xl text-center duration-300'>Technology</h3>
            </div>
            <div className="home_category_box bg-green-100 shadow-sm hover:shadow hover:text-green-500 duration-300 cursor-pointer p-4 flex justify-center flex-col">
                <span className='flex justify-center'>
                    <HiAcademicCap className='text-5xl duration-300 text-green-500' />
                </span>
                <h3 className='text-2xl text-center duration-300'>Academic</h3>
            </div>
            <div className="home_category_box bg-red-100 shadow-sm hover:shadow hover:text-red-500 duration-300 cursor-pointer p-4 flex justify-center flex-col">
                <span className='flex justify-center'>
                    <HiUserGroup className='text-5xl duration-300 text-red-500' />
                </span>
                <h3 className='text-2xl text-center duration-300'>Sports</h3>
            </div>
            <div className="home_category_box bg-blue-100 shadow-sm hover:shadow hover:text-blue-500 duration-300 cursor-pointer p-4 flex justify-center flex-col">
                <span className='flex justify-center'>
                    <HiGlobeAsiaAustralia className='text-5xl duration-300 text-blue-500' />
                </span>
                <h3 className='text-2xl text-center duration-300'>Global</h3>
            </div>

        </>
    );
};

export default HomeCategory;