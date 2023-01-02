import React from 'react';
import { CommentType } from '../PostDetails';
import placeholderImg from '../../../img/placeholder_user.png';
import { HiOutlineCalendarDays } from "react-icons/hi2";

type Props = {
    commentData: CommentType;
}


const CommentBox = ({ commentData }: Props) => {
    const { _id, comment, email, userName, userImg, posted_date } = commentData;

    return (
        <div className="post_owner_info mt-3 p-4 border border-green-200 rounded">
            <div className='flex items-center gap-2'>
                <img src={userImg ? userImg : placeholderImg}
                    alt="userImg"
                    className='rounded-full w-12 h-12'
                />
                <div className='text-sm'>
                    <h4 className='font-semibold'>{userName}</h4>
                    <small className='flex items-center gap-1'> <HiOutlineCalendarDays className='text-green-500' />{posted_date}</small>
                </div>
            </div>
            <p className='text-gray-600 mt-2'>{comment}</p>
        </div>
    );
};

export default CommentBox;