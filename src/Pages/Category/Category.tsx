import React from 'react';
import PostCard from '../../Components/PostCard/PostCard';

const Category: React.FC = () => {
    return (
        <>
            {/* page title */}
            <div className='font-semibold px-4 mt-5'>
                <h2 className='text-center text-green-500 text-4xl'>Technology</h2>
                <h2 className="text-xl text-gray-800 ">Total : 20</h2>
            </div>


            {/* category card */}
            <div className='category_post container mx-auto px-4 flex flex-wrap flex-col gap-10 mb-10 mt-5'>
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
        </>

    );
};

export default Category;