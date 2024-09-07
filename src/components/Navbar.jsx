
import {FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import logo from "../assets/kevinRushLogo.png"

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6"> 
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10"  src={logo} alt="logo" />
        </div >
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <FaLinkedin />
            <FaGithub/>
            <FaInstagram/>
            <FaSquareXTwitter/>
        </div>
    </nav>
  )
}

export default Navbar


// import React from 'react';
// import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
// import logo from '../assets/kevinRushLogo.png';  // Update this path to your actual logo image

// const Navbar = () => {
//   return (
//     <nav className="fixed top-0 left-0 h-full w-16 flex flex-col items-center justify-between bg-gray-800 text-white py-6">
//       <div className="mt-6 mb-4">
//         <img src={logo} alt="Logo" className="h-16 w-16 rounded-full" />
//       </div>
//       <div className="flex flex-col items-center gap-4 mb-auto">
//         <FaLinkedin className="text-2xl hover:text-blue-700" />
//         <FaGithub className="text-2xl hover:text-gray-300" />
//         <FaInstagram className="text-2xl hover:text-pink-600" />
//         <FaTwitter className="text-2xl hover:text-blue-400" />
//       </div>
//       <div className="mb-6">
//         <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//           Contact
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
