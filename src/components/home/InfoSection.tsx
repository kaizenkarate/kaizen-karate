"use client";
import { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import InfoCard from "../ui/InfoCard";


const InfoSection = () => {
  const infos = [
    {
      icon: "/svgs/svg1.svg",
      title: "Free Trial Class",
      detail: "Claim your free introductory class. No experience needed!",
    },
    {
      icon: "/svgs/svg2.svg",
      title: "Instant Enrollment Offer",
      detail: "Secure your spot with a simple click now.",
    },
    {
      icon: "/svgs/svg3.svg",
      title: "Expert Instructors",
      detail: "Train under certified 9th Dan professional leadership.",
    },
    {
      icon: "/svgs/svg4.svg",
      title: "Flexible Training Plans",
      detail: "Customizable schedules with easy installment payment options.",
    },
  ];

  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 460) {
        setSlidesToShow(1);
      } else if (window.innerWidth <= 860) {
        setSlidesToShow(2);
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className="flex flex-col gap-4">
      <div className="w-full py-4 flex gap-4">
        <Swiper
          slidesPerView={slidesToShow}
          spaceBetween={30}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          className="!h-auto"
        >
          {infos.map((info, index) => (
            <SwiperSlide key={index} className="!h-auto">
              <InfoCard {...info} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default InfoSection;