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
        className={`flex justify-between items-center md:px-18 px-4 fixed h-[3.5rem] md:h-[6rem] w-full z-[60] bg-defined-purple shadow-defined-light ${
          scrolled ? "top-0 " : "md:top-[7rem] top-0"
        }`}
      >
        {/* Logo */}

        <Link href={"/"} className="">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={1224}
            height={181}
            priority
            className="w-[3rem] md:w-[5.5rem]"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center justify-center gap-6 h-full w-auto bg-defined-purple">
          {NavLinksData.map((item, index) => (
            <li
              key={index}
              className="font-medium text-lg hover:scale-110 transition-all duration-500"
            >
              {item.href ? (
                <div className="relative">
                  <Link
                    href={item.href}
                    className={`${
                      item.href === pathname ? "bg-white text-defined-purple" : "text-white"
                    } hover:text-defined-purple hover:bg-white transition-all duration-300 px-3 py-1 rounded-3xl`}
                  >
                    {item.text}
                  </Link>
                </div>
              ) : (
                <div className="relative group">
                  <span
                    className={`${
                      isActive(item.href)
                        ? "text-white"
                        : "text-white"
                    } capitalize cursor-pointer`}
                  >
                    {item.text}
                  </span>
                  {item.subMenu && item.subMenu.length > 0 && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 duration-500 transition-all origin-top-right opacity-0 group-hover:opacity-90 group-hover:border-t-2 group-hover:border-defined-yellow w-0 group-hover:w-auto  overflow-hidden flex rounded bg-white">
                      <div className="flex flex-col gap-6 ">
                        <ul className="flex flex-col">
                          {item.subMenu.map(
                            (
                              item: { href: string; text: string },
                              index: number
                            ) => (
                              <div className="flex flex-col p-2 " key={index}>
                                <Link
                                  href={item.href}
                                  className="flex items-center gap-2 font-medium text-defined-purple hover:text-white  hover:bg-defined-purple px-4 py-2 rounded hover:scale-105 transition-all duration-300 text-nowrap text-sm"
                                >
                                  <span>&gt;</span>
                                  {item.text}
                                </Link>
                              </div>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
        {/* Desktop button */}
        <button
          onClick={toggleAppointmentModal}
          className="hidden lg:block rounded-3xl bg-white text-defined-purple  font-semibold h-[2.5rem] px-4"
        >
          Admission Today
        </button>

        {/* Mobile Menu Icon */}
        <button
          type="button"
          className="inline-flex lg:hidden text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          title="menu-open"
        >
          <svg width="0" height="0">
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fff" />
              <stop offset="100%" stopColor="#fff" />
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
