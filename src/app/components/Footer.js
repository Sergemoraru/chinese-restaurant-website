import React from "react";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <footer className="bg-red-600 text-white">
      <div className="container mx-auto px-8 py-6">
        <div className="flex justify-between items-center">
          <div className="text-sm">
            &copy; 2023 Golden Dragon. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a href="www.facebook.com" className="hover:text-red-300">
              <FacebookIcon style={{ fontSize: 24 }} />
            </a>
            <a href="www.instagram.com" className="hover:text-red-300">
              <InstagramIcon style={{ fontSize: 24 }} />
            </a>
            <a href="www.twitter.com" className="hover:text-red-300">
              <TwitterIcon style={{ fontSize: 24 }} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
