// Carousel.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../assets/css/carousel.css";

const Carousel = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true} // Infinite loop scrolling
        >
            <SwiperSlide>
                <div className="carousel-slide">
                    <img
                        src="../assets/images/img1.jpg"
                        alt="Slide 1"
                        className="carousel-image"
                    />
                    <div className="carousel-content">
                        <h3>Latest News & Updates</h3>
                        <p>
                            Turpis interdum nunc varius ornare dignissim
                            pretium. Maecenas ornare quis aliquet sed velit.
                            Pellentesque in ut tellus.
                        </p>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="carousel-slide">
                    <img
                        src="../assets/images/img2.jpg"
                        alt="Slide 2"
                        className="carousel-image"
                    />
                    <div className="carousel-content">
                        <h3>New Event Launch</h3>
                        <p>
                            Fringilla purus, erat fringilla tincidunt quisque
                            nunc. Vivamus tempus nulla at elit lobortis cursus.
                        </p>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="carousel-slide">
                    <img
                        src="../assets/images/img3.jpg"
                        alt="Slide 3"
                        className="carousel-image"
                    />
                    <div className="carousel-content">
                        <h3>Exciting Announcements</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Cras bibendum justo a varius volutpat.
                        </p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Carousel;
