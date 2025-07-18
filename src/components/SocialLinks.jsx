import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'


const SocialLinks = () => {

    const links = [
        {
            id:1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/siddartha-goruganti-b7a13b171/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/Siddartha1007',
            style: 'rounded-tr-md'
        },
        {
            id:3 ,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:sgoruga@ncsu.edu',
        },
        {
            id:4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            // href: '/Siddartha_resume.pdf',
            // href: 'https://raw.githubusercontent.com/Siddartha1007/Portfolio/gh-pages/Siddartha_resume.pdf',
            href: 'https://drive.google.com/file/d/12ec67PB94x4G1x08GQs3WUl6mj1e6Yn4/view?usp=sharing',
            style: 'rounded-br-md',
            download: true
        }
    ]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>

            {links.map(({id, child, href, style, download}) => (
                <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500' + ' ' + style}>
                    <a 
                        href={href} 
                        className='flex justify-between items-center w-full text-white' 
                        download={download} 
                        target='_blank' 
                        rel="noreferrer"
                    >
                        {child}
                    </a>
                </li>
            ))}

            
        </ul>
    </div>
  )
}

export default SocialLinks