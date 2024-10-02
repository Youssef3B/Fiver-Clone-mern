import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Navigation } from "swiper/modules";

const Services = [
  {
    title: "Video Editing",
    image: "./images/video.webp",
  },
  {
    title: "Buisness",
    image: "./images/buisness.jpg",
  },
  {
    title: "Consulting",
    image: "./images/consulting.jpg",
  },
  {
    title: "design",
    image: "./images/design.jpg",
  },
  {
    title: "music Vocal",
    image: "./images/musicvocal.jpg",
  },
  {
    title: "programming",
    image: "./images/programming.webp",
  },
  {
    title: "Writing",
    image: "./images/writing.jpg",
  },
];
function MostWanted() {
  return (
    <div className="px-64 py-8 bg-white">
      <h3 className="text-3xl font-bold mb-6">Most Wanted Services</h3>
      <div className="relative">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          loop={true} // Enable infinite loop
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {Services.map((service, index) => (
            <SwiperSlide key={index}>
              <Card service={service} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev absolute w-10 h-10 bg-green-500 flex justify-center items-center text-lg font-bold rounded-full top-24 left-[-16px] z-50 cursor-pointer">
          <span className="text-white">
            <FaArrowLeft />
          </span>
        </div>
        <div className="swiper-button-next absolute w-10 h-10 bg-green-500 flex justify-center items-center text-lg font-bold rounded-full top-24 right-[-16px] z-50 cursor-pointer">
          <span className="text-white">
            <FaArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
}

function Card({ service }) {
  return (
    <div className="relative rounded-md h-64">
      <img
        className="rounded-xl h-full object-cover w-full"
        src={service.image}
        alt=""
      />
      <div className="absolute  w-full h-full top-0 flex justify-center items-center rounded-xl ">
        <div className="bg-black absolute top-0 w-full h-full opacity-50 rounded-xl"></div>
        <h4 className="text-white z-10 font-bold text-lg">{service.title}</h4>
      </div>
    </div>
  );
}
export default MostWanted;
