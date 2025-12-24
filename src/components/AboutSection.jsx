
import styles from "../assets/css/styles";

const AboutSection = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>About Me</h2>
      <div style={styles.titleUnderline}></div>
      
      <div style={styles.aboutContent}>
        <p>
          I am a self-driven software engineer specializing in the Java ecosystem, 
          with expertise in JavaFX and Spring Boot. Based in Kampala, Uganda, I thrive 
          on solving complex technical challenges and collaborating with teams to build
          value-driven solutions. Beyond coding, I am committed to leadership and 
          empowerment—mentoring others to reach their full potential and volunteering 
          my time to provide educational training to refugees and underrepresented 
          communities.
        </p>
        <p>
          My daily mission is continuous growth, evolving not only as a solutions 
          engineer but as a well-rounded individual. I am driven to inspire others 
          to recognize the profound impact of problem-solving within a global 
          context—specifically by developing innovative solutions that address the 
          unique challenges and opportunities across the African continent.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;