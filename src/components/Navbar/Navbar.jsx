import React, { useState } from 'react';
import { FiSun, FiMoon, FiSearch, FiMail } from 'react-icons/fi';
import { FaHome, FaYoutube } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';
import { HiMenu, HiX } from 'react-icons/hi';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className={`fixed w-full top-0 z-50 bg-gray-900 text-white shadow-md`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20 py-4">
          {/* Left side - Logo */}
          <div className="flex-shrink-0">
            <h1 className={`text-3xl font-extrabold tracking-wider ${
              darkMode ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500' 
              : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'
            } hover:scale-105 transition-transform duration-200`}>
              ADITYA1000
            </h1>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-700"
          >
            {isMobileMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
          </button>

          {/* Right side - Navigation Items */}
          <div className="hidden md:flex items-center gap-6 ">
            {/* Navigation Links */}
          
            <Link to="/" className="hover:text-blue-500 flex items-center gap-1"> 
            <FaHome className='text-xl'/>Home</Link>
            <Link to="/youtube" className="flex items-center gap-1 hover:text-red-500">
              <FaYoutube className="text-xl" />
              YouTube
            </Link>

            {/* Categories Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-1 hover:text-blue-500"
              >
                About Me
                <IoMdArrowDropdown />
              </button>
              
              {isDropdownOpen && (
                <div className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                } ring-1 ring-black ring-opacity-5`}>
                  <div className="py-1 bg-gray-900">
                    <a href="/category1" className="block px-4 py-2 hover:bg-blue-500 hover:text-white">Portfolio</a>
                    <a href="/category2" className="block px-4 py-2 hover:bg-blue-500 hover:text-white">My Shop</a>
                    <a href="/category3" className="block px-4 py-2 hover:bg-blue-500 hover:text-white">My Projects</a>
                  </div>
                </div>
              )}
            </div>
            <Link to="/Contact" className="hover:text-blue-500 flex items-center gap-1"> 
            <FiMail className='text-xl'/>Talk to me</Link>
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className={`pl-8 pr-4 py-1 rounded-lg ${
                  darkMode ? 'bg-gray-800' : 'bg-gray-100'
                } focus:outline-none`}
              />
              <FiSearch className="absolute left-2 top-2" />
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {darkMode ? <FiSun className="text-xl" /> : <FiMoon className="text-xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 space-y-4">
            <div className="px-2">
              <input
                type="text"
                placeholder="Search..."
                className={`w-full pl-8 pr-4 py-1 rounded-lg ${
                  darkMode ? 'bg-gray-800' : 'bg-gray-100'
                } focus:outline-none`}
              />
              <FiSearch className="absolute left-6 top-[4.5rem]" />
            </div>
            
            <div className="flex flex-col space-y-2 px-2">
              <Link to="/" className="hover:text-blue-500 py-2">Home</Link>
              
              <Link to="/youtube" className="flex items-center gap-1 hover:text-red-500 py-2">
                <FaYoutube className="text-xl" />
                YouTube
              </Link>
              
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-1 hover:text-blue-500 py-2"
              >
                Categories
                <IoMdArrowDropdown />
              </button>
              
              {isDropdownOpen && (
                <div className="pl-4 space-y-2">
                  <a href="/category1" className="block py-2 hover:text-blue-500">Category 1</a>
                  <a href="/category2" className="block py-2 hover:text-blue-500">Category 2</a>
                  <a href="/category3" className="block py-2 hover:text-blue-500">Category 3</a>
                </div>
              )}
              <a href="/contact" className="hover:text-blue-500 py-2">Contact Us</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired
};

export default Navbar;
