import Image from "next/image";
import Link from "next/link";

export default function FbBtn() {
 

  return (
    <Link
      className="fixed bottom-20 right-5 md:right-10 z-[1100]"
      target="_blank"
      href="https://www.facebook.com/kaizenkarateindia/"
    >
      <div className="relative flex items-center justify-center shadow-lg">
        <Image
          src="/images/fb.png"
          alt="fb-icon"
          width={32}
          height={32}
          className=" object-cover"
        />       
      </div>
    </Link>
  );
}
