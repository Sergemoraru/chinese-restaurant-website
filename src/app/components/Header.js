import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="bg-red-600 text-white py-4">
      <div className="container mx-auto px-8 flex justify-between items-center">
        <div className="text-xl font-semibold text-orange-400">
          <Image
            src="/dragon.png"
            alt="Golden Dragon Logo"
            width={50}
            height={50}
            className="inline-block mr-12"
          />
          <a href="/">Golden Dragon</a>
        </div>
        <nav className="space-x-4">
          <a href="/" className="hover:text-red-300">
            Home
          </a>
          <a href="/menu" className="hover:text-red-300">
            Menu
          </a>
          <a href="/about" className="hover:text-red-300">
            About
          </a>
          <a href="/contact" className="hover:text-red-300">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
