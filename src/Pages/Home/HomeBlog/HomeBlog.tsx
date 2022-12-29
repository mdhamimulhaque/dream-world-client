import React from 'react';
import PostCard from '../../../Components/PostCard/PostCard';

const HomeBlog = () => {
    return (
        <div className='container mx-auto px-4 flex flex-wrap flex-col gap-4 my-10'>
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
        </div>
    );
};

export default HomeBlog;