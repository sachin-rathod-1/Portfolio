import React, { useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
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
  padding: 8rem 2rem;
  background: linear-gradient(to bottom, #f8f9fa, #e9f5f9);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: linear-gradient(45deg, rgba(79, 195, 247, 0.1), rgba(3, 169, 244, 0.05));
    top: -150px;
    right: -150px;
    z-index: 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: linear-gradient(45deg, rgba(79, 195, 247, 0.05), rgba(3, 169, 244, 0.02));
    bottom: -200px;
    left: -200px;
    z-index: 0;
  }
`;

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
  position: relative;

  h2 {
    font-size: 3rem;
    font-weight: 700;
    color: #0f2027;
    margin-bottom: 1rem;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      height: 4px;
      background: linear-gradient(90deg, #29b6f6, #4fc3f7, #81d4fa);
      border-radius: 4px;
    }
  }

  .divider {
    width: 120px;
    height: 4px;
    background: transparent;
    margin: 1.5rem auto 0;
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      background: #4fc3f7;
      border-radius: 50%;
      left: 0;
      top: -2px;
    }
    
    &::after {
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      background: #4fc3f7;
      border-radius: 50%;
      right: 0;
      top: -2px;
    }
  }
  
  p {
    max-width: 600px;
    margin: 1.5rem auto 0;
    color: #555;
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(79, 195, 247, 0.05), rgba(3, 169, 244, 0.05));
    z-index: -1;
    opacity: 0;
    transition: opacity 0.5s ease;
  }
  
  &:hover {
    transform: translateY(-15px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
    
    &::before {
      opacity: 1;
    }
  }
`;

const ProjectImage = styled(motion.div)`
  height: 240px;
  background: ${({ bgImage }) => `url(${bgImage})`} center/cover;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(15, 32, 39, 0.1), rgba(15, 32, 39, 0.8));
    transition: all 0.5s ease;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(79, 195, 247, 0.2);
    z-index: 1;
    opacity: 0;
    transition: all 0.5s ease;
  }
  
  ${ProjectCard}:hover &::before {
    opacity: 1;
  }
  
  ${ProjectCard}:hover &::after {
    opacity: 0.7;
  }
`;

const ProjectImageOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 32, 39, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.5s ease;
  z-index: 2;
  
  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const ViewProjectButton = styled(motion.button)`
  background: white;
  color: #0f2027;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectContent = styled(motion.div)`
  padding: 2rem;
`;

const ProjectTitle = styled(motion.h3)`
  font-size: 1.8rem;
  color: #0f2027;
  margin-bottom: 1rem;
  font-weight: 700;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 40px;
    height: 3px;
    background: #4fc3f7;
    transition: width 0.3s ease;
  }
  
  ${ProjectCard}:hover &::after {
    width: 100%;
  }
`;

const ProjectDescription = styled(motion.p)`
  color: #555;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-size: 1rem;
`;

const TechStack = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 2rem;
`;

const TechPill = styled(motion.span)`
  background: rgba(79, 195, 247, 0.1);
  color: #0f2027;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  border: 1px solid transparent;
  
  &:hover {
    background: rgba(79, 195, 247, 0.2);
    transform: translateY(-3px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
    border-color: rgba(79, 195, 247, 0.3);
  }
  
  svg {
    color: #4fc3f7;
  }
`;

const ProjectLinks = styled(motion.div)`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const ProjectLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: ${({ variant }) => variant === 'primary' ? '#4fc3f7' : 'transparent'};
  color: ${({ variant }) => variant === 'primary' ? '#0f2027' : '#4fc3f7'};
  border: ${({ variant }) => variant !== 'primary' ? '2px solid #4fc3f7' : 'none'};
  border-radius: 30px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: ${({ variant }) => variant === 'primary' ? '#29b6f6' : 'rgba(79, 195, 247, 0.1)'};
    transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
    z-index: -1;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    
    &::before {
      width: 100%;
    }
  }
  
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 50, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 12,
      duration: 0.8
    }
  }
};

const headerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.8
    }
  }
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.5
    }
  }
};

const descriptionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.2
    }
  }
};

const techStackVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const techPillVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  },
  hover: {
    y: -5,
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10
    }
  }
};

const linksVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 0.4,
      staggerChildren: 0.1,
      delayChildren: 0.5
    }
  }
};

const linkVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  },
  hover: {
    scale: 1.05,
    y: -5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10
    }
  },
  tap: {
    scale: 0.95
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3
    }
  }
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.1 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const projects = [
  {
    id: 1,
    title: "SaChess – Real Time Chess Web Application",
    description: "Built a real-time multiplayer chess platform with puzzle solving, social features, and global leaderboards. Implemented the frontend with React.js and Material-UI, and designed backend architecture with Spring Boot, JWT authentication, and WebSockets. Integrated Stockfish engine for puzzle validation and personalized training.",
    technologies: ["React.js", "Material-UI", "Spring Boot", "WebSockets", "JWT", "Stockfish"],
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1366740/ss_a669ab650dc0358e938f0f2630a484ca6b3c2a33.1920x1080.jpg?t=1693568695?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    githubLink: "https://github.com/sachin-rathod-1/sachess-webapp",
    demoLink: ""
  },
  {
    id: 2,
    title: "Event Management System",
    description: "Developed an event management system with intuitive user interface and backend architecture using React and Spring Boot and MySQL. Designed and implemented RESTful API endpoints and database connectivity, demonstrating skills in full-stack web development, teamwork, and problem-solving.",
    technologies: ["React.js", "Spring Boot", "Hibernate", "MySQL"],
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    githubLink: "https://github.com/sachin-rathod-1/CDAC-EMS-Project",
    demoLink: ""
  }
]


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
    <ProjectsSection id="projects" ref={ref}>
      <ProjectsContainer>
        <SectionHeader
          variants={headerVariants}
          initial="hidden"
          animate={controls}
        >
          <h2>Featured Projects</h2>
          <div className="divider"></div>
          <p>Here are some of my recent projects that showcase my skills and experience in full-stack development.</p>
        </SectionHeader>

        <ProjectsGrid
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <ProjectImage 
                bgImage={project.image}
                variants={imageVariants}
                whileHover="hover"
              >
                <ProjectImageOverlay
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <ViewProjectButton
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open(project.demoLink || project.githubLink, '_blank')}
                  >
                    <FaExternalLinkAlt /> View Project
                  </ViewProjectButton>
                </ProjectImageOverlay>
              </ProjectImage>
              
              <ProjectContent>
                <ProjectTitle
                  variants={titleVariants}
                >
                  {project.title}
                </ProjectTitle>
                
                <ProjectDescription
                  variants={descriptionVariants}
                >
                  {project.description}
                </ProjectDescription>
                
                <TechStack
                  variants={techStackVariants}
                >
                  {project.technologies.map((tech, i) => (
                    <TechPill 
                      key={i}
                      variants={techPillVariants}
                      whileHover="hover"
                    >
                      {getTechIcon(tech)} {tech}
                    </TechPill>
                  ))}
                </TechStack>

                <ProjectLinks
                  variants={linksVariants}
                >
                  <ProjectLink 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    variant="secondary"
                    variants={linkVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <FaGithub /> View Code
                  </ProjectLink>
                  
                  {project.demoLink && (
                    <ProjectLink 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      variant="primary"
                      variants={linkVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </ProjectLink>
                  )}
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