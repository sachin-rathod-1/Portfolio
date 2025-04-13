import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { 
  FaReact,
  FaJava,
  FaDatabase,
  FaGithub,
  FaExternalLinkAlt,
  FaCode
} from 'react-icons/fa';
import { SiSpring, SiHibernate } from 'react-icons/si';


const ProjectsSection = styled.section`
  padding: 5rem 2rem;
  background: white;
`;

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    font-size: 2.5rem;
    color: #0f2027;
    margin-bottom: 1rem;
  }

  .divider {
    width: 80px;
    height: 4px;
    background: #4fc3f7;
    margin: 0 auto;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ProjectCard = styled(motion.div)`
  background: #f8f9fa;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background: ${({ bgImage }) => `url(${bgImage})`} center/cover;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(15, 32, 39, 0.1), rgba(15, 32, 39, 0.8));
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #0f2027;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
`;

const TechPill = styled.span`
  background: rgba(79, 195, 247, 0.2);
  color: #0f2027;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: ${({ variant }) => variant === 'primary' ? '#4fc3f7' : 'transparent'};
  color: ${({ variant }) => variant === 'primary' ? '#0f2027' : '#4fc3f7'};
  border: ${({ variant }) => variant !== 'primary' ? '2px solid #4fc3f7' : 'none'};
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ variant }) => variant === 'primary' ? '#29b6f6' : 'rgba(79, 195, 247, 0.1)'};
    transform: translateY(-2px);
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Event Management System",
      description: "Developed an event management system with intuitive user interface and backend architecture using React and Spring Boot and MySQL. Designed and implemented RESTful API endpoints and database connectivity,Demonstrated skills in full-stack web development, teamwork, and problem-solving. ",
      technologies: ["React.js", "Spring Boot", "Hibernate", "MySQL"],
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      githubLink: "https://github.com/sachin-rathod-1/CDAC-EMS-Project"
    },
  ];

  const getTechIcon = (tech) => {
    switch(tech) {
      case 'React.js': return <FaReact />;
      case 'Spring Boot': return <SiSpring />;
      case 'Hibernate': return <SiHibernate />;
      case 'MySQL': return <FaDatabase />;
      case 'Java': return <FaJava />;
      default: return <FaCode />;
    }
  };

  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <SectionHeader
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Featured Projects</h2>
          <div className="divider"></div>
        </SectionHeader>

        <ProjectsGrid
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <ProjectImage bgImage={project.image} />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                
                <TechStack>
                  {project.technologies.map((tech, i) => (
                    <TechPill key={i}>
                      {getTechIcon(tech)} {tech}
                    </TechPill>
                  ))}
                </TechStack>

                <ProjectLinks>
                  <ProjectLink 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    variant="secondary"
                  >
                    <FaGithub /> Code
                  </ProjectLink>
                  <ProjectLink 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    variant="primary"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;