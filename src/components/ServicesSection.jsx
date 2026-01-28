
import { useThemeStyles } from "../hooks/useThemeStyles";
import ServiceCard from './ServiceCard';
import { Code, BookOpen, Coffee, Users, GraduationCap } from 'lucide-react';

const ServicesSection = () => {
  const styles = useThemeStyles();
  const services = [
    {
      icon: <Code size={40} color="#eab308" strokeWidth={1.5} />,
      title: 'Website Development',
      description: 'Building modern, responsive web applications using React, JavaScript, PHP, and Laravel. Creating high-quality, professional websites and web systems.'
    },
    {
      icon: <Coffee size={40} color="#eab308" strokeWidth={1.5} />,
      title: 'Java Development',
      description: 'Specializing in Java ecosystem development with JavaFX and Spring Boot. Building desktop applications and enterprise solutions.'
    },
    {
      icon: <BookOpen size={40} color="#eab308" strokeWidth={1.5} />,
      title: 'Writing',
      description: 'Authoring books and educational content. Exploring theological and educational topics through written works.'
    },
    {
      icon: <Users size={40} color="#eab308" strokeWidth={1.5} />,
      title: 'Team Leadership',
      description: 'Leading development teams, mentoring engineers, and fostering collaborative environments to deliver exceptional software solutions.'
    },
    {
      icon: <GraduationCap size={40} color="#eab308" strokeWidth={1.5} />,
      title: 'Education & Mentoring',
      description: 'Teaching and empowering others through technology education, including training refugees and underrepresented communities.'
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