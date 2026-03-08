import { useState } from 'react';
import ProfileCard from '../components/ProfileCard';
import { BookOpen, Code, GraduationCap, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: null },
    { id: 'software', name: 'Software', icon: <Code size={18} /> },
    { id: 'writing', name: 'Writing', icon: <BookOpen size={18} /> },
    { id: 'education', name: 'Education', icon: <GraduationCap size={18} /> },
    { id: 'spiritual', name: 'Spiritual', icon: <Heart size={18} /> },
  ];

  const blogs = [
    {
      id: 1,
      title: "Getting Started with JavaFX",
      excerpt: "A comprehensive guide to building desktop applications with JavaFX, covering the basics and advanced techniques.",
      category: "software",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "/images/blog/java-javafx.jpg"
    },
    {
      id: 2,
      title: "The Art of Technical Writing",
      excerpt: "Exploring the principles of effective technical documentation and how to communicate complex ideas clearly.",
      category: "writing",
      date: "2024-01-10",
      readTime: "7 min read",
      image: "/images/blog/technical-writing.jpg"
    },
    {
      id: 3,
      title: "Teaching Programming to Beginners",
      excerpt: "Strategies and approaches for making programming accessible to newcomers, especially in underserved communities.",
      category: "education",
      date: "2024-01-05",
      readTime: "6 min read",
      image: "/images/blog/teaching-programming.jpg"
    },
    {
      id: 4,
      title: "Faith and Technology: Finding Balance",
      excerpt: "Reflecting on how faith guides our work in technology and the importance of using our skills for good.",
      category: "spiritual",
      date: "2024-01-01",
      readTime: "8 min read",
      image: "/images/blog/faith-technology.jpg"
    },
    {
      id: 5,
      title: "Building RESTful APIs with Spring Boot",
      excerpt: "A practical guide to creating robust REST APIs using Spring Boot, including best practices and common patterns.",
      category: "software",
      date: "2023-12-20",
      readTime: "10 min read",
      image: "/images/blog/spring-boot-api.jpg"
    },
    {
      id: 6,
      title: "The Power of Storytelling in Documentation",
      excerpt: "How narrative techniques can make technical documentation more engaging and easier to understand.",
      category: "writing",
      date: "2023-12-15",
      readTime: "6 min read",
      image: "/images/blog/storytelling-docs.jpg"
    },
    {
      id: 7,
      title: "Empowering Refugees Through Education",
      excerpt: "My experience teaching English and computer skills to refugees, and the impact of education on integration.",
      category: "education",
      date: "2023-12-10",
      readTime: "9 min read",
      image: "/images/blog/refugee-education.jpg"
    },
    {
      id: 8,
      title: "Scripture and Software Development",
      excerpt: "Drawing parallels between biblical principles and software engineering practices.",
      category: "spiritual",
      date: "2023-12-05",
      readTime: "7 min read",
      image: "/images/blog/scripture-software.jpg"
    },
  ];

  const filteredBlogs = selectedCategory === 'all' 
    ? blogs 
    : blogs.filter(blog => blog.category === selectedCategory);

  const getCategoryTheme = (category) => {
    const themes = {
      software: 'bg-yellow-500 text-black',
      writing: 'bg-blue-500 text-white',
      education: 'bg-emerald-500 text-white',
      spiritual: 'bg-rose-500 text-white',
    };
    return themes[category] || 'bg-gray-500 text-white';
  };

  const getCategoryIcon = (category) => {
    const icons = {
      software: <Code size={16} />,
      writing: <BookOpen size={16} />,
      education: <GraduationCap size={16} />,
      spiritual: <Heart size={16} />,
    };
    return icons[category] || null;
  };

  const BlogCard = ({ blog }) => {
    return (
      <motion.div
        whileHover={{ y: -5 }}
        className="bg-gray-50 dark:bg-zinc-900/50 rounded-2xl overflow-hidden border border-gray-100 dark:border-zinc-800 transition-all duration-300 hover:shadow-xl dark:hover:shadow-yellow-500/10 group cursor-pointer flex flex-col h-full"
      >
        <div className="relative w-full h-48 md:h-56 overflow-hidden bg-gray-200 dark:bg-zinc-800">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              // Fallback gradient if image fails to load
              e.target.style.display = 'none';
              e.target.parentElement.classList.add('bg-gradient-to-br', 'from-gray-700', 'to-zinc-900');
            }}
          />
          <div className={`absolute top-3 left-3 px-3 py-1.5 rounded-lg text-xs font-bold shadow-sm backdrop-blur-sm flex items-center gap-1.5 ${getCategoryTheme(blog.category)}`}>
            {getCategoryIcon(blog.category)}
            <span className="capitalize">{blog.category}</span>
          </div>
        </div>
        <div className="p-6 flex flex-col flex-grow bg-white dark:bg-transparent">
          <div className="flex justify-between items-center mb-4 text-xs font-medium text-gray-500 dark:text-gray-400">
            <span>{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
            <span>{blog.readTime}</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors leading-snug">
            {blog.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
            {blog.excerpt}
          </p>
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
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
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Blog</h2>
            <div className="w-16 h-1.5 bg-yellow-500 rounded-full mb-8"></div>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-10">
              Thoughts, insights, and experiences on software development, writing, education, and faith.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 mb-12 pb-8 border-b border-gray-100 dark:border-zinc-800/50">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    selectedCategory === category.id 
                      ? 'bg-yellow-500 text-black shadow-md shadow-yellow-500/20 transform -translate-y-0.5' 
                      : 'bg-gray-50 dark:bg-zinc-900/50 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-zinc-800 hover:border-yellow-500/50 hover:text-yellow-600 dark:hover:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-900/10'
                  }`}
                >
                  {category.icon}
                  {category.name}
                </button>
              ))}
            </div>

            {/* Blog Grid */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={selectedCategory} // Re-trigger animation on category change
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {filteredBlogs.length > 0 ? (
                filteredBlogs.map((blog) => (
                  <motion.div key={blog.id} variants={itemVariants} className="h-full">
                    <BlogCard blog={blog} />
                  </motion.div>
                ))
              ) : (
                <motion.div variants={itemVariants} className="col-span-full py-16 text-center">
                  <p className="text-gray-500 dark:text-gray-400 text-lg">No blogs found in this category right now.</p>
                </motion.div>
              )}
            </motion.div>
          </section>
        </main>
      </div>
    </motion.div>
  );
};

export default Blog;
