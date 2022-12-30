import React from 'react';
import './HomeSlider.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


type SliderItems = {
    id: number;
    img: string;
    title: string;
    des: string;
}[]

const sliderItems: SliderItems = [
    {
        id: 1,
        img: 'https://img.freepik.com/free-vector/digital-global-connection-network-technology-background_1017-23324.jpg?w=1380&t=st=1672374189~exp=1672374789~hmac=141f798f611907f40f2fae6cdc0bbe5eced5eacb3aab6ff75d689b2f8fcf77ba',
        title: 'The spectacle before us was indeed sublime',
        des: 'It’s great to have you here. We know that first impressions are important, so we’ve populated your new site with some initial.'
    },
    {
        id: 2,
        img: 'https://img.freepik.com/free-photo/book-library-with-open-textbook_1150-5920.jpg?w=996&t=st=1672374482~exp=1672375082~hmac=ac81c11a340b600de4dc584a4afcdab69f544cb44e72e69d720ccb9a7d036e5b',
        title: 'Better education equals a better nation',
        des: 'Be educated and feel empowered. Education makes the world a better place. Share your knowledge to help people.'
    },
    {
        id: 3,
        img: 'https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?w=1060&t=st=1672374796~exp=1672375396~hmac=daf1be3f206c3de05d13cdcdf39b7363c80e9d57948f79f25ec5df4b6d0d5251',
        title: 'Go, Fight, Win!',
        des: 'Find breaking news, features and analysis on the NFL, NBA, MLB, golf, tennis, soccer, NCAA, NHL, World Series, Super Bowl, Olympics, World Cup and more.'
    }
]

const HomeSlider: React.FC = () => {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
            >
                {
                    sliderItems.map(item =>
                        <SwiperSlide>
                            <div className="slider_img relative before:absolute before:bg-black before:h-full before:w-full before:opacity-40">
                                <img className='h-[400px] overflow-y-hidden lg:h-[350px] object-cover w-full' src={item?.img} alt="img" />
                            </div>
                            <div className="slider_text text-gray-100 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-3/4 mx-auto">
                                <h2 className='text-2xl md:text-3xl lg:text-4xl md:w-9/12 mx-auto font-bold'>{item?.title}</h2>
                                <p className='md:w-9/12 mx-auto'>{item?.des}</p>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
};

export default HomeSlider;