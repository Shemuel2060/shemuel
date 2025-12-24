
import styles from "../assets/css/styles";

const Navigation = () => {
  const navItems = ['About', 'Resume', 'Portfolio', 'Blog', 'Contact'];
  
  const handleMouseEnter = (e) => {
    e.target.style.color = '#eab308';
  };
  
  const handleMouseLeave = (e) => {
    e.target.style.color = '#9ca3af';
  };
  
  return (
    <nav style={styles.navigation}>
      <ul style={styles.navList}>
        {navItems.map((item) => (
          <li key={item}>
            <a 
              href={`#${item.toLowerCase()}`} 
              style={styles.navLink}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;