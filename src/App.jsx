import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import SocialLinks from './components/SocialLinks'
import Education from './components/Education'
import Skills from './components/Skills'

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased slection:bg-cyan-300 selection:text-cyan-900">
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="relative h-full w-full bg-slate-950"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div></div>
        {/* <div class="relative h-full w-full bg-black"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div><div class="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div></div> */}
        {/* <div class="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div> */}
      </div>


    <div className="snap-y snap-mandatory h-screen w-full overflow-y-scroll scroll-smooth">
        <Navbar />
        
        <section id="home" className="snap-start w-full min-h-screen flex items-center justify-center">
          <Home />
        </section>

        <SocialLinks />

        <section id="education" className="snap-start w-full min-h-screen flex items-center justify-center">
          <Education />
        </section>
        {/* <section id="skills" className="snap-start w-full min-h-screen flex items-center justify-center">
          <Skills />
        </section> */}

        <section id="experience" className="snap-start w-full min-h-screen flex items-center justify-center">
          <Experience />
        </section>

        <section id="projects" className="snap-start w-full min-h-screen flex items-center justify-center">
          <Projects />
        </section>

        <section id="contact" className="snap-start w-full min-h-screen flex items-center justify-center">
          <Contact />
        </section>
      </div>
    </div>
  )
}

export default App