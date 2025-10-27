// import SubBanner from '@/components/global/SubBanner';
import MainTemplate from '@/templates/MainTemplate'
import EnquiryBoxSection from '@/components/home/EnquiryBoxSection';
import ClassSection from '@/components/home/ClassSection';
// import Link from 'next/link';

const page = () => {
  
  return (
    <MainTemplate>
      {/* <SubBanner heading="Our Classes" /> */}
      <section className="self-padding">
        <div className="flex justify-between items-center">
          <h1 className="text-xl md:text-3xl font-bold text-defined-purple">
            Our Training & Classes
          </h1>
          <button className="text-white font-semibold px-2 py-1 md:text-xl text-sm text-right hover:scale-105 transition-all duration-500 ease-in-out rounded-xl bg-defined-purple cursor-pointer">
            Download Syllabus
          </button>
        </div>
        <ClassSection />
        <EnquiryBoxSection />
      </section>
    </MainTemplate>
  );
}

export default page