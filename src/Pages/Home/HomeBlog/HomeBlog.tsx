import React, { useState, useEffect } from 'react';
import PostCard from '../../../Components/PostCard/PostCard';

type PostData = {
    title: string;
    posted_date: string;
    description: string;
    tags: string[];
    postImg: string;
    user: {
        name: string;
        userImg: string
    }
}[]


const HomeBlog: React.FC = () => {
    const [postData, setPostData] = useState<PostData>([] as PostData);

    useEffect(() => {
        fetch(`data.json`)
            .then(res => res.json())
            .then(data => setPostData(data))
    }, [])
    console.log(postData)
    return (
        <div className='container mx-auto px-4 flex flex-wrap flex-col gap-10 my-10'>
            {
                postData.map(pData => <PostCard />)
            }
        </div>
    );
};

export default HomeBlog;