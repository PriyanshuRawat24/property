"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaSearch, FaShieldAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { useRef } from "react";

import CarouselData from "@/components/carousel";
import Property from "@/components/property";
import OurTeam from "@/components/ourteam";
import { Contact } from "lucide-react";
import Form from "@/components/form";
import Company from "@/components/company";

export default function Home() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeTab, setActiveTab] = useState("Buy");

  const blogs = [
    {
      id: 1,
      title: 'HOME BUYING 101 ESSENTIAL BEST TIPS.',
      image: '/news-1.jpg',
      readTime: '6 min read',
      author: 'Admin',
    },
    {
      id: 2,
      title: 'FINDING DREAM HOME: STEP BY STEP WITH US',
      image: '/news-2.jpg',
      readTime: '6 min read',
      author: 'Admin',
    },
    {
      id: 3,
      title: 'SELLING YOUR HOME: QUICK PRO TIPS NOW',
      image: '/news-3.jpg',
      readTime: '6 min read',
      author: 'Admin',
    },
  ];

  const cities = [
    {
      name: "CALIFORNIA, USA",
      image: "/images/california.jpg",
      properties: 60,
    },
    {
      name: "NEWYORK, USA",
      image: "/images/newyork.jpg",
      properties: 60,
    },
    {
      name: "SHANGHAI, CHINA",
      image: "/images/shanghai.jpg",
      properties: 60,
    },
    {
      name: "BURSA, TÜRKİYE",
      image: "/images/bursa.jpg",
      properties: 60,
    },
    {
      name: "BURSA, TÜRKİYE",
      image: "/images/bursa.jpg",
      properties: 60,
    },
    {
      name: "BURSA, TÜRKİYE",
      image: "/images/bursa.jpg",
      properties: 60,
    },
    {
      name: "BURSA, TÜRKİYE",
      image: "/images/bursa.jpg",
      properties: 60,
    },
  ];
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
              <p className="text-red-600 font-semibold">
                // DISCOVER OUR STORY
              </p>
              <h2 className="text-4xl font-bold text-gray-900">
                UNVEILING PALACE REAL ESTATE JOURNEY
              </h2>
              <p className="text-gray-600 mt-4">
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
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

      {/* section-3 */}

      <CarouselData />

      {/* section-4 */}

      <div className="container mx-auto px-6 lg:px-20 py-12 flex flex-col lg:flex-row items-center">
      {/* Left Side */}
      <div className="lg:w-1/2 space-y-6">
        <p className="text-red-600 font-semibold">// DOWNLOAD MOBILE APP</p>
        <h2 className="text-4xl font-bold text-gray-900 leading-tight">
          DOWNLOAD MOBILE APP <br /> FOR REAL ESTATE
        </h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
          Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris.
        </p>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
          Aliquam in hendrerit urna.
        </p>
        <div className="flex gap-4">
          <Image
            src="/gogle.png"
            alt="Google Play"
            width={150}
            height={50}
            className="cursor-pointer"
          />
          <Image
            src="/app-store.png"
            alt="App Store"
            width={150}
            height={50}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="lg:w-1/2 flex justify-center relative mt-10 lg:mt-0">
        {/* Background Circle */}
        <div className="absolute w-64 h-64 rounded-full -z-10 right-10 top-10 hidden lg:block"></div>
        
        {/* Mobile Image */}
        <Image
          src="/app.png"
          alt="Mobile App"
          width={600}
          height={600}
          className="ml-10"
        />

        {/* Rating Box */}
        <div className="absolute -left-12 bottom-10 bg-white py-10 px-10 rounded-xl shadow-md">
          <h3 className="text-6xl font-bold text-red-500 ">
            4.9 <span className="text-sm text-gray-500">/5.0</span>
          </h3>
          <div className="flex gap-1 text-yellow-500 text-lg">
            ★★★★★
          </div>
          <p className="text-black font-medium text-md">100K Review</p>
        </div>
      </div>
    </div>

    {/* property */}

    <Property/>

    {/* OurTeam */}

    <OurTeam/>

    {/* Contact */}

    <Form/>

    {/* company image */}

    <Company/>

    {/* blog */}

    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
      <p className="text-red-600  font-semibold">// Blog</p>
        <h2 className="text-4xl font-bold mt-6">READ OUR LATEST BLOG</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg overflow-hidden shadow-md mt-6">
              <Image
                src={blog.image}
                alt={blog.title}
                width={500}
                height={300}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-500">
                  By {blog.author} • {blog.readTime}
                </p>
                <h3 className="text-xl font-semibold mt-2 ">{blog.title}</h3>
                <Link href={"/"}>
                <button className="mt-6 text-black hover:text-red-500">Read More</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="relative right-0 top-[-32rem] mt-6 text-right">
          <button className="px-7 py-4 bg-red-100 text-red-500 rounded-full ">
            More Blog
          </button>
        </div>
      </div>
    </section>
    </>
  );
}
