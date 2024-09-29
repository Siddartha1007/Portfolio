import React from 'react';
import StackIcon from 'tech-stack-icons';
import { motion } from "framer-motion";

const technologies = [
  { name: 'reactjs', color: 'text-cyan-400', duration: 2 },
  { name: 'nextjs', color: '', duration: 4 },
  { name: 'mongodb', color: 'text-green-500', duration: 2.5 },
  { name: 'nodejs', color: 'text-cyan-400', duration: 5 },
  { name: 'postgresql', color: 'text-cyan-400', duration: 3 },
];

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [0, -10],  // Adding the movement to the y-axis for a bouncing effect
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
});

const Skills = () => {
  return (
    <div className="border-b border-neutral-800 pb-16">
      <h1 className="my-12 text-center text-3xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {technologies.map(({ name, color, duration }, index) => (
          <motion.div 
            variants={iconVariants(duration)} // Pass the duration here
            initial="initial"
            animate="animate"
            key={index}
            className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4 text-center"
          >
            <StackIcon name={name} className={`text-5xl ${color}`} />
            <span className="mt-1 text-lg font-medium text-gray-300">{name.charAt(0).toUpperCase() + name.slice(1)}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
