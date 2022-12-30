import React from 'react';
import { HiOutlineChatBubbleLeftRight, HiOutlineHeart } from "react-icons/hi2";
import Tag from '../../Components/Tag/Tag';
import { HiOutlineChevronRight } from "react-icons/hi2";
import CommentBox from './CommentBox/CommentBox';
import { useLoaderData } from 'react-router-dom';
import { PostData } from '../Home/HomeBlog/HomeBlog';

const PostDetails: React.FC = () => {
    const data = useLoaderData() as PostData;
    const { _id, title, category, posted_date, description, tags, postImg, user } = data;
    return (
        <>
            <div className="blog_card_area text-gray-800  p-5 md:p-10 rounded">
                {/* card header */}
                <div className="card_header ">
                    <div className="header_img  mb-3">
                        <img src={postImg} alt="img"
                            className='h-60 w-full lg:h-80 object-cover'
                        />
                    </div>
                    <div className="header_text leading-10">
                        <span className="inline-flex bg-green-100 text-gray-800 rounded-full h-6 px-3 justify-center items-center">
                            {category}
                        </span>
                        <h2 className='text-xl md:text-3xl font-semibold'>{title}</h2>
                        {/* user-published */}
                        <div className="post_owner_info flex flex-wrap  gap-2 mt-3">
                            <img src={user?.userImg}
                                alt="userImg"
                                className='rounded-full w-8 h-8'
                            />
                            <div className='flex flex-wrap items-center'>
                                <p className='text-sm'>{user?.name}</p>
                                <HiOutlineChevronRight className='text-green-500' />
                                <p className='leading-2 text-sm'>{posted_date}</p>
                                <HiOutlineChevronRight className='text-green-500' />
                                <div className="post_info flex gap-2 md:gap-3">

                                    <div className='flex gap-2 items-center'>
                                        <HiOutlineChatBubbleLeftRight className='text-green-500' />
                                        <small>55</small>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <HiOutlineHeart className='text-green-500' />
                                        <small>20</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card body */}
                <div className="card_body my-4">
                    <p>{description}</p>
                </div>
                {/* card footer */}
                <div className="card_footer lg:flex lg:justify-between pb-2">
                    <div className="tag_area flex flex-wrap gap-2 my-4">
                        {
                            tags?.map((tg, index) => <Tag key={index}>#{tg}</Tag>)
                        }
                    </div>
                </div>

                {/* comments */}

                <section className='comments bg-green-50 p-4'>
                    <h2 className="inline-flex text-semibold text-gray-800 rounded-full h-6  justify-center items-center">
                        Comments (10)
                    </h2>
                    {/* input box  */}
                    <form >
                        <label htmlFor="chat" className="sr-only">Your Comments</label>
                        <div className="flex items-center py-2 rounded-lg">
                            <textarea name="comment" id="chat" className="block mr-2 p-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500" placeholder={`Commenting publicly as `}></textarea>
                            <button type="submit" className="inline-flex justify-center p-2 text-green-500 rounded-full cursor-pointer hover:bg-green-100">
                                <svg className="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                            </button>
                        </div>
                    </form>
                    {/* <div className='bg-rose-600 text-white hover:bg-rose-700 flex justify-between items-center py-3 px-2'>
                        <h2 className='font-bold '>Please login to add a review</h2>
                        <HiOutlineHeart className='text-xl' />
                    </div> */}
                    <div className="comment_box my-2">
                        <CommentBox />
                        <CommentBox />
                        <CommentBox />
                        <CommentBox />
                    </div>


                </section>
            </div>
        </>
    );
};

export default PostDetails;