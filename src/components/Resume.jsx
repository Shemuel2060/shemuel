import { motion } from 'framer-motion';
import ExperienceSection from './ExperienceSection';
import SkillsSection from './SkillsSection';
import VolunteeringSection from './VolunteeringSection';
import ProjectsSection from './ProjectsSection';
import AchievementsSection from './AchievementsSection';
import InterestsSection from './InterestsSection';

const Resume = () => {
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
        <ExperienceSection />
        <SkillsSection />
        <VolunteeringSection />
        <ProjectsSection />
        <AchievementsSection />
        <InterestsSection />
      </div>
    </section>
  );
};

export default Resume;
