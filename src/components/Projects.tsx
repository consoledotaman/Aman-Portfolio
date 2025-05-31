
import React from 'react';
import { ExternalLink, Github} from 'lucide-react';

const Projects = () => {
  const projects = [
  {
    title: "Event & Media Production Company Website",
    description: "Developed a full-fledged corporate website showcasing services, projects, and digital capabilities of a regional creative agency.",
    tech: ["Html", "CSS", "Javascript", "Github"],
    color: "from-purple-400 to-pink-400",
    codeLink: "/",
    liveLink: "https://mallardmarmot.vercel.app",
    previewImage: "/mallardmarmot.png"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with React, showcasing my skills and projects with a clean, responsive design using Tailwind CSS, TypeScript, and Three.js.",
    tech: ["React", "Tailwind CSS", "TypeScript", "Three.js"],
    color: "from-green-400 to-blue-400",
    codeLink: "https://github.com/consoledotaman/Aman-Portfolio",
    liveLink: "https://amannraj.vercel.app",
    previewImage: "/portfolio.png"
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
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 " >
                <div className="h-48 bg-black/20 relative overflow-hidden">
                  <img
                    src={project.previewImage}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
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
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-purple-400 hover:text-purple-300 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-purple-400 hover:text-purple-300 transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Live Demo</span>
                    </a>
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
