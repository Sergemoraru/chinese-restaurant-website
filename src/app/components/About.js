/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="bg-red-50 min-h-screen flex flex-col items-center justify-center py-10">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-3xl w-full">
        <h1 className="text-4xl font-semibold mb-6 text-center text-red-600">
          About Golden Dragon
        </h1>
        <div className="flex justify-center mb-6">
          <Image
            src="/aboutme-image.png"
            alt="Golden Dragon Interior"
            width={500}
            height={500}
            className="rounded-lg h-64 w-full object-cover"
          />
        </div>
        <p className="mb-4 text-slate-600">
          Nestled in the heart of the city,{" "}
          <span className="font-semibold">Golden Dragon</span> is a culinary
          journey into the depths of traditional Chinese cuisine. Founded in
          1995 by Chef Li Wei, our restaurant has been serving authentic flavors
          passed down through generations.
        </p>
        <p className="mb-4 text-slate-600">
          From the subtle aromas of dim sum to the robust flavors of our Peking
          duck, every dish is a testimony to our commitment to authenticity and
          excellence. Our ingredients are handpicked, ensuring that each bite is
          a harmonious blend of taste and tradition.
        </p>
        <p className="mb-4 text-slate-600">
          The ambiance of Golden Dragon is designed to transport you to ancient
          China. Adorned with traditional lanterns and intricate woodwork, the
          restaurant echoes the elegance of Chinese dynasties of yore.
        </p>
        <p>
          We believe in creating more than just meals; we craft memories.
          Whether it's a family dinner, a romantic date, or a grand celebration,
          Golden Dragon promises an unforgettable experience.
        </p>
        <div className="mt-6 flex justify-center">
          <a
            href="mailto:reservations@goldendragon.com"
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded"
          >
            Make a Reservation
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
