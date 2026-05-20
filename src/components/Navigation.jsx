import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState(null);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Resume', path: '/resume' },
    // { name: 'Portfolio', path: '/portfolio' },
    // { name: 'Blog', path: '/blog' },
    { name: 'Quotes', path: '/quotes' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-4 flex justify-center w-full">
      <div className="bg-white/70 dark:bg-black/70 backdrop-blur-md rounded-full sm:rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 px-4 py-2 sm:px-6 sm:py-3 w-full max-w-fit overflow-x-auto scrollbar-hide">
        <ul className="flex flex-row items-center gap-1 sm:gap-2 md:gap-6 m-0 p-0 list-none text-center min-w-max">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const isHovered = hoveredItem === item.path;

            return (
              <li key={item.name} className="relative">
                <Link
                  to={item.path}
                  className={`relative block px-3 py-1.5 text-sm font-medium transition-colors z-10 ${isActive || isHovered ? 'text-yellow-600 dark:text-yellow-400' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'}`}
                  onMouseEnter={() => setHoveredItem(item.path)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {item.name}
                </Link>
                {isActive && (
                  <motion.div
                    layoutId="active-nav-indicator"
                    className="absolute inset-0 bg-yellow-100 dark:bg-yellow-900/30 rounded-full sm:rounded-xl -z-[1]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;