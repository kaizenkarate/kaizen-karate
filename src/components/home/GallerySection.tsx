export const dynamic = "force-dynamic";
import { GalleryDocument } from "@/models/Gallery";
import GalleryClient from "./GalleryClient";
import Link from "next/link";

const GallerySection = ({ Gallery }: { Gallery: GalleryDocument[] }) => {
  
  return (
    <section className="flex flex-col justify-center">
      <h1 className="text-2xl font-bold text-defined-purple text-center">Gallery</h1>
      <Link href="/gallery" className="text-defined-purple md:text-xl text-right hover:underline cursor-pointer">View All</Link>
      <GalleryClient Gallery={Gallery} />
    </section>
  );
};

export default GallerySection;
