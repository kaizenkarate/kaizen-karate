"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoCloseSharp } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { AiOutlineMenuFold } from "react-icons/ai";
import AppointmentModal from "./AppointmentModal";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  const toggleAppointmentModal = () =>
    setIsAppointmentModalOpen(!isAppointmentModalOpen);
  const NavLinksData = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "About Us",
      href: "/about",
    },
    {
      text: "Our Classes",
      href: "/classes",
    },

    {
      text: "Media",
      subMenu: [
        {
          text: "Gallery",
          href: "/gallery",
        },
        {
          text: "Video",
          href: "/video",
        },
        {
          text: "Awards",
          href: "/awards",
        },
      ],
    },

    {
      text: "Member",
      subMenu: [
        {
          text: "Executive Committee",
          href: "/executive-committee",
        },
        {
          text: "District Incharge",
          href: "/district-incharge",
        },
      ],
    },

    {
      text: "Contact Us",
      href: "/contact",
    },
  ];

   const isActive = (path: string | undefined) => pathname === path

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 60);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`flex justify-between  items-center fixed h-[3.5rem] md:h-[3.5rem] w-full z-[60]  ${
          scrolled ? "top-0 " : "md:top-[7.5rem] top-0"
        }`}
      >
        {/* Logo */}

        <div className="w-full flex items-center relative">          
          <Link
            href={"/"}
            className="flex clip-angled rounded-br-4xl items-center justify-center py-2 md:w-[16rem] w-[3rem] bg-[#E20D2B] relative z-20"
          >
            <Image
              src={"/logo.png"}
              alt="logo"
              width={1224}
              height={181}
              priority
              className="w-[3rem] md:w-[4rem]"
            />
          </Link>

        <div className="hidden lg:flex items-center justify-center absolute left-[5rem] w-[calc(100%-17rem)] h-[3.5rem] bg-[#F5F5F5] clip-angled2 -z-10 pointer-events-none" />

          <ul className="hidden lg:flex items-center justify-center gap-6 relative z-20 mx-auto">
            {NavLinksData.map((item, index) => (
              <li
                key={index}
                className="font-medium relative text-lg hover:scale-110 transition-all duration-500"
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className={`${
                      item.href === pathname
                        ? "bg-defined-purple text-white"
                        : "text-defined-purple"
                    } hover:bg-defined-purple hover:text-white transition-all duration-300 px-3 py-1 rounded-3xl`}
                  >
                    {item.text}
                  </Link>
                ) : (
                  <div className="relative group">
                    <span className="text-defined-purple capitalize cursor-pointer">
                      {item.text}
                    </span>

                    {/* Submenu */}
                    {item.subMenu && item.subMenu.length > 0 && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:visible invisible duration-300 flex flex-col rounded bg-white shadow-md z-30 border-t-2 border-defined-yellow">
                        {item.subMenu.map((sub, subIndex) => (
                          <Link
                            href={sub.href}
                            key={subIndex}
                            className="flex items-center gap-2 font-medium text-defined-purple hover:text-white hover:bg-defined-purple px-4 py-2 rounded transition-all duration-300 text-nowrap text-sm"
                          >
                            <span>&gt;</span>
                            {sub.text}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex absolute top-4 right-2 h-[3.5rem] w-[14rem] bg-[#333333] clip-angled2 items-center justify-center z-10">
            <button
              onClick={toggleAppointmentModal}
              className="text-white font-semibold h-[2.5rem] px-4 text-nowrap relative z-20"
            >
              Admission Today
            </button>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <button
          type="button"
          className="inline-flex lg:hidden text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          title="menu-open"
        >
          <svg width="0" height="0">
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#28156F" />
              <stop offset="100%" stopColor="#28156F" />
            </linearGradient>
          </svg>
          <span
            className={`transform transition-transform duration-500 ${
              isMenuOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            {isMenuOpen ? (
              <IoCloseSharp
                style={{
                  fill: "url(#gradient1)",
                }}
              />
            ) : (
              <AiOutlineMenuFold
                style={{
                  fill: "url(#gradient1)",
                }}
              />
            )}
          </span>
        </button>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className=" absolute top-full w-full left-0 text-white font-bold bg-defined-purple/70 backdrop-blur-2xl lg:hidden p-6 pb-12 h-fit overflow-y-scroll">
            <ul className="flex flex-col gap-4 capitalize">
              {NavLinksData.map((item, index) => (
                <li key={index} className="relative">
                  {item.href ? (
                    <div>
                      <Link
                        href={item.href}
                        className="flex justify-between items-center cursor-pointer lg:text-base text-base md:text-xl xl:text-lg"
                      >
                        {item.text}
                      </Link>
                    </div>
                  ) : (
                    <div>
                      <div
                        className="flex justify-between items-center cursor-pointer lg:text-base text-base md:text-xl xl:text-lg"
                        onClick={() =>
                          item.subMenu &&
                          item.subMenu.length > 0 &&
                          setOpenDropdown(openDropdown === index ? null : index)
                        }
                      >
                        <span className="capitalize">{item.text}</span>
                        <span>{openDropdown === index ? "-" : "+"}</span>
                      </div>

                      {openDropdown === index && (
                        <div
                          className={`duration-500 transition-all origin-top ${
                            openDropdown === index
                              ? "h-auto opacity-100"
                              : "h-0 opacity-0"
                          } overflow-hidden flex flex-col rounded`}
                        >
                          {item.subMenu && item.subMenu.length > 0 && (
                            <ul className="flex flex-col">
                              {item.subMenu.map(
                                (
                                  item: { href: string; text: string },
                                  index: number
                                ) => (
                                  <div
                                    className="flex flex-col p-2 "
                                    key={index}
                                  >
                                    <Link
                                      href={item.href}
                                      className="flex items-center gap-2 font-medium text-white px-4 rounded hover:scale-105 transition-all duration-300"
                                    >
                                      <span className="">&gt;</span>
                                      {item.text}
                                    </Link>
                                  </div>
                                )
                              )}
                            </ul>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </li>
              ))}
              <button
                onClick={toggleAppointmentModal}
                className="rounded-3xl text-defined-purple bg-defined-yellow h-[2.5rem] px-4"
              >
                Admission Today
              </button>
            </ul>
          </div>
        )}
      </div>
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={toggleAppointmentModal}
      />
    </>
  );
};

export default Header;
