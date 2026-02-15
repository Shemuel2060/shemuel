const ProjectsCard = ({ project, styles }) => {
  return (
    <div style={styles.resumeItem}>
      {project.image && (
        <img
          src={project.image}
          alt={project.name}
          style={styles.projectImage}
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      )}
      <div style={styles.resumeItemHeader}>
        <div style={{ flex: 1 }}>
          <h4 style={styles.resumeItemTitle}>{project.name}</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.5rem" }}>
            {project.tech.map((tech, techIndex) => (
              <span key={techIndex} style={{ ...styles.skillTag, fontSize: "0.75rem", padding: "0.25rem 0.75rem" }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      <p style={styles.resumeItemDescription}>{project.description}</p>
    </div>
  );
};

export default ProjectsCard;
