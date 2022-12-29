import React from 'react';


const CommentBox = () => {
    return (
        <div className="post_owner_info mt-3 p-4 border border-green-200 rounded">
            <div className='flex items-center gap-2'>
                <img src="https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=900"
                    alt="userImg"
                    className='rounded-full w-12 h-12'
                />
                <div className='text-sm'>
                    <h4 className='font-semibold'>Md Hamimul Haque</h4>
                    <small>22/12/22</small>
                </div>
            </div>
            <p className='text-gray-600 mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias illo est neque, quisquam odio qui, culpa aspernatur impedit repellat officiis perferendis voluptatum nihil corporis numquam, minima amet earum corrupti laudantium ipsa deleniti sed eligendi! Fugit rerum nulla expedita totam veniam?</p>
        </div>
    );
};

export default CommentBox;