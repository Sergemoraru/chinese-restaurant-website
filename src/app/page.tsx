import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="bg-red-50 min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow flex items-center justify-center p-8">
        <div className="max-w-3xl w-full text-center space-y-8">
          <Image
            src="/golden-dragon.png"
            alt="Golden Dragon Dining"
            className="rounded-lg shadow-md mb-8 w-full h-80 object-cover"
            width={800}
            height={320}
          />

          <h1 className="text-4xl font-bold text-red-600">
            Welcome to <span className="text-orange-500">Golden Dragon</span>
          </h1>

          <p className="text-xl text-gray-700">
            Dive into an authentic Chinese dining experience, right in the heart
            of the city. From the delicate flavors of dim sum to the vibrant
            notes of our signature dishes, every bite is a celebration of
            traditional Chinese cuisine.
          </p>

          <div className="mt-8">
            <div>
              <a
                href="mailto:reservations@goldendragon.com"
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-8 rounded-lg text-xl font-semibold transition-transform transform hover:scale-105"
              >
                Make a Reservation
              </a>
            </div>
            <div className="mt-8">
              <a className="bg-red-500 hover:bg-red-600 text-white py-2 px-8 rounded-lg text-xl font-semibold transition-transform transform hover:scale-105">
                The Menu
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
