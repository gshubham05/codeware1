import React from "react";
import Head from "next/head";
import Herosection from "./Components/Herosection";
import Aboutcompany from "./Components/Aboutcompany";
import Faq from "./Components/Faq";
import Courses from "./Components/Courses";
import Cstatistics from "./Components/Cstatistics";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What coding courses are offered at CodewareIT in Dehradun?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer MERN Stack, Python, Java, and PHP full-stack development courses."
      }
    },
    {
      "@type": "Question",
      name: "Where is CodewareIT located in Uttarakhand?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are located in Karanpur and Prem Nagar, Dehradun, Uttarakhand, postal code 248001."
      }
    },
    {
      "@type": "Question",
      name: "Do you provide internships in the MERN stack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide hands-on internships specifically focused on the MERN stack to help students gain real-world experience."
      }
    },
    {
      "@type": "Question",
      name: "Does CodewareIT offer job assistance in IT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide job assistance services to help our students secure employment in the IT industry after completing their courses."
      }
    },
    {
      "@type": "Question",
      name: "What type of learning approach is used?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We focus solely on practical implementation of IT concepts through real projects and hands-on training."
      }
    }
  ]
};

function Page() {
  return (
    <>
      <Head>
        <title>Best Coding Courses in Dehradun | CodewareIT Pvt Ltd</title>
        <meta
          name="description"
          content="Join CodewareIT Pvt Ltd in Dehradun, Uttarakhand for expert MERN Stack, Python, Java coding courses and internships."
        />
        <meta
          name="keywords"
          content="coding courses Dehradun, coding institute Uttarakhand, MERN stack classes Dehradun, IT internship Uttarakhand"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      <Herosection />
      <Aboutcompany />
      <Courses />
      <Cstatistics />
      <Faq />
    </>
  );
}

export default Page;
