import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skills = [
    "Java", "JavaFX", "Spring Boot", "JavaScript", "React",
    "Docker", "Python", "HTML/CSS", "Git", "PHP", "Laravel",
    "Problem Solving", "Team Leadership", "Mentoring"
  ];

  return (
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
  );
};

export default SkillsSection;
