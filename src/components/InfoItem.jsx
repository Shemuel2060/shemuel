

import styles from "../assets/css/styles";

const InfoItem = ({ icon, label, value }) => {
  return (
    <div style={styles.infoItem}>
      <div style={styles.infoIcon}>{icon}</div>
      <div style={styles.infoContent}>
        <p style={styles.infoLabel}>{label}</p>
        <p style={styles.infoValue}>{value}</p>
      </div>
    </div>
  );
};

export default InfoItem;