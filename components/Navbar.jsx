"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import couple from "@/public/Images/Couple.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-white">
      <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white  pt-3 pb-3 rounded-b-3xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div
              className="flex flex-shrink-0"
              title="দ্বীনদার পাত্র/পাত্রীর সন্ধান"
            >
              <Link href="/" className="text-2xl">
                <Image
                  src={couple}
                  width={75}
                  alt="Couple"
                  className="rounded-full "
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex">
              <Link
                href="/"
                className="text-xl hover:underline mx-2 px-3 py-2  rounded-full  focus:underline"
              >
                হোম
              </Link>
              <Link
                href="/about"
                className="text-xl hover:underline mx-2 px-3 py-2  rounded-full focus:underline"
              >
                আমাদের সম্পর্কে
              </Link>
              <Link
                href="/faq"
                className="text-xl hover:underline mx-2 px-3 py-2  rounded-full focus:underline"
              >
                জিজ্ঞাসা
              </Link>
              <Link
                href="/guide"
                className="text-xl hover:underline mx-2 px-3 py-2  rounded-full focus:underline"
              >
                নির্দেশনা
              </Link>
              <Link
                href="/contact"
                className="text-xl hover:underline mx-2 px-3 py-2  rounded-full focus:underline"
              >
                যোগাযোগ
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden">
              <div className="flex flex-col space-y-4 py-4 ml-5">
                <Link
                  href="/"
                  className="text-xl hover:underline mt-6 focus:underline"
                >
                  হোম
                </Link>
                <Link
                  href="/about"
                  className="text-xl hover:underline focus:underline"
                >
                  আমাদের সম্পর্কে
                </Link>
                <Link
                  href="/faq"
                  className="text-xl hover:underline focus:underline"
                >
                  জিজ্ঞাসা
                </Link>
                <Link
                  href="/guide"
                  className="text-xl hover:underline focus:underline"
                >
                  নির্দেশনা
                </Link>
                <Link
                  href="/contact"
                  className="text-xl hover:underline focus:underline"
                >
                  যোগাযোগ
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
