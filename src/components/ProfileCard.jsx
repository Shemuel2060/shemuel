
import '../assets/css/ProfileCard.css';
import InfoItem from './InfoItem';
import {Mail, Phone, Calendar, MapPin} from 'lucide-react'
// import sam from '../assets/images/sam_nobg.png';

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-avatar">
        <div className="avatar-emoji">👨‍💼</div>
      </div>
      
      <h1 className="profile-name">Samuel Katongole</h1>
      <p className="profile-title">Software Engineer | Team Lead | Writer | Educator</p>
      
      <div className="profile-info">
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
          icon={<Phone size={20} color="#eab308" />}
          label="WORKING WITH"
          value="iONA Tech Services, Ltd."
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