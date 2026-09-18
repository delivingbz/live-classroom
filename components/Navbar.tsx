"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

        {/* Top Navbar */}
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <div>
            <h1 className="text-xl font-bold">
              Live Classroom
            </h1>
          </div>

          {/* Desktop Navigation */}
         <div className="hidden items-center gap-6 md:flex">
                <Link href="/courses">Courses</Link>
                <Link href="/classes">Classes</Link>
                <Link href="/community">Community</Link>
         </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 md:flex">
            <button className="rounded-lg px-4 py-2">
              Login
            </button>

            <button className="rounded-lg bg-black px-4 py-2 text-white">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg border px-3 py-2 md:hidden"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t py-4 md:hidden">
            <Link href="/courses" className="block py-2">
              Courses
            </Link>

            <Link href="/classes" className="block py-2">
              Classes
            </Link>

            <Link href="/community" className="block py-2">
              Community
            </Link>

            <div className="mt-3 flex flex-col gap-2">
              <button className="rounded-lg px-4 py-2 text-left">
                Login
              </button>

              <button className="rounded-lg bg-black px-4 py-2 text-left text-white">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}