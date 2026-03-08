import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`fixed bottom-[5.5rem] right-8 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center cursor-pointer transition-colors z-[1000] border-2 border-yellow-500 shadow-lg hover:shadow-xl ${
        theme === 'dark' 
          ? 'bg-zinc-900 text-yellow-500 shadow-yellow-500/30 hover:shadow-yellow-500/50' 
          : 'bg-gray-100 text-black shadow-black/10 hover:shadow-black/20'
      }`}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.3, ease: 'backOut' }}
      >
        {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
