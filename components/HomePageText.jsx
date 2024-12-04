import React from "react";
import img from "@/public/Images/Text BG.jpg";
import Image from "next/image";
export default function HomePageText() {
  return (
    <div className="w-full bg-white">
      <div className="relative w-full h-40 bg-white">
        {/* Background Image */}
        <Image
          src={img}
          alt="Background"
          layout="fill"
          className="rounded-3xl"
          placeholder="blur"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white underline underline-offset-8">
            <h1 className="text-4xl md:text-6xl animate-bounce">
              দ্বীনদার পাত্র/পাত্রীর সন্ধান
            </h1>
          </div>
        </div>
      </div>

      {/* উপদেশ */}
      <div
        className="p-2 bg-[#FBFBFB] shadow-lg shadow-pink-100 rounded-3xl"
        title="আপনি বিয়ে করতে চাইলে আমরা আপনাকে পাত্র/পাত্রী খুজতে সাহায্য করতে পারি।😉"
      >
        <p className="text-2xl sm:text-4xl p-4  font-bold  text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse text-center ">
          {" "}
          “আপনি অবিবাহিত হলে বিবাহ করে অর্ধেক দ্বীন পূরন করুন, বাকি অর্ধেকের
          জন্য আল্লাহকে ভয় করুন।”
        </p>
      </div>
    </div>
  );
}
