import React from 'react'
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";

const teamMembers = [{
    name: "THERESA WEBB",
    role: "Sr. Marketing",
    image: "/team-1.png",
  },
  {
    name: "LESLIE ALEXANDER",
    role: "Sr. Director",
    image: "/team-2.png",
  },
  {
    name: "JENNY WILSON",
    role: "Sr. Manager",
    image: "/team-3.png",
  },
  {
    name: "ARLENE MCCOY",
    role: "Sr. HRM",
    image: "/team-4.png",
  },
  
];


const OurTeam = () => {
   
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
      setCurrentIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
    };
  
    const nextSlide = () => {
      setCurrentIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
    };
  return (
    <>
      <div className="container mx-auto px-6 lg:px-20 py-16 relative">
  {/* Title Section */}
  <p className="text-red-600 font-semibold uppercase">// Our Team</p>
  <h2 className="text-4xl font-bold text-gray-900 mt-4">
    MEET OUR REAL ESTATES <br /> PROFESSIONAL
  </h2>

  {/* Carousel Section */}
  <div className="relative mt-10">
    <div className="flex overflow-hidden justify-center space-x-6">
      {teamMembers.map((member, index) => (
        <div
          key={member}
          className={`w-80 p-4 rounded-xl shadow-md transition-transform ${
            index === currentIndex ? "scale-110" : "scale-90"
          }`}
        >
          <div className="relative w-40 h-40 mx-auto">
            <Image
              src={member.image}
              alt={member.name}
              width={160}
              height={160}
              className="rounded-full border-4 border-gray-200"
            />
          </div>
          <h3 className="text-lg font-semibold mt-4">{member.name}</h3>
          <p className="text-gray-500 text-sm">{member.role}</p>
          <div className="flex justify-center mt-3">
            <MessageCircle className="text-gray-400 hover:text-red-500 w-6 h-6 cursor-pointer" />
          </div>
        </div>
      ))}
    </div>

    {/* Navigation Buttons */}
    <div className="absolute right-10 top-[-7rem] flex gap-4">
      <button onClick={prevSlide} className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button onClick={nextSlide} className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 ">
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  </div>
</div>

    </>
  )
}

export default OurTeam;
