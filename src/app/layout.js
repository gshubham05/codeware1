import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Whatsappicon from "./Components/Whatsappicon";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Best Programming, MERN Stack & Internship Institute in Dehradun | CodewareIT Pvt Ltd",
  description:
    "Join CodewareIT Pvt Ltd, the top programming and industrial training institute in Dehradun. Expert training in MERN Stack, Java, Python, PHP, Coding Internships, and real-world projects.",
  keywords: [
    "best computer institute in Dehradun",
    "best python institute in Dehradun",
    "best computer institute in India",
    "best python institute in India",
    "best java institute in India",
    "best java institute in Dehradun",
    "Shubham Goyal",
    "9837218345",
    "www.codewareit.in",
    "best programming institute in Dehradun",
    "best MERN stack institute in Dehradun",
    "best programming institute in India",
    "best MEAN stack institute in Dehradun",
    "best MEAN stack institute in India",
    "best PHP programming institute in Dehradun",
    "best PHP programming institute in India",
    "best full stack development Dehradun",
    "best full stack development in India",
    "Codeware IT Pvt Ltd Dehradun",
    "industrial training in Dehradun",
    "industrial training in India",
    "summer internship in Dehradun",
    "summer internship in India",
    // ✅ Extra SEO keywords for internships & coding
    "best internship in IT in Dehradun",
    "best coding internship in IT in Dehradun",
    "IT training and internship Dehradun",
    "coding bootcamp in Dehradun",
    "web development internship in Dehradun",
    "full stack internship in Dehradun",
    "best internship in programming in Dehradun",
    "software development internship in Dehradun",
    "best internship in IT in India",
    "coding internship in IT in India",
  ],
  author: "Shubham Goyal",
  publisher: "Codeware IT Pvt Ltd",

  openGraph: {
    title: "CodewareIT Pvt Ltd - Best Training & Internship in IT, Dehradun",
    description:
      "Join Codeware IT Pvt Ltd for the best internships & training in Python, Java, MERN, MEAN, PHP & Full Stack Development in Dehradun & India.",
    url: "https://www.codewareit.in",
    siteName: "Codeware IT Pvt Ltd",
    images: [
      {
        url: "https://www.codewareit.in/og-image.jpg", // Update with your OG image
        width: 1200,
        height: 630,
        alt: "Codeware IT Pvt Ltd",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // ✅ Twitter card for SEO
  twitter: {
    card: "summary_large_image",
    title: "CodewareIT Pvt Ltd - Best IT Internship & Training in Dehradun",
    description:
      "Get the best Coding & IT Internship in Dehradun with Codeware IT Pvt Ltd. Learn MERN, Next.js, Java, Python & Full Stack Development.",
    images: ["https://www.codewareit.in/og-image.jpg"],
    creator: "@codewareit", // replace with your Twitter handle if any
  },

  // ✅ Favicon & Manifest
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Whatsappicon />
        <Footer />
      </body>
    </html>
  );
}
