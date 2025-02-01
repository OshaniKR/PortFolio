import React from 'react';
import Header from '../components/Header'; // Ensure the Header component is imported
import About from './About';
import Skills from './Skills';
import Project from './Project';
import Contact from './Contact';


function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Add the Header component */}
      <Header />

      {/* Wrapper to apply consistent width and make it responsive */}
      <div className="flex-grow mx-auto px-4">
        <section
          id="about"
          className="w-full mb-8 flex justify-center items-center"
        >
          <About />
        </section>
        <section
          id="skills"
          className="w-full mb-8 flex justify-center items-center"
        >
          <Skills />
        </section>
        <section
          id="projects"
          className="w-full mb-8 flex justify-center items-center"
        >
          <Project />
        </section>
        <section
          id="contact"
          className="w-full mb-8 flex justify-center items-center"
        >
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default Home;
