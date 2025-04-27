import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import styled from 'styled-components';
import { 
  SiSpring, 
  SiReact, 
  SiJavascript, 
  SiPython,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiHibernate,
  SiDotnet,
  SiAngular,
  SiApache ,
  SiFlutter 
} from 'react-icons/si';

import { 
    FaServer, 
    FaCode, 
    FaDatabase, 
    FaMicrosoft,
    FaJava ,
    FaAws 
  } from 'react-icons/fa';


const SkillsSection = styled.section`
  padding: 8rem 2rem;
  background: linear-gradient(to bottom, #e9f5f9, #f8f9fa);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: linear-gradient(45deg, rgba(79, 195, 247, 0.05), rgba(3, 169, 244, 0.02));
    top: -200px;
    left: -200px;
    z-index: 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: linear-gradient(45deg, rgba(79, 195, 247, 0.05), rgba(3, 169, 244, 0.02));
    bottom: -150px;
    right: -150px;
    z-index: 0;
  }
`;

const SkillsContainer = styled.div`
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

const SkillsCategories = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCategory = styled(motion.div)`
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  z-index: 1;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, #29b6f6, #4fc3f7);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s ease;
    z-index: 1;
  }
  
  &:hover {
    transform: translateY(-15px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    
    &::before {
      transform: scaleX(1);
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, rgba(79, 195, 247, 0.1) 0%, rgba(255, 255, 255, 0) 70%);
    z-index: 0;
    opacity: 0;
    transition: opacity 0.5s ease;
  }
  
  &:hover::after {
    opacity: 1;
  }
`;

const CategoryHeader = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  position: relative;

  svg {
    font-size: 2rem;
    color: #4fc3f7;
    margin-right: 1.2rem;
    filter: drop-shadow(0 2px 5px rgba(79, 195, 247, 0.3));
    transition: all 0.3s ease;
    
    ${SkillCategory}:hover & {
      transform: scale(1.2) rotate(10deg);
      color: #29b6f6;
    }
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 700;
    color: #0f2027;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: #4fc3f7;
      transition: width 0.3s ease;
    }
    
    ${SkillCategory}:hover &::after {
      width: 100%;
    }
  }
`;

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 1.2rem;
  position: relative;
  z-index: 2;
`;

const SkillItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 1rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
  height: 120px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(79, 195, 247, 0.05), rgba(3, 169, 244, 0.02));
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    border-color: rgba(79, 195, 247, 0.3);
    
    &::before {
      opacity: 1;
    }
  }

  svg {
    font-size: 2.5rem;
    color: #4fc3f7;
    margin-bottom: 0.8rem;
    transition: all 0.3s ease;
    filter: drop-shadow(0 2px 5px rgba(79, 195, 247, 0.2));
    
    &:hover {
      transform: scale(1.2) rotate(10deg);
      color: #29b6f6;
    }
  }

  span {
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
    color: #333;
    transition: all 0.3s ease;
  }
  
  &:hover span {
    color: #0f2027;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #29b6f6, #4fc3f7);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const categoryVariants = {
  hidden: { y: 50, opacity: 0, scale: 0.95 },
  visible: custom => ({
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 12,
      delay: custom * 0.1,
      duration: 0.8
    }
  }),
  hover: {
    y: -15,
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10
    }
  }
};

const headerVariants = {
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

const skillsGridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2
    }
  }
};

const skillItemVariants = {
  hidden: { y: 20, opacity: 0, scale: 0.8 },
  visible: custom => ({
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: custom * 0.03,
      duration: 0.5
    }
  }),
  hover: {
    y: -10,
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10
    }
  }
};

const iconVariants = {
  hidden: { rotate: -10, scale: 0.8, opacity: 0 },
  visible: {
    rotate: 0,
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10
    }
  },
  hover: {
    rotate: 10,
    scale: 1.2,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10
    }
  }
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const skillCategories = [
    {
      id: 1,
      title: "Programming Languages",
      icon: <FaCode />,
      skills: [
        { name: "Java", icon: <FaJava /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Python", icon: <SiPython /> },
        { name: "SQL", icon: <FaDatabase /> },
        { name: "C#", icon: <FaMicrosoft /> },
      ]
    },
    {
      id: 2,
      title: "Web Development",
      icon: <FaCode />,
      skills: [
        { name: "React", icon: <SiReact /> },
        { name: "Angular", icon: <SiAngular /> },
        { name: "Spring Boot", icon: <SiSpring /> },
        { name: "Node.js", icon: <FaServer /> },
        { name: "Flutter", icon: <SiFlutter /> },
        { name: ".NET", icon: <SiDotnet /> },
        { name: "HTML/CSS", icon: <FaCode /> },
        { name: "Velocity", icon: <SiApache title="Apache Velocity" /> }
      ]
    },
    {
      id: 3,
      title: "DevOps & Cloud",
      icon: <FaServer />,
      skills: [
        { name: "Docker", icon: <SiDocker /> },
        { name: "Kubernetes", icon: <SiKubernetes /> },
        { name: "AWS", icon: <FaAws  /> },
        { name: "Azure", icon: <FaMicrosoft /> },
        { name: "CI/CD", icon: <SiGit /> }
      ]
    },
    {
      id: 4,
      title: "Databases",
      icon: <FaDatabase />,
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MongoDB", icon: <FaDatabase /> }
      ]
    },
    {
      id: 5,
      title: "Mobile & Others",
      icon: <FaCode />,
      skills: [
        { name: "Flutter", icon: <SiFlutter /> },
        { name: "Git", icon: <SiGit /> },
        { name: "REST APIs", icon: <FaServer /> },
        { name: "Hibernate", icon: <SiHibernate /> }
      ]
    }
  ];

  return (
    <SkillsSection id="skills" ref={ref}>
      <SkillsContainer>
        <SectionHeader
          variants={headerVariants}
          initial="hidden"
          animate={controls}
        >
          <h2>Technical Skills</h2>
          <div className="divider"></div>
          <p>
            My expertise spans across various technologies and frameworks, enabling me to build robust and scalable applications.
          </p>
        </SectionHeader>

        <SkillsCategories
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={category.id}
              variants={categoryVariants}
              custom={index}
              whileHover="hover"
            >
              <CategoryHeader
                variants={headerVariants}
              >
                <motion.div
                  variants={iconVariants}
                  whileHover="hover"
                >
                  {category.icon}
                </motion.div>
                <h3>{category.title}</h3>
              </CategoryHeader>
              
              <SkillsGrid
                variants={skillsGridVariants}
              >
                {category.skills.map((skill, idx) => (
                  <SkillItem 
                    key={idx}
                    variants={skillItemVariants}
                    custom={idx}
                    whileHover="hover"
                  >
                    <motion.div
                      variants={iconVariants}
                      whileHover="hover"
                    >
                      {skill.icon}
                    </motion.div>
                    <span>{skill.name}</span>
                  </SkillItem>
                ))}
              </SkillsGrid>
            </SkillCategory>
          ))}
        </SkillsCategories>
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;