"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoCloseSharp } from "react-icons/io5";
import { AiOutlineMenuFold } from "react-icons/ai";
import { usePathname } from "next/navigation";
import AppointmentModal from "./AppointmentModal";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const pathname = usePathname();

  const toggleAppointmentModal = () =>
    setIsAppointmentModalOpen(!isAppointmentModalOpen);

  const NavLinksData = [
    { text: "Home", href: "/" },
    { text: "About Us", href: "/about" },
    { text: "Our Classes", href: "/classes" },
    {
      text: "Media",
      subMenu: [
        { text: "Gallery", href: "/gallery" },
        { text: "Video", href: "/video" },
        { text: "Awards", href: "/awards" },
      ],
    },
    {
      text: "Member",
      subMenu: [
        { text: "Executive Committee", href: "/executive-committee" },
        { text: "District Incharge", href: "/district-incharge" },
      ],
    },
    { text: "Contact Us", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed z-[60] w-full flex items-center justify-between transition-all duration-300 h-[3.5rem] ${
          scrolled ? "top-0" : "md:top-[7.5rem] top-0"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex clip-angled items-center justify-center bg-[#E20D2B] py-2 md:w-[16rem] w-[3.5rem] z-20"
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={200}
            height={60}
            className="w-[3rem] md:w-[4rem]"
          />
        </Link>

        {/* Background bar */}
        <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-[calc(100%-17rem)] h-[3.5rem] bg-[#F5F5F5] clip-angled2 -z-10" />

        {/* Nav Links */}
        <ul className="hidden md:flex items-center justify-center gap-4 mx-auto relative z-20">
          {NavLinksData.map((item, index) => (
            <li
              key={index}
              className="relative font-medium text-lg hover:scale-110 transition-all duration-300"
            >
              {item.href ? (
                <Link
                  href={item.href}
                  className={`px-3 py-1 rounded-3xl transition-all duration-300 ${
                    pathname === item.href
                      ? "bg-defined-purple text-white"
                      : "text-defined-purple hover:bg-defined-purple hover:text-white"
                  }`}
                >
                  {item.text}
                </Link>
              ) : (
                <div
                  className="relative group md:cursor-pointer"
                  onClick={() => {
                    // ✅ Allow click-to-toggle on tablet + large touch devices (width ≤ 2400px)
                    if (window.innerWidth >= 768 && window.innerWidth <= 2400) {
                      setOpenDropdown(openDropdown === index ? null : index);
                    }
                  }}
                >
                  <span className="text-defined-purple">{item.text}</span>

                  {/* Submenu */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 bg-white border-t-2 border-defined-yellow shadow-md duration-300 flex flex-col rounded z-40 transition-all ${
                      openDropdown === index
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    } md:group-hover:opacity-100 md:group-hover:visible`}
                  >
                    {item.subMenu?.map((sub, subIndex) => (
                      <Link
                        href={sub.href}
                        key={subIndex}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-defined-purple hover:text-white hover:bg-defined-purple transition-all duration-300"
                      >
                        <span>&gt;</span> {sub.text}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Right Button */}
        <div className="hidden lg:flex items-center justify-center bg-[#333333] clip-angled2 h-[3.5rem] w-[14rem] z-10 mr-2">
          <button
            onClick={toggleAppointmentModal}
            className="text-white font-semibold h-[2.5rem] px-4 rounded-3xl hover:bg-white hover:text-[#333333] transition-all duration-300"
          >
            Admission Today
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="lg:hidden text-3xl text-defined-purple mr-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <IoCloseSharp /> : <AiOutlineMenuFold />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-defined-purple/80 text-white backdrop-blur-xl p-6 lg:hidden max-h-[80vh] overflow-y-auto">
            <ul className="flex flex-col gap-4">
              {NavLinksData.map((item, index) => (
                <li key={index}>
                  {item.href ? (
                    <Link href={item.href} className="text-lg">
                      {item.text}
                    </Link>
                  ) : (
                    <>
                      <div
                        className="flex justify-between items-center cursor-pointer text-lg"
                        onClick={() =>
                          setOpenDropdown(openDropdown === index ? null : index)
                        }
                      >
                        {item.text}
                        <span>{openDropdown === index ? "-" : "+"}</span>
                      </div>
                      {openDropdown === index && (
                        <div className="pl-4 flex flex-col gap-2 mt-2">
                          {item.subMenu?.map((sub, subIndex) => (
                            <Link
                              key={subIndex}
                              href={sub.href}
                              className="hover:underline"
                            >
                              {sub.text}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </li>
              ))}
              <button
                onClick={toggleAppointmentModal}
                className="bg-defined-yellow text-defined-purple font-semibold h-[2.5rem] px-4 rounded-3xl mt-4"
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
