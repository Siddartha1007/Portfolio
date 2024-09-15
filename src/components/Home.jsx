import React, { useState, useEffect } from 'react';
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

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
    }, 3000); // Changes text every 3 seconds
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center space-y-6 py-10 lg:py-20">
      <div className="w-full lg:w-3/4 xl:w-1/2 px-4">
        <motion.h1
          variants={container(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="pb-12 text-6xl font-thin tracking-tight lg:mt-16 "
        >
          Siddartha Goruganti
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

        <motion.a
          variants={container(1.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          href="#projects"
          className="group inline-block mt-8 px-6 py-3 my-2 text-lg font-semibold text-gray-100 bg-gradient-to-r from-gray-800 to-gray-900 rounded-md shadow-lg hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-800 transition-transform duration-300 ease-in-out hover:scale-105"
        >
          Discover My Work
        </motion.a>
      </div>
    </div>
  );
};

export default Home;
