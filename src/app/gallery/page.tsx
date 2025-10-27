export const dynamic = "force-dynamic";
import { getAllGallery } from "@/actions/gallery";
// import SubBanner from "@/components/global/SubBanner";
import { GalleryDocument } from "@/models/Gallery";
import MainTemplate from "@/templates/MainTemplate";
import Image from "next/image";
import React from "react";

const page = async () => {
  const gallery = await getAllGallery(1,0);
  return (
    <MainTemplate>
      {/* <SubBanner heading="Gallery" /> */}

      {/* Your Work here  */}
      <section className="self-padding">
        <div className="pb-8 flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-defined-purple">
            Image Gallery
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
            {gallery.data.map((item: GalleryDocument) => (
              item.status && <div key={item.galleryId}>
                <Image
                  src={item.gallery_image.secure_url}
                  alt={item.name}
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
