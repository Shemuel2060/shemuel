import { Link } from 'react-router-dom';
import { User, FileText, Sparkles, Send, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const WelcomeSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const exploreItems = [
    {
      icon: <User size={24} className="text-yellow-500" />,
      title: 'About Me',
      description: 'Discover my background, core values, and what drives me as a solutions engineer and mentor.',
      link: '/about',
      buttonText: 'Read My Story'
    },
    {
      icon: <FileText size={24} className="text-yellow-500" />,
      title: 'Professional Journey',
      description: 'Browse my technical expertise, employment history, and key milestones in the software industry.',
      link: '/resume',
      buttonText: 'View My Resume'
    },
    {
      icon: <Sparkles size={24} className="text-yellow-500" />,
      title: 'Words & Wisdom',
      description: 'Explore a curated collection of theological, philosophical, and personal reflections.',
      link: '/quotes',
      buttonText: 'Read Reflections'
    },
    {
      icon: <Send size={24} className="text-yellow-500" />,
      title: 'Let\'s Connect',
      description: 'Looking to collaborate, request a consultation, or discuss mentorship opportunities? Reach out!',
      link: '/contact',
      buttonText: 'Get In Touch'
    }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-12"
    >
      {/* Hero Header */}
      <motion.div variants={itemVariants} className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 text-sm font-semibold tracking-wide uppercase border border-yellow-500/20">
          <span>Welcome to my digital space</span>
          <span className="animate-pulse">👋</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
          Crafting Purposeful Technology,<br />
          <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 bg-clip-text text-transparent">
            Empowering Minds.
          </span>
        </h2>
        <div className="w-16 h-1.5 bg-yellow-500 rounded-full"></div>
      </motion.div>

      {/* Intro Text */}
      <motion.div 
        variants={itemVariants}
        className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed space-y-4 max-w-3xl"
      >
        <p>
          I am so glad you've stopped by! This website is my digital home—a place where I share my professional milestones, personal philosophies, and the things that inspire me. 
        </p>
        <p>
          As a software engineer, my day-to-day focus is on building robust solutions in the Java and Web ecosystems. But beyond the code, my mission is continuous growth and creating a lasting, positive impact—whether by leading development teams, mentoring aspiring engineers, or volunteering to teach technology to underrepresented communities.
        </p>
      </motion.div>

      {/* Navigation Grid */}
      <motion.div variants={itemVariants} className="space-y-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">What would you like to explore first?</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {exploreItems.map((item, index) => (
            <Link 
              to={item.link} 
              key={index}
              className="group block bg-zinc-50 hover:bg-white dark:bg-zinc-900/40 dark:hover:bg-zinc-900/90 rounded-3xl p-6 border border-gray-100 hover:border-yellow-500/30 dark:border-zinc-800/50 dark:hover:border-yellow-500/20 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-yellow-50 dark:bg-yellow-950/30 text-yellow-500 group-hover:scale-110 group-hover:bg-yellow-100 dark:group-hover:bg-yellow-900/20 transition-all duration-300">
                  {item.icon}
                </div>
                <div className="flex-1 space-y-2">
                  <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <div className="inline-flex items-center gap-1 text-xs font-semibold text-yellow-600 dark:text-yellow-400 pt-2 group-hover:translate-x-1 transition-transform">
                    <span>{item.buttonText}</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* CTA Footer Card */}
      <motion.div 
        variants={itemVariants}
        className="bg-gradient-to-br from-yellow-500/10 to-amber-600/5 dark:from-yellow-950/20 dark:to-zinc-900/20 rounded-3xl p-8 border border-yellow-500/10 flex flex-col md:flex-row md:items-center justify-between gap-6"
      >
        <div className="space-y-2 max-w-lg">
          <h4 className="text-lg font-bold text-gray-900 dark:text-white">Let's build something beautiful together.</h4>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Whether you have an upcoming project, need architectural advice, or want to collaborate on educational training, I'm always open to discussing new ideas.
          </p>
        </div>
        <Link 
          to="/contact" 
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-500 text-zinc-900 dark:text-black font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:scale-105 duration-300"
        >
          Get in Touch
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default WelcomeSection;
