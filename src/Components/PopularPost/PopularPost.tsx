import React from 'react';

const PopularPost = () => {
    return (
        <div className='flex gap-2 my-3'>
            <img src="https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=900" alt="img"
                className='w-16 h-16 rounded'
            />
            <div className="sidebar_text">
                <h4 className='font-semibold'>Lorem ipsum dolor sit amet.</h4>
                <small>Published: 22/12/22</small>
            </div>
        </div>
    );
};

export default PopularPost;