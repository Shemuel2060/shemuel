import { useState } from 'react';
import { useThemeStyles } from "../hooks/useThemeStyles";
import ProfileCard from '../components/ProfileCard';

const Portfolio = () => {
  const styles = useThemeStyles();
  const projects = [
    {
      name: "YDMS",
      description: "A desktop system that helps manage members in groups like churches, saccos, etc.",
      image: "/images/ydms.png",
      tech: ["Java", "JavaFX", "Desktop Application"],
      category: "Desktop Application"
    },
    {
      name: "CSVM",
      description: "A client system for managing data of clients for City Sites Ltd, a Ugandan Real-Estates company.",
      image: "/images/csvm.png",
      tech: ["Java", "JavaFX", "Client Management"],
      category: "Desktop Application"
    },
    {
      name: "k2r_Metablic",
      description: "A system for ordering online lab tests, getting them approved by specialists, and getting suggestions and recommendations.",
      image: "/images/k2r_metablic.png",
      tech: ["Web Application", "Lab Management"],
      category: "Web Application"
    },
    {
      name: "scholaria",
      description: "A personal project for online class creation and running along with topic and room specific group discussions.",
      image: "/images/scholaria.png",
      tech: ["Web Application", "E-Learning"],
      category: "Web Application"
    },
    {
      name: "LICW",
      description: "A book exploring several scenarios in the Bible where Christ talks about the moral law.",
      image: "/images/licw.png",
      tech: ["Writing", "Theology"],
      category: "Writing"
    }
  ];

  const projectsToWorkOn = [
    {
      name: "rabita",
      description: "Webapp project in development.",
      image: "/images/rabita.png",
      tech: ["Webapp"],
      category: "Web Application"
    },
    {
      name: "NAC system",
      description: "Webapp project in development.",
      image: "/images/nac_system.png",
      tech: ["Webapp"],
      category: "Web Application"
    },
    {
      name: "SharePoint",
      description: "Webapp project in development.",
      image: "/images/sharepoint.png",
      tech: ["Webapp"],
      category: "Web Application"
    },
    {
      name: "LHTL",
      description: "Book on learning, currently in development.",
      image: "/images/lhtl.png",
      tech: ["Writing", "Education"],
      category: "Writing"
    }
  ];

  const projectCardStyle = {
    backgroundColor: '#18181b',
    border: '1px solid #27272a',
    borderRadius: '0.75rem',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  };

  const projectCardHoverStyle = {
    ...projectCardStyle,
    transform: 'translateY(-4px)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
    borderColor: 'rgba(234, 179, 8, 0.3)',
  };

  const ProjectCard = ({ project, isUpcoming = false }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        style={isHovered ? projectCardHoverStyle : projectCardStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {project.image && (
          <div style={{ position: 'relative', width: '100%', height: '200px', overflow: 'hidden' }}>
            <img
              src={project.image}
              alt={project.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.3s ease',
                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
              }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            {isUpcoming && (
              <div style={{
                position: 'absolute',
                top: '0.5rem',
                right: '0.5rem',
                backgroundColor: 'rgba(234, 179, 8, 0.9)',
                color: '#000',
                padding: '0.25rem 0.75rem',
                borderRadius: '0.5rem',
                fontSize: '0.75rem',
                fontWeight: 600,
              }}>
                Coming Soon
              </div>
            )}
          </div>
        )}
        <div style={{ padding: '1.5rem' }}>
          <h3 style={{
            color: 'white',
            fontSize: '1.25rem',
            fontWeight: 600,
            marginBottom: '0.5rem',
          }}>
            {project.name}
          </h3>
          <p style={{
            color: '#9ca3af',
            fontSize: '0.875rem',
            lineHeight: 1.6,
            marginBottom: '1rem',
          }}>
            {project.description}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.tech.map((tech, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: 'rgba(234, 179, 8, 0.1)',
                  border: '1px solid rgba(234, 179, 8, 0.3)',
                  color: '#eab308',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={styles.app}>
      <div style={styles.container}>
        <aside style={styles.sidebar}>
          <ProfileCard />
        </aside>
        
        <main style={styles.mainContent}>
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Portfolio</h2>
            <div style={styles.titleUnderline}></div>
            <p style={{
              color: '#9ca3af',
              fontSize: '1rem',
              lineHeight: 1.75,
              marginBottom: '3rem',
            }}>
              A collection of my projects, showcasing my work in software development, writing, and education.
            </p>

            {/* Completed Projects */}
            <div style={{ marginBottom: '4rem' }}>
              <h3 style={{
                ...styles.sectionTitle,
                fontSize: '1.5rem',
                marginBottom: '1.5rem',
              }}>
                Completed Projects
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '2rem',
              }}>
                {projects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            </div>

            {/* Projects to Work On */}
            <div>
              <h3 style={{
                ...styles.sectionTitle,
                fontSize: '1.5rem',
                marginBottom: '1.5rem',
              }}>
                Projects in Development
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '2rem',
              }}>
                {projectsToWorkOn.map((project, index) => (
                  <ProjectCard key={index} project={project} isUpcoming={true} />
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Portfolio;
