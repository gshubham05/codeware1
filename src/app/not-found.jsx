"use client"; // 👈 Needed in Next.js (App Router)

import React from "react";
import Link from "next/link";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const LottiePlayer = () => {
  return (
    <>
      <div className=" items-center justify-center mt-8">
        <DotLottieReact
          src="https://lottie.host/e41b9b00-935b-4d4e-a5a0-4ecbc6d40d10/xcrZFet3b5.lottie"
          loop
          autoplay
        />
      </div>
      <div className="text-center mt-[-8rem] mb-5">
        <Link
          href="/"
          className="mt-6 inline-block text-lg text-blue-500 hover:text-blue-700"
        >
          Go back to the Homepage
        </Link>
      </div>
    </>
  );
};

export default LottiePlayer;
