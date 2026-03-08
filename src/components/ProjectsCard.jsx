import { motion } from 'framer-motion';

const ProjectsCard = ({ project }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-gray-50 dark:bg-zinc-900/50 rounded-2xl overflow-hidden border border-gray-100 dark:border-zinc-800 transition-all duration-300 hover:shadow-xl dark:hover:shadow-yellow-500/10 mb-6 group"
    >
      {project.image && (
        <div className="w-full h-48 md:h-64 overflow-hidden bg-gray-200 dark:bg-zinc-800">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </div>
      )}
      <div className="p-6">
        <div className="mb-4">
          <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">{project.name}</h4>
          <div className="flex flex-wrap gap-2 mt-3">
            {project.tech.map((tech, techIndex) => (
              <span key={techIndex} className="bg-yellow-100/50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border border-yellow-200/50 dark:border-yellow-700/30 px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{project.description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectsCard;
