import React from 'react';
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  const imageStyles = {
    width: '100%', 
    height: '500px', 
    objectFit: 'cover'
  };

  return (
    <div className='px-4 py-8'>
        <motion.h1 
            className='my-20 text-center text-4xl text-white'
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y:-100}}
            transition={{duration:0.5}}
        >
            Projects
        </motion.h1>
        
        <div className='max-w-5xl mx-auto grid md:grid-cols-2 gap-20 px-2'>
            {PROJECTS.map((project, index) => (
                <motion.div 
                    key={index} 
                    className="rounded-lg bg-gray-800 shadow-lg overflow-hidden"
                    whileInView={{opacity:1, y:0}}
                    initial={{opacity:0, y:100}}
                    transition={{duration:0.8, delay: index * 0.3}} 
                >
                    <motion.div 
                        className="img overflow-hidden rounded-t-lg"
                        whileHover={{ scale: 1.05 }} 
                    >
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            style={imageStyles}
                        />
                    </motion.div>
                    
                    <motion.div 
                        className="p-4"
                        whileInView={{opacity:1, x:0}}
                        initial={{opacity:0, x:-100}}
                        transition={{duration:0.8}}
                    >
                        <h3 className="text-lg mb-4 font-bold text-white">{project.title}</h3>
                        
                        <div className='mb-4'>
                            <ul className="list-disc list-outside space-y-2 ml-6 text-gray-300">
                                {project.description.map((text, idx) => (
                                    <li key={idx} className="text-md leading-relaxed">{text}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Technologies Section */}
                        <div className="flex flex-wrap mt-4 ml-5">
                            {project.technologies && project.technologies.map((tech, idx) => (
                                <span key={idx} className="mr-2 mb-2 rounded bg-gray-700 px-3 py-1 text-sm text-gray-300">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {project.code === 'Y' && (  
                            <a 
                              href={project.href} 
                              className="text-gray-400 hover:text-blue-500 px-4 py-2 text-sm underline flex items-center justify-center transition duration-300 ease-in-out transform hover:-translate-y-1 mt-4"
                            >
                                Read More
                            </a>
                        )}
                    </motion.div>
                </motion.div>
            ))}
        </div>
    </div>
  );
};

export default Projects;
