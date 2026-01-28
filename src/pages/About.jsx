import styles from "../assets/css/styles";
import ProfileCard from '../components/ProfileCard';
import AboutSection from '../components/AboutSection';

const About = () => {
  return (
    <div style={styles.app}>
      <div style={styles.container}>
        <aside style={styles.sidebar}>
          <ProfileCard />
        </aside>
        
        <main style={styles.mainContent}>
          <AboutSection />
        </main>
      </div>
    </div>
  );
};

export default About;
