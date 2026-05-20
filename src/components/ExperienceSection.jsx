import { motion } from 'framer-motion';

const ExperienceSection = () => {
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
  );
};

export default ExperienceSection;
