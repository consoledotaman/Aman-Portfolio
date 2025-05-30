
import React from 'react';
import { Code2, Globe, Database, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Programming Languages",
      skills: ["C++", "JavaScript", "TypeScript", "Python"],
      color: "from-blue-400 to-purple-400"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Technologies",
      skills: ["React.js", "Next.js", "Node.js", "HTML/CSS"],
      color: "from-green-400 to-blue-400"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend & Database",
      skills: ["Express.js", "MongoDB", "PostgreSQL", "REST APIs"],
      color: "from-purple-400 to-pink-400"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Blockchain & Others",
      skills: ["Blockchain", "Web3", "Git", "Docker"],
      color: "from-orange-400 to-red-400"
    }
  ];

  const interests = [
    "Building new Web Technologies and Products",
    "Blockchain and Web3 Development",
    "Modern JavaScript Frameworks",
    "Open Source Contributions"
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          Skills & <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Expertise</span>
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          I am fluent in classics like C++, Javascript and passionate about developing products with modern technologies.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="group">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} mb-4`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-gray-300 text-sm">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Areas of Interest</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {interests.map((interest, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                <span className="text-gray-300">{interest}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
