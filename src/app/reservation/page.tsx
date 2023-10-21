'use client'

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import SuccessModal from "../components/Modal";


const ReservationPage = () => {
    
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();

      const [name, setName] = useState("");
      const [dateTime, setDateTime] = useState("");
      const [guests, setGuests] = useState("");
      const [phone, setPhone] = useState("");
      const [email, setEmail] = useState("");

      const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (name && dateTime && guests && phone && email) {
          setShowModal(true);
          setTimeout(() => {
            setShowModal(false);
            router.push("/");
          }, 3000);
        } else {
          alert("Please fill out all required fields.");
        }
      };

  return (
    <div className="bg-red-50 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-red-600 text-center mb-12">
        Make a Reservation
      </h1>

      <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Date & Time
            </label>
            <input
              required
              type="datetime-local"
                value={dateTime}
                onChange={(e) => setDateTime(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Number of Guests
            </label>
            <input
              required
              type="number"
              min="1"
                max="10"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Phone
            </label>
            <input
              required
              type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              required
              type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Special Requests or Notes
            </label>
            <textarea
              rows={5}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={handleSubmit}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit Reservation
            </button>
          </div>
        </form>
      </div>
      <SuccessModal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default ReservationPage;
