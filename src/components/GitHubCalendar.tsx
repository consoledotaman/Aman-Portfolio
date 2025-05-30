import React from 'react';
import { Calendar, GitBranch, Star, GitCommit, ExternalLink } from 'lucide-react';

const GitHubCalendar = () => {
  // This is a mock calendar - in a real implementation, you'd fetch data from GitHub API
  const generateCalendarData = () => {
    const days = [];
    const today = new Date();
    const startDate = new Date(today.getFullYear(), 0, 1);
    
    for (let i = 0; i < 365; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      
      const activity = Math.random();
      let level = 0;
      if (activity > 0.8) level = 4;
      else if (activity > 0.6) level = 3;
      else if (activity > 0.4) level = 2;
      else if (activity > 0.2) level = 1;
      
      days.push({
        date: date.toISOString().split('T')[0],
        level,
        contributions: Math.floor(activity * 10)
      });
    }
    return days;
  };

  const calendarData = generateCalendarData();
  const totalContributions = calendarData.reduce((sum, day) => sum + day.contributions, 0);

  const getColorClass = (level: number) => {
    switch (level) {
      case 0: return 'bg-slate-800';
      case 1: return 'bg-green-900';
      case 2: return 'bg-green-700';
      case 3: return 'bg-green-500';
      case 4: return 'bg-green-400';
      default: return 'bg-slate-800';
    }
  };

  const stats = [
    { icon: <GitCommit className="w-5 h-5" />, label: "Total Contributions", value: totalContributions.toString() },
    { icon: <GitBranch className="w-5 h-5" />, label: "Repositories", value: "45+" },
    { icon: <Star className="w-5 h-5" />, label: "Stars Earned", value: "120+" },
    { icon: <Calendar className="w-5 h-5" />, label: "Longest Streak", value: "23 days" },
  ];

  return (
    
    <section id="github" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          GitHub <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Activity</span>
        </h2>
        <p className="text-center text-gray-400 mb-12">
          My contributions and open source journey
        </p>
        {/*        
        <div className="grid lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center hover:scale-105 transition-transform duration-200">
              <div className="text-purple-400 flex justify-center mb-3">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
          <h3 className="text-xl font-semibold text-white mb-6 text-center">
            {new Date().getFullYear()} Contribution Graph
          </h3>
          

          <div className="overflow-x-auto">
  <div className="grid grid-cols-53 gap-1 min-w-full">
    {calendarData.map((day, index) => (
      <div
        key={index}
        className={`w-3 h-3 rounded-sm ${getColorClass(day.level)} hover:ring-2 hover:ring-purple-400 transition-all duration-200 cursor-pointer`}
        title={`${day.contributions} contributions on ${day.date}`}
      ></div>
    ))}
  </div>
</div>
          
          <div className="flex items-center justify-between mt-6 text-sm text-gray-400">
            <span>Less</span>
            <div className="flex space-x-1">
              {[0, 1, 2, 3, 4].map((level) => (
                <div key={level} className={`w-3 h-3 rounded-sm ${getColorClass(level)}`}></div>
              ))}
            </div>
            <span>More</span>
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="https://github.com/amanraj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:scale-105 transition-transform duration-200"
          >
            <span>View on GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
        */}
      </div>
      
    </section>
  );
};


export default GitHubCalendar;
