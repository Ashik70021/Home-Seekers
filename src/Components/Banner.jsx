import '../App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
const Banner = () => {

    return (
        <div className='container mt-8 rounded'>
            <Swiper
                pagination={{
                    type: 'progressbar',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><div className="slide slide1">
                    <h1 className='text-block'>Your Home Awaits <br /> Let's Find It Together</h1>
                </div></SwiperSlide>
                <SwiperSlide><div className="slide slide2">
                    <h1 className='text-block'>Find your sanctuary. <br /> We're here to guide you home.</h1>
                </div></SwiperSlide>
                <SwiperSlide><div className="slide slide3">
                    <h1 className='text-block'>Unlock your dream home. <br /> Start your journey with us.</h1>
                </div></SwiperSlide>
                <SwiperSlide><div className="slide slide4">
                    <h1 className='text-block'>Discover your haven. <br /> Let's make it yours.</h1>
                </div></SwiperSlide>

            </Swiper>

        </div>

    );
};

export default Banner;
