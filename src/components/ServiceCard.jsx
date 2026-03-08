import { motion } from "framer-motion";

const ServiceCard = ({ icon, title, description, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-yellow-500/5 group"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-yellow-50 dark:bg-yellow-900/20 group-hover:bg-yellow-100 dark:group-hover:bg-yellow-900/40 transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
        {description}
      </p>
    </motion.div>
  );
};

export default ServiceCard;