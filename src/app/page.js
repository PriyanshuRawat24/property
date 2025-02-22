"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaSearch, FaShieldAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Buy");
  return (
    <>
    <div className="bg-[url(/1.jpg)] bg-cover bg-center py-12 px-6 md:px-20">
      <div className="container">
        {/* Header Section */}
        <h1 className="p-5 text-4xl md:text-6xl font-bold text-black">
          DISCOVER NEXT PERFECT
          <br />
          <span className="text-red-600">PROPERTY</span>
          <br /> ON PALACE.
        </h1>

        {/* Tabs Section */}
        <div className="mt-6 flex">
          {["Buy", "Rent", "Sell"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 text-lg font-semibold rounded-md transition ${
                activeTab === tab
                  ? "bg-red-600 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="lg:max-w-screen-sm mt-6 bg-white p-6 rounded-lg shadow-lg">
          {/* Search Filters */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
            <select className="p-3 border rounded-md">
              <option>Florida, USA</option>
              <option>New York, USA</option>
              <option>California, USA</option>
            </select>
            <select className="p-3 border rounded-md">
              <option>20 x 10 Meters</option>
              <option>30 x 20 Meters</option>
            </select>
            <select className="p-3 border rounded-md">
              <option>$700 - $900</option>
              <option>$1000 - $1500</option>
            </select>
            <button className=" bg-red-600 text-white p-3 rounded-md flex items-center justify-center">
              <FaSearch />
            </button>
          </div>
        </div>
      </div>
    </div>   
      <section className="py-12">
      <div className="container mx-auto px-6 lg:px-20 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-28 items-center">
          {/* Left Side - Background Image */}
          <div className="relative">
            <Image
              src="/2.jpg"
              alt="Real Estate"
              width={500}
              height={600}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <div className="absolute top-[20rem] left-[23rem] bg-white py-10 px-10 rounded-lg shadow-xl">
              <h2 className="text-[70px] font-bold text-red-600 ">30+</h2>
              <p className="text-gray-500 mt-1">Years of Experience</p>
            </div>
          </div>
          {/* Right Side - Text Content */}
          <div className="mt-6">
            <p className="text-red-600 font-semibold">// DISCOVER OUR STORY</p>
            <h2 className="text-4xl font-bold text-gray-900">
              UNVEILING PALACE REAL ESTATE JOURNEY
            </h2>
            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
              mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris.
            </p>

            {/* Features Section */}
            <div className="mt-6 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-4 bg-red-100 rounded-full">
                  <FaStar className="text-red-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    Client Centric Approach
                  </h3>
                  <p className="text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-4 bg-red-100 rounded-full">
                  <FaShieldAlt className="text-red-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    Integrity & Transparency
                  </h3>
                  <p className="text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>

            {/* Read More Button */}
            <button className="mt-6 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-red-700 transition">
              Read More
            </button>
          </div>
        </div>
      </div>
      </section>






















    </>
  );
}
