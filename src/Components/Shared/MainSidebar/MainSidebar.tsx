import React from 'react';
import CategorySection from '../../CategorySection/CategorySection';
import PopularPost from '../../PopularPost/PopularPost';
import SocialBox from '../../SocialBox/SocialBox';



const MainSidebar = () => {
    return (
        <div>
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

            {/* category-area */}
            <section className="social_area bg-white p-2 mr-2 rounded my-5">
                <h2 className='text-lg text-gray-800'>Popular Post</h2>
                <CategorySection />
            </section>
        </div>
    );
};

export default MainSidebar;