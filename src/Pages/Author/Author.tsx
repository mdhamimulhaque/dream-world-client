import React from 'react';
import AuthorPostCard from './AuthorPostCard/AuthorPostCard';

const Author: React.FC = () => {
    return (
        <main>
            <div className="author_info p-5 bg-green-50">
                <img alt="img" src="https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=900"
                    className="mx-auto object-cover rounded-full h-20 w-20 " />
                <h2 className='text-2xl text-semibold text-center mt-2'>Name</h2>
            </div>
            <div className='grid grid-cols-12 px-4 mt-5'>
                <AuthorPostCard />
                <AuthorPostCard />
                <AuthorPostCard />
                <AuthorPostCard />
                <AuthorPostCard />
            </div>
        </main>
    );
};

export default Author;