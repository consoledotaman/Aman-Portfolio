
import React from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Web3 DApp Platform",
      description: "A decentralized application platform built with React.js and Web3 technologies for blockchain interactions.",
      tech: ["React.js", "Web3.js", "Solidity", "Node.js"],
      color: "from-purple-400 to-pink-400"
    },
    {
      title: "Modern E-commerce Solution",
      description: "Full-stack e-commerce platform with Next.js, featuring real-time updates and secure payment integration.",
      tech: ["Next.js", "MongoDB", "Stripe", "TypeScript"],
      color: "from-blue-400 to-purple-400"
    },
    {
      title: "Open Source Contribution",
      description: "Active contributor to various open source projects, focusing on JavaScript libraries and React components.",
      tech: ["JavaScript", "React", "Open Source", "Git"],
      color: "from-green-400 to-blue-400"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Whenever possible, I apply my passion for developing products with Node.js and Modern JavaScript Library and Frameworks.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105">
                <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <Code className="w-16 h-16 text-white/80" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-slate-700 text-xs text-gray-300 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <button className="flex items-center space-x-1 text-purple-400 hover:text-purple-300 transition-colors duration-200">
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </button>
                    <button className="flex items-center space-x-1 text-purple-400 hover:text-purple-300 transition-colors duration-200">
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Live Demo</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
