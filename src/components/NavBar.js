import React, { useState } from "react";
import { FaBars, FaCircle } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#000000] shadow-lg bg-opacity-80 backdrop-blur-md">
      <div className="container flex items-center justify-between px-6 py-4 mx-auto">
        <div className="text-2xl font-bold text-white">TENGE TENGE Memes</div>
        <div className="md:hidden">
          <button
            className="text-2xl text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaCircle /> : <FaBars />}
          </button>
        </div>
        <ul className="hidden space-x-6 md:flex">
          <li>
            <a href="#home" className="text-white transition hover:text-black">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-white transition hover:text-black">
              About
            </a>
          </li>
          <li>
            <a
              href="#allocation"
              className="text-white transition hover:text-black"
            >
              Allocation
            </a>
          </li>
          <li>
            <a href="#buy" className="text-white transition hover:text-black">
              Buy
            </a>
          </li>
          <li>
            <a
              href="#community"
              className="text-white transition hover:text-black"
            >
              Community
            </a>
          </li>
          <li>
            <a href="#faq" className="text-white transition hover:text-black">
              FAQ
            </a>
          </li>
        </ul>
      </div>
      {isMenuOpen && (
        <div className="flex flex-col items-center py-4 space-y-4 bg-red-600 md:hidden bg-opacity-90">
          <a
            href="#home"
            className="text-lg text-white transition hover:text-black"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-lg text-white transition hover:text-black"
          >
            About
          </a>
          <a
            href="#allocation"
            className="text-lg text-white transition hover:text-black"
          >
            Allocation
          </a>
          <a
            href="#buy"
            className="text-lg text-white transition hover:text-black"
          >
            Buy
          </a>
          <a
            href="#community"
            className="text-lg text-white transition hover:text-black"
          >
            Community
          </a>
          <a
            href="#faq"
            className="text-lg text-white transition hover:text-black"
          >
            FAQ
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
