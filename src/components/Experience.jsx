import React from 'react'; // Ensure this is only imported once
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
    return (
      <div className="border-b border-neutral-900 pb-4">
          <motion.h1 
            className="my-20 text-center text-4xl font-bold text-gray-100"
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:0.5}}
          >
            Experience
          </motion.h1>
          <div className="container mx-auto px-8 md:px-24 lg:px-32">
              {EXPERIENCES.map((experience, index) => (
                  <div key={index} className="mb-8 p-8 mx-10 flex flex-wrap items-start rounded-xl border-2 border-transparent hover:border-gray-300 shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-gray-600">
                      
                      {/* Left Side: Company name, role, and date */}
                    <motion.div 
                        className="w-full lg:w-1/3 pr-8 mb-4 lg:mb-0"
                        whileInView={{opacity:1, x:0}}
                        initial={{opacity:0,x:-100}}
                        transition={{duration:1}}
                    >
                      <h6 className="text-2xl font-bold text-white">{experience.company}</h6>
                      <p className="text-xl font-semibold text-slate-400">{experience.role}</p>
                      <p className="text-sm text-gray-400">{experience.year}</p>
                    </motion.div>
                      
                      {/* Right Side: Description and technologies */}
                      <motion.div 
                        className="w-full lg:w-2/3"
                        whileInView={{opacity:1, x:0}}
                        initial={{opacity:0,x:100}}
                        transition={{duration:1}}
                      >
                          <div className='mb-4'>
                              <ul className="list-disc list-outside space-y-2 ml-6 text-gray-300">
                                  {experience.description.map((text, idx) => (
                                      <li key={idx} className="text-md leading-relaxed">{text}</li>
                                  ))}
                              </ul>
                          </div>
                          <div className="flex flex-wrap mt-4 ml-5">
                              {experience.technologies.map((tech, idx) => (
                                  <span key={idx} className="mr-2 mb-2 rounded bg-gray-700 px-3 py-1 text-sm text-gray-300">{tech}</span>
                              ))}
                          </div>
                      </motion.div>
                  </div>
              ))}
          </div>
      </div>
    )
}

export default Experience;
