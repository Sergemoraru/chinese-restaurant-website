"use client"
import React, { useState } from "react";

const ContactForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the mailto link
    const mailtoLink = `mailto:chineseRestaurant@example.com?subject=Contact from ${formData.name}&body=Name: ${formData.name}%0DEmail: ${formData.email}%0D%0DMessage: ${formData.message}`;
    
    // Open the user's email application
    window.location.href = mailtoLink;
  }

  return (
    <div className="bg-orange-50 min-h-screen pt-10">
      <div className="bg-white p-10 rounded shadow-md max-w-lg mx-auto mt-10">
        <h2 className="text-2xl mb-5 text-red-600">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-2 border rounded text-gray-600"
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-2 border rounded text-gray-600"
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full p-2 border rounded text-gray-600"
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white p-2 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
