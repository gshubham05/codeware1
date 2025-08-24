"use client";

import React, { useState } from "react";
import Head from "next/head";
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
  {
    question: "Do you provide internships in MERN stack?",
    answer:
      "Yes, we provide hands-on internships specifically focused on the MERN stack to help students gain real-world experience.",
  },
  {
    question: "Do you provide job assistance in IT?",
    answer:
      "Yes, we provide job assistance services to help our students secure employment in the IT industry after completing their courses.",
  },
  {
    question: "What type of learning approach is used?",
    answer:
      "We focus solely on practical implementation of IT concepts through real projects and hands-on training.",
  },
];

// Prepare FAQ schema for rich snippets
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>
          Frequently Asked Questions - CodewareIT Pvt Ltd | Best Coding Institute in Dehradun
        </title>
        <meta
          name="description"
          content="Find answers to common questions about training programs, certifications, internships, job assistance, and course formats at CodewareIT, premier coding institute in Dehradun."
        />
        <meta
          name="keywords"
          content="coding courses FAQs, coding institute questions, internships MERN stack, job assistance Dehradun, online coding classes, CodewareIT"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <section
        className="max-w-6xl mx-auto py-16 px-6"
        aria-labelledby="faq-heading"
      >
        <div className="text-center mb-12">
          <h2 id="faq-heading" className="text-4xl font-bold text-[#040A26]">
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
                aria-expanded={openIndex === index}
                aria-controls={`faq-desc-${index}`}
                id={`faq-toggle-${index}`}
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <FaMinus className="text-purple-400" />
                ) : (
                  <FaPlus className="text-purple-400" />
                )}
              </button>

              {openIndex === index && (
                <div
                  id={`faq-desc-${index}`}
                  className="p-5 pt-0 text-sm text-gray-200"
                  role="region"
                  aria-labelledby={`faq-toggle-${index}`}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
