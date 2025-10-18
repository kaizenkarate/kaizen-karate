"use client";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HomeSlider = () => {
  const slides = [
    "/images/slider1.avif",
    "/images/slider2.avif",
    "/images/slider3.avif",
  ];
  return (
    <section>
      <Swiper
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        loop={true}
      >
        {slides.map((slide: string, index: number) => (
          <SwiperSlide
            className=" relative rounded-lg !h-full"
            key={index}
          >
            <div className="w-full !h-full">
              <Image
                src={slide}
                alt={`Slide ${index + 1}`}
                width={1440}
                height={580}
                className="w-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HomeSlider;
