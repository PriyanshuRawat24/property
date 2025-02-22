import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaBell,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" text-white">
      {/* footer */}
      <footer className=" bg-[#393979] text-white py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo & Subscribe Section */}
        <div>
          <div className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="Company Logo" className="" width={200} height={200} />
          </div>
          <p className="text-white mt-3">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. 
          </p>
          <h3 className="font-semibold mt-4">Subscribe Now!</h3>
          <div className="relative mt-3">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border-none px-4 py-3 rounded-md text-black focus:outline-none"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-600 text-white p-2 rounded-lg">
              <FaBell size={18} className=""/>
            </button>
          </div>
        </div>

        {/* Our Company */}
        <div>
          <h3 className="font-semibold mb-3">Our Company</h3>
          <ul className="space-y-2 text-white">
            <li><Link href="#">Terms of Use</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Pricing Plan</Link></li>
            <li><Link href="#">Our Services</Link></li>
            <li><Link href="#">Contact</Link></li>
            <li><Link href="#">Careers</Link></li>
            <li><Link href="#">FAQs</Link></li>
          </ul>
        </div>

        {/* Discover Cities */}
        <div>
          <h3 className="font-semibold mb-3">Discover Cities</h3>
          <ul className="space-y-2 text-white">
          <Link href={"/"}>
            <li>Chicago</li>
          </Link>
          <Link href={"/"}>
            <li>Los Angeles</li>
          </Link>
          <Link href={"/"}>
            <li>New Jersey</li>
          </Link>
          <Link href={"/"}>
            <li>Russia</li>
          </Link>
          <Link href={"/"}>
            <li>South Africa</li>
          </Link>
          <Link href={"/"}>
            <li>Canada</li>
          </Link>
          <Link href={"/"}>
            <li>Germany</li>
          </Link>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="text-white">
          <h3 className="font-semibold mb-3">Contact Information</h3>
          <div className="flex items-center space-x-2 text-white">
            <FaBell className="text-red-600" />
            <p>1426 StreetBend,7702, California, USA</p>
          </div>
          <div className="flex items-center space-x-2 mt-3 text-white">
            <FaPhone className="text-red-600" />
            <p className="font-bold underline">815-804-8928</p>
          </div>
          <div className="flex items-center space-x-2 mt-3 text-white">
            <FaEnvelope className="text-red-600" />
            <p>support@palace.com</p>
          </div>
        </div>
      </div>

          {/* Divider */}
          <hr className="border-white mb-6 mt-6" />

          {/* Copyright and Social Media */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-white">
            {/* Left Column - Copyright */}
            <p className="text-center md:text-left">
              © 2025 Company Name. All rights reserved.
            </p>

            {/* Center Column - Social Icons */}
            <div className="flex justify-center space-x-4 text-white">
              <Link href="/" className=" hover:text-gray-500">
                <FaFacebook size={20} />
              </Link>
              <Link href="/" className="hover:text-gray-500">
                <FaTwitter size={20} />
              </Link>
              <Link href="/" className="hover:text-gray-500">
                <FaInstagram size={20} />
              </Link>
            </div>

            {/* Right Column - Terms & Privacy */}
            <div className="flex justify-center md:justify-end space-x-4">
              <Link href="/terms" className="hover:text-gray-500">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="hover:text-gray-500">
                Privacy Policy
              </Link>
            </div>
          </div>
      </footer>
    </div>
  );
};

export default Footer;
