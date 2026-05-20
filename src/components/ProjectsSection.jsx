import ProjectsCard from "./ProjectsCard";
import { motion } from 'framer-motion';
import YDMS from '../assets/images/ydms_desktop.png';
import k2r_Metablic from '../assets/images/k2r_portal.png';
import nac_slogbaa from '../assets/images/nac_slogbaa.png';

const ProjectsSection = () => {
  const completedProjects = [
    {
      name: "YDMS",
      description: "A desktop system that helps manage members in groups like churches, saccos, etc.",
      image: YDMS,
      tech: ["Java", "JavaFX", "Desktop Application"]
    },
    {
      name: "k2r_Metablic",
      description: "A system for ordering online lab tests, getting them approved by specialists, and getting suggestions and recommendations.",
      image: k2r_Metablic,
      tech: ["Web Application", "Lab Management"]
    },
    {
      name: "CSVM",
      description: "A client system for managing data of clients for City Sites Ltd, a Ugandan Real-Estates company.",
      image: null,
      tech: ["Java", "JavaFX", "Client Management"]
    }
  ];

  const projects = [
    {
      name: "NAC SLOGBAA",
      description: "An online learning platform for Network for Active Citizens on local governance and national budget.",
      image: nac_slogbaa,
      tech: ["Webapp", "CIVIC EDUCATION", "E-learning"]
    },
    {
      name: "LICW",
      description: "A book exploring several scenarios in the Bible where Christ talks about the moral law.",
      image: null,
      tech: ["Writing", "Theology"]
    }
  ];

  const projectsToWorkOn = [
    {
      name: "rabita",
      description: "Webapp project.",
      image: null,
      tech: ["Webapp"]
    },
    {
      name: "scholaria",
      description: "A Web project.",
      image: null,
      tech: ["Web Application", "E-Learning"]
    },
    {
      name: "LHTL",
      description: "Book exploring the methodologies and approaches to independent learning and directed learning.",
      image: null,
      tech: ["Writing", "Education"]
    },
    {
      name: "3LLC",
      description: "A book investigating the three major failed attempts of Lucifer to win Christ and His church.",
      image: null,
      tech: ["Writing", "Spiritual"]
    }
  ];

  return (
    <>
      {/* Completed Projects Section */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
          <span className="text-yellow-500 text-3xl">•</span> Completed Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {completedProjects.map((project, index) => (
            <ProjectsCard key={index} project={project} />
          ))}
        </div>
      </motion.div>

      {/* Ongoing Projects Section */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
          <span className="text-yellow-500 text-3xl">•</span> Ongoing Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectsCard key={index} project={project} />
          ))}
        </div>
      </motion.div>

      {/* Projects to Work On Section */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
          <span className="text-yellow-500 text-3xl">•</span> Next Up
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsToWorkOn.map((project, index) => (
            <ProjectsCard key={index} project={project} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default ProjectsSection;
