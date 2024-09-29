import React, { useState, useEffect } from 'react';
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import profilePic from "../assets/contact-img.svg";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  const [text, setText] = useState("Full Stack Developer");
  useEffect(() => {
    const intervalId = setInterval(() => {
      setText((prevText) =>
        prevText === "Full Stack Developer" ? "Student @NC State" : "Full Stack Developer"
      );
    }, 1000); // Changes text every 3 seconds
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center px-6  py-10 ">
      {/* Flex container for both sections */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full lg:w-3/4 xl:w-3/3 space-y-8 lg:space-y-0">
        {/* Left section */}
        <div className="w-full lg:w-[60%] px-4">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="pb-12 text-6xl font-thin tracking-tight lg:mt-16"
          >
            I'm Siddartha Goruganti
          </motion.h1>

          <motion.span
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
          >
             {text}
          </motion.span>

          <motion.p
            variants={container(1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-6 text-lg lg:text-xl font-light tracking-tighter text-gray-300"
          >
            {HERO_CONTENT}
          </motion.p>

          {/* <motion.a
            variants={container(1.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            href="#projects"
            className="group inline-block mt-8 px-6 py-3 my-2 text-lg font-semibold text-gray-100 bg-gradient-to-r from-gray-800 to-gray-900 rounded-md shadow-lg hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-800 transition-transform duration-300 ease-in-out hover:scale-105"
          >
            Discover My Work
          </motion.a> */}
        </div>

       

        <div className="w-full lg:w-[40%] px-2 lg:p-4">
          <div className=" flex justify-center ">
              <motion.img
                initial={{x:100, opacity:0}}
                animate={{x:0, opacity:1}}
                transition={{duration:1, delay:1.2}}
                src={profilePic}
                width={656}
                height={800}
                alt="Sid Profile Picture"
                className="w-full h-full object-cover"
              />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
