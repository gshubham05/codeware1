"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "What courses do you offer?",
    answer:
      "We offer training in Full Stack Development, MERN Stack, Python, Java, and various other programming languages.",
  },
  {
    question: "How long do the training programs last?",
    answer:
      "The duration varies by course. Our full-time Full Stack and MERN Stack programs typically last 3-6 months.",
  },
  {
    question: "Do you provide certifications?",
    answer:
      "Yes! Upon successful completion of any training program, we provide industry-recognized certification.",
  },
  {
    question: "Is prior coding experience required?",
    answer:
      "Not at all! We have beginner-friendly courses as well as advanced training programs.",
  },
  {
    question: "What support do you provide after course completion?",
    answer:
      "We offer career guidance, resume-building assistance, and interview preparation to help you land a job in tech.",
  },
  {
    question: "Do you offer online or offline training?",
    answer:
      "We provide both online and offline training options to suit different schedules and learning styles.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#040A26]">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 mt-2">
          Everything you need to know about our training programs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-2xl bg-gradient-to-br from-[#2D2A4A] to-[#5B496F] border border-[#5B496F] text-white shadow-lg"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-5 text-left text-lg font-medium focus:outline-none"
            >
              <span>{faq.question}</span>
              {openIndex === index ? (
                <FaMinus className="text-purple-400" />
              ) : (
                <FaPlus className="text-purple-400" />
              )}
            </button>

            {openIndex === index && (
              <div className="p-5 pt-0 text-sm text-gray-200">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
