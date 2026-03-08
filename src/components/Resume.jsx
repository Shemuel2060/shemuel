import ProjectsCard from "./ProjectsCard";
import { motion } from 'framer-motion';

const Resume = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Various Projects",
      location: "Kampala, Uganda",
      period: "2020 - Present",
      description: "Specializing in the Java ecosystem with expertise in JavaFX and Spring Boot. Building value-driven solutions and solving complex technical challenges."
    },
    {
      title: "Team Lead",
      company: "Software Development",
      location: "Kampala, Uganda",
      period: "2022 - Present",
      description: "Leading development teams, mentoring engineers, and collaborating to deliver high-quality software solutions."
    },
    {
      title: "Educator & Volunteer",
      company: "Community Programs",
      location: "Kampala, Uganda",
      period: "2021 - Present",
      description: "Providing educational training to refugees and underrepresented communities. Committed to empowering others through technology education."
    }
  ];

  const skills = [
    "Java", "JavaFX", "Spring Boot", "JavaScript", "React", 
    "Docker", "Python", "HTML/CSS", "Git", "PHP", "Laravel",
    "Problem Solving", "Team Leadership", "Mentoring"
  ];

  const completedProjects = [
    {
      name: "YDMS",
      description: "A desktop system that helps manage members in groups like churches, saccos, etc.",
      image: "/images/ydms.png",
      tech: ["Java", "JavaFX", "Desktop Application"]
    },
    {
      name: "CSVM",
      description: "A client system for managing data of clients for City Sites Ltd, a Ugandan Real-Estates company.",
      image: "/images/csvm.png",
      tech: ["Java", "JavaFX", "Client Management"]
    }
  ];

  const projects = [
    {
      name: "k2r_Metablic",
      description: "A system for ordering online lab tests, getting them approved by specialists, and getting suggestions and recommendations.",
      image: "/images/k2r_metablic.png",
      tech: ["Web Application", "Lab Management"]
    },
    
    {
      name: "NAC system",
      description: "An online learning platform for Network for Active Citizens on local governance and national budget.",
      image: "/images/nac_system.png",
      tech: ["Webapp"]
    },
    {
      name: "LICW",
      description: "A book exploring several scenarios in the Bible where Christ talks about the moral law.",
      image: "/images/licw.png",
      tech: ["Writing", "Theology"]
    }
  ];

  const projectsToWorkOn = [
    {
      name: "rabita",
      description: "Webapp project.",
      image: "/images/rabita.png",
      tech: ["Webapp"]
    },
    {
      name: "SharePoint",
      description: "Webapp project.",
      image: "/images/sharepoint.png",
      tech: ["Webapp"]
    },
    {
      name: "scholaria",
      description: "A Web project.",
      image: "/images/scholaria.png",
      tech: ["Web Application", "E-Learning"]
    },
    {
      name: "LHTL",
      description: "Book on learning, currently in development.",
      image: "/images/lhtl.png",
      tech: ["Writing", "Education"]
    }
  ];

  const volunteering = [
    {
      title: "Teaching English to Sudanese Refugees",
      description: "Teaching English to Sudanese refugees living in Uganda, helping them integrate and communicate effectively.",
      location: "Uganda"
    },
    {
      title: "Teaching Computer Applications",
      description: "Teaching Computer Application skills to Ugandans, empowering them with digital literacy and technical knowledge.",
      location: "Uganda"
    }
  ];

  const achievements = [
    {
      name: "Pull Shark",
      count: 2,
      description: "GitHub achievement for contributing pull requests"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Resume</h2>
        <div className="w-16 h-1.5 bg-yellow-500 rounded-full mb-10"></div>
      </motion.div>
      
      <div className="flex flex-col gap-16">
        {/* Experience Section */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="text-yellow-500 text-3xl">•</span> Experience
          </h3>
          <div className="border-l-2 border-gray-200 dark:border-zinc-800 ml-3 pl-8 pb-4 space-y-10">
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVariants} className="relative">
                <div className="absolute -left-[2.45rem] top-1.5 w-4 h-4 rounded-full bg-yellow-500 ring-4 ring-white dark:ring-[#18181b]"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 gap-2">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h4>
                    <p className="text-yellow-600 dark:text-yellow-400 font-medium">{exp.company} • {exp.location}</p>
                  </div>
                  <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 rounded-full text-sm font-medium whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="text-yellow-500 text-3xl">•</span> Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span key={index} className="px-4 py-2 bg-yellow-50 dark:bg-yellow-900/10 text-yellow-700 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-700/30 rounded-xl font-medium transition-transform hover:-translate-y-1 cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Volunteering Section */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="text-yellow-500 text-3xl">•</span> Volunteering
          </h3>
          <div className="border-l-2 border-gray-200 dark:border-zinc-800 ml-3 pl-8 pb-4 space-y-10">
            {volunteering.map((volunteer, index) => (
              <motion.div key={index} variants={itemVariants} className="relative">
                <div className="absolute -left-[2.45rem] top-1.5 w-4 h-4 rounded-full bg-yellow-500 ring-4 ring-white dark:ring-[#18181b]"></div>
                <div className="mb-2">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">{volunteer.title}</h4>
                  <p className="text-yellow-600 dark:text-yellow-400 font-medium">{volunteer.location}</p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{volunteer.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Completed Projects Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="text-yellow-500 text-3xl">•</span> Completed Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {completedProjects.map((project, index) => (
              <ProjectsCard key={index} project={project} />
            ))}
          </div>
        </motion.div>

        {/* Ongoing Projects Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="text-yellow-500 text-3xl">•</span> Ongoing Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectsCard key={index} project={project} />
            ))}
          </div>
        </motion.div>

        {/* Projects to Work On Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="text-yellow-500 text-3xl">•</span> Next Up
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsToWorkOn.map((project, index) => (
              <ProjectsCard key={index} project={project} />
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="text-yellow-500 text-3xl">•</span> Achievements
          </h3>
          <div className="flex flex-wrap gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center gap-3 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 px-5 py-3 rounded-2xl shadow-sm">
                <span className="text-2xl">🏆</span>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">{achievement.name} <span className="text-yellow-500 ml-1">x{achievement.count}</span></p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Interests Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="text-yellow-500 text-3xl">•</span> Interests
          </h3>
          <div className="bg-gray-50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-gray-100 dark:border-zinc-800">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              I am passionate about programming and software architecture, with a strong
              focus on domain-driven design, security systems, and solving complex problems 
              through clean, structured solutions; I also enjoy research, technical writing, 
              teaching, and continuous learning, including language study and thoughtful 
              textual analysis.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
