
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Web Developer & Open Source Contributor";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Aman Raj
            </span>
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 mb-6 h-8">
            {displayText}
            <span className="animate-pulse">|</span>
          </div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
            <br />
            <span className="italic text-purple-300">
              "Just out here building cool stuff that actually matters."
            </span>
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/amanraj"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 rounded-full hover:bg-purple-600 transition-all duration-300 hover:scale-110"
          >
            <Github className="w-6 h-6 text-white" />
          </a>
          <a
            href="https://linkedin.com/in/amanraj"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="w-6 h-6 text-white" />
          </a>
          <a
            href="mailto:aman@example.com"
            className="p-3 bg-slate-800 rounded-full hover:bg-green-600 transition-all duration-300 hover:scale-110"
          >
            <Mail className="w-6 h-6 text-white" />
          </a>
        </div>

        <button
          onClick={() => scrollToSection('#about')}
          className="animate-bounce text-gray-400 hover:text-white transition-colors duration-300"
        >
          <ArrowDown className="w-8 h-8 mx-auto" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
