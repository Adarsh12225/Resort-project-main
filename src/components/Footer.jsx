


//today

import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    setIsModalOpen(false);
  };

  return (
    <>
      <footer className="w-full bg-gray-900 text-gray-300 py-8">
        <div className="w-full px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

            {/* Resort Info */}
            <div>
              <h3 className="text-white font-semibold mb-4 border-blue-800 inline-block pb-1">
                RESORT
              </h3>

              <p className="text-sm leading-relaxed text-gray-300">
                Royal Resort offers a luxurious retreat with elegant rooms,
                premium facilities, fine dining options, and outstanding
                personalized guest services.
              </p>

              {/* Social Icons */}
              <div className="flex space-x-5 mt-4 text-xl">

                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="hover:text-blue-600 transition"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  className="hover:text-sky-400 transition"
                >
                  <FaTwitter />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  className="hover:text-blue-700 transition"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="hover:text-pink-500 transition"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  className="hover:text-red-600 transition"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>

            {/* Common Links */}
            <div className="px-10">
              <h3 className="text-white font-semibold mb-4 border-blue-800 inline-block pb-1">
                COMMON LINKS
              </h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/About" className="hover:text-blue-400">About</a></li>
                <li><a href="/Dining" className="hover:text-blue-400">Dining</a></li>
                <li><a href="/Rooms" className="hover:text-blue-400">Rooms</a></li>
                <li><a href="/Gallery" className="hover:text-blue-400">Gallery</a></li>
                <li><a href="/Career" className="hover:text-blue-400">Career</a></li>
              </ul>
            </div>

            {/* Events */}
            <div className="px-10">
              <h3 className="text-white font-semibold mb-4 border-blue-800 inline-block pb-1">
                EVENTS
              </h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/Services/corporate/meeting" className="hover:text-blue-400">Meeting</a></li>
                <li><a href="/Services/corporate/conference" className="hover:text-blue-400">Conference</a></li>
                <li><a href="/Services/corporate/seminar" className="hover:text-blue-400">Seminar</a></li>
                <li><a href="/venue" className="hover:text-blue-400">Venue</a></li>
                <li>
                  <a href="/Social" className="hover:text-blue-400">
                    Social Event
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="px-10">
              <h3 className="text-white font-semibold mb-4 border-blue-800 inline-block pb-1">
                CONTACT US
              </h3>

              <div className="text-sm space-y-2 text-gray-300">
                <p><FaPhoneAlt className="inline mr-2" /> +91 9670360740</p>
                <p><FaEnvelope className="inline mr-2" /> mishraadarsh12225@gmail.com</p>
                <p>
                  <FaMapMarkerAlt className="inline mr-2" />
                  H 15 BSI Business Park, Sector 63, Noida – 201309
                </p>
              </div>

              {/* <button
                onClick={() => setIsModalOpen(true)}
                className="mt-4 bg-blue-800 hover:bg-blue-900 text-white px-5 py-2 rounded-lg transition w-auto"
              >
                Get in Touch
              </button> */}
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-8 border-t border-gray-700 pt-4">
            <p className="text-center text-xs text-gray-400">
              © 2025 Resort. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg relative">

            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-3 text-gray-600 hover:text-red-600 text-xl"
            >
              &times;
            </button>

            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Contact Us
            </h2>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-300 rounded px-4 py-2 w-full"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded px-4 py-2 w-full"
                required
              />
              <input
                type="text"
                placeholder="Mobile No"
                className="border border-gray-300 rounded px-4 py-2 w-full"
                required
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="border border-gray-300 rounded px-4 py-2 w-full"
                required
              />

              <button
                type="submit"
                className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded transition w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
