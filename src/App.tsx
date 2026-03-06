import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Terminal, 
  Search, 
  Network, 
  Bug, 
  Monitor, 
  Skull, 
  Eye, 
  Users, 
  Zap, 
  Lock, 
  Globe, 
  Database, 
  Wifi, 
  Smartphone, 
  Cpu, 
  Cloud, 
  Key, 
  Server, 
  Ghost, 
  Trash2, 
  Activity,
  MapPin,
  ChevronRight,
  Menu,
  X,
  Github,
  Twitter,
  Linkedin
} from 'lucide-react';

interface Topic {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: 'Foundations' | 'Attacks' | 'Specialized' | 'Defensive';
}

const topics: Topic[] = [
  {
    id: 'foundations',
    title: 'Ethical Hacking Foundations',
    description: 'Master the core principles, methodologies, and legal frameworks of ethical hacking.',
    icon: <Shield className="w-6 h-6" />,
    category: 'Foundations'
  },
  {
    id: 'osint',
    title: 'Footprinting & Reconnaissance (OSINT)',
    description: 'Learn advanced information gathering techniques using open-source intelligence.',
    icon: <Search className="w-6 h-6" />,
    category: 'Foundations'
  },
  {
    id: 'scanning',
    title: 'Network Scanning & Enumeration',
    description: 'Discover live hosts, open ports, and services running on a target network.',
    icon: <Network className="w-6 h-6" />,
    category: 'Foundations'
  },
  {
    id: 'vulnerability',
    title: 'Vulnerability Analysis',
    description: 'Identify and prioritize security weaknesses in systems and applications.',
    icon: <Bug className="w-6 h-6" />,
    category: 'Foundations'
  },
  {
    id: 'system-hacking',
    title: 'System Hacking (Windows & Linux)',
    description: 'Exploit vulnerabilities to gain unauthorized access to operating systems.',
    icon: <Monitor className="w-6 h-6" />,
    category: 'Attacks'
  },
  {
    id: 'malware',
    title: 'Malware Threats',
    description: 'Analyze viruses, trojans, and RATs to understand how they infect and persist.',
    icon: <Skull className="w-6 h-6" />,
    category: 'Attacks'
  },
  {
    id: 'sniffing',
    title: 'Packet Sniffing & MitM Attacks',
    description: 'Intercept network traffic and perform Man-in-the-Middle attacks.',
    icon: <Eye className="w-6 h-6" />,
    category: 'Attacks'
  },
  {
    id: 'social-engineering',
    title: 'Social Engineering',
    description: 'Master the art of human manipulation through phishing and baiting.',
    icon: <Users className="w-6 h-6" />,
    category: 'Attacks'
  },
  {
    id: 'dos',
    title: 'Denial-of-Service (DoS/DDoS)',
    description: 'Understand and mitigate attacks designed to overwhelm system resources.',
    icon: <Zap className="w-6 h-6" />,
    category: 'Attacks'
  },
  {
    id: 'session-hijacking',
    title: 'Session Hijacking',
    description: 'Learn how to steal active session tokens to bypass authentication.',
    icon: <Lock className="w-6 h-6" />,
    category: 'Attacks'
  },
  {
    id: 'web-hacking',
    title: 'Web Server & Web App Hacking',
    description: 'Exploit vulnerabilities in web servers and complex web applications.',
    icon: <Globe className="w-6 h-6" />,
    category: 'Attacks'
  },
  {
    id: 'sqli',
    title: 'SQL Injection (SQLi)',
    description: 'Master the most critical database exploitation technique.',
    icon: <Database className="w-6 h-6" />,
    category: 'Attacks'
  },
  {
    id: 'wireless',
    title: 'Wireless (Wi-Fi) Hacking',
    description: 'Crack WEP, WPA, and WPA2/3 encryption protocols.',
    icon: <Wifi className="w-6 h-6" />,
    category: 'Specialized'
  },
  {
    id: 'mobile',
    title: 'Mobile Platform Hacking',
    description: 'Security analysis of Android and iOS mobile environments.',
    icon: <Smartphone className="w-6 h-6" />,
    category: 'Specialized'
  },
  {
    id: 'iot',
    title: 'IoT & OT Hacking',
    description: 'Explore vulnerabilities in smart devices and industrial control systems.',
    icon: <Cpu className="w-6 h-6" />,
    category: 'Specialized'
  },
  {
    id: 'cloud',
    title: 'Cloud Computing Security',
    description: 'Securing AWS, Azure, and GCP infrastructure and services.',
    icon: <Cloud className="w-6 h-6" />,
    category: 'Specialized'
  },
  {
    id: 'cryptography',
    title: 'Cryptography & Encryption',
    description: 'Understand encryption algorithms and how to crack weak implementations.',
    icon: <Key className="w-6 h-6" />,
    category: 'Foundations'
  },
  {
    id: 'active-directory',
    title: 'Active Directory Hacking',
    description: 'Advanced techniques for compromising enterprise Windows domains.',
    icon: <Server className="w-6 h-6" />,
    category: 'Specialized'
  },
  {
    id: 'dark-web',
    title: 'Dark Web Operations',
    description: 'Safe navigation and investigation techniques within the Tor network.',
    icon: <Ghost className="w-6 h-6" />,
    category: 'Specialized'
  },
  {
    id: 'post-exploitation',
    title: 'Post-Exploitation & Persistence',
    description: 'Maintaining access and moving laterally within a compromised network.',
    icon: <Terminal className="w-6 h-6" />,
    category: 'Attacks'
  },
  {
    id: 'anti-forensics',
    title: 'Anti-Forensics & Covering Tracks',
    description: 'Techniques for evading detection and removing digital evidence.',
    icon: <Trash2 className="w-6 h-6" />,
    category: 'Attacks'
  },
  {
    id: 'blue-team',
    title: 'Blue Team: Incident Response',
    description: 'Detecting, containing, and recovering from security breaches.',
    icon: <Activity className="w-6 h-6" />,
    category: 'Defensive'
  }
];

const categories = ['All', 'Foundations', 'Attacks', 'Specialized', 'Defensive'];

export default function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    module: topics[0].title
  });

  const handleEnrollSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*New Enrollment Request*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Module:* ${formData.module}`;
    const whatsappNumber = '1234567890'; // Demo number
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    setIsEnrollModalOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredTopics = activeCategory === 'All' 
    ? topics 
    : topics.filter(t => t.category === activeCategory);

  return (
    <div className="min-h-screen bg-cyber-black selection:bg-cyber-green selection:text-black">
      <div className="scanline" />
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-cyber-black/90 backdrop-blur-md border-b border-cyber-green/20 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-cyber-green flex items-center justify-center rounded-sm group-hover:rotate-90 transition-transform duration-500">
              <Terminal className="text-black w-6 h-6" />
            </div>
            <span className="font-mono text-xl font-bold tracking-tighter text-white">
              CYBER<span className="text-cyber-green">NINJA</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {['Curriculum', 'About', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="font-mono text-sm uppercase tracking-widest text-white/70 hover:text-cyber-green transition-colors">
                {item}
              </a>
            ))}
            <button 
              onClick={() => setIsEnrollModalOpen(true)}
              className="px-6 py-2 bg-transparent border border-cyber-green text-cyber-green font-mono text-sm uppercase tracking-widest hover:bg-cyber-green hover:text-black transition-all duration-300"
            >
              Enroll Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-cyber-black pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {['Curriculum', 'About', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsMenuOpen(false)}
                  className="font-mono text-2xl uppercase tracking-widest text-white border-b border-white/10 pb-4"
                >
                  {item}
                </a>
              ))}
              <button 
                onClick={() => {
                  setIsEnrollModalOpen(true);
                  setIsMenuOpen(false);
                }}
                className="w-full py-4 bg-cyber-green text-black font-mono text-lg uppercase tracking-widest font-bold"
              >
                Enroll Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden cyber-grid">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyber-green/10 border border-cyber-green/30 text-cyber-green text-xs font-mono uppercase tracking-widest mb-6">
              <span className="w-2 h-2 bg-cyber-green rounded-full animate-pulse" />
              System Status: Online
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-none glitch-text">
              BECOME THE <br />
              <span className="text-cyber-green">GHOST</span> IN THE <br />
              MACHINE.
            </h1>
            <p className="text-xl text-white/60 mb-10 font-sans max-w-xl leading-relaxed">
              Master the art of offensive security. From network infiltration to advanced exploit development, we train the next generation of elite cybersecurity professionals.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setIsEnrollModalOpen(true)}
                className="px-8 py-4 bg-cyber-green text-black font-mono font-bold uppercase tracking-widest hover:bg-white transition-colors flex items-center gap-2"
              >
                Start Training <ChevronRight className="w-5 h-5" />
              </button>
              <a 
                href="#curriculum"
                className="px-8 py-4 bg-transparent border border-white/20 text-white font-mono font-bold uppercase tracking-widest hover:border-cyber-green hover:text-cyber-green transition-all"
              >
                View Syllabus
              </a>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-20 hidden lg:block">
          <div className="relative w-[600px] h-[600px]">
            <div className="absolute inset-0 border border-cyber-green rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-10 border border-cyber-blue rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-20 border border-cyber-red rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Terminal className="w-32 h-32 text-cyber-green animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-24 px-6 bg-cyber-black relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                TRAINING <span className="text-cyber-green">MODULES</span>
              </h2>
              <p className="text-white/50 max-w-xl font-mono text-sm uppercase tracking-wider">
                Our comprehensive curriculum covers the entire spectrum of modern cybersecurity operations.
              </p>
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 font-mono text-xs uppercase tracking-widest transition-all ${
                    activeCategory === cat 
                      ? 'bg-cyber-green text-black font-bold' 
                      : 'bg-cyber-gray text-white/50 hover:text-white border border-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredTopics.map((topic, index) => (
                <motion.div
                  key={topic.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative bg-cyber-gray border border-white/5 p-8 hover:border-cyber-green/50 transition-all duration-500 overflow-hidden"
                >
                  {/* Hover Effect Background */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-green/5 blur-3xl group-hover:bg-cyber-green/10 transition-all duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-cyber-black border border-white/10 flex items-center justify-center mb-6 text-cyber-green group-hover:scale-110 group-hover:border-cyber-green/30 transition-all duration-500">
                      {topic.icon}
                    </div>
                    <div className="font-mono text-[10px] text-cyber-green/50 uppercase tracking-widest mb-2">
                      Module {index + 1} // {topic.category}
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-cyber-green transition-colors">
                      {topic.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-6">
                      {topic.description}
                    </p>
                    <button className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/30 group-hover:text-cyber-green transition-colors">
                      Explore Module <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-transparent group-hover:border-cyber-green transition-all duration-500" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-cyber-green">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Active Students', value: '12,400+' },
              { label: 'Modules Completed', value: '850K+' },
              { label: 'Certified Ninjas', value: '4,200+' },
              { label: 'Success Rate', value: '98%' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-black text-4xl md:text-5xl font-mono font-bold mb-2">{stat.value}</div>
                <div className="text-black/60 text-xs font-mono uppercase tracking-widest font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-cyber-gray relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              ABOUT <span className="text-cyber-green">CYBER NINJA</span>
            </h2>
            <div className="space-y-6 text-white/70 leading-relaxed font-sans text-lg">
              <p>
                Cyber Ninja Academy was born from the shadows of the digital frontier. We are not just an educational institution; we are a specialized training ground for the next generation of cybersecurity elite.
              </p>
              <p>
                Our mission is to bridge the gap between theoretical knowledge and real-world offensive security. We believe that to protect a system, one must first understand how to dismantle it. Our curriculum is designed by industry veterans who have operated at the highest levels of global security.
              </p>
              <p>
                At Cyber Ninja, we emphasize the "Ninja" philosophy: precision, stealth, and unwavering ethics. Every student who passes through our gates is trained to be a digital warrior, capable of defending the most critical infrastructures against the most sophisticated threats.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="aspect-square bg-cyber-black border border-cyber-green/20 p-4 relative">
              <div className="absolute inset-0 cyber-grid opacity-30" />
              <img 
                src="https://picsum.photos/seed/cyber-security/800/800" 
                alt="Cyber Security Training" 
                className="w-full h-full object-cover grayscale contrast-125 opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-0 left-0 w-full h-full border-4 border-cyber-green/10 pointer-events-none" />
            </div>
            {/* Floating Data Points */}
            <div className="absolute -top-4 -right-4 bg-cyber-green text-black p-4 font-mono text-xs font-bold">
              EST. 2024 // ALPHA_PHASE
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-cyber-black border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            GET IN <span className="text-cyber-green">TOUCH</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto mb-16 font-mono uppercase tracking-widest">
            Have questions about our training programs? Our recruitment officers are standing by.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-cyber-gray border border-white/5 hover:border-cyber-green/30 transition-all">
              <div className="w-12 h-12 bg-cyber-black flex items-center justify-center mx-auto mb-6 text-cyber-green">
                <Smartphone className="w-6 h-6" />
              </div>
              <h4 className="font-mono text-sm uppercase tracking-widest mb-2 text-white">Phone</h4>
              <p className="text-white/60 font-mono">+1 (555) CYBER-99</p>
            </div>
            <div className="p-8 bg-cyber-gray border border-white/5 hover:border-cyber-green/30 transition-all">
              <div className="w-12 h-12 bg-cyber-black flex items-center justify-center mx-auto mb-6 text-cyber-green">
                <Globe className="w-6 h-6" />
              </div>
              <h4 className="font-mono text-sm uppercase tracking-widest mb-2 text-white">Email</h4>
              <p className="text-white/60 font-mono">ops@cyberninja.academy</p>
            </div>
            <div className="p-8 bg-cyber-gray border border-white/5 hover:border-cyber-green/30 transition-all">
              <div className="w-12 h-12 bg-cyber-black flex items-center justify-center mx-auto mb-6 text-cyber-green">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="font-mono text-sm uppercase tracking-widest mb-2 text-white">Location</h4>
              <p className="text-white/60 font-mono">Encrypted Node // Global</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Modal */}
      <AnimatePresence>
        {isEnrollModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsEnrollModalOpen(false)}
              className="absolute inset-0 bg-cyber-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg bg-cyber-gray border border-cyber-green/30 p-8 shadow-2xl shadow-cyber-green/10"
            >
              <button 
                onClick={() => setIsEnrollModalOpen(false)}
                className="absolute top-4 right-4 text-white/50 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
              
              <h3 className="text-2xl font-bold mb-2 uppercase tracking-tighter">
                ENROLL <span className="text-cyber-green">NOW</span>
              </h3>
              <p className="text-white/50 text-sm font-mono uppercase tracking-widest mb-8">
                Initialize your training sequence.
              </p>

              <form onSubmit={handleEnrollSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-white/50 mb-2">Full Name</label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-cyber-black border border-white/10 p-3 text-white focus:border-cyber-green outline-none transition-colors font-mono"
                    placeholder="ENTER IDENTITY"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-white/50 mb-2">Email Address</label>
                  <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-cyber-black border border-white/10 p-3 text-white focus:border-cyber-green outline-none transition-colors font-mono"
                    placeholder="EMAIL@DOMAIN.COM"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-white/50 mb-2">Phone Number</label>
                  <input 
                    required
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-cyber-black border border-white/10 p-3 text-white focus:border-cyber-green outline-none transition-colors font-mono"
                    placeholder="+1 (XXX) XXX-XXXX"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-white/50 mb-2">Target Module</label>
                  <select 
                    value={formData.module}
                    onChange={(e) => setFormData({...formData, module: e.target.value})}
                    className="w-full bg-cyber-black border border-white/10 p-3 text-white focus:border-cyber-green outline-none transition-colors font-mono appearance-none"
                  >
                    {topics.map(t => (
                      <option key={t.id} value={t.title}>{t.title}</option>
                    ))}
                  </select>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-cyber-green text-black font-mono font-bold uppercase tracking-widest hover:bg-white transition-colors"
                >
                  Submit Application
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-cyber-black border-t border-white/5 pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-cyber-green flex items-center justify-center rounded-sm">
                  <Terminal className="text-black w-5 h-5" />
                </div>
                <span className="font-mono text-xl font-bold tracking-tighter text-white">
                  CYBER<span className="text-cyber-green">NINJA</span>
                </span>
              </div>
              <p className="text-white/40 max-w-sm mb-8 leading-relaxed">
                The world's most advanced offensive security training platform. We don't just teach hacking; we build digital warriors.
              </p>
              <div className="flex gap-4">
                {[Github, Twitter, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 bg-cyber-gray border border-white/5 flex items-center justify-center text-white/50 hover:text-cyber-green hover:border-cyber-green/30 transition-all">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-mono text-sm uppercase tracking-widest mb-6 text-white">Links</h4>
              <ul className="flex flex-col gap-4">
                {[
                  { name: 'Curriculum', href: '#curriculum' },
                  { name: 'About Us', href: '#about' },
                  { name: 'Contact', href: '#contact' },
                  { name: 'FAQ', href: '#' }
                ].map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-white/40 hover:text-cyber-green transition-colors text-sm">{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-sm uppercase tracking-widest mb-6 text-white">Legal</h4>
              <ul className="flex flex-col gap-4">
                {['Terms of Service', 'Privacy Policy', 'Ethics Agreement', 'Cookie Policy'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/40 hover:text-cyber-green transition-colors text-sm">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-4">
            <div className="text-white/20 text-xs font-mono uppercase tracking-widest">
              © 2026 CYBER NINJA ACADEMY. ALL RIGHTS RESERVED.
            </div>
            <div className="text-white/20 text-xs font-mono uppercase tracking-widest flex items-center gap-4">
              <span>IP: 192.168.1.1</span>
              <span>STATUS: SECURE</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
