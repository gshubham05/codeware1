import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Whatsappicon from "./Components/Whatsappicon";
import MetaPixel from "./Components/MetaPixel";
import RouteChangeTracker from "./Components/RouteChangeTracker";

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
    "Top Coding Institute in Dehradun, Uttarakhand | Best MERN, Python, Java Training – CodewareIT Pvt Ltd",
  description:
    "Looking for coding classes in Dehradun or Uttarakhand? CodewareIT Pvt Ltd offers top-notch MERN Stack, Java, Python courses, coding internships & IT training.",
  keywords: [
    "coding institute Dehradun",
    "IT training Dehradun",
    "programming courses Uttarakhand",
    "MERN stack institute Uttarakhand",
    "python classes Dehradun",
    "coding internship Dehradun",
    "software development training Uttarakhand",
    "industrial training Dehradun",
    "coding bootcamp Dehradun",
    "best computer institute in Dehradun",
    "best python institute in Dehradun",
    "best computer institute in India",
    "best advance python institute in India",
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
    "best coding classes Uttarakhand",
    "CodewareIT Dehradun",
    "learn programming Dehradun",
    "web development Uttarakhand",
    "coding coaching Dehradun",
  ],
  author: "Shubham Goyal",
  publisher: "CodewareIT Pvt Ltd",
  openGraph: {
    title: "Best Coding Classes in Dehradun, Uttarakhand | CodewareIT Pvt Ltd",
    description:
      "Advance your tech career with CodewareIT in Dehradun, Uttarakhand. Join courses in MERN stack, Python, Java & more. Real internships available.",
    url: "https://www.codewareit.in",
    siteName: "CodewareIT Pvt Ltd",
    images: [
      {
        url: "https://www.codewareit.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Top coding classes Dehradun Uttarakhand | CodewareIT",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Coding & Internship Institute in Dehradun, Uttarakhand",
    description:
      "Join Dehradun's leading programming & IT training center – CodewareIT Pvt Ltd – for MERN, Python, Java, and coding internships in Uttarakhand.",
    images: ["https://www.codewareit.in/og-image.jpg"],
    creator: "@codewareit",
  },
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
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="author" content={metadata.author} />
        <meta name="description" content={metadata.description} />

        {/* Open Graph */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />

        {/* Twitter */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
        <meta name="twitter:creator" content={metadata.twitter.creator} />

        {/* Favicon & Manifest */}
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Structured Data for Local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "CodewareIT Pvt Ltd",
              url: "https://www.codewareit.in",
              logo: "https://www.codewareit.in/og-image.jpg",
              description:
                "Top coding training and internship institute in Dehradun, Uttarakhand specializing in MERN, Python, Java, and IT courses.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Karanpur and Prem Nagar",
                addressLocality: "Dehradun",
                addressRegion: "Uttarakhand",
                postalCode: "248001",
                addressCountry: "IN",
              },
              telephone: "+91-9837218345",
              email: "codewareit@gmail.com",
            }),
          }}
        />
 
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MetaPixel />
        <RouteChangeTracker />
        <Navbar />
        {children}
        <Whatsappicon />
        <Footer />
      </body>
    </html>
  );
}
