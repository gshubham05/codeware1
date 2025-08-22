"use client";
import { useState } from "react";
import axios from "axios"; // install axios if not installed: npm i axios
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBuilding,
} from "react-icons/fa";

export default function ContactUs() {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // State for success & error message
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");

    try {
      // Post form data to your backend API route
      await axios.post("/api/students", formData);

      setSuccessMsg("Message sent successfully!");
      // Reset form
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setErrorMsg("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-gray-100 overflow-hidden mt-[1rem] border-b-2 ">
      {/* Main Section */}
      <div className="relative w-full min-h-screen flex items-center justify-center bg-blue-900 text-white transition-all duration-700">
        <div className="container mx-auto py-12">
          <div className="flex flex-col md:flex-row gap-10 p-[3rem]">
            {/* Left Side - Company Info */}
            <div className="md:w-1/2 order-2 md:order-1">
              <h2 className="text-4xl font-bold mb-4 text-purple-300">
                Codeware IT Pvt Ltd
              </h2>
              <p className="text-gray-200 text-lg leading-relaxed">
                We provide professional training in{" "}
                <span className="text-purple-300 font-semibold">
                  Full Stack Development, MERN Stack, Python, Java.
                </span>{" "}
                Our expert-led courses help students and professionals{" "}
                <span className="text-purple-300">
                  become job-ready and industry experts.
                </span>
              </p>
              <ul className="mt-6 space-y-4 text-gray-100">
                <li className="flex items-center text-lg">
                  <FaBuilding className="mr-3 text-purple-300" /> Codeware IT
                  Pvt Ltd
                </li>
                <li className="flex items-center text-lg">
                  <FaMapMarkerAlt className="mr-3 text-purple-300" />
                  Karanpur, Dehradun, Uttarakhand 248001
                </li>
                <li className="flex items-center text-lg">
                  <a href="mailto:gshubham.05@gmail.com">
                    <FaEnvelope className="mr-3 text-purple-300" />
                    gshubham.05@gmail.com
                  </a>
                </li>
                <li className="flex items-center text-lg">
                  <a href="tel:9837218345">
                    <FaPhone className="mr-3 text-purple-300" /> +91 9837218345
                  </a>
                </li>
              </ul>
            </div>

            {/* Right Side - Contact Form */}
            <div className="md:w-1/2 bg-white text-gray-900 p-8 rounded-xl shadow-lg border border-gray-200 backdrop-blur-lg order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-5 text-blue-900">
                Send Us a Message
              </h2>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="flex items-center border rounded-lg px-4 py-3 transition-all duration-300 focus-within:border-blue-500">
                  <FaUser className="text-gray-500 mr-3" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full outline-none bg-transparent text-lg"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex items-center border rounded-lg px-4 py-3 transition-all duration-300 focus-within:border-blue-500">
                  <FaEnvelope className="text-gray-500 mr-3" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full outline-none bg-transparent text-lg"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex items-center border rounded-lg px-4 py-3 transition-all duration-300 focus-within:border-blue-500">
                  <FaPhone className="text-gray-500 mr-3" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    className="w-full outline-none bg-transparent text-lg"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="course you are looking for"
                  className="w-full border rounded-lg px-4 py-3 h-32 outline-none transition-all duration-300 focus:border-blue-500 text-lg"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>

                <button
                  className="w-full bg-blue-900 text-white py-3 rounded-lg font-bold hover:bg-blue-800 transition text-lg shadow-md"
                  type="submit"
                >
                  Send Message
                </button>

                {successMsg && (
                  <p className="text-green-600 font-semibold mt-3">
                    {successMsg}
                  </p>
                )}
                {errorMsg && (
                  <p className="text-red-600 font-semibold mt-3">{errorMsg}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
