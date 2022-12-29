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
        img: 'https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, placeat?',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, placeat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, placeat?'
    },
    {
        id: 2,
        img: 'https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, placeat?',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, placeat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, placeat?'
    },
    {
        id: 3,
        img: 'https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, placeat?',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, placeat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, placeat?'
    },
    {
        id: 4,
        img: 'https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, placeat?',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, placeat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, placeat?'
    },
    {
        id: 5,
        img: 'https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, placeat?',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, placeat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, placeat?'
    }
]

const HomeSlider = () => {
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
                            <div className="slider_text text-gray-100 absolute top-[20%] md:top-[30%] left-[15%] w-3/4 mx-auto">
                                <h2 className='text-lg md:text-xl lg:text-4xl font-bold'>{item?.title}</h2>
                                <p>{item?.des}</p>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
};

export default HomeSlider;