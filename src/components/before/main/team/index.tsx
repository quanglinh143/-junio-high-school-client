import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./teamMember.css";
import t1 from "src/static/img/t1.jpg";
import t2 from "src/static/img/t2.jpg";
import t3 from "src/static/img/t3.jpg";
import t4 from "src/static/img/t4.jpg";
import founder1 from "src/static/img/founder1.png";
import founder2 from "src/static/img/founder2.jpg";
const TeamMembers = () => {
  return (
    <div className="bg-hero-pattern">
      <div className="text-color-fff flex justify-center text-2xl pt-4 pb-6">
        Team Members
      </div>
      <Swiper
        // spaceBetween={50}
        // slidesPerView={4}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2222,
          disableOnInteraction: false,
        }}
        breakpoints= {
          {
            0:{
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,

            },
            1000: {
              slidesPerView: 3,

            },
            1400: {
              slidesPerView: 4,

            }
          }
        }
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
      >
        <SwiperSlide>
          <img className="sildeImg w-full h-full" src={t1} alt={t1} />
          <div className="flex flex-col items-center p-4 rounded-b-2xl bg-color-fff">
            <div className="text-lg text-color-red">John Smith</div>
            <div className="text-color-red">CEO</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="sildeImg w-full h-full" src={t2} alt={t2} />
          <div className="flex flex-col items-center p-4 rounded-b-2xl bg-color-fff">
            <div className="text-lg text-color-red">Anna Lee</div>
            <div className="text-color-red">Supporter</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="sildeImg w-full h-full" src={t3} alt={t3} />
          <div className="flex flex-col items-center p-4 rounded-b-2xl bg-color-fff">
            <div className="text-lg text-color-red">Bread MC</div>
            <div className="text-color-red">IT Consulting</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="sildeImg w-full h-full" src={t4} alt={t4} />
          <div className="flex flex-col items-center p-4 rounded-b-2xl bg-color-fff">
            <div className="text-lg text-color-red">Maria Jean</div>
            <div className="text-color-red">UI/UX Designer</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="sildeImg w-full h-full"
            src={founder2}
            alt={founder2}
          />
          <div className="flex flex-col items-center p-4 rounded-b-2xl bg-color-fff">
            <div className="text-lg text-color-red">John Smith</div>
            <div className="text-color-red">CEO</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TeamMembers;
