import React from 'react';
import HomeBlog from './HomeBlog/HomeBlog';
import HomeSlider from './HomeSlider/HomeSlider';

const Home = () => {
    return (
        <>
            <section className="slider_area">
                <HomeSlider />
            </section>
            <section className='home_blog_wrapper'>
                <HomeBlog />
            </section>
        </>
    );
};

export default Home;