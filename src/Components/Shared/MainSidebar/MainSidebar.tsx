import React from 'react';
import PopularPost from '../../PopularPost/PopularPost';

const MainSidebar = () => {
    return (
        <div>
            <div className="popular_post_area bg-white  p-2 mx-2 rounded">
                <h2 className='text-lg text-gray-800'>Popular Post</h2>
                <PopularPost />
                <PopularPost />
                <PopularPost />
            </div>
        </div>
    );
};

export default MainSidebar;