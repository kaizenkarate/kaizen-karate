import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";
import TopHeader from "@/components/global/TopHeader";
import OnlyMobile from "./OnlyMobile";
import FbBtn from "@/components/global/FbBtn";
import InstaBtn from "@/components/global/InstaBtn";
export default function MainTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full h-full flex-col overflow-x-hidden">
      <div className="z-[1000] w-full">
        <TopHeader />
        <Header />
      </div>

      {/* Main Content */}
      <div className="md:mt-[1rem] mt-[4rem]">{children}</div>
      <OnlyMobile />
      <FbBtn />
       <InstaBtn />
      <Footer />
    </div>
  );
}
