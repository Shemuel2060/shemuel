import { useThemeStyles } from "../hooks/useThemeStyles";
import ProfileCard from '../components/ProfileCard';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';

const About = () => {
  const styles = useThemeStyles();
  
  return (
    <div style={styles.app}>
      <div style={styles.container}>
        <aside style={styles.sidebar}>
          <ProfileCard />
        </aside>
        
        <main style={styles.mainContent}>
          <AboutSection />
          <ServicesSection />
        </main>
      </div>
    </div>
  );
};

export default About;
