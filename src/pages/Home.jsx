import styles from "../assets/css/styles";
import ProfileCard from '../components/ProfileCard';
import ServicesSection from '../components/ServicesSection';

const Home = () => {
  return (
    <div style={styles.app}>
      <div style={styles.container}>
        <aside style={styles.sidebar}>
          <ProfileCard />
        </aside>
        
        <main style={styles.mainContent}>
          <ServicesSection />
        </main>
      </div>
    </div>
  );
};

export default Home;
