import React, { useState, useEffect } from 'react';
import PostCard from '../../../Components/PostCard/PostCard';
import { HiOutlineChevronDoubleRight } from "react-icons/hi2";
import { Link } from 'react-router-dom';

export interface PostData {
    _id: number,
    title: string;
    posted_date: string;
    description: string;
    tags?: (string)[] | null;
    postImg: string;
    user: User;
    category: string;
    email: string
}
export interface User {
    name: string;
    userImg: string;
}



const HomeBlog: React.FC = () => {
    const [postData, setPostData] = useState<PostData[]>([]);

    useEffect(() => {
        fetch(`http://localhost:5000/posts`)
            .then(res => res.json())
            .then(data => setPostData(data))
    }, [])
    return (
        <>
            <div className='container mx-auto px-4 flex flex-wrap flex-col gap-10 my-10'>
                {
                    postData.slice(0, 3).map((pData, index) => <PostCard key={index} pData={pData} />)
                }
            </div>
            <Link to='/all-posts' className="read_more_btn my-5 ">
                <button className='mb-5 w-full flex items-center justify-center rounded border border-gray-800 hover:shadow-lg bg-gray-800 px-8 md:px-12 py-3 text-sm font-medium text-white duration-200 hover:bg-green-500 hover:border-green-500 focus:outline-none focus:ring active:text-gray-800'>
                    <span>Read More</span>
                    <HiOutlineChevronDoubleRight className='ml-2' />
                </button>
            </Link>
        </>

    );
};

export default HomeBlog;