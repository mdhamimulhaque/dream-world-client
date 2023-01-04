import React, { useState, useEffect } from 'react';
import CategorySection from '../../SidebarCategory/SidebarCategory';
import PopularPost from '../../PopularPost/PopularPost';
import SocialBox from '../../SocialBox/SocialBox';
import TagSection from '../../TagSection/TagSection';
import { PostData } from '../../../Pages/Home/HomeBlog/HomeBlog';


const MainSidebar: React.FC = () => {
    const [popularPosts, setPopularPosts] = useState<PostData[]>([]);
    useEffect(() => {
        fetch(`http://localhost:5000/popular-posts`)
            .then(res => res.json())
            .then(data => {
                setPopularPosts(data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div className='mx-4 lg:mx-0 my-5'>
            {/* popular post */}
            <section className="popular_post_area bg-white p-2 mr-2 rounded">
                <h2 className='text-lg text-gray-800'>Popular Post</h2>
                {
                    popularPosts?.slice(0, 5).map(PPost => <PopularPost key={PPost._id} PPost={PPost} />)
                }


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