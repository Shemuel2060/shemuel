import ServiceCard from './ServiceCard';
import { Code, BookOpen, Coffee, Users, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  const services = [
    {
      icon: <Code size={36} className="text-yellow-500" strokeWidth={1.5} />,
      title: 'Website Development',
      description: 'Building modern, responsive web applications using React, JavaScript, PHP, and Laravel. Creating high-quality, professional websites and web systems.'
    },
    {
      icon: <Coffee size={36} className="text-yellow-500" strokeWidth={1.5} />,
      title: 'Java Development',
      description: 'Specializing in Java ecosystem development with JavaFX and Spring Boot. Building desktop applications and enterprise solutions.'
    },
    {
      icon: <BookOpen size={36} className="text-yellow-500" strokeWidth={1.5} />,
      title: 'Writing',
      description: 'Authoring books and educational content. Exploring theological and educational topics through written works.'
    },
    {
      icon: <Users size={36} className="text-yellow-500" strokeWidth={1.5} />,
      title: 'Team Leadership',
      description: 'Leading development teams, mentoring engineers, and fostering collaborative environments to deliver exceptional software solutions.'
    },
    {
      icon: <GraduationCap size={36} className="text-yellow-500" strokeWidth={1.5} />,
      title: 'Education & Mentoring',
      description: 'Teaching and empowering others through technology education, including training refugees and underrepresented communities.'
    }
  ];

  return (
    <section className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">What I Do</h2>
        <div className="w-16 h-1.5 bg-yellow-500 rounded-full mb-10"></div>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <ServiceCard 
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;