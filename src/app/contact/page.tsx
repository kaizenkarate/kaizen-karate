// import SubBanner from '@/components/global/SubBanner';
import FormCard from '@/components/ui/FormCard';
import MainTemplate from '@/templates/MainTemplate'
import Link from 'next/link';
import { FaLocationDot } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';
import { MdPhoneInTalk } from 'react-icons/md';

const page = () => {
      const contactDetails = [
        {
          icon: <MdPhoneInTalk />,
          title: `Call Us`,
          details: [{ text: `+91 98324 80087`, href: `tel:+919832480087` }],
        },
        {
          icon: <IoMail />,
          title: `Email Us`,
          details: [
            {
              text: `kaizenkarateindia@gmail.com`,
              href: `mailTo:kaizenkarateindia@gmail.com`,
            },
          ],
        },
        {
          icon: <FaLocationDot />,
          title: `Training Centers`,
          details: [
            {
              text: `Punjabi Para`,
              href: `https://maps.app.goo.gl/1LJwDa5BuTdcnBtu9`,
            },
            {
              text: `Pradhan Nagar Nabankur Club`,
              href: `https://maps.app.goo.gl/avgtoi4iRd57aent7`,
            },
            {
              text: `Uttaryan(City Center)`,
              href: `https://maps.app.goo.gl/NPxtvjU8sNvQi1Xr6`,
            },
            {
              text: `Jyotinagar Eden Sports`,
              href: `https://maps.app.goo.gl/KCVQ2pu8bxTgKm8S8`,
            },
          ],
        },
      ];
  return (
    <MainTemplate>
      {/* <SubBanner heading="Contact Us" /> */}
      <section className="self-padding">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl md:text-3xl text-defined-purple">
            Get in Touch with Us
          </h1>
          <p className=" text-defined-brown text-justify">
            At Siliguri Moksh Foundation, we are always here to listen, guide,
            and support you on your journey toward recovery. Whether you seek
            help for yourself or a loved one, our compassionate team is just a
            call or message away. Reach us through our helpline, WhatsApp, or by
            visiting our centers. Your step towards contacting us today can be
            the beginning of a healthier, brighter tomorrow.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 xl:gap-6 gap-4">
          {contactDetails.map((contact, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-gradient-to-b from-defined-purple/15 to-defined-purple/5 relative rounded-xl group h-full lg:p-6 p-4 xlg:p-8"
            >
              <div className="flex flex-col items-center justify-center gap-5">
                <div className="relative">
                  <div className="bg-defined-purple rounded-xl lg:rounded-[1.85rem] text-white xlg:text-4xl text-2xl flex items-center justify-center xlg:p-7 lg:p-5 p-4 rounded-bl-none lg:rounded-bl-none relative z-10">
                    {contact.icon}
                  </div>
                  <div className="absolute top-0 left-0 translate-x-1/4 translate-y-[10%] border-[3px] border-defined-purple w-full h-full rounded-xl lg:rounded-[1.85rem] rounded-bl-none lg:rounded-bl-none " />
                </div>

                <div className=" flex flex-col gap-2 justify-center items-center">
                  <h1 className="text-defined-purple xxl:text-2xl xlg:text-xl lg:text-lg md:text-base text-lg font-bold text-center">
                    {contact.title}
                  </h1>
                  <div className=" flex flex-col ">
                    {contact.details.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="text-defined-brown xl:text-lg xxl:text-xl lg:text-base text-sm text-center"
                        target="_blank"
                        referrerPolicy="no-referrer"
                      >
                        {item.text}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <FormCard />
      </section>
    </MainTemplate>
  );
}

export default page