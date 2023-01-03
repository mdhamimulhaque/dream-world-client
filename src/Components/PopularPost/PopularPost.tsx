import React from 'react';
import { Link } from 'react-router-dom';
import { PostData } from '../../Pages/Home/HomeBlog/HomeBlog';

type Props = {
    PPost: PostData;
}

const PopularPost = ({ PPost }: Props) => {
    const { _id, title, category, posted_date, postImg } = PPost;
    return (
        <div className='flex gap-2 my-3'>
            <img src={postImg} alt="img"
                className='w-16 h-16 rounded object-cover'
            />
            <div className="sidebar_text m-0 p-0">
                <small className='text-xs  text-green-500'>{category}</small>
                <Link to={`/post/${_id}`} className='block duration-200 font-semibold cursor-pointer hover:text-green-500 text-xs'>{title.slice(0, 30)}..</Link>
                <small>Published: {posted_date}</small>
            </div>
        </div>
    );
};

export default PopularPost;