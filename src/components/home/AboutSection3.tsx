"use client";
import useElementHeight from "@/hooks/useElementHeight";
import Image from "next/image";
import { useState, useEffect } from "react";

const AboutSection3 = () => {
  const [rightSideHeight, leftSideRef] = useElementHeight<HTMLDivElement>();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const info = [
    {
      head: "World-Class Black Belt Instruction",
      detail:
        "Train under internationally certified 9th Dan experts with decades of experience. Our instructors bring authentic Japanese Karate principles to Siliguri, ensuring technical excellence and deep martial arts understanding for every student.",
    },
    {
      head: "Record of Championship Excellence",
      detail:
        "Join an academy with a legacy of producing state, national and international champions. Our structured training system consistently helps students achieve top rankings in prestigious karate competitions across India and abroad.",
    },
    {
      head: "Life Skills Development Focus",
      detail:
        "Beyond physical training, we build confidence, discipline and resilience through traditional karate values. Our holistic approach prepares students for life's challenges while maintaining strong community values.",
    },
  ];
  return (
    <section className="flex flex-col lg:flex-row w-full h-auto justify-between gap-8">
      <div
        className="w-full xlg:w-[60%] h-full flex flex-col gap-4"
        ref={leftSideRef}
      >
        <h1 className="text-2xl font-bold text-defined-purple">
          Empowering Futures Through Authentic Karate Excellence in the Heart of
          Siliguri and North Bengal
        </h1>

        <div className="flex flex-col gap-4 w-full">
          {info.map((item, index) => (
            <div key={index} className="flex flex-col gap-1 border-l-3 border-defined-purple pl-2">
              {/* <MdDone className="text-defined-yellow" /> */}
              <h2 className="text-defined-purple font-semibold">{item.head}</h2>
              <p className="text-defined-brown font-medium text-justify">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full xlg:w-[40%] h-full rounded-xl">
        <Image
          src="/images/abs3.jpg"
          alt="about-3"
          width={500}
          height={500}
          className=" w-full h-full object-cover rounded-xl"
          priority
          style={{ height: isSmallScreen ? "auto" : `${rightSideHeight}px` }}
        />
      </div>
    </section>
  );
};

export default AboutSection3;
