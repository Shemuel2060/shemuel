import ProfileCard from '../components/ProfileCard';
import Resume from '../components/Resume';
import { motion } from 'framer-motion';

const ResumePage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto pt-32 pb-24 px-6 md:px-12 min-h-screen"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <aside className="lg:col-span-4 self-start sticky top-32">
          <ProfileCard />
        </aside>
        
        <main className="lg:col-span-8 bg-white dark:bg-[#18181b] rounded-3xl p-8 shadow-xl dark:shadow-none border border-gray-100 dark:border-gray-800">
          <Resume />
        </main>
      </div>
    </motion.div>
  );
};

export default ResumePage;
