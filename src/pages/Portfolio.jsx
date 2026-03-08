import { useState } from 'react';
import ProfileCard from '../components/ProfileCard';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const projects = [
    {
      name: "YDMS",
      description: "A desktop system that helps manage members in groups like churches, saccos, etc.",
      image: "/images/ydms.png",
      tech: ["Java", "JavaFX", "Desktop Application"],
      category: "Desktop Application"
    },
    {
      name: "CSVM",
      description: "A client system for managing data of clients for City Sites Ltd, a Ugandan Real-Estates company.",
      image: "/images/csvm.png",
      tech: ["Java", "JavaFX", "Client Management"],
      category: "Desktop Application"
    },
    {
      name: "k2r_Metablic",
      description: "A system for ordering online lab tests, getting them approved by specialists, and getting suggestions and recommendations.",
      image: "/images/k2r_metablic.png",
      tech: ["Web Application", "Lab Management"],
      category: "Web Application"
    },
    {
      name: "scholaria",
      description: "A personal project for online class creation and running along with topic and room specific group discussions.",
      image: "/images/scholaria.png",
      tech: ["Web Application", "E-Learning"],
      category: "Web Application"
    },
    {
      name: "LICW",
      description: "A book exploring several scenarios in the Bible where Christ talks about the moral law.",
      image: "/images/licw.png",
      tech: ["Writing", "Theology"],
      category: "Writing"
    }
  ];

  const projectsToWorkOn = [
    {
      name: "rabita",
      description: "Webapp project in development.",
      image: "/images/rabita.png",
      tech: ["Webapp"],
      category: "Web Application"
    },
    {
      name: "NAC system",
      description: "Webapp project in development.",
      image: "/images/nac_system.png",
      tech: ["Webapp"],
      category: "Web Application"
    },
    {
      name: "SharePoint",
      description: "Webapp project in development.",
      image: "/images/sharepoint.png",
      tech: ["Webapp"],
      category: "Web Application"
    },
    {
      name: "LHTL",
      description: "Book on learning, currently in development.",
      image: "/images/lhtl.png",
      tech: ["Writing", "Education"],
      category: "Writing"
    }
  ];

  const ProjectCard = ({ project, isUpcoming = false }) => {
    return (
      <motion.div
        whileHover={{ y: -5 }}
        className="bg-gray-50 dark:bg-zinc-900/50 rounded-2xl overflow-hidden border border-gray-100 dark:border-zinc-800 transition-all duration-300 hover:shadow-xl dark:hover:shadow-yellow-500/10 group cursor-pointer"
      >
        {project.image && (
          <div className="relative w-full h-48 md:h-56 overflow-hidden bg-gray-200 dark:bg-zinc-800">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            {isUpcoming && (
              <div className="absolute top-2 right-2 bg-yellow-500/90 text-black px-3 py-1 rounded-lg text-xs font-bold shadow-sm backdrop-blur-sm">
                Coming Soon
              </div>
            )}
          </div>
        )}
        <div className="p-6 flex flex-col h-full bg-white dark:bg-transparent">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
            {project.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="bg-yellow-100/50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border border-yellow-200/50 dark:border-yellow-700/30 px-3 py-1 rounded-full text-xs font-semibold tracking-wide"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto pt-32 pb-24 px-6 md:px-12 min-h-screen"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <aside className="lg:col-span-4 self-start sticky top-32">
          <ProfileCard />
        </aside>
        
        <main className="lg:col-span-8 bg-white dark:bg-[#18181b] rounded-3xl p-8 shadow-xl dark:shadow-none border border-gray-100 dark:border-gray-800">
          <section className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Portfolio</h2>
            <div className="w-16 h-1.5 bg-yellow-500 rounded-full mb-8"></div>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-12">
              A collection of my projects, showcasing my work in software development, writing, and education.
            </p>

            {/* Completed Projects */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                <span className="text-yellow-500 text-3xl">•</span> Completed Projects
              </h3>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {projects.map((project, index) => (
                  <motion.div key={index} variants={itemVariants} className="h-full">
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Projects to Work On */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                <span className="text-yellow-500 text-3xl">•</span> Projects in Development
              </h3>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {projectsToWorkOn.map((project, index) => (
                  <motion.div key={index} variants={itemVariants} className="h-full">
                    <ProjectCard project={project} isUpcoming={true} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        </main>
      </div>
    </motion.div>
  );
};

export default Portfolio;
