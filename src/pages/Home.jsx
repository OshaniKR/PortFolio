import React from 'react';
import Header from '../components/Header'; // Ensure the Header component is imported
import About from './About';
import Skills from './Skills';
import Project from './Project';
import Contact from './Contact';

function Home() {
  return (
    <div>
      {/* Add the Header component */}
      <Header />

      {/* Wrapper to apply consistent width */}
      <div
        style={{
           // Limit the width for consistent alignment
          margin: '0 auto', // Center the content
           // Adjust this based on the header height
        }}
      >
        <section id="about" style={{ width: '100%' }}>
          <About />
        </section>
        <section id="skills" style={{ width: '100%' }}>
          <Skills />
        </section>
        <section id="projects" style={{ width: '100%' }}>
          <Project />
        </section>
        <section id="contact" style={{ width: '100%' }}>
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default Home;
