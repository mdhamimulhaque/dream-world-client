import React from 'react';
import { HiOutlineChatBubbleLeftRight, HiOutlineHeart, HiOutlineCalendarDays, HiSparkles } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { PostData } from '../../Pages/Home/HomeBlog/HomeBlog';
import Tag from '../Tag/Tag';
import placeholderImg from '../../img/placeholder_user.png';

type Props = {
    pData: PostData;
}

const PostCard = ({ pData }: Props) => {
    const { _id, title, category, posted_date, description, isPopular, tags, postImg, userImg, userName } = pData;

    return (
        <>
            <div className="post_card_area relative bg-white hover:shadow-lg duration-300 text-gray-800 shadow-sm p-5 md:p-10 rounded">
                {/* card header */}
                <div className="card_header lg:flex gap-4">
                    <div className="header_img mb-3">
                        <img src={postImg} alt="img"
                            className='lg:w-52 lg:h-40 object-cover'
                        />

                    </div>
                    <div className="header_text leading-10 relative">
                        <span className="inline-flex bg-green-100 text-gray-800 rounded-full h-6 px-3 justify-center items-center">
                            {category}
                        </span>
                        <h2 className='text-xl md:text-3xl font-semibold'>{title}</h2>
                        <div className="post_info flex gap-2 md:gap-3">
                            <div className='flex gap-1 items-center'>
                                <HiOutlineCalendarDays className='text-green-500' />
                                <small className='text-xs'>{posted_date}</small>
                            </div>
                            <span className='text-green-500'>-</span>
                            <div className='flex gap-1 items-center'>
                                <HiOutlineChatBubbleLeftRight className='text-green-500' />
                                <small className='text-xs'>55</small>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <HiOutlineHeart className='text-green-500' />
                                <small className='text-xs'>20</small>
                            </div>
                        </div>
                    </div>
                    {
                        isPopular &&
                        <span className='absolute flex items-center bg-green-500 px-2 text-white right-0 top-0'>
                            Popular
                            <HiSparkles className='ml-2 text-white' />
                        </span>
                    }
                </div>
                {/* card body */}
                <div className="card_body my-4">
                    <p>{description.slice(0, 200)}...</p>
                </div>
                {/* card footer */}
                <div className="card_footer lg:flex lg:justify-between pb-2">
                    <div className="tag_area flex flex-wrap gap-2 my-4">
                        {
                            tags?.map((tg, index) => <Tag key={index}>#{tg}</Tag>)
                        }

                    </div>
                    <div className="post_owner_info flex gap-3 items-center">
                        <img src={userImg ? userImg : placeholderImg}
                            alt="userImg"
                            className='rounded-full w-10 h-10'
                        />
                        <h4 className='font-semibold'>{userName ? userName : "No Name set"}</h4>
                    </div>
                </div>
                <Link to={`/post/${_id}`} className="button_box absolute bottom-[-20px] left-1/2 translate-x-[-50%]">
                    <button className='inline-block rounded border border-gray-800 hover:shadow-lg bg-gray-800 px-8 md:px-12 py-3 text-sm font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring active:text-gray-800'>Details</button>
                </Link>
            </div>

        </>
    );
};

export default PostCard;