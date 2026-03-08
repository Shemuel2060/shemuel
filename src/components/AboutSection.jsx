import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
        <div className="w-16 h-1.5 bg-yellow-500 rounded-full mb-8"></div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col gap-6 text-gray-600 dark:text-gray-400 leading-relaxed text-lg"
      >
        <p>
          I am a self-driven software engineer specializing in the Java ecosystem, 
          with expertise in JavaFX and Spring Boot. Based in Kampala, Uganda, I thrive 
          on solving complex technical challenges and collaborating with teams to build
          value-driven solutions. Beyond coding, I am committed to leadership and 
          empowerment—mentoring others to reach their full potential and volunteering 
          my time to provide educational training to refugees and underrepresented 
          communities.
        </p>
        <p>
          My daily mission is continuous growth, evolving not only as a solutions 
          engineer but as a well-rounded individual. I am driven to inspire others 
          to recognize the profound impact of problem-solving within a global 
          context—specifically by developing innovative solutions that address the 
          unique challenges and opportunities across the African continent.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;