import React, { useState, useEffect } from 'react';
import { Calendar, GitBranch, Star, GitCommit, ExternalLink, Loader } from 'lucide-react';

// TypeScript interfaces
interface ContributionDay {
  date: string;
  contributions: number;
  level: number;
}

interface UserStats {
  repositories: number;
  stars: number;
  followers: number;
  following: number;
}

interface StatItem {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const GitHubCalendar: React.FC = () => {
  const [contributionsData, setContributionsData] = useState<ContributionDay[] | null>(null);
  const [userStats, setUserStats] = useState<UserStats | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  const username: string = 'consoledotaman';
  const token: string | undefined = process.env.REACT_APP_GITHUB_TOKEN;

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch user stats from GitHub API
        const userResponse = await fetch(`https://api.github.com/users/${username}`, {
          headers: token ? { 'Authorization': `token ${token}` } : {}
        });
        
        if (!userResponse.ok) throw new Error('Failed to fetch user data');
        const userData = await userResponse.json();
        
        // Fetch repositories
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
          headers: token ? { 'Authorization': `token ${token}` } : {}
        });
        
        if (!reposResponse.ok) throw new Error('Failed to fetch repositories');
        const reposData = await reposResponse.json();
        
        const totalStars = reposData.reduce((sum, repo) => sum + repo.stargazers_count, 0);
        
        setUserStats({
          repositories: userData.public_repos,
          stars: totalStars,
          followers: userData.followers,
          following: userData.following
        });
        
        // Fetch real contribution data using GraphQL
        if (token) {
          await fetchContributionData();
        } else {
          // Fallback to mock data if no token
          const mockContributions = generateMockContributionData();
          setContributionsData(mockContributions);
        }
        
      } catch (err) {
        console.error('GitHub API Error:', err);
        setError(err.message);
        // Fallback to mock data on error
        const mockContributions = generateMockContributionData();
        setContributionsData(mockContributions);
        setUserStats({
          repositories: 25,
          stars: 50,
          followers: 10,
          following: 20
        });
      } finally {
        setLoading(false);
      }
    };

    const fetchContributionData = async () => {
      const query = `
        query($username: String!) {
          user(login: $username) {
            contributionsCollection {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    contributionCount
                    date
                    contributionLevel
                  }
                }
              }
            }
          }
        }
      `;

      try {
        const response = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            'Authorization': `bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query,
            variables: { username }
          })
        });

        if (!response.ok) throw new Error('Failed to fetch contribution data');
        
        const data = await response.json();
        
        if (data.errors) {
          throw new Error(data.errors[0].message);
        }

        const weeks = data.data.user.contributionsCollection.contributionCalendar.weeks;
        const contributionDays = weeks.flatMap(week => week.contributionDays);
        
        // Convert GitHub's contribution levels to our color scheme
        const processedData = contributionDays.map(day => ({
          date: day.date,
          contributions: day.contributionCount,
          level: convertContributionLevel(day.contributionLevel)
        }));

        setContributionsData(processedData);
        
      } catch (err) {
        console.error('GraphQL Error:', err);
        // Fallback to mock data
        const mockContributions = generateMockContributionData();
        setContributionsData(mockContributions);
      }
    };

    fetchGitHubData();
  }, [token]);

  const convertContributionLevel = (githubLevel: string): number => {
    // GitHub uses NONE, FIRST_QUARTILE, SECOND_QUARTILE, THIRD_QUARTILE, FOURTH_QUARTILE
    switch (githubLevel) {
      case 'NONE': return 0;
      case 'FIRST_QUARTILE': return 1;
      case 'SECOND_QUARTILE': return 2;
      case 'THIRD_QUARTILE': return 3;
      case 'FOURTH_QUARTILE': return 4;
      default: return 0;
    }
  };

  const generateMockContributionData = (): ContributionDay[] => {
    const days = [];
    const today = new Date();
    const startDate = new Date(today.getFullYear(), 0, 1);
    
    for (let i = 0; i < 365; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      
      // Create more realistic contribution patterns
      const dayOfWeek = date.getDay();
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
      const baseActivity = isWeekend ? 0.3 : 0.7;
      
      const activity = Math.random() * baseActivity;
      let level = 0;
      let contributions = 0;
      
      if (activity > 0.6) {
        level = 4;
        contributions = Math.floor(Math.random() * 15) + 10;
      } else if (activity > 0.45) {
        level = 3;
        contributions = Math.floor(Math.random() * 8) + 5;
      } else if (activity > 0.3) {
        level = 2;
        contributions = Math.floor(Math.random() * 4) + 2;
      } else if (activity > 0.15) {
        level = 1;
        contributions = 1;
      }
      
      days.push({
        date: date.toISOString().split('T')[0],
        level,
        contributions
      });
    }
    return days;
  };

  const getColorClass = (level: number): string => {
    switch (level) {
      case 0: return 'bg-slate-800 border-slate-700';
      case 1: return 'bg-green-900 border-green-800';
      case 2: return 'bg-green-700 border-green-600';
      case 3: return 'bg-green-500 border-green-400';
      case 4: return 'bg-green-400 border-green-300';
      default: return 'bg-slate-800 border-slate-700';
    }
  };

  const formatDate = (dateStr: string): string => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const calculateLongestStreak = (contributionsData: Array<{date: string, contributions: number, level: number}> | null): number => {
    if (!contributionsData) return 0;
    
    let longestStreak = 0;
    let currentStreak = 0;
    
    contributionsData.forEach(day => {
      if (day.contributions > 0) {
        currentStreak++;
        longestStreak = Math.max(longestStreak, currentStreak);
      } else {
        currentStreak = 0;
      }
    });
    
    return longestStreak;
  };

  if (loading) {
    return (
      <section id="github" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <Loader className="w-8 h-8 animate-spin mx-auto text-purple-400" />
          <p className="text-gray-400 mt-4">Loading GitHub data...</p>
        </div>
      </section>
    );
  }

  const totalContributions = contributionsData?.reduce((sum, day) => sum + day.contributions, 0) || 0;
  const longestStreak = calculateLongestStreak(contributionsData);

  const stats: StatItem[] = [
    { icon: <GitCommit className="w-5 h-5" />, label: "Total Contributions", value: totalContributions.toString() },
    { icon: <GitBranch className="w-5 h-5" />, label: "Repositories", value: userStats?.repositories.toString() || "0" },
    { icon: <Star className="w-5 h-5" />, label: "Stars Earned", value: userStats?.stars.toString() || "0" },
    { icon: <Calendar className="w-5 h-5" />, label: "Longest Streak", value: `${longestStreak} days` },
  ];

  return (
    <section id="github" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          GitHub <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Activity</span>
        </h2>
        <p className="text-center text-gray-400 mb-12">
          My contributions and open source journey
          {!token && <span className="block text-sm text-yellow-400 mt-2">Using demo data - add GitHub token for real data</span>}
        </p>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
          
          <div className="overflow-x-auto pb-4">
            <div className="min-w-full">
              <div className="grid grid-cols-53 gap-1">
                {contributionsData?.map((day, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-sm border ${getColorClass(day.level)} hover:ring-2 hover:ring-purple-400 transition-all duration-200 cursor-pointer relative group`}
                  >
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10 pointer-events-none">
                      {day.contributions} contributions on {formatDate(day.date)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-6 text-sm text-gray-400">
            <span>Less</span>
            <div className="flex space-x-1">
              {[0, 1, 2, 3, 4].map((level) => (
                <div key={level} className={`w-3 h-3 rounded-sm border ${getColorClass(level)}`}></div>
              ))}
            </div>
            <span>More</span>
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:scale-105 transition-transform duration-200"
          >
            <span>View on GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GitHubCalendar;