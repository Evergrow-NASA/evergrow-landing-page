"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const handleResize = () => {
    if (window.innerWidth >= 1280) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="navbar-wrapper fixed top-0 w-full z-50 transition-all duration-300 ease-in-out" // Contenedor que engloba todo y anima el fondo
      style={{
        backgroundColor: showMenu || scrolling ? "#0c0c20" : "transparent",
      }}
    >
      {/* Navbar (Logo y enlaces) */}
      <nav className="px-6 md:px-10 py-6">
        <div className="mx-auto flex justify-between items-center">
          {/* Logo */}
          <a
            className="flex items-center md:text-4xl text-2xl italic gap-x-4 hover:no-underline"
            href="/"
          >
            <Image
              width={40}
              height={49.27}
              src="/images/EvergrowLogo.svg"
              alt="Evergrow Logo"
            />
            Evergrow
          </a>

          {/* Navigation links */}
          <div className="hidden xl:flex space-x-16 items-center">
            <a href="#context" className="underline-offset-4 font-light">
              Context
            </a>
            <a href="#solution" className="underline-offset-4 font-light">
              Solution
            </a>
            <a href="#features" className="underline-offset-4 font-light">
              Features
            </a>
            <a href="#objectives" className="underline-offset-4 font-light">
              Objectives
            </a>
            <a href="#case_study" className="underline-offset-4 font-light">
              Case Study
            </a>
            <a
              href="#"
              className="white bg-primary-green px-9 py-3 rounded-full hover:bg-[#528566] transition-colors hover:no-underline"
            >
              Download
            </a>
          </div>

          {/* Hamburger menu for mobile devices */}
          <button className="xl:hidden" onClick={toggleMenu}>
            {showMenu ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`absolute bg-neutral-black px-8 pt-2 pb-8 w-full xl:hidden transition-all duration-300 ease-in-out overflow-hidden shadow-lg ${
          showMenu ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="text-right ml-auto">
          <li className="pb-4">
            <a href="#context" className="font-light">
              Context
            </a>
          </li>
          <li className="py-4">
            <a href="#solution" className="font-light">
              Solution
            </a>
          </li>
          <li className="py-4">
            <a href="#features" className="font-light">
              Features
            </a>
          </li>
          <li className="py-4">
            <a href="#objectives" className="font-light">
              Objectives
            </a>
          </li>
          <li className="py-4">
            <a href="#case_study" className="font-light">
              Case Study
            </a>
          </li>
          <li className="py-4">
            <a
              href="#"
              className="white bg-primary-green px-9 py-3 rounded-full hover:no-underline"
            >
              Download
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
