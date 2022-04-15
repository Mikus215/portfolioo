import React from 'react';
import WelcomeSection from './sections/WelcomeSection';
import AboutSection from './sections/AboutSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';
import './styles/app.scss'

function App() {
  return (
    <>
      <section id='home'>
        <WelcomeSection />
      </section>
      <section id='about'>
        <AboutSection />
      </section>
      <section id='projects'>
        <ProjectsSection />
      </section>
      <section id='contact'>
        <ContactSection />
      </section>
      <Footer />
    </>
  );
}

export default App;
