// import SubBanner from "@/components/global/SubBanner";
import MainTemplate from "@/templates/MainTemplate";

const page = () => {
  return (
    <MainTemplate>
      {/* <SubBanner heading="Video" /> */}
      {/* Your Work here  */}
      <section className="self-padding">
       
        <div className="pb-8 flex flex-col gap-6">
          {/* Video Gallery */}
          <h1 className="text-3xl font-bold text-defined-purple">
            Video Gallery
          </h1>
        </div>
      </section>
    </MainTemplate>
  );
};

export default page;
