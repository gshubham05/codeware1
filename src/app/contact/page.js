"use client";

import { useState } from "react";
import axios from "axios";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBuilding,
  FaBookOpen,
  FaGraduationCap,
} from "react-icons/fa";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    qualification: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setSuccessMsg("");
  setErrorMsg("");

  try {
    await axios.post("/api/students", formData);

    // 🔥 META LEAD EVENT
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead");

      // 🔥 WhatsApp Click Tracking
      window.fbq("track", "Contact", {
        method: "WhatsApp",
      });
    }

    setSuccessMsg("Thank you! Redirecting to WhatsApp...");

    // 📲 WhatsApp Redirect
    const message = `Hello Codeware IT 👋
I am interested in the ${formData.course} course.
Name: ${formData.name}
Qualification: ${formData.qualification}
Phone: ${formData.phone}`;

    const whatsappURL = `https://wa.me/919837218345?text=${encodeURIComponent(
      message
    )}`;

    setTimeout(() => {
      window.open(whatsappURL, "_blank");
    }, 1000);

    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
      qualification: "",
    });
  } catch (error) {
    setErrorMsg("Failed to send message. Please try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="relative w-full min-h-screen bg-blue-900 text-white">
      <div className="container mx-auto py-16 px-6">
        <div className="flex flex-col md:flex-row gap-12">
          {/* LEFT SIDE */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-purple-300 mb-4">
              Codeware IT Pvt Ltd
            </h2>
            <p className="text-gray-200 text-lg leading-relaxed">
              We provide professional training in{" "}
              <span className="text-purple-300 font-semibold">
                Full Stack, MERN Stack, Python, Java
              </span>{" "}
              with industry-focused practical learning.
            </p>

            <ul className="mt-8 space-y-4 text-lg">
              <li className="flex items-center">
                <FaBuilding className="mr-3 text-purple-300" />
                Codeware IT Pvt Ltd
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-3 text-purple-300" />
                Karanpur, Dehradun, Uttarakhand 248001
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-purple-300" />
                gshubham.05@gmail.com
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-purple-300" />
                +91 9837218345
              </li>
            </ul>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="md:w-1/2 bg-white text-gray-900 p-8 rounded-2xl shadow-2xl">
            <h3 className="text-3xl font-bold mb-6 text-blue-900">
              Get Free Counselling
            </h3>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Name */}
              <div className="flex items-center border rounded-lg px-4 py-3 focus-within:border-blue-600">
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

              {/* Email */}
              <div className="flex items-center border rounded-lg px-4 py-3 focus-within:border-blue-600">
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

              {/* Phone */}
              <div className="flex items-center border rounded-lg px-4 py-3 focus-within:border-blue-600">
                <FaPhone className="text-gray-500 mr-3" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  className="w-full outline-none bg-transparent text-lg"
                  value={formData.phone}
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                  required
                />
              </div>

              {/* Course */}
              <div className="flex items-center border rounded-lg px-4 py-3 focus-within:border-blue-600">
                <FaBookOpen className="text-gray-500 mr-3" />
                <select
                  name="course"
                  className="w-full outline-none bg-transparent text-lg"
                  value={formData.course}
                  onChange={handleChange}
                  required
                >
                  <option value="">Course Interested</option>
                  <option value="MERN Stack">MERN Stack</option>
                  <option value="Next.js">Next.js</option>
                  <option value="Python">Python</option>
                  <option value="Java">Java</option>
                  <option value="SEO">SEO</option>
                </select>
              </div>

              {/* Qualification */}
              <div className="flex items-center border rounded-lg px-4 py-3 focus-within:border-blue-600">
                <FaGraduationCap className="text-gray-500 mr-3" />
                <select
                  name="qualification"
                  className="w-full outline-none bg-transparent text-lg"
                  value={formData.qualification}
                  onChange={handleChange}
                  required
                >
                  <option value="">Qualification</option>
                  <option value="10th">10th</option>
                  <option value="12th">12th</option>
                  <option value="Graduate">Graduate</option>
                  <option value="Post Graduate">Post Graduate</option>
                </select>
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-3 rounded-lg font-bold text-lg shadow-lg hover:opacity-90 transition"
              >
                {loading ? "Submitting..." : "Submit Enquiry"}
              </button>

              {successMsg && (
                <p className="text-green-600 font-semibold">{successMsg}</p>
              )}
              {errorMsg && (
                <p className="text-red-600 font-semibold">{errorMsg}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
