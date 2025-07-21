import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2E4053] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold text-orange-400">Upto<span className="text-green-400">Skills</span></h2>
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
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
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
          <h3 className="text-xl font-semibold mb-4">Short Links</h3>
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
          <h3 className="text-xl font-semibold mb-4">Find Us Here</h3>
          <p className="text-sm text-gray-300">We are here to help you with any queries you have.</p>
          <button className="mt-4 bg-yellow-400 text-black px-3 py-1 rounded shadow hover:bg-yellow-300 transition-all">
            Quick Question? We are here!
          </button>
        </div>
      </div>

      <hr className="my-6 border-gray-600" />
      <p className="text-center text-sm text-gray-400">
        © 2025 UptoSkills. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;