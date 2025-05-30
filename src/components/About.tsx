
import React from 'react';
import { MapPin, GraduationCap, Briefcase, Heart } from 'lucide-react';

const About = () => {
  const activities = [
    { icon: "💪", name: "Body Building" },
    { icon: "🥙", name: "Eating Samosa" },
    { icon: "✈️", name: "Travelling" },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
          About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <div className="flex items-center mb-3">
                <MapPin className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-gray-300">Location</span>
              </div>
              <p className="text-white">Bhubaneswar, India</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <div className="flex items-center mb-3">
                <GraduationCap className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-gray-300">Education</span>
              </div>
              <p className="text-white">BTech in Computer Science (CSE)</p>
              <p className="text-gray-400">IIIT Bhubaneswar</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <div className="flex items-center mb-3">
                <Briefcase className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-gray-300">Current Role</span>
              </div>
              <p className="text-white">Website and Media Manager</p>
              <p className="text-gray-400">Mallard & Marmot Pvt Ltd</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-4">My Journey</h3>
              <p className="text-gray-300 leading-relaxed">
                Hi Everyone, I am Aman Raj from Bhubaneswar, India. I am pursuing my BTech in Computer Science (CSE) from IIIT Bhubaneswar.
                I am currently employed as a website and media manager at Mallard & Marmot Pvt Ltd.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <div className="flex items-center mb-4">
                <Heart className="w-5 h-5 text-pink-400 mr-2" />
                <h3 className="text-xl font-semibold text-white">What I Love</h3>
              </div>
              <p className="text-gray-300 mb-4">Apart from coding, some other activities that I love to do!</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {activities.map((activity, index) => (
                  <div key={index} className="bg-slate-700/50 rounded-lg p-3 text-center hover:scale-105 transition-transform duration-200">
                    <div className="text-2xl mb-1">{activity.icon}</div>
                    <div className="text-sm text-gray-300">{activity.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
