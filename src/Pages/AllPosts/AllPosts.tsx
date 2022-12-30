import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PostCard from '../../Components/PostCard/PostCard';
import { PostData } from '../Home/HomeBlog/HomeBlog';

const AllPosts = () => {
    const postData = useLoaderData() as PostData[];
    return (
        <>
            {/* page title */}
            <div className='font-semibold px-4 mt-5'>
                <h2 className='text-center text-green-500 text-4xl'>All Posts</h2>
                <h2 className="text-xl text-gray-800 ">Total : {postData.length}</h2>
            </div>


            {/* category card */}
            <div className='category_post container mx-auto px-4 flex flex-wrap flex-col gap-10 mb-10 mt-5'>
                {
                    postData.map((pData, index) => <PostCard key={index} pData={pData} />)
                }
            </div>
        </>

    );
};

export default AllPosts;