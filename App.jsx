import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  ChevronRight, 
  BarChart3, 
  PieChart, 
  Table as TableIcon, 
  Database,
  Globe, 
  Layers,
  MapPin,
  TrendingUp,
  FileSpreadsheet,
  ChevronDown
} from 'lucide-react';
import { motion } from 'framer-motion';

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Dashboards', href: '#projects' },
    { name: 'Tools', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tighter"
        >
          ROONEY.DATA
        </motion.div>
        
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white px-5 py-2 rounded-full text-xs font-bold shadow-[0_0_15px_rgba(37,99,235,0.3)]"
        >
          VIEW DASHBOARDS
        </motion.button>
      </div>
    </nav>
  );
};

const ActivityLog = () => {
  const [selectedYear, setSelectedYear] = useState(2026);
  
  // Simulated contribution data
  // Using a 2D array approach to mimic the columns of weeks
  const weeks = Array.from({ length: 53 }, (_, weekIdx) => 
    Array.from({ length: 7 }, (_, dayIdx) => {
      // Logic to place specific green dots for Jan/Feb/Mar as seen in user image
      let level = 0;
      if (weekIdx === 1 && dayIdx === 3) level = 3;
      if (weekIdx === 1 && dayIdx === 4) level = 3;
      if (weekIdx === 3 && dayIdx === 4) level = 4;
      if (weekIdx === 6 && dayIdx === 1) level = 4;
      if (weekIdx === 6 && dayIdx === 2) level = 4;
      return level;
    })
  );

  return (
    <div className="mt-12 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-2 px-2">
        <h3 className="text-lg text-zinc-200">10 contributions in {selectedYear}</h3>
        <button className="flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-300 transition-colors">
          Contribution settings <ChevronDown size={14} />
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        {/* Main Graph Box */}
        <div className="flex-grow bg-[#0d1117] border border-zinc-800 rounded-md p-4 sm:p-6 overflow-x-auto">
          <div className="min-w-[700px]">
            {/* Month Labels */}
            <div className="flex ml-8 mb-2 text-[10px] text-zinc-500 font-sans">
              <span className="w-[8%]">Jan</span>
              <span className="w-[8%]">Feb</span>
              <span className="w-[8%]">Mar</span>
              <span className="w-[8%]">Apr</span>
              <span className="w-[8%]">May</span>
              <span className="w-[8%]">Jun</span>
              <span className="w-[8%]">Jul</span>
              <span className="w-[8%]">Aug</span>
              <span className="w-[8%]">Sep</span>
              <span className="w-[8%]">Oct</span>
              <span className="w-[8%]">Nov</span>
              <span className="w-[8%]">Dec</span>
            </div>

            <div className="flex gap-2">
              {/* Day Labels */}
              <div className="flex flex-col justify-between text-[10px] text-zinc-500 py-1 h-[100px]">
                <span className="h-3"></span>
                <span className="h-3">Mon</span>
                <span className="h-3"></span>
                <span className="h-3">Wed</span>
                <span className="h-3"></span>
                <span className="h-3">Fri</span>
                <span className="h-3"></span>
              </div>

              {/* Grid Squares */}
              <div className="flex gap-1">
                {weeks.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-1">
                    {week.map((level, dIdx) => (
                      <div 
                        key={dIdx} 
                        className={`w-[11px] h-[11px] rounded-[2px] ${
                          level === 0 ? 'bg-[#161b22]' : 
                          level === 3 ? 'bg-[#26a641]' : 
                          level === 4 ? 'bg-[#39d353]' : ''
                        }`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center mt-4 px-2">
              <span className="text-[11px] text-zinc-500 hover:text-blue-400 cursor-pointer">
                Learn how we count contributions
              </span>
              <div className="flex items-center gap-1 text-[11px] text-zinc-500">
                <span>Less</span>
                <div className="w-[11px] h-[11px] rounded-[2px] bg-[#161b22]" />
                <div className="w-[11px] h-[11px] rounded-[2px] bg-[#0e4429]" />
                <div className="w-[11px] h-[11px] rounded-[2px] bg-[#006d32]" />
                <div className="w-[11px] h-[11px] rounded-[2px] bg-[#26a641]" />
                <div className="w-[11px] h-[11px] rounded-[2px] bg-[#39d353]" />
                <span>More</span>
              </div>
            </div>
          </div>
        </div>

        {/* Year Selectors */}
        <div className="flex flex-row lg:flex-col gap-1">
          {[2026, 2025, 2024].map(year => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-4 py-2 text-sm rounded-md transition-all text-left min-w-[100px] ${
                selectedYear === year 
                ? 'bg-[#21262d] text-white border-l-2 border-blue-500 bg-blue-600/20' 
                : 'text-zinc-500 hover:bg-[#161b22]'
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ number, category, title, description, tags }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group relative bg-zinc-900/30 border border-zinc-800 hover:border-blue-500/50 rounded-3xl p-8 transition-all duration-500 overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[80px] group-hover:bg-blue-500/10 transition-colors" />
    <div className="flex justify-between items-start mb-6 relative z-10">
      <span className="text-zinc-600 font-mono text-sm">{number} / {category}</span>
      <ExternalLink size={20} className="text-zinc-600 group-hover:text-blue-400 transition-colors" />
    </div>
    
    <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-blue-400 transition-colors relative z-10">
      {title}
    </h3>
    
    <p className="text-zinc-400 mb-8 leading-relaxed max-w-xl relative z-10">
      {description}
    </p>
    
    <div className="flex flex-wrap gap-2 relative z-10">
      {tags.map(tag => (
        <span key={tag} className="text-[10px] uppercase tracking-widest px-3 py-1 bg-zinc-800/80 border border-zinc-700/50 text-zinc-300 rounded-lg">
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

const SkillSection = ({ title, skills, icon: Icon }) => (
  <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl h-full hover:bg-zinc-900 transition-colors group">
    <div className="flex items-center gap-3 mb-6 text-blue-400 group-hover:scale-110 transition-transform origin-left">
      <Icon size={24} />
      <h3 className="font-bold uppercase tracking-widest text-sm text-white">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map(skill => (
        <span key={skill} className="px-4 py-2 bg-zinc-800/50 border border-zinc-700/50 rounded-xl text-sm font-medium text-zinc-300">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section id="about" className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-end justify-between">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-blue-400 font-mono text-sm mb-4 uppercase tracking-[0.3em]">Power BI Professional | Data Analyst</p>
                <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.9] mb-8">
                  DECODING<br />INSIGHTS.
                </h1>
                <p className="text-xl text-zinc-400 leading-relaxed max-w-xl">
                  I'm Rooney Odhiambo. I transform raw data into interactive visual stories that drive business decisions. Expert in Power BI, advanced Excel, and statistical analysis.
                </p>
                <div className="mt-10 flex gap-4">
                  <button className="bg-white text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-zinc-200 transition-colors">
                    EXPLORE DASHBOARDS <ChevronRight size={18} />
                  </button>
                  <button className="border border-zinc-800 px-8 py-4 rounded-full font-bold hover:bg-zinc-900 transition-colors">
                    ANALYSIS REPORT
                  </button>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, rotate: -10 }}
              animate={{ opacity: 1, rotate: 0 }}
              className="hidden lg:block w-56 h-56 rounded-3xl border border-zinc-800 bg-zinc-900/20 flex flex-col items-center justify-center p-6 text-center"
            >
              <TrendingUp className="text-blue-500 mb-4" size={40} />
              <p className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] leading-relaxed">
                Strategic Data<br />Visualization &<br />Optimization
              </p>
            </motion.div>
          </div>

          <ActivityLog />
        </section>

        {/* Selected Work */}
        <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-xs uppercase tracking-[0.4em] text-zinc-500 mb-4">Case Studies</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Data Projects</h3>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <ProjectCard 
              number="01"
              category="POWER BI"
              title="Global Sales Performance Tracker"
              description="A multi-page Power BI dashboard analyzing revenue trends across 5 continents. Integrated DAX for complex measures like Year-over-Year growth and regional variance analysis."
              tags={["Power BI", "DAX", "SQL Server", "Power Query"]}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProjectCard 
                number="02"
                category="EXCEL MODELING"
                title="Financial Risk Forecasting"
                description="Built an automated Excel model using Power Pivot and VBA to predict quarterly cash flow and identify potential budget bottlenecks."
                tags={["Microsoft Excel", "VBA", "Power Pivot", "Forecasting"]}
              />
              <ProjectCard 
                number="03"
                category="DATA ANALYSIS"
                title="Customer Sentiment Engine"
                description="Analysis of 50k+ user reviews to identify product improvement areas using Python-based exploratory data analysis."
                tags={["Python", "Pandas", "Matplotlib", "Statistics"]}
              />
            </div>
          </div>
        </section>

        {/* Expertise / Skills */}
        <section id="skills" className="py-20 px-6 max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-xs uppercase tracking-[0.4em] text-zinc-500 mb-4">Competencies</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Skill Set</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillSection 
              title="Visualization"
              skills={["Power BI", "Tableau", "Chart.js", "Looker Studio"]}
              icon={BarChart3}
            />
            <SkillSection 
              title="Advanced Tools"
              skills={["MS Excel", "Power Query", "Power Pivot", "DAX"]}
              icon={FileSpreadsheet}
            />
            <SkillSection 
              title="Analysis"
              skills={["SQL", "Python", "R Language", "Statistics"]}
              icon={Database}
            />
            <SkillSection 
              title="Data Mgmt"
              skills={["ETL Processes", "Data Cleaning", "Warehousing", "BigQuery"]}
              icon={Layers}
            />
          </div>
        </section>

        {/* Education Timeline */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-xs uppercase tracking-[0.4em] text-zinc-500 mb-4">Academic</h2>
              <h3 className="text-4xl font-bold">Education</h3>
            </div>
            <div className="md:col-span-2 space-y-12">
              <div className="flex gap-8 border-l border-zinc-800 pl-8 relative">
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6.5px] top-2" />
                <div>
                  <p className="text-zinc-500 font-mono text-sm mb-1 uppercase tracking-widest">2023 - 2027 (Ongoing)</p>
                  <h4 className="text-xl font-bold">B.Sc Computer Science</h4>
                  <p className="text-zinc-400">Technical University of Mombasa</p>
                  <div className="flex gap-4 mt-2">
                    <span className="text-blue-400 text-sm font-bold tracking-tight">Focus: Data Structures & Analytics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-40 px-6 max-w-7xl mx-auto border-t border-zinc-900">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-7xl md:text-9xl font-black tracking-tighter mb-8 text-zinc-200"
            >
              HIRE<br />ANALYST
            </motion.h2>
            <p className="text-xl text-zinc-500">Available for freelance data projects and internships.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-zinc-900/30 p-12 rounded-[3rem] border border-zinc-800 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30" />
            <div className="space-y-8">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2">Connect via Email</p>
                <a href="mailto:hello@rooneyodhiambo.com" className="text-2xl font-bold hover:text-blue-400 transition-colors">
                  hello@rooneyodhiambo.com
                </a>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2">Location</p>
                <p className="text-2xl font-bold text-zinc-300">
                  Mombasa, Kenya
                </p>
              </div>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-2xl border border-zinc-700 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all">
                  <Github size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-2xl border border-zinc-700 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            
            <div className="flex flex-col justify-end items-end text-right">
              <div className="flex items-center gap-2 text-zinc-500 mb-1">
                <MapPin size={16} />
                <span className="text-sm font-medium tracking-tight">Remote Ready</span>
              </div>
              <p className="text-zinc-600 text-[10px] uppercase tracking-widest">© Rooney Odhiambo — 2026</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="pb-12 text-center text-[10px] uppercase tracking-[0.5em] text-zinc-800">
        Data-Driven Excellence • 2023-2027
      </footer>
    </div>
  );
}