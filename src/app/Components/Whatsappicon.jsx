import React from "react";

const Whatsappicon = () => {
  return (
    <a
      href="https://wa.me/9837218345" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-5 w-12 h-12 bg-green-500 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
      title="Chat with CodewareIT on WhatsApp for coding and programming courses in Dehradun, Uttarakhand"
      aria-label="Chat with CodewareIT on WhatsApp for coding and programming courses in Dehradun, Uttarakhand"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp Icon"
        className="w-8 h-8"
        width={32}
        height={32}
        loading="lazy"
      />
    </a>
  );
};

export default Whatsappicon;
