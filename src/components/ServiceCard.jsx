
import { useState } from "react";
import styles from "../assets/css/styles";

const ServiceCard = ({ icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const cardStyle = {
    ...styles.serviceCard,
    backgroundColor: isHovered ? '#27272a' : '#18181b',
  };
  
  return (
    <div 
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.serviceIcon}>{icon}</div>
      <h3 style={styles.serviceTitle}>{title}</h3>
      <p style={styles.serviceDescription}>{description}</p>
    </div>
  );
};

export default ServiceCard;