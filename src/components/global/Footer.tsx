import Image from "next/image";
import Link from "next/link";
import { FaMobile, FaWhatsapp } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdDone } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const links = [
    {
      heading: "Quick Links",
      details: [
        { name: "Home", link: "/" },
        { name: "About Us", link: "/about" },
        { name: "Our Classes", link: "/classes" },
        { name: "Media", link: "/media" },        
        { name: "Contact Us", link: "/contact" },
      ],
    },    
  ];
  return (
    <footer className="self-padding border-t-4 flex flex-col relative text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/footerbg.jpg"
          alt="footer"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
      <div className=" flex flex-col  lg:flex-row gap-12 z-10">
        <div className=" w-full lg:w-[30%] flex flex-col gap-4">
          <div className="flex justify-center">
            <Image
              src={"/logo.png"}
              alt="logo-white"
              width={1224}
              height={181}
              priority
              className=" size-[4rem]"
            />
          </div>
          <p className="text-sm text-justify">
            Kaizen Karate-Do Association is Siliguri&apos;s premier karate
            academy, offering authentic training in Traditional, Sports, and
            Women&apos;s Self-Defense programs. Under expert leadership, we
            build champions while instilling discipline, confidence, and life
            skills. Join North Bengal&apos;s trusted martial arts community and
            embark on your journey to physical mastery and mental strength in a
            supportive, professional environment.
          </p>
        </div>
        <div className=" w-full lg:w-[70%] grid grid-cols-1 lg:grid-cols-3 gap-4">
          {links.map((item, index) => (
            <div className=" flex flex-col gap-4" key={index}>
              <h1 className=" lg:text-xl text-2xl xlg:text-2xl font-semibold ">
                {item.heading}
              </h1>
              <div className=" flex flex-col gap-4">
                {item.details.map((item, index) => (
                  <Link
                    href={item.link}
                    key={index}
                    className="hover:scale-105 transition-all duration-500 flex items-center gap-1"
                  >
                    <MdDone className="text-defined-yellow size-5" />{" "}
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div className="flex flex-col gap-4 w-full">
            <h1 className=" lg:text-xl text-2xl xlg:text-2xl font-semibold text-white">
              Contact Information
            </h1>
            <div className=" flex flex-col gap-2  lg:text-sm text-lg xlg:text-lg ">
              <div className="flex gap-2">
                <FaWhatsapp size={20} className=" text-defined-yellow" />{" "}
                <Link href={"https://wa.me/919832480087"}>+91 98324 80087</Link>
                {""}
              </div>
              <div className="flex gap-2">
                <FaMobile size={20} className=" text-defined-yellow" />{" "}
                <Link target="_blank" href={"tel:+919832480087"}>
                  +91 98324 80087
                </Link>{" "}
              </div>
              <Link
                href={"mailto:kaizenkarateindia@gmail.com"}
                target="_blank"
                className="flex gap-2"
              >
                <MdEmail size={20} className=" text-defined-yellow" />{" "}
                <span>kaizenkarateindia@gmail.com</span>
              </Link>
              <Link
                href={"https://maps.app.goo.gl/HEwGqv7P5KVNN2Dz6"}
                className="flex gap-2 w-full "
                target="_blank"
              >
                <IoLocationSharp
                  size={20}
                  className=" text-defined-yellow shrink-0"
                />{" "}
                <span>
                  Udham Singh Sarani Rd, Ward 13, Punjabi Para, Siliguri, West
                  Bengal 734001
                </span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <h2 className=" lg:text-xl text-2xl xlg:text-2xl font-semibold text-white">
              Follow Us
            </h2>
            <div className="flex gap-4">
              <Link
                href={"https://www.facebook.com/kaizenkarateindia/"}
                target="_blank"
              >
                <Image
                  src="/images/fb.png"
                  alt="fb-icon"
                  width={32}
                  height={32}
                  className=" size-7"
                />
              </Link>
              <Link
                href={"https://www.instagram.com/kaizenkarate07"}
                target="_blank"
              >
                <Image
                  src="/images/insta.png"
                  alt="fb-icon"
                  width={32}
                  height={32}
                  className=" size-7"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className=" pt-6 flex lg:flex-row flex-col justify-between items-center  border-t  z-10">
        <div className="text-center font-bold text-xs md:text-base">
          <h1>
            ©{" "}
            <Link href={"/"} className=" text-white ">
              {" "}
              Kaizen Karate - Do Association India - 2025 |
            </Link>{" "}
            {/* <br /> */}All Rights Reserved
          </h1>
        </div>
        <div className="flex text-sm md:text-base justify-center items-center gap-2">
          <h1>Developed By </h1>
          <Link href={"https://rebootai.in/"} target="_blank">
            <Image
              src="/svgs/reboots.svg"
              alt="reboot-logo"
              width={100}
              height={100}
              className="h-[0.8rem] md:h-[1rem] w-fit"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
