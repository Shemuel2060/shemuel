import { motion } from 'framer-motion';
import { 
  Terminal, 
  Layers, 
  BrainCircuit, 
  PenTool, 
  GraduationCap, 
  Languages, 
  BookMarked 
} from 'lucide-react';

const InterestsSection = () => {
  const interests = [
    {
      name: "Programming & Architecture",
      description: "Developing robust, clean, and well-designed software systems using modern paradigms.",
      icon: <Terminal size={20} />
    },
    {
      name: "Domain-Driven Design",
      description: "Structuring complex business logic, software components, and security boundaries.",
      icon: <Layers size={20} />
    },
    {
      name: "Complex Problem Solving",
      description: "Approaching algorithmic challenges with clean, optimal, and structured solutions.",
      icon: <BrainCircuit size={20} />
    },
    {
      name: "Research & Technical Writing",
      description: "Documenting architectural patterns, systems, and deep-dive technical explorations.",
      icon: <PenTool size={20} />
    },
    {
      name: "Teaching & Mentorship",
      description: "Empowering developers through direct guidance, training, and knowledge sharing.",
      icon: <GraduationCap size={20} />
    },
    {
      name: "Continuous Learning",
      description: "Constantly expanding knowledge boundaries, including language study and new technologies.",
      icon: <Languages size={20} />
    },
    {
      name: "Textual Analysis",
      description: "Engaging in detailed, thoughtful, and structural analysis of texts.",
      icon: <BookMarked size={20} />
    }
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
        <span className="text-yellow-500 text-3xl">•</span> Interests
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {interests.map((interest, index) => (
          <div 
            key={index}
            className="flex items-start gap-4 p-5 bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800/80 rounded-2xl shadow-sm hover:shadow-md hover:border-yellow-500/20 dark:hover:border-yellow-500/10 hover:-translate-y-0.5 transition-all duration-300 group"
          >
            <div className="p-3 bg-yellow-50 dark:bg-yellow-500/10 rounded-xl text-yellow-600 dark:text-yellow-400 group-hover:scale-110 transition-transform duration-300 shrink-0">
              {interest.icon}
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-1 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                {interest.name}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {interest.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default InterestsSection;
