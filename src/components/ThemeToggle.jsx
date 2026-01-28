import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '3.5rem',
        height: '3.5rem',
        borderRadius: '50%',
        backgroundColor: theme === 'dark' ? '#18181b' : '#f3f4f6',
        border: `2px solid ${theme === 'dark' ? '#eab308' : '#eab308'}`,
        color: theme === 'dark' ? '#eab308' : '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: theme === 'dark' 
          ? '0 4px 15px rgba(234, 179, 8, 0.3)' 
          : '0 4px 15px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = 'scale(1.1)';
        e.target.style.boxShadow = theme === 'dark'
          ? '0 6px 20px rgba(234, 179, 8, 0.5)'
          : '0 6px 20px rgba(0, 0, 0, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'scale(1)';
        e.target.style.boxShadow = theme === 'dark'
          ? '0 4px 15px rgba(234, 179, 8, 0.3)'
          : '0 4px 15px rgba(0, 0, 0, 0.1)';
      }}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
};

export default ThemeToggle;
