import { useThemeStyles } from "../hooks/useThemeStyles";
import ProfileCard from '../components/ProfileCard';
import Resume from '../components/Resume';

const ResumePage = () => {
  const styles = useThemeStyles();
  
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
