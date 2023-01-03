import React, { useState, useEffect } from 'react';
import { PostData } from '../../Home/HomeBlog/HomeBlog';
import DashboardPostCard from './DashboardPostCard/DashboardPostCard';

const DashboardAllPost: React.FC = () => {
    const [allPosts, setAllPosts] = useState<PostData[]>();

    useEffect(() => {
        fetch(`http://localhost:5000/posts`)
            .then(res => res.json())
            .then(data => setAllPosts(data))
    }, [allPosts])

    return (
        <>
            {/* page title */}
            <div className='font-semibold my-5'>
                <h2 className='text-center text-green-500 text-4xl'>All Posts</h2>
                <h2 className="text-xl text-gray-800 ">Total : {allPosts?.length}</h2>
            </div>


            {/* category card */}
            <div className='category_post grid grid-cols-12 gap-4 mb-4'>
                {
                    allPosts?.map(post => <DashboardPostCard key={post._id} post={post} />)
                }
            </div>
        </>

    );
};

export default DashboardAllPost;