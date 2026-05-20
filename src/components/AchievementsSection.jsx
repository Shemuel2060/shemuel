import { motion } from 'framer-motion';

const AchievementsSection = () => {
  const achievements = [
    {
      name: "Pull Shark",
      count: 2,
      description: "GitHub achievement for contributing pull requests"
    }
  ];

  return (
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
  );
};

export default AchievementsSection;
