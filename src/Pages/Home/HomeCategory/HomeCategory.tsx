import React from 'react';
import { HiAcademicCap, HiGlobeAsiaAustralia, HiCursorArrowRipple, HiUserGroup } from "react-icons/hi2";


const HomeCategory: React.FC = () => {
    return (
        <>
            <div className="home_category_box bg-green-100 shadow-sm hover:shadow hover:text-green-400 duration-300 cursor-pointer p-4 flex justify-center flex-col">
                <span className='flex justify-center'>
                    <HiCursorArrowRipple className='text-5xl duration-300 text-green-300' />
                </span>
                <h3 className='text-2xl text-center duration-300'>Technology</h3>
            </div>
            <div className="home_category_box bg-green-100 shadow-sm hover:shadow hover:text-green-400 duration-300 cursor-pointer p-4 flex justify-center flex-col">
                <span className='flex justify-center'>
                    <HiAcademicCap className='text-5xl duration-300 text-green-300' />
                </span>
                <h3 className='text-2xl text-center duration-300'>Academic</h3>
            </div>
            <div className="home_category_box bg-green-100 shadow-sm hover:shadow hover:text-green-400 duration-300 cursor-pointer p-4 flex justify-center flex-col">
                <span className='flex justify-center'>
                    <HiUserGroup className='text-5xl duration-300 text-green-300' />
                </span>
                <h3 className='text-2xl text-center duration-300'>Sports</h3>
            </div>
            <div className="home_category_box bg-green-100 shadow-sm hover:shadow hover:text-green-400 duration-300 cursor-pointer p-4 flex justify-center flex-col">
                <span className='flex justify-center'>
                    <HiGlobeAsiaAustralia className='text-5xl duration-300 text-green-300' />
                </span>
                <h3 className='text-2xl text-center duration-300'>Global</h3>
            </div>
        </>
    );
};

export default HomeCategory;