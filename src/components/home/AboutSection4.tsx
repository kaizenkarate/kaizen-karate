"use client";
import useElementHeight from "@/hooks/useElementHeight";
import Image from "next/image";
import { useState, useEffect } from "react";

const AboutSection4 = () => {
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
  return (
    <section className="flex flex-col lg:flex-row w-full h-auto justify-between gap-8">
      <div className="w-full xlg:w-[40%] h-full rounded-xl">
        <Image
          src="/images/abs4.png"
          alt="about-4"
          width={500}
          height={500}
          className=" w-full h-full object-cover rounded-xl"
          priority
          style={{ height: isSmallScreen ? "auto" : `${rightSideHeight}px` }}
        />
      </div>
      <div
        className="w-full xlg:w-[60%] h-full flex flex-col gap-2"
        ref={leftSideRef}
      >
        <h1 className="text-2xl font-bold text-defined-purple">
          Dr Arjun. C. Bhowal
        </h1>
        <span className="text-defined-purple font-semibold">President</span>
        <p className="text-defined-purple text-justify">
          The Greatest EDUCATION in the World is Watching the MASTER AT WORK
        </p>
        <p className="text-defined-brown text-justify">
          This Dance quote by Michael Jackson is true for any discipline and
          really goes well with sports and martial art like Karate. As a member
          of the team, Its my pleasure to welcome you to Kaizen Karate-Do
          Association India, affiliated to Gojuryu Karate-Do Kenryu Kan India.
          The institute is also a member of karate association of India and
          Karate Association of Bengal, is operating under the administrative
          capacity of Chief Technical Director: Sensei Debasish Dhali. The
          institute has trained numerous young boys and girls in the very same
          field and most of them making it upto the black belt. This physical
          training is an integral part in keeping someone physically fit and
          ready to face situation where self defence plays a major role. Since
          its inception this institute has been participating in many state and
          national grade championship where students have demonstrated
          outstanding performances in every event. The institute has also
          participated in some of the international championship in Japan,
          Srilanka and recently in Malaysia where the students have been
          successful in upholding the name of their country as well as their
          institution. I trust that you will have a long, happy and rewarding
          association with Kaizen Karate-Do Association.
        </p>
      </div>
    </section>
  );
};

export default AboutSection4;
