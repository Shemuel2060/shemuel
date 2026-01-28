
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useThemeStyles } from '../hooks/useThemeStyles';

const Navigation = () => {
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState(null);
  const styles = useThemeStyles();
  
  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Resume', path: '/resume' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Quotes', path: '/quotes' },
    { name: 'Contact', path: '/contact' }
  ];
  
  const getLinkStyle = (path) => {
    const isActive = location.pathname === path;
    const isHovered = hoveredItem === path;
    return {
      ...styles.navLink,
      color: isActive || isHovered ? '#eab308' : styles.navLink.color,
    };
  };
  
  return (
    <nav style={styles.navigation}>
      <ul style={styles.navList}>
        {navItems.map((item) => (
          <li key={item.name}>
            <Link 
              to={item.path}
              style={getLinkStyle(item.path)}
              onMouseEnter={() => setHoveredItem(item.path)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;