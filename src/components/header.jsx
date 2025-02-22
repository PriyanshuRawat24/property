"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/service", label: "Service" },
  { href: "/process", label: "Our Process" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-white shadow-md py-3">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <Image
                  className="h-auto w-auto"
                  width={100}
                  height={100}
                  src="/logo.svg"
                  alt="Company Logo"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex  space-x-8 items-center bg-gray-100 px-16 rounded-full">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className=" text-black hover:text-gray-900 font-samibold transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Search and Menu */}
            <div className="flex items-center space-x-4">
              {/* Search Bar */}
              <div className="flex items-center">
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                  aria-label="Toggle search"
                >
                  <IoSearch size={25} />
                </button>
                {isSearchOpen && (
                  <div className="absolute right-20 top-20 bg-white p-4 rounded-lg shadow-lg">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                      autoFocus
                    />
                  </div>
                )}
              </div>

              {/* Mobile Menu */}
              <div className="p-2">
                <Sheet>
                  <SheetTrigger className="hover:bg-gray-100 p-2 rounded-full transition-colors duration-200">
                    <CgMenuGridO size={30} />
                  </SheetTrigger>
                  <SheetContent className="w-72">
                    <SheetHeader>
                      <SheetTitle className="text-xl font-semibold mb-4">
                        Menu
                      </SheetTitle>
                    </SheetHeader>
                    <ul className="space-y-4">
                      {navigationLinks.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="text-gray-700 hover:text-gray-900 block py-2 transition-colors duration-200"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </SheetContent>
                </Sheet>
              </div>
              {/* get a quote */}
              <Link href={"/"}>
              <button className="rounded-full bg-red-600 text-white px-6 py-2 hover:bg-orange-600 transition">
                Get a Quote
              </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
