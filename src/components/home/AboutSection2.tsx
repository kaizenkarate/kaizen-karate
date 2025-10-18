"use client";
import useElementHeight from "@/hooks/useElementHeight";
import Image from "next/image";
import { useState, useEffect } from "react";

const AboutSection2 = () => {
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
        head: "15+",
        detail: "Years of Legacy"
    },
    {
        head: "50+",
        detail: "National Medals"
    },
    {
        head: "200+",
        detail: "Successful Students"
    },
    {
        head: "9th",
        detail: "Dan Master Guidance"
    },
  ]

  return (
    <section className=" relative flex flex-col lg:flex-row justify-between gap-4 items-end">
       <div className="absolute inset-0">
              <Image
                src="/images/homepageimage.jpg"
                alt="footer"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
      <div
        className="absolute left-0 bottom-0 w-full rounded-xl"
        style={{
          height: isSmallScreen ? "100%" : `${rightSideHeight}px`,
        }}
      />
      <div
        className="relative basis-full md:basis-[55%] h-full flex flex-col gap-4 text-white px-10 py-6"
        ref={leftSideRef}
      >
        <p className="text-justify text-defined-purple">
          Choose Kaizen Karate-Do for expert 9th Dan instruction, proven
          champion development, and holistic growth. As Siliguri&apos;s premier
          karate academy, we offer authentic training in Traditional Karate,
          Sports Karate, and Women&apos;s Self-Defense. Our supportive community and
          international-standard facilities make us North Bengal&apos;s trusted
          choice for developing discipline, confidence, and lifelong martial
          arts excellence.
        </p>
        <div className="flex flex-col gap-4 md:flex-row justify-between">
          {info.map((item, index) => (
            <div key={index} className="flex flex-col justify-center items-center">
              <h1 className="text-4xl font-bold text-defined-purple">{item.head}</h1>
              <p className="text-defined-purple text-sm">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative basis-full md:basis-[45%]">
        <Image
          src="/images/abs2.png"
          alt="about 2"
          width={600}
          height={600}
          className="object-cover w-full overflow-y-visible"
        />
      </div>
    </section>
  );
};

export default AboutSection2;
