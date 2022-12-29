import React from 'react';
import { HiOutlineChatBubbleLeftRight, HiOutlineHeart } from "react-icons/hi2";
import Tag from '../Tag/Tag';

const PostCard = () => {
    return (
        <div className="blog_card_area bg-white text-gray-800 shadow-lg p-5 md:p-10">
            {/* card header */}
            <div className="card_header lg:flex gap-4">
                <div className="header_img mb-3">
                    <img src="https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=900" alt=""
                        className='lg:w-52 lg:h-40 object-cover'
                    />
                </div>
                <div className="header_text leading-10">
                    <h2 className='text-xl md:text-3xl font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, numquam?</h2>
                    <div className="post_info flex gap-2 md:gap-3">
                        <small>Published: 22/12/22</small> <span className='text-green-500'>-</span>
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
            {/* card body */}
            <div className="card_body my-4">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia accusantium rem pariatur architecto ut ducimus eaque minus provident fugiat. A!</p>
            </div>
            {/* card footer */}
            <div className="card_footer lg:flex lg:justify-between ">
                <div className="tag_area flex flex-wrap gap-2 my-4">
                    <Tag>Technology</Tag>
                    <Tag>Web</Tag>
                    <Tag>Web</Tag>
                    <Tag>Web</Tag>
                    <Tag>Web</Tag>
                </div>
                <div className="post_owner_info flex gap-3 items-center">
                    <img src="https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=900"
                        alt="userImg"
                        className='rounded-full w-10 h-10'
                    />
                    <h4 className='font-semibold'>Md Hamimul Haque</h4>
                </div>
            </div>
        </div>
    );
};

export default PostCard;