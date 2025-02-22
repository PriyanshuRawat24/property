"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Buy");
  return (
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
  );
}
