// import SubBanner from "@/components/global/SubBanner";
import MainTemplate from "@/templates/MainTemplate";
import Image from "next/image";

const page = () => {
  const awards = [
    "/images/Untitled-3.jpg",
    "/images/Untitled-4.jpg",
    "/images/Untitled-5.jpg",
    "/images/Untitled-6.jpg",
    "/images/Untitled-7.jpg",
    "/images/Untitled-8.jpg",
    "/images/Untitled-9.jpg",
    "/images/Untitled-10.jpg",
    "/images/Untitled-11.jpg",
    "/images/Untitled-12.jpg",
    "/images/Untitled-13.jpg",
    "/images/Untitled-14.jpg",
  ];
  return (
    <MainTemplate>
      {/* <SubBanner heading="Awards" /> */}
      {/* Your Work here  */}
      <section>
        <div className="flex flex-col gap-6 px-4 md:px-18 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
            {awards.map((item, index) => (
              <div key={index}>
                <Image
                  src={item}
                  alt={index.toString()}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainTemplate>
  );
};

export default page;
