import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/kevinRushLogo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "Home" },
    { id: 2, link: "Education" },
    { id: 3, link: "Experience" },
    { id: 4, link: "Projects" },
    { id: 5, link: "Contact" },
  ];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId.toLowerCase());  // Ensure the ID matches case sensitivity
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setNav(false); // This will close the mobile navigation after clicking.
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-20 flex items-center justify-between px-4 shadow-lg z-50"> 
      {/* <div className="flex items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div> */}
       <div className="flex items-center">
        {/* Stylized Text Logo */}
        <h1 className="text-xl font-boldmx-2 w-10 cursor-pointer">SG</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li key={id} className="px-4 cursor-pointer capitalize font-bold text-gray-400 hover:text-gray-300 text-lg transition duration-200 hover:scale-105">
            <button onClick={() => scrollToSection(link.toLowerCase())}>
              {link}
            </button>
          </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer capitalize py-6 text-2xl font-bold text-gray-300 hover:text-white transition duration-200">
              <button onClick={() => scrollToSection(link.toLowerCase())}>
                {link}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
