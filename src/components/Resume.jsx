import { useThemeStyles } from "../hooks/useThemeStyles";
import ProjectsCard from "./ProjectsCard";

const Resume = () => {
  const styles = useThemeStyles();
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
    "Docker", "Python", "HTML/CSS", "Git", "PHP", "Laravel",
    "Problem Solving", "Team Leadership", "Mentoring"
  ];

  const completedProjects = [
    {
      name: "YDMS",
      description: "A desktop system that helps manage members in groups like churches, saccos, etc.",
      image: "/images/ydms.png",
      tech: ["Java", "JavaFX", "Desktop Application"]
    },
    {
      name: "CSVM",
      description: "A client system for managing data of clients for City Sites Ltd, a Ugandan Real-Estates company.",
      image: "/images/csvm.png",
      tech: ["Java", "JavaFX", "Client Management"]
    }
  ];

  const projects = [
    {
      name: "k2r_Metablic",
      description: "A system for ordering online lab tests, getting them approved by specialists, and getting suggestions and recommendations.",
      image: "/images/k2r_metablic.png",
      tech: ["Web Application", "Lab Management"]
    },
    
    {
      name: "NAC system",
      description: "An online learning platform for Network for Active Citizens on local governance and national budget.",
      image: "/images/nac_system.png",
      tech: ["Webapp"]
    },
    {
      name: "LICW",
      description: "A book exploring several scenarios in the Bible where Christ talks about the moral law.",
      image: "/images/licw.png",
      tech: ["Writing", "Theology"]
    }
  ];

  const projectsToWorkOn = [
    {
      name: "rabita",
      description: "Webapp project.",
      image: "/images/rabita.png",
      tech: ["Webapp"]
    },
    {
      name: "SharePoint",
      description: "Webapp project.",
      image: "/images/sharepoint.png",
      tech: ["Webapp"]
    },
    {
      name: "scholaria",
      description: "A Web project.",
      image: "/images/scholaria.png",
      tech: ["Web Application", "E-Learning"]
    },
    {
      name: "LHTL",
      description: "Book on learning, currently in development.",
      image: "/images/lhtl.png",
      tech: ["Writing", "Education"]
    }
  ];

  const volunteering = [
    {
      title: "Teaching English to Sudanese Refugees",
      description: "Teaching English to Sudanese refugees living in Uganda, helping them integrate and communicate effectively.",
      location: "Uganda"
    },
    {
      title: "Teaching Computer Applications",
      description: "Teaching Computer Application skills to Ugandans, empowering them with digital literacy and technical knowledge.",
      location: "Uganda"
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

        {/* Completed Projects Section */}
        <div>
          <h3 style={{...styles.sectionTitle, fontSize: '1.5rem', marginBottom: '1rem'}}>Completed Projects</h3>
          {completedProjects.map((project, index) => (
            <ProjectsCard key={index} project={project} styles={styles} />
          ))}
        </div>

        {/* Ongoing Projects Section */}
        <div>
          <h3 style={{...styles.sectionTitle, fontSize: '1.5rem', marginBottom: '1rem'}}>Ongoing Projects</h3>
          {projects.map((project, index) => (
            <ProjectsCard key={index} project={project} styles={styles} />
          ))}
        </div>

        {/* Projects to Work On Section */}
        <div>
          <h3 style={{...styles.sectionTitle, fontSize: '1.5rem', marginBottom: '1rem'}}>Projects to Work On</h3>
          {projectsToWorkOn.map((project, index) => (
            <ProjectsCard key={index} project={project} styles={styles} />
          ))}
        </div>

        {/* Volunteering Section */}
        <div>
          <h3 style={{...styles.sectionTitle, fontSize: '1.5rem', marginBottom: '1rem'}}>Volunteering</h3>
          {volunteering.map((volunteer, index) => (
            <div key={index} style={styles.resumeItem}>
              <div style={styles.resumeItemHeader}>
                <div>
                  <h4 style={styles.resumeItemTitle}>{volunteer.title}</h4>
                  <p style={styles.resumeItemSubtitle}>{volunteer.location}</p>
                </div>
              </div>
              <p style={styles.resumeItemDescription}>{volunteer.description}</p>
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
            I am passionate about programming and software architecture, with a strong
            focus on domain-driven design, security systems, and solving complex problems 
            through clean, structured solutions; I also enjoy research, technical writing, 
            teaching, and continuous learning, including language study and thoughtful 
            textual analysis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resume;
