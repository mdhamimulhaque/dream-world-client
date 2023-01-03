import React from 'react';
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
                <h4 className='font-semibold text-xs'>{title.slice(0, 30)}..</h4>
                <small>Published: {posted_date}</small>
            </div>
        </div>
    );
};

export default PopularPost;