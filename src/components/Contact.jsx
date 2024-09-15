import React from 'react';
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 w-full lg:w-3/4 xl:w-3/4 px-4">
      
      <motion.h1
        className="my-10 text-center text-4xl"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        Get in Touch
      </motion.h1>

      <motion.div
        className="flex justify-center items-center"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <form
          action="https://getform.io/f/bwngokga"
          method="POST"
          className="flex flex-col w-full md:w-1/2"
        >
          <motion.input
            type="text"
            name="name"
            placeholder="Enter your Name"
            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <motion.input
            type="text"
            name="email"
            placeholder="Enter your Email"
            className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
          <motion.textarea
            name="message"
            placeholder="Enter your Message"
            rows="10"
            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          ></motion.textarea>
          <motion.button
            className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            whileHover={{ scale: 1.1 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Let's talk
          </motion.button>
        </form>
      </motion.div>

      <motion.div
        className="text-center tracking-tighter"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="#" className="border-b">{CONTACT.email}</a>
      </motion.div>
    </div>
  );
};

export default Contact;
