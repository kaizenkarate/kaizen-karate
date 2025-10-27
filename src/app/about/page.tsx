// import SubBanner from '@/components/global/SubBanner';
import AboutSection1 from '@/components/home/AboutSection1';
import InfoSection from '@/components/home/InfoSection';
import MainTemplate from '@/templates/MainTemplate'
import React from 'react'

const page = () => {
  return (
    <MainTemplate>
      {/* <SubBanner heading="About Us" /> */}
      <section className="self-padding">
        <InfoSection />
        <AboutSection1 />
      </section>
    </MainTemplate>
  );
}

export default page