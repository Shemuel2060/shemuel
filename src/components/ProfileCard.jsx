
import styles from "../assets/css/styles";
import InfoItem from './InfoItem';
import {Mail, Phone, Calendar, MapPin} from 'lucide-react'
// import sam from '../assets/images/sam_nobg.png';

const ProfileCard = () => {
  return (
    <div style={styles.profileCard}>
      <div style={styles.profileAvatar}>
        <div style={styles.avatarEmoji}>👨‍💼</div>
      </div>
      
      <h1 style={styles.profileName}>Samuel Katongole</h1>
      <p style={styles.profileTitle}>Software Engineer | Team Lead | Writer | Educator</p>
      
      <div style={styles.profileInfo}>
        <InfoItem 
          icon={<Mail size={20} color="#eab308" />}
          label="EMAIL"
          value="2060iona.shemuel@gmail.com"
        />
        <InfoItem 
          icon={<Phone size={20} color="#eab308" />}
          label="PHONE"
          value="(+256)767 896 608"
        />
        <InfoItem 
          icon={<Calendar size={20} color="#eab308" />}
          label="SINCE"
          value="December 15, 2025"
        />
        <InfoItem 
          icon={<MapPin size={20} color="#eab308" />}
          label="LOCATION"
          value="Kampala, Uganda"
        />
      </div>
    </div>
  );
};

export default ProfileCard;