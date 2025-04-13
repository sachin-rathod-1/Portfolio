import React from 'react';
import { motion } from 'framer-motion';
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
  padding: 5rem 2rem;
  background: white;
`;

const SkillsContainer = styled.div`
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

const SkillsCategories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const SkillCategory = styled(motion.div)`
  background: #f8f9fa;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;

  svg {
    font-size: 1.5rem;
    color: #4fc3f7;
    margin-right: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    color: #203a43;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
`;

const SkillItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  svg {
    font-size: 2rem;
    color: #4fc3f7;
    margin-bottom: 0.5rem;
  }

  span {
    font-size: 0.9rem;
    text-align: center;
    color: #555;
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
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

const Skills = () => {
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
    <SkillsSection id="skills">
      <SkillsContainer>
        <SectionHeader
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Technical Skills</h2>
          <div className="divider"></div>
        </SectionHeader>

        <SkillsCategories
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category) => (
            <SkillCategory 
              key={category.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <CategoryHeader>
                {category.icon}
                <h3>{category.title}</h3>
              </CategoryHeader>
              <SkillsGrid>
                {category.skills.map((skill, index) => (
                  <SkillItem 
                    key={index}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill.icon}
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