"use client";

import { useState } from "react";
import Link from "next/link";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa"; // Import FaTimes for close icon
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const handleMouseEnter = (menu) => {
    setOpenMenu(menu);
  };

  const handleMouseLeave = () => {
    setOpenMenu(null);
  };

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
    setOpenMenu(null);
  };

  return (
    <>
      <nav className="bg-[#040A26] shadow-md px-2 fixed top-0 left-0 w-full z-50">
        <div
          className="max-w-7xl mx-auto flex justify-between items-center"
          onMouseLeave={() => handleMouseLeave("Courses")}
        >
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/logo.png"
                width={80}
                height={90}
                alt="logo"
                priority={true}
                className="pt-1"
              />
            </Link>
            <Link href="/">
              <h1 className="text-2xl font-bold text-white cursor-pointer">
                CodewareIT
              </h1>
            </Link>
          </div>

          {/* Mobile Menu Button (Changes Between ☰ and ✕) */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-2xl"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? (
              <FaTimes className="text-white" />
            ) : (
              <FaBars className="text-white" />
            )}{" "}
            {/* Switches Icons */}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-12 text-white items-center">
            <li onMouseLeave={() => handleMouseLeave("Courses")}>
              <Link href="/Aboutus">About Us</Link>
            </li>

            {/* Courses Dropdown */}
            <li
              className="relative group"
              onMouseEnter={() => handleMouseEnter("Courses")}
            >
              <div className="flex items-center space-x-1 cursor-pointer">
                <span className="text-white">Courses</span>
                <FaChevronDown className="text-white text-sm mt-1" />
              </div>

              {openMenu === "Courses" && (
                <div className="absolute top-full left-[-4rem] mt-6 text-white shadow-2xl rounded-xl w-64 p-1 z-50">
                  <div className="bg-[#0A1C55] rounded-xl overflow-hidden">
                    <ul className="flex flex-col py-2">
                      <li className="flex items-center px-4 py-3 hover:bg-blue-600 transition-all duration-200 gap-2">
                        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-md">
                          💻
                        </span>
                        <Link href="/Coursescoding" className="w-full">
                          Coding Courses
                        </Link>
                      </li>
                      <li className="flex items-center px-4 py-3 hover:bg-blue-600 transition-all duration-200 gap-2">
                        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-md">
                          🎨
                        </span>
                        <Link href="/Coursesnoncoding" className="w-full">
                          Non-Coding Courses
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </li>

            <li onMouseLeave={() => handleMouseLeave("Courses")}>
              <Link href="/blog">Blog</Link>
            </li>
            <li onMouseLeave={() => handleMouseLeave("Courses")}>
              <Link href="/intern">Internship</Link>
            </li>
            <li onMouseLeave={() => handleMouseLeave("Courses")}>
              <Link href="/Students">Students</Link>
            </li>
            <li onMouseLeave={() => handleMouseLeave("Courses")}>
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hidden md:block"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-[5rem] left-0 w-full h-screen bg-[#040A26] z-50 p-4 md:hidden">
          <ul className="text-white space-y-3">
            <li className="flex items-center justify-between p-3 rounded-lg hover:bg-[#0C1233] transition">
              <div className="flex items-center gap-3">
                <span className="text-lg">ℹ️</span>
                <Link
                  href="/Aboutus"
                  onClick={toggleMobileMenu}
                  className="text-sm font-medium"
                >
                  About Us
                </Link>
              </div>
            </li>
            <li className="flex items-center justify-between p-3 rounded-lg hover:bg-[#0C1233] transition">
              <div className="flex items-center gap-3">
                <span className="text-lg">💻</span>
                <Link
                  href="/Coursescoding"
                  onClick={toggleMobileMenu}
                  className="text-sm font-medium"
                >
                  Coding Courses
                </Link>
              </div>
            </li>
            <li className="flex items-center justify-between p-3 rounded-lg hover:bg-[#0C1233] transition">
              <div className="flex items-center gap-3">
                <span className="text-lg">📚</span>
                <Link
                  href="/Coursesnoncoding"
                  onClick={toggleMobileMenu}
                  className="text-sm font-medium"
                >
                  Non-Coding Courses
                </Link>
              </div>
            </li>
            <li className="flex items-center justify-between p-3 rounded-lg hover:bg-[#0C1233] transition">
              <div className="flex items-center gap-3">
                <span className="text-lg">🧑‍💼</span>
                <Link
                  href="/intern"
                  onClick={toggleMobileMenu}
                  className="text-sm font-medium"
                >
                  Internship
                </Link>
              </div>
            </li>
            <li className="flex items-center justify-between p-3 rounded-lg hover:bg-[#0C1233] transition">
              <div className="flex items-center gap-3">
                <span className="text-lg">👨‍🎓</span>
                <Link
                  href="/Students"
                  onClick={toggleMobileMenu}
                  className="text-sm font-medium"
                >
                  Students
                </Link>
              </div>
            </li>
            <li className="flex items-center justify-between p-3 rounded-lg hover:bg-[#0C1233] transition">
              <div className="flex items-center gap-3">
                <span className="text-lg">📰</span>
                <Link
                  href="/blog"
                  onClick={toggleMobileMenu}
                  className="text-sm font-medium"
                >
                  Blog
                </Link>
              </div>
            </li>
            <li className="flex items-center justify-between p-3 rounded-lg hover:bg-[#0C1233] transition">
              <div className="flex items-center gap-3">
                <span className="text-lg">📞</span>
                <Link
                  href="/contact"
                  onClick={toggleMobileMenu}
                  className="text-sm font-medium"
                >
                  Contact
                </Link>
              </div>
            </li>
          </ul>
          <div className="border-t border-t-[#0C1233] mt-4 pt-4">
            <p className="text-sm text-center text-white">
              &copy; {new Date().getFullYear()} Codeware IT. All rights
              reserved.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
