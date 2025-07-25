import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section className="min-h-screen bg-white py-16 px-4 md:px-20" id="contact">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-purple-700">Get in Touch</h1>
        <p className="text-gray-600 mt-2 text-lg">Feel free to reach out for collaborations or just a friendly hello 👋</p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
          <form className="flex flex-col gap-6">
            <div>
              <label htmlFor="name" className="block font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-medium text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Your message..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center">
          <div className="mb-6 flex items-center gap-4">
            <FaEnvelope className="text-purple-600 text-2xl" />
            <span className="text-gray-700 text-lg">zarar@example.com</span>
          </div>

          <div className="mb-6 flex items-center gap-4">
            <FaMapMarkerAlt className="text-purple-600 text-2xl" />
            <span className="text-gray-700 text-lg">Peshawar, Pakistan</span>
          </div>

          <div className="flex items-center gap-6 mt-6">
            <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-3xl text-gray-800 hover:text-purple-600 transition" />
            </a>
            <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-3xl text-gray-800 hover:text-purple-600 transition" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
