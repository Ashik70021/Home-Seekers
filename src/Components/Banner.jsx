import '../App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
const Banner = () => {

    return (
        <Swiper
            pagination={{
                type: 'progressbar',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide><div className="slide slide1">
                <h1>slide 1</h1>
            </div></SwiperSlide>
            <SwiperSlide><div className="slide slide2">
                <h1>slide 2</h1>
            </div></SwiperSlide>
            <SwiperSlide><div className="slide slide3">
                <h1>slide 3</h1>
            </div></SwiperSlide>
            <SwiperSlide><div className="slide slide4">
                <h1>slide 4</h1>
            </div></SwiperSlide>

        </Swiper>


    );
};

export default Banner;