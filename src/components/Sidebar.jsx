import React, { useState } from "react";
import {
  HomeIcon,
  FolderIcon,
  UserCircleIcon,
  GlobeAltIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import uptoskillsLogo from "../assets/uptoskills-logo.png"; // Import the logo

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Menu Button (mobile only) */}
      <button
        className="fixed top-4 left-4 z-50 md:hidden text-3xl text-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 max-w-[80%] bg-gray-800 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 md:translate-x-0 md:static md:h-auto`}
      >
        {/* Logo */}
        <div className="p-4 border-b border-gray-700 flex justify-center">
          <img
            src={uptoskillsLogo}
            alt="Uptoskills Logo"
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* Menu Items */}
        <ul className="p-4 space-y-4">
          <li className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded cursor-pointer">
            <HomeIcon className="h-5 w-5" />
            Home
          </li>
          <li className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded cursor-pointer">
            <FolderIcon className="h-5 w-5" />
            All Projects
          </li>
          <li className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded cursor-pointer">
            <UserCircleIcon className="h-5 w-5" />
            Profile
          </li>
          <li className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded cursor-pointer">
            <GlobeAltIcon className="h-5 w-5" />
            Domains
          </li>
          <li className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded cursor-pointer">
            <Cog6ToothIcon className="h-5 w-5" />
            Settings
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
