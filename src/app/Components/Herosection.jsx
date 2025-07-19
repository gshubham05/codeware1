"use client";

import { Typewriter } from "react-simple-typewriter";

export default function HeroBanner() {
  return (
    <section className="relative flex items-center justify-center h-[35rem] mt-[5rem] px-4 sm:px-6 sm:h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/144590-785095798.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

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

        {/* Button */}
        <a
          href="https://wa.me/9837218345"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="mt-6 flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg shadow-lg transition-transform transform hover:scale-105">
              Get Started
            </button>
          </div>
        </a>
      </div>
    </section>
  );
}
