import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import HomeBlog from './HomeBlog/HomeBlog';
import HomeCategory from './HomeCategory/HomeCategory';
import HomeSlider from './HomeSlider/HomeSlider';



const Home: React.FC = () => {
    return (
        <>
            <section className="slider_area">
                <HomeSlider />
            </section>
            <section className='home_category px-4 grid md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center my-10'>
                <HomeCategory />
            </section>
            <section className='home_blog_wrapper'>
                <HomeBlog />
            </section>
        </>
    );
};

export default Home;