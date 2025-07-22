import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import uptoskillsLogo from "../assets/uptoskills-logo.png"; // Import the logo

const Footer = () => {
  return (
    <footer className="bg-[#2E4053] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Contact Info */}
        <div>
            <div className="p-4 border-b border-gray-700 flex justify-start">
                <img
                    src={uptoskillsLogo}
                    alt="Uptoskills Logo"
                    className="h-12 w-auto object-contain"
                  />
            </div>
          <p className="mt-4"><span className="font-bold text-red-400">Address:</span> Pune, Maharashtra, 411045</p>
          <p className="mt-2"><span className="font-bold text-red-400">Email:</span> info@uptoskills.com</p>
          <p className="mt-2"><span className="font-bold text-red-400">Phone:</span> +91-9056734281</p>

          <div className="flex gap-4 mt-4 text-lg">
            <FaTwitter className="hover:text-blue-400 cursor-pointer" />
            <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
            <FaLinkedinIn className="hover:text-blue-500 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaYoutube className="hover:text-red-600 cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
         <div>
          <h3 className="relative inline-block text-xl font-semibold text-orange-400 hover:text-green-300 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">About Us</a></li>
            <li><a href="#" className="hover:text-gray-300">Courses</a></li>
            <li><a href="#" className="hover:text-gray-300">Events</a></li>
            <li><a href="#" className="hover:text-gray-300">Jobs & Internships</a></li>
            <li><a href="#" className="hover:text-gray-300">Become a Trainer</a></li>
          </ul>
        </div>

        {/* Short Links */}
        <div>
          <h3 className="text-xl font-semibold text-orange-400 hover:text-green-300 mb-4">Short Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">Terms & Condition</a></li>
            <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-300">Refund & Cancellation Policy</a></li>
            <li><a href="#" className="hover:text-gray-300">Sitemap</a></li>
            <li><a href="#" className="hover:text-gray-300">Login to Download Certificate</a></li>
          </ul>
        </div>

        {/* Find Us Here */}
        <div>
          <h3 className="text-xl font-semibold text-orange-400 hover:text-green-300 mb-4">Find Us Here</h3>
          <p className="text-sm text-gray-300">We are here to help you with any queries you have.</p>
          <button className="mt-4 bg-orange-400 text-black px-3 py-1 rounded shadow hover:bg-orange-200 transition-all">
            Quick Question? We are here!
          </button>
        </div>
      </div>

      <hr className="my-6 border-gray-600" />
      {/* Scroll up button*/}
      <div className="flex justify-center mt-6">
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="bg-slate-700 text-white p-3 rounded-full shadow-lg hover:bg-transparent transition"
    aria-label="Scroll to top">
 
    ↑
  </button>
</div>

      <p className="text-center text-sm text-gray-400">
        © 2025 UptoSkills. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;