import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white w-screen px-8 py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold mb-2">Uptoskills</h3>
          <ul className="space-y-1 text-sm text-gray-400">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Programs</h3>
          <ul className="space-y-1 text-sm text-gray-400">
            <li>Internships</li>
            <li>Open Source</li>
            <li>Hackathons</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Resources</h3>
          <ul className="space-y-1 text-sm text-gray-400">
            <li>Help Center</li>
            <li>Community</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Legal</h3>
          <ul className="space-y-1 text-sm text-gray-400">
            <li>Privacy Policy</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 mt-10">
        © 2025 Uptoskills, Built with 🖥️ by learners.
      </div>
    </footer>
  );
};

export default Footer;
