

import '../assets/css/InfoItem.css';

const InfoItem = ({ icon, label, value }) => {
  return (
    <div className="info-item">
      <div className="info-icon">{icon}</div>
      <div className="info-content">
        <p className="info-label">{label}</p>
        <p className="info-value">{value}</p>
      </div>
    </div>
  );
};

export default InfoItem;