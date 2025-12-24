
import styles from "../assets/css/styles";
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  const services = [
    {
      icon: '🎨',
      title: 'Web Design',
      description: 'The most modern and high-quality design made at a professional level.'
    },
    {
      icon: '💻',
      title: 'Web Development',
      description: 'High-quality development of sites at the professional level.'
    },
    {
      icon: '📱',
      title: 'Mobile Apps',
      description: 'Professional development of applications for iOS and Android.'
    },
    {
      icon: '📷',
      title: 'Photography',
      description: 'I make high-quality photos of any category at a professional level.'
    }
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>What I'm Doing</h2>
      <div style={styles.titleUnderline}></div>
      
      <div style={styles.servicesGrid}>
        {services.map((service, index) => (
          <ServiceCard 
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;