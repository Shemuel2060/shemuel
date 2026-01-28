import styles from "../assets/css/styles";
import ProfileCard from '../components/ProfileCard';
import Resume from '../components/Resume';

const ResumePage = () => {
  return (
    <div style={styles.app}>
      <div style={styles.container}>
        <aside style={styles.sidebar}>
          <ProfileCard />
        </aside>
        
        <main style={styles.mainContent}>
          <Resume />
        </main>
      </div>
    </div>
  );
};

export default ResumePage;
