import { useState } from 'react';
import ProfileCard from '../components/ProfileCard';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Quotes = () => {
  const quotes = [
    {
      id: 1,
      text: "The best code is not just functional, but also understandable by the next developer who will maintain it.",
      category: "Software"
    },
    {
      id: 2,
      text: "Education is not about filling a vessel, but lighting a fire that ignites a lifetime of learning.",
      category: "Education"
    },
    {
      id: 3,
      text: "In the intersection of faith and technology, we find opportunities to serve others with our skills.",
      category: "Spiritual"
    },
    {
      id: 4,
      text: "Writing is thinking on paper. The clearer your thoughts, the clearer your words will be.",
      category: "Writing"
    },
    {
      id: 5,
      text: "Leadership is not about being in charge, but about taking care of those in your charge.",
      category: "Leadership"
    },
    {
      id: 6,
      text: "Every bug is a lesson, every error a teacher. Embrace the debugging process as part of growth.",
      category: "Software"
    },
    {
      id: 7,
      text: "The most powerful tool in education is not the technology we use, but the relationships we build.",
      category: "Education"
    },
    {
      id: 8,
      text: "When we write code, we're not just solving problems—we're creating solutions that can change lives.",
      category: "Software"
    },
    {
      id: 9,
      text: "True mentorship is not about creating followers, but about empowering others to become leaders themselves.",
      category: "Leadership"
    },
    {
      id: 10,
      text: "In serving others through technology, we find purpose that transcends the code we write.",
      category: "Spiritual"
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = ['all', 'Software', 'Education', 'Spiritual', 'Writing', 'Leadership'];

  const filteredQuotes = selectedCategory === 'all'
    ? quotes
    : quotes.filter(quote => quote.category === selectedCategory);

  const QuoteCard = ({ quote }) => {
    return (
      <motion.div
        whileHover={{ y: -5 }}
        className="bg-gray-50 dark:bg-zinc-900/50 rounded-2xl overflow-hidden border border-gray-100 dark:border-zinc-800 transition-all duration-300 hover:shadow-xl dark:hover:shadow-yellow-500/10 p-8 relative flex flex-col h-full group"
      >
        <div className="absolute top-4 left-4 text-yellow-500 opacity-20 dark:opacity-10 group-hover:opacity-30 transition-opacity duration-300">
          <Quote size={48} />
        </div>
        <p className="text-gray-800 dark:text-gray-200 text-lg md:text-xl leading-relaxed italic mb-6 pl-6 flex-grow font-medium relative z-10">
          "{quote.text}"
        </p>
        <div className="flex justify-end items-center gap-2 mt-auto relative z-10">
          <span className="text-yellow-700 dark:text-yellow-400 bg-yellow-100/50 dark:bg-yellow-900/30 border border-yellow-200/50 dark:border-yellow-700/30 px-3 py-1 rounded-lg text-xs font-bold tracking-wide">
            {quote.category}
          </span>
        </div>
      </motion.div>
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } }
  };

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
          <section className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Quotes</h2>
            <div className="w-16 h-1.5 bg-yellow-500 rounded-full mb-8"></div>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-10">
              Personal reflections and insights on software development, education, writing, leadership, and faith.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 mb-12 pb-8 border-b border-gray-100 dark:border-zinc-800/50">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 capitalize ${
                    selectedCategory === category 
                      ? 'bg-yellow-500 text-black shadow-md shadow-yellow-500/20 transform -translate-y-0.5' 
                      : 'bg-gray-50 dark:bg-zinc-900/50 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-zinc-800 hover:border-yellow-500/50 hover:text-yellow-600 dark:hover:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-900/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Quotes Grid */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={selectedCategory} // Re-trigger animation on category change
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {filteredQuotes.length > 0 ? (
                filteredQuotes.map((quote) => (
                  <motion.div key={quote.id} variants={itemVariants} className="h-full">
                    <QuoteCard quote={quote} />
                  </motion.div>
                ))
              ) : (
                <motion.div variants={itemVariants} className="col-span-full py-16 text-center">
                  <p className="text-gray-500 dark:text-gray-400 text-lg">No quotes found in this category.</p>
                </motion.div>
              )}
            </motion.div>
          </section>
        </main>
      </div>
    </motion.div>
  );
};

export default Quotes;
