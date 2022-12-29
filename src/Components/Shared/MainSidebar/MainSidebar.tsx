import React from 'react';
import CategorySection from '../../CategorySection/CategorySection';
import PopularPost from '../../PopularPost/PopularPost';
import SocialBox from '../../SocialBox/SocialBox';
import TagSection from '../../TagSection/TagSection';



const MainSidebar = () => {
    return (
        <div className='mx-4 lg:mx-0'>
            {/* popular post */}
            <section className="popular_post_area bg-white p-2 mr-2 rounded">
                <h2 className='text-lg text-gray-800'>Popular Post</h2>
                <PopularPost />
                <PopularPost />
                <PopularPost />
            </section>
            {/* social area */}
            <section className="social_area bg-white p-2 mr-2 rounded my-5">
                <SocialBox />
            </section>

            {/* category area */}
            <section className="social_area bg-white p-2 mr-2 rounded my-5">
                <h2 className='text-lg text-gray-800'>All Categories</h2>
                <CategorySection />
            </section>

            {/* tag area */}
            <section className="social_area bg-white p-2 mr-2 rounded my-5">
                <h2 className='text-lg text-gray-800'>Tags</h2>
                <TagSection />
            </section>

            {/* news later area */}

        </div>
    );
};

export default MainSidebar;