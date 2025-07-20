"use client";

import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#040A26] text-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Company Info */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold">Codeware IT Pvt Ltd</h2>
          <p className="mt-4 text-gray-300">
            We provide top-notch training in Full Stack Development, Python,
            Java, and other cutting-edge technologies. Master industry-relevant
            skills and build a successful career in tech.
          </p>
        </div>

        {/* Courses */}
        <div>
          <h3 className="font-bold text-lg">Courses</h3>
          <ul className="mt-2 space-y-2 text-gray-300">
            <li>
              <Link href="/Courses/full-stack-development">
                FULL STACK DEVELOPMENT
              </Link>
            </li>
            <li>
              <Link href="/Courses/mern-stack-development">
                MERN STACK DEVELOPMENT
              </Link>
            </li>
            <li>
              <Link href="/Courses/programming-languages">
                PROGRAMMING LANGUAGES
              </Link>
            </li>
            <li>
              <Link href="/Courses/industrial-training">
                INDUSTRIAL TRAINING
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg">Quick Links</h3>
          <ul className="mt-2 space-y-2 text-gray-300">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/Aboutus">About Us</Link>
            </li>
            <li>
              <Link href="/Courses">Courses</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>

            <li>
              <Link href="/PrivacyPolicy">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="font-bold text-lg">Address</h3>
          <ul className="mt-2 space-y-2 text-gray-300">
            <li>Codeware IT Pvt Ltd</li>
            <li>
              <a href="https://www.google.com/maps/dir/30.3366144,78.053376/Codeware+IT+Pvt+Ltd,+Chugh+Colony,+27,+Nalapani+Rd,+Dehradun,+Uttarakhand+248001/@30.3308342,78.0463993,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3909298618cc0ad3:0xf57f033590318d10!2m2!1d78.0615611!2d30.33026?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D" >
              <FaMapMarkerAlt className="inline mr-2" /> Karanpur Dehradun,
              Uttarakhand 248001
              </a>
              
            </li>
            <li>
              <a href="mailto:gshubham.05@gmail.com"><FaEnvelope className="inline mr-2" /> gshubham.05@gmail.com</a>
            </li>
            <li>
              <a href="tel:9837218345"><FaPhoneAlt className="inline mr-2" /> +91 9837218345</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media */}
      <div className="mt-8 flex justify-center space-x-6">
        <a
          href="https://www.facebook.com/share/1FKkhHpFEx/?mibextid=qi2Omg"
          className="text-gray-300 hover:text-white text-2xl"
        >
          <FaFacebookF />
        </a>
        {/* <a href="#" className="text-gray-300 hover:text-white text-2xl">
          <FaTwitter />
        </a>
        <a href="#" className="text-gray-300 hover:text-white text-2xl">
          <FaYoutube />
        </a> */}
        <a
          href="https://www.instagram.com/codewareit.in?igsh=dnA3c3l5OWZpZGdx"
          className="text-gray-300 hover:text-white text-2xl"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/company/codeware-it-dehradun/"
          className="text-gray-300 hover:text-white text-2xl"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-gray-400 text-sm">
       <a href="https://wa.me/message/WF4V4DY7R53QH1"> © 2025 Codeware IT Pvt Ltd. All rights reserved.</a>
      </div>
    </footer>
  );
}
