
import styles from "../assets/css/styles";
import { Github } from 'lucide-react';

const Resume = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Various Projects",
      location: "Kampala, Uganda",
      period: "2020 - Present",
      description: "Specializing in the Java ecosystem with expertise in JavaFX and Spring Boot. Building value-driven solutions and solving complex technical challenges."
    },
    {
      title: "Team Lead",
      company: "Software Development",
      location: "Kampala, Uganda",
      period: "2022 - Present",
      description: "Leading development teams, mentoring engineers, and collaborating to deliver high-quality software solutions."
    },
    {
      title: "Educator & Volunteer",
      company: "Community Programs",
      location: "Kampala, Uganda",
      period: "2021 - Present",
      description: "Providing educational training to refugees and underrepresented communities. Committed to empowering others through technology education."
    }
  ];

  const skills = [
    "Java", "JavaFX", "Spring Boot", "JavaScript", "React", 
    "Machine Learning", "Python", "HTML/CSS", "Git", "Eclipse IDE",
    "Problem Solving", "Team Leadership", "Mentoring"
  ];

  const projects = [
    {
      name: "WellFunctionalityTZ",
      description: "Classification model to predict which wells in Tanzania are functional and which are not. Machine learning project addressing real-world infrastructure challenges.",
      link: "https://github.com/Shemuel2060/WellFunctionalityTZ",
      tech: ["Machine Learning", "Python", "Classification"]
    },
    {
      name: "CS1102-programs",
      description: "Collection of class files and programs built through coursework, demonstrating programming fundamentals and best practices.",
      link: "https://github.com/Shemuel2060/CS1102-programs",
      tech: ["Java", "Programming Fundamentals"]
    },
    {
      name: "LAB8_-Debugging",
      description: "Educational project demonstrating debugging features and techniques in Eclipse IDE.",
      link: "https://github.com/Shemuel2060/LAB8_-Debugging",
      tech: ["Java", "Eclipse IDE", "Debugging"]
    },
    {
      name: "BMI Calculator",
      description: "Practice project building a BMI calculator application using JavaScript.",
      link: "https://github.com/Shemuel2060/bmi_calculator",
      tech: ["JavaScript", "Web Development"]
    },
    {
      name: "CV",
      description: "Personal CV website built with HTML, showcasing web development skills.",
      link: "https://github.com/Shemuel2060/CV",
      tech: ["HTML", "Web Development"]
    }
  ];

  const achievements = [
    {
      name: "Pull Shark",
      count: 2,
      description: "GitHub achievement for contributing pull requests"
    }
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>Resume</h2>
      <div style={styles.titleUnderline}></div>
      
      <div style={styles.resumeContent}>
        {/* Experience Section */}
        <div>
          <h3 style={{...styles.sectionTitle, fontSize: '1.5rem', marginBottom: '1rem'}}>Experience</h3>
          {experiences.map((exp, index) => (
            <div key={index} style={styles.resumeItem}>
              <div style={styles.resumeItemHeader}>
                <div>
                  <h4 style={styles.resumeItemTitle}>{exp.title}</h4>
                  <p style={styles.resumeItemSubtitle}>{exp.company} • {exp.location}</p>
                </div>
                <span style={styles.resumeItemDate}>{exp.period}</span>
              </div>
              <p style={styles.resumeItemDescription}>{exp.description}</p>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div>
          <h3 style={{...styles.sectionTitle, fontSize: '1.5rem', marginBottom: '1rem'}}>Skills</h3>
          <div style={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <span key={index} style={styles.skillTag}>{skill}</span>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <h3 style={{...styles.sectionTitle, fontSize: '1.5rem', marginBottom: '1rem'}}>Projects</h3>
          {projects.map((project, index) => (
            <div key={index} style={styles.resumeItem}>
              <div style={styles.resumeItemHeader}>
                <div style={{ flex: 1 }}>
                  <h4 style={styles.resumeItemTitle}>
                    {project.name}
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={styles.projectLink}
                      onMouseEnter={(e) => e.target.style.opacity = '0.7'}
                      onMouseLeave={(e) => e.target.style.opacity = '1'}
                    >
                      <Github size={16} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '0.25rem' }} />
                    </a>
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} style={{...styles.skillTag, fontSize: '0.75rem', padding: '0.25rem 0.75rem'}}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p style={styles.resumeItemDescription}>{project.description}</p>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div>
          <h3 style={{...styles.sectionTitle, fontSize: '1.5rem', marginBottom: '1rem'}}>Achievements</h3>
          <div>
            {achievements.map((achievement, index) => (
              <div key={index} style={styles.achievementBadge}>
                <span>🏆</span>
                <span>{achievement.name} x{achievement.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interests Section */}
        <div>
          <h3 style={{...styles.sectionTitle, fontSize: '1.5rem', marginBottom: '1rem'}}>Interests</h3>
          <p style={styles.resumeItemDescription}>
            Passionate about Machine Learning and AI. Currently learning programming and looking to collaborate 
            on projects within the world of ML and AI. Committed to continuous growth and solving problems that 
            address unique challenges across the African continent.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resume;
