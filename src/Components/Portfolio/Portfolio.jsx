import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import Yosuf1 from "../../img/yosuf1.jpeg";
import Yosuf2 from "../../img/yosuf2.jpeg";
import Yosuf3 from "../../img/yosuf3.jpeg";
import Yosuf4 from "../../img/yosuf4.jpeg";
import Yosuf5 from "../../img/yosuf5.jpeg";
import "swiper/css";
import "swiper/css/free-mode";
import { themeContext } from "../../Contest";
import { useContext } from "react";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="مشاركاتي">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>My</span>
      <span>Recent Participant </span>

      {/* slider */}
      <Swiper
        freeMode={true}
        modules={[FreeMode]}
        grabCursor={true}
        className="portfolio-slider"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 6,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}
      >
        <SwiperSlide>
          <img src={Yosuf1} alt="yosuf" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Yosuf2} alt="yosuf" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Yosuf3} alt="yosuf" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Yosuf4} alt="yosuf" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Yosuf5} alt="yosuf" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
