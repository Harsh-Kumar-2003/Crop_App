"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/contact", { // Updated API route path
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      alert(data.message);
      setFormData({ name: "", email: "", message: "" }); // Reset form after submission
    } else {
      alert("Error: " + data.error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-green-50 p-6">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8">Contact Us</h1>
      
      <div className="w-full max-w-5xl bg-white p-8 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-8">
        {/* Contact Details */}
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-4 text-gray-700 text-lg font-medium">
            <span className="text-blue-600 text-2xl">📧</span>
            <span>support@cropapp.com</span>
          </div>
          <div className="flex items-center gap-4 text-gray-700 text-lg font-medium">
            <span className="text-green-600 text-2xl">📞</span>
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-4 text-gray-700 text-lg font-medium">
            <span className="text-red-600 text-2xl">📍</span>
            <span>Bhagalpur, Bihar, India</span>
          </div>
          {/* OpenStreetMap */}
          <iframe
            className="w-full h-52 rounded-lg shadow-md"
            src="https://www.openstreetmap.org/export/embed.html?bbox=86.9568,25.2217,87.0174,25.2565&layer=mapnik"
            allowFullScreen
          ></iframe>
        </div>
        
        {/* Contact Form */}
        <div className="flex-1 bg-gray-100 p-6 rounded-xl shadow-md">
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none shadow-sm"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none shadow-sm"
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none shadow-sm"
              onChange={handleChange}
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white p-4 rounded-lg hover:from-blue-700 hover:to-green-600 transition duration-300 shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
