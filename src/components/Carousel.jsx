import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from "../assets/images/img1.jpg"
import img2 from "../assets/images/img2.jpg"
import img3 from "../assets/images/img3.jpg"

const Carousel = () => {
    return (
        <Swiper
            className="border w-[400px] h-[320px]"
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true} // Infinite loop scrolling
        >
            <SwiperSlide>
                <div className="carousel-slide">
                    <img
                        src={img1}
                        alt="Slide 1"
                        className="carousel-image"
                    />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="carousel-slide">
                    <img
                        src={img2}
                        alt="Slide 2"
                        className="carousel-image"
                    />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="carousel-slide">
                    <img
                        src={img3}
                        alt="Slide 3"
                        className="carousel-image"
                    />
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Carousel;
