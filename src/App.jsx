
import styles from "./assets/css/styles";

import Navigation from './components/Navigation';
import ProfileCard from './components/ProfileCard';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';

export default function App() {
  return (
    <div style={styles.app}>
      <Navigation />
      
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
}