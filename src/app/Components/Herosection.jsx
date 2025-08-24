"use client";

import Head from "next/head";
import { Typewriter } from "react-simple-typewriter";

export default function HeroBanner() {
  return (
    <>
      <Head>
        <title>
          CodewareIT - Best Coding, Programming Training & Placement Institute in Dehradun, Uttarakhand & India
        </title>
        <meta
          name="description"
          content="Empower your future with CodewareIT Pvt Ltd - the top coding and programming training institute in Dehradun, Uttarakhand & India. Internship certifications, expert-led Full Stack & MERN Stack programs, and dedicated placement assistance."
        />
        <meta
          name="keywords"
          content="CodewareIT, coding institute Dehradun, programming training Uttarakhand, MERN stack India, Full Stack development courses, IT internships Dehradun, tech placement assistance"
        />
        <meta property="og:title" content="CodewareIT - Leading Coding & Programming Training Institute in Dehradun" />
        <meta property="og:description" content="Join CodewareIT for expert training and internship certifications in Full Stack, MERN Stack, Python, Java, and IT placements across Dehradun, Uttarakhand, and India." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.codewareit.in" />
        <meta property="og:image" content="https://www.codewareit.in/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CodewareIT - Best Coding Training Institute in Dehradun" />
        <meta name="twitter:description" content="Expert training in programming, internships, and placement services by CodewareIT Pvt Ltd in Dehradun, Uttarakhand & India." />
        <meta name="twitter:image" content="https://www.codewareit.in/og-image.jpg" />
      </Head>

      <section
        className="relative flex items-center justify-center h-[35rem] mt-[5rem] px-4 sm:px-6 sm:h-screen overflow-hidden"
        aria-label="Hero Banner - Empower Your Future with Codeware IT"
      >
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          aria-hidden="true"
        >
          <source src="/144590-785095798.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0" aria-hidden="true" />

        {/* Content */}
        <div className="relative z-10 text-center max-w-3xl mx-auto text-white px-4 md:px-8 mt-[-3rem]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Empower Your Future with <br />
            <span className="text-purple-300">
              <Typewriter
                words={["Codeware IT Pvt Ltd"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl mt-4 text-gray-200 leading-relaxed">
            Internship Certifications & Expert Training in Full Stack & MERN Stack
            Development. Master in-demand technologies through hands-on projects
            and expert mentorship to launch your tech career!
          </p>

          {/* Get Started Button */}
          <a
            href="https://wa.me/9837218345"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex justify-center"
          >
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg shadow-lg transition-transform transform hover:scale-105"
              aria-label="Get Started with CodewareIT"
            >
              Get Started
            </button>
          </a>
        </div>
      </section>
    </>
  );
}
