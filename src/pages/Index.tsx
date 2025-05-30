
import React from 'react';
import { SplineSceneBasic } from '../components/SplineSceneBasic';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import GitHubCalendar from '../components/GitHubCalendar';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import { SplashCursor } from '../components/ui/splash-cursor';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <SplashCursor />
      <Navigation />
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <SplineSceneBasic />
      </section>
      <About />
      <Skills />
      <Projects />
      <GitHubCalendar />
      <Contact />
    </div>
  );
};

export default Index;
