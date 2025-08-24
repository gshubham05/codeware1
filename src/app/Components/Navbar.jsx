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
      <nav
        role="navigation"
        aria-label="Primary"
        className="bg-[#040A26] shadow-md px-2 fixed top-0 left-0 w-full z-50"
      >
        <div
          className="max-w-7xl mx-auto flex justify-between items-center"
          onMouseLeave={() => handleMouseLeave("Courses")}
        >
          <div className="flex items-center">
            <Link href="/" aria-label="Home - CodewareIT">
              <Image
                src="/logo.png"
                width={80}
                height={90}
                alt="CodewareIT Logo"
                priority={true}
                className="pt-1"
              />
            </Link>
            <Link href="/" aria-label="Homepage - CodewareIT">
              <h1 className="text-2xl font-bold text-white cursor-pointer ml-2">
                CodewareIT
              </h1>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-2xl"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <FaTimes className="text-white" />
            ) : (
              <FaBars className="text-white" />
            )}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-12 text-white items-center" role="menubar" aria-label="Main menu">
            <li role="none" onMouseLeave={() => handleMouseLeave("Courses")}>
              <Link href="/Aboutus" role="menuitem" title="About Us">
                About Us
              </Link>
            </li>

            {/* Courses Dropdown */}
            <li
              className="relative group"
              role="none"
              onMouseEnter={() => handleMouseEnter("Courses")}
            >
              <div className="flex items-center space-x-1 cursor-pointer" aria-haspopup="true" aria-expanded={openMenu === "Courses"}>
                <span className="text-white" role="menuitem" tabIndex={0}>
                  Courses
                </span>
                <FaChevronDown className="text-white text-sm mt-1" aria-hidden="true" />
              </div>

              {openMenu === "Courses" && (
                <div
                  className="absolute top-full left-[-4rem] mt-6 text-white shadow-2xl rounded-xl w-64 p-1 z-50"
                  role="menu"
                  aria-label="Courses submenu"
                >
                  <div className="bg-[#0A1C55] rounded-xl overflow-hidden">
                    <ul className="flex flex-col py-2" role="none">
                      <li role="none" className="flex items-center px-4 py-3 hover:bg-blue-600 transition-all duration-200 gap-2">
                        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-md" aria-hidden="true">💻</span>
                        <Link href="/Coursescoding" className="w-full" role="menuitem" title="Coding Courses">
                          Coding Courses
                        </Link>
                      </li>
                      <li role="none" className="flex items-center px-4 py-3 hover:bg-blue-600 transition-all duration-200 gap-2">
                        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-md" aria-hidden="true">🎨</span>
                        <Link href="/Coursesnoncoding" className="w-full" role="menuitem" title="Non-Coding Courses">
                          Non-Coding Courses
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </li>

            <li role="none" onMouseLeave={() => handleMouseLeave("Courses")}>
              <Link href="/blog" role="menuitem" title="Blog">
                Blog
              </Link>
            </li>
            <li role="none" onMouseLeave={() => handleMouseLeave("Courses")}>
              <Link href="/intern" role="menuitem" title="Internship">
                Internship
              </Link>
            </li>
            <li role="none" onMouseLeave={() => handleMouseLeave("Courses")}>
              <Link href="/Students" role="menuitem" title="Students">
                Students
              </Link>
            </li>
            <li role="none" onMouseLeave={() => handleMouseLeave("Courses")}>
              <Link href="/contact" role="menuitem" title="Contact Us" className="bg-blue-600 text-white px-4 py-2 rounded-lg hidden md:block">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="fixed top-[5rem] left-0 w-full h-screen bg-[#040A26] z-50 p-4 md:hidden"
          role="menu"
          aria-label="Mobile main menu"
        >
          <ul className="text-white space-y-3">
            <li className="flex items-center justify-between p-3 rounded-lg hover:bg-[#0C1233] transition" role="none">
              <div className="flex items-center gap-3">
                <span className="text-lg" aria-hidden="true">ℹ️</span>
                <Link href="/Aboutus" onClick={toggleMobileMenu} className="text-sm font-medium" role="menuitem" tabIndex={0}>
                  About Us
                </Link>
              </div>
            </li>

            <li className="flex items-center justify-between p-3 rounded-lg hover:bg-[#0C1233] transition" role="none">
              <div className="flex items-center gap-3">
                <span className="text-lg" aria-hidden="true">💻</span>
                <Link href="/Coursescoding" onClick={toggleMobileMenu} className="text-sm font-medium" role="menuitem" tabIndex={0}>
                  Coding Courses
                </Link>
              </div>
            </li>

            <li className="flex items-center justify-between p-3 rounded-lg hover:bg-[#0C1233] transition" role="none">
              <div className="flex items-center gap-3">
                <span className="text-lg" aria-hidden="true">📚</span>
                <Link href="/Coursesnoncoding" onClick={toggleMobileMenu} className="text-sm font-medium" role="menuitem" tabIndex={0}>
                  Non-Coding Courses
                </Link>
              </div>
            </li>

            <li className="flex items-center justify-between p-3 rounded-lg hover:bg-[#0C1233] transition" role="none">
              <div className="flex items-center gap-3">
                <span className="text-lg" aria-hidden="true">🧑‍💼</span>
                <Link href="/intern" onClick={toggleMobileMenu} className="text-sm font-medium" role="menuitem" tabIndex={0}>
                  Internship
                </Link>
              </div>
            </li>

            <li className="flex items-center justify-between p-3 rounded-lg hover:bg-[#0C1233] transition" role="none">
              <div className="flex items-center gap-3">
                <span className="text-lg" aria-hidden="true">👨‍🎓</span>
                <Link href="/Students" onClick={toggleMobileMenu} className="text-sm font-medium" role="menuitem" tabIndex={0}>
                  Students
                </Link>
              </div>
            </li>

            <li className="flex items-center justify-between p-3 rounded-lg hover:bg-[#0C1233] transition" role="none">
              <div className="flex items-center gap-3">
                <span className="text-lg" aria-hidden="true">📰</span>
                <Link href="/blog" onClick={toggleMobileMenu} className="text-sm font-medium" role="menuitem" tabIndex={0}>
                  Blog
                </Link>
              </div>
            </li>

            <li className="flex items-center justify-between p-3 rounded-lg hover:bg-[#0C1233] transition" role="none">
              <div className="flex items-center gap-3">
                <span className="text-lg" aria-hidden="true">📞</span>
                <Link href="/contact" onClick={toggleMobileMenu} className="text-sm font-medium" role="menuitem" tabIndex={0}>
                  Contact
                </Link>
              </div>
            </li>
          </ul>
          <div className="border-t border-t-[#0C1233] mt-4 pt-4">
            <p className="text-sm text-center text-white">
              &copy; {new Date().getFullYear()} Codeware IT. All rights reserved.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
