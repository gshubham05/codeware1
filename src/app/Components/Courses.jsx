"use client";

import React from "react";
import Link from "next/link";
import {
  FaReact,
  FaLaptopCode,
  FaCode,
  FaIndustry,
  FaPaintBrush,
  FaChartLine,
} from "react-icons/fa";

const courses = [
  {
    name: "MERN Stack",
    icon: <FaReact className="text-5xl text-purple-400" />,
    description:
      "Master MongoDB, Express.js, React, and Node.js to become a full-stack developer.",
    link: "Courses/mern-stack-development",
  },
  {
    name: "Full Stack",
    icon: <FaLaptopCode className="text-5xl text-blue-400" />,
    description:
      "Comprehensive training in front-end and back-end technologies for full-stack development.",
    link: "Courses/full-stack-development",
  },
  {
    name: "Programming Language",
    icon: <FaCode className="text-5xl text-green-400" />,
    description:
      "Learn essential programming languages like Python, Java, C++, and more.",
    link: "Courses/programming-languages",
  },
  {
    name: "Industrial Training",
    icon: <FaIndustry className="text-5xl text-orange-400" />,
    description:
      "Hands-on industry experience with real-world projects and mentorship.",
    link: "Courses/industrial-training",
  },
  {
    name: "Graphic Design",
    icon: <FaPaintBrush className="text-5xl text-pink-400" />,
    description:
      "Enhance your creativity with Photoshop, Illustrator, and other design tools.",
    link: "Courses/graphic-design",
  },
  {
    name: "SEO & Digital Marketing",
    icon: <FaChartLine className="text-5xl text-yellow-400" />,
    description:
      "Optimize web presence and master digital marketing strategies.",
    link: "Courses/seo-digital-marketing",
  },
];

const CoursesSection = () => {
  return (
    <section className="bg-white text-[#040A26] py-20 px-6">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight text-[#040A26]">
          Our Courses
        </h2>
        <p className="text-lg text-black">
          Explore our job-ready programs and elevate your skills with Codeware
          IT Pvt Ltd.
        </p>
      </div>

      {/* Grid of Courses */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-[#0B122F] border border-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-purple-600/20 hover:scale-[1.02] transition duration-300"
          >
            <div className="mb-4">{course.icon}</div>
            <h3 className="text-2xl font-bold mb-2 text-white">
              {course.name}
            </h3>
            <p className="text-gray-300 text-sm mb-4">{course.description}</p>
            <Link
              href={`/${course.link}`}
              className="inline-block text-sm bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-md font-medium transition"
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>

      {/* Visit All Button */}
      <div className="mt-16 text-center">
        <Link
          href="/Courses"
          className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-indigo-500/50 transform hover:scale-105 transition"
        >
          View All Courses
        </Link>
      </div>
    </section>
  );
};

export default CoursesSection;
