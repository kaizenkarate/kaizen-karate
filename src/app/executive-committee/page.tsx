import SubBanner from '@/components/global/SubBanner';
import MainTemplate from '@/templates/MainTemplate'
import Image from 'next/image';
import React from 'react'

const page = () => {
  const members = [
    {
      photo: "/images/Sanjay tibruwal.jpg",
      name: "Shri Sanjay Tibrewal",
      district: "Siliguri",
      designation: "Patron",
    },
    {
      photo: "/images/Sensei Debasish Dhali.jpg",
      name: "Sensei Debasish Dhali",
      district: "Siliguri",
      designation: "Chief Technical Director",
    },
    {
      photo: "/images/Dr Arjun. C. Bhowal.jpg",
      name: "Dr Arjun. C. Bhowal",
      district: "Siliguri",
      designation: "President",
    },
    {
      photo: "/images/Shri. Sandeep Ghosal.jpg",
      name: "Shri Sandeep Ghosal",
      district: "Siliguri",
      designation: "Vice President (VP)",
    },
  ];

  return (
    <MainTemplate>
      <SubBanner heading="Board Comittee" />
      {/* Your Work here  */}
      <div className="self-padding rounded-xl overflow-hidden shadow-lg border border-gray-200">
     
      <div className="overflow-x-auto">
        <div className="min-w-[600px]">
          
          <div className="grid grid-cols-4 bg-yellow-400 text-gray-900 font-semibold text-sm uppercase">
            <div className="py-3 px-4 text-left">Photo</div>
            <div className="py-3 px-2 text-left">Name</div>
            <div className="py-3 px-2 text-left">District</div>
            <div className="py-3 px-2 text-left">Designation</div>
          </div>

         
          <div className="divide-y divide-gray-200">
            {members.map((member, index) => (
              <div
                key={index}
                className={`grid grid-cols-4 items-center ${
                  index % 2 === 1 ? "bg-gray-50" : "bg-white"
                } hover:bg-yellow-50 transition`}
              >
               
                <div className="p-3 flex items-center justify-start">
                  <div className="relative size-30 rounded-md overflow-hidden">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      title={member.name}
                      width={500}
                      height={500}
                      className="size-30 object-cover"
                    />
                  </div>
                </div>

                
                <div className="p-3 px-2 text-gray-800 text-sm font-medium flex items-center justify-start">
                  {member.name}
                </div>

               
                <div className="p-3 px-2 text-gray-800 text-sm flex items-center justify-start">
                  {member.district}
                </div>

               
                <div className="p-3 px-2 text-gray-800 text-sm flex items-center justify-start">
                  {member.designation}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </MainTemplate>
  );
}

export default page
