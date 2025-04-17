// src/pages/ContactPage.jsx
import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-orange-50 flex flex-col items-center px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-orange-700 mb-6 text-center">
        📞 Contact Us
      </h1>

      <p className="max-w-3xl text-center text-orange-800 mb-10 text-lg md:text-xl">
        Thank you for visiting <span className="font-semibold">Mandir Darshan</span> — your gateway to explore the rich spiritual and architectural beauty of Hindu temples across India.  
        If you have any questions, suggestions, or feedback, please feel free to get in touch with us.
      </p>

      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <form className="space-y-4">
          <div>
            <label className="block text-orange-800 font-semibold mb-1">Name</label>
            <input
              type="text"
              className="w-full border border-orange-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label className="block text-orange-800 font-semibold mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-orange-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-orange-800 font-semibold mb-1">Message</label>
            <textarea
              rows="5"
              className="w-full border border-orange-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Type your message here..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-12 text-center text-orange-700">
        <h2 className="text-2xl font-bold mb-2">📍 Our Address</h2>
        <p>Mandir Darshan Foundation, Gorakhpur, Uttar Pradesh, India</p>
        <p>Email: contact@mandirdarshan.in</p>
        <p>Phone: +91 9876543210</p>
      </div>
    </div>
  );
};

export default Contact;
