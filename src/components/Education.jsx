import React from 'react';
import { motion } from "framer-motion";

const Education = () => {
  const EDUCATIONS = [
    {
      id: 1,
      degree: "Master of Computer Science",
      school: "North Carolina State University",
      years: "2023 - 2025",
      details: [
        "Current subjects: Software Engineering Practices, Data Science, Object Oriented Development, Design and Analysis of Algorithms, Cloud Technologies, Privacy.",
        "I am currently maintaining a 4.0 GPA in my Master of Computer Science program at North Carolina State University."
      ]
    },
    {
      id: 2,
      degree: "Bachelor's of ENgineering in Computer Science",
      school: "Osmania University",
      years: "2018 - 2022",
      details: [
        "Core Subjects: Data Structures and Algorithms, Database Management Systems, Operating Systems, Web Technologies",
        "ML Workshop - Coordinated a 2 day AI & ML workshop facilitated by industry experts to enhance participant skills",
      ]
    }
  ];

  // Custom style for the radial gradient background
  const customBackgroundStyle = {
    backgroundImage: "radial-gradient(circle 500px at 50% 200px, #3e3e3e, transparent)"
  };

  return (
    <section id="education" className="py-12 text-gray-100">
      <div className="container mx-auto px-8 md:px-24 lg:px-32 ">
        <motion.h1 
          className="text-4xl text-center my-20"
          whileInView={{opacity:1, y:0}}
          initial={{opacity:0,y:-100}}
          transition={{duration:0.5}}
        >
          My Academic Journey
        </motion.h1>
        <motion.div
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x:-100}}
          transition={{duration:0.5}}
        >
          {EDUCATIONS.map((edu) => (
            <div key={edu.id} className="mb-8 p-8 mx-10  rounded-xl border-2 border-transparent hover:border-gray-300 shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-gray-600">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold">{edu.school}</h3>
                <span className="text-md text-gray-400">{edu.years}</span>
              </div>
              <h4 className="text-xl font-semibold mt-1 text-slate-400">{edu.degree} <span className="text-gray-300">{edu.gpa}</span></h4>
              <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                {edu.details.map((detail, idx) => (
                  <li key={idx} className="text-md">{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
       
      </div>
    </section>
  );


}

export default Education;
