import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-red-600 text-white">
      <div className="container mx-auto px-8 py-6">
        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold">Golden Dragon</div>
          <div className="space-x-4">
            <a href="/home" className="hover:text-red-300">
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
          </div>
        </div>
        <hr className="my-4 border-red-300" />
        <div className="flex justify-between items-center">
          <div className="text-sm">
            &copy; 2023 Golden Dragon. All rights reserved.
          </div>
          <div className="flex space-x-4">

        *//TODO add social media icons

            <a href="#" className="hover:text-red-300">
              <Image
                src="/path_to_facebook_icon.png"
                alt="Facebook"
                className="w-6 h-6"
                height={24}
                width={24}
              />
            </a>
            <a href="#" className="hover:text-red-300">
              <Image
                src="/path_to_instagram_icon.png"
                alt="Instagram"
                className="w-6 h-6"
                height={24}
                width={24}
              />
            </a>
            <a href="#" className="hover:text-red-300">
              <Image
                src="/path_to_twitter_icon.png"
                alt="Twitter"
                className="w-6 h-6"
                height={24}
                width={24}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
