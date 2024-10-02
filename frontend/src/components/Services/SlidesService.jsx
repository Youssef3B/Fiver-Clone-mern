import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useState } from "react";

function SlidesService({ Service }) {
  const slide = Service?.images;

  if (!slide || !Array.isArray(slide)) {
    return <div>No images available</div>;
  }
  const newArr = slide.map((item) => {
    const fullPath = String(item);

    const pathParts = fullPath.split("\\");
    const desiredPath = pathParts.slice(-2).join("\\");
    return desiredPath;
  });
  return (
    <div className="my-5">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {newArr.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              className=" rounded-lg w-full object-cover"
              src={`../${image}`} // Assuming `image` contains the image URL
              alt={`Slide ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SlidesService;
