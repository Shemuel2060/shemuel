import { useTheme } from '../contexts/ThemeContext';

export const useThemeStyles = () => {
  const { theme } = useTheme();

  const isDark = theme === 'dark';

  return {
    app: {
      minHeight: '100vh',
      backgroundColor: isDark ? '#000' : '#f9fafb',
      padding: '2rem',
      transition: 'background-color 0.3s ease',
    },
    navigation: {
      position: 'fixed',
      top: 0,
      right: 0,
      padding: '2rem',
      zIndex: 50,
    },
    navList: {
      display: 'flex',
      gap: '2rem',
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
    navLink: {
      color: isDark ? '#9ca3af' : '#6b7280',
      textDecoration: 'none',
      fontSize: '0.875rem',
      fontWeight: 500,
      transition: 'color 0.3s',
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      paddingTop: '5rem',
    },
    sidebar: {
      width: '100%',
    },
    mainContent: {
      backgroundColor: isDark ? '#18181b' : '#ffffff',
      borderRadius: '1rem',
      padding: '3rem',
      gridColumn: 'span 2',
      boxShadow: isDark ? 'none' : '0 4px 6px rgba(0, 0, 0, 0.1)',
      border: isDark ? 'none' : '1px solid #e5e7eb',
      transition: 'all 0.3s ease',
    },
    section: {
      marginBottom: '3rem',
    },
    sectionTitle: {
      color: isDark ? 'white' : '#111827',
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
      transition: 'color 0.3s ease',
    },
    titleUnderline: {
      width: '3rem',
      height: '0.25rem',
      backgroundColor: '#eab308',
      marginBottom: '1.5rem',
    },
    aboutContent: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      color: isDark ? '#9ca3af' : '#6b7280',
      lineHeight: 1.75,
      transition: 'color 0.3s ease',
    },
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1.5rem',
    },
    serviceCard: {
      backgroundColor: isDark ? '#18181b' : '#f9fafb',
      border: isDark ? '1px solid #27272a' : '1px solid #e5e7eb',
      borderRadius: '0.75rem',
      padding: '1.5rem',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    serviceIcon: {
      fontSize: '2.5rem',
      marginBottom: '1rem',
    },
    serviceTitle: {
      color: isDark ? 'white' : '#111827',
      fontSize: '1.125rem',
      fontWeight: 600,
      marginBottom: '0.5rem',
      transition: 'color 0.3s ease',
    },
    serviceDescription: {
      color: isDark ? '#9ca3af' : '#6b7280',
      fontSize: '0.875rem',
      lineHeight: 1.6,
      transition: 'color 0.3s ease',
    },
    resumeContent: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
    },
    resumeItem: {
      marginBottom: '1.5rem',
    },
    resumeItemHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '0.5rem',
      flexWrap: 'wrap',
      gap: '0.5rem',
    },
    resumeItemTitle: {
      color: isDark ? 'white' : '#111827',
      fontSize: '1.125rem',
      fontWeight: 600,
      transition: 'color 0.3s ease',
    },
    resumeItemSubtitle: {
      color: '#eab308',
      fontSize: '0.875rem',
      fontWeight: 500,
    },
    resumeItemDate: {
      color: isDark ? '#6b7280' : '#9ca3af',
      fontSize: '0.875rem',
      transition: 'color 0.3s ease',
    },
    resumeItemDescription: {
      color: isDark ? '#9ca3af' : '#6b7280',
      fontSize: '0.875rem',
      lineHeight: 1.6,
      marginTop: '0.5rem',
      transition: 'color 0.3s ease',
    },
    skillsGrid: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.75rem',
    },
    skillTag: {
      backgroundColor: 'rgba(234, 179, 8, 0.1)',
      border: '1px solid rgba(234, 179, 8, 0.3)',
      color: '#eab308',
      padding: '0.5rem 1rem',
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      fontWeight: 500,
    },
    projectLink: {
      color: '#eab308',
      textDecoration: 'none',
      fontSize: '0.875rem',
      marginLeft: '0.5rem',
      transition: 'opacity 0.3s',
    },
    projectImage: {
      width: '100%',
      maxWidth: '600px',
      height: 'auto',
      borderRadius: '0.75rem',
      marginBottom: '1rem',
      border: '1px solid rgba(234, 179, 8, 0.2)',
      objectFit: 'cover',
    },
    achievementBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      backgroundColor: 'rgba(234, 179, 8, 0.1)',
      border: '1px solid rgba(234, 179, 8, 0.3)',
      color: '#eab308',
      padding: '0.5rem 1rem',
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      fontWeight: 500,
      marginRight: '0.75rem',
      marginBottom: '0.75rem',
    },
  };
};
