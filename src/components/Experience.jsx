import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { 
  FaBuilding, 
  FaCalendarAlt, 
  FaMapMarkerAlt,
  // FaChessKnight
} from 'react-icons/fa';
import { 
  SiSpring, 
  SiReact, 
  SiMysql, 
  SiJenkins, 
  SiPerl,
  SiDotnet,
  SiGit,
} from 'react-icons/si';
import { DiScrum } from 'react-icons/di';

const ExperienceSection = styled.section`
  padding: 5rem 2rem;
  background: #f5f7fa;
`;

const ExperienceContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 3rem;
  position: relative;

  h2 {
    font-size: 2.8rem;
    font-weight: 700;
    color: #0f2027;
    margin-bottom: 1rem;
    position: relative;
    display: inline-block;
    
    &:after {
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
    
    &:before {
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      background: #4fc3f7;
      border-radius: 50%;
      left: 0;
      top: -2px;
    }
    
    &:after {
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
`;

const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 3rem;
`;

const ExperienceCard = styled(motion.div)`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border-left: 4px solid transparent;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
    border-left: 4px solid #4fc3f7;
  }

  &:nth-child(odd):hover {
    border-left: 4px solid #29b6f6;
  }

  &:nth-child(even):hover {
    border-left: 4px solid #03a9f4;
  }
`;

const CompanyHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const CompanyLogo = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    max-width: 80%;
    max-height: 80%;
    object-fit: contain;
    will-change: transform;
    loading: lazy;
  }
`;

const CompanyInfo = styled.div`
  flex: 1;

  h3 {
    margin: 0;
    font-size: 1.2rem;
    color: #333;
  }
`;

const CompanyMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #666;

  span {
    display: flex;
    align-items: center;
  }

  svg {
    margin-right: 0.3rem;
    color: #4fc3f7;
  }
`;

const CompanyDescription = styled.div`
  ul {
    padding-left: 1.2rem;
    margin: 1rem 0;
  }

  li {
    margin-bottom: 0.5rem;
    line-height: 1.6;
  }
`;

const TechStack = styled.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #eee;

  h4 {
    margin-bottom: 0.8rem;
    font-size: 1rem;
    color: #555;
  }
`;

const TechIcons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const TechIcon = styled.div`
  font-size: 1.8rem;
  color: #4fc3f7;
  transition: all 0.3s ease;
  padding: 8px;
  border-radius: 8px;
  background: rgba(79, 195, 247, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.2) rotate(5deg);
    color: #0288d1;
    background: rgba(79, 195, 247, 0.2);
    box-shadow: 0 4px 8px rgba(2, 136, 209, 0.2);
  }
`;

const CompanyLink = styled.a`
  display: inline-flex;
  align-items: center;
  margin-top: 1.5rem;
  color: #4fc3f7;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  padding: 8px 16px;
  border-radius: 30px;
  background: rgba(79, 195, 247, 0.1);
  border: 1px solid transparent;

  &:hover {
    color: #0288d1;
    background: rgba(79, 195, 247, 0.2);
    border: 1px solid rgba(79, 195, 247, 0.3);
    box-shadow: 0 4px 8px rgba(2, 136, 209, 0.15);
    transform: translateY(-2px);
  }

  &:after {
    content: '→';
    margin-left: 8px;
    transition: transform 0.3s ease;
  }

  &:hover:after {
    transform: translateX(4px);
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
      stiffness: 100,
      damping: 12,
      duration: 0.6
    }
  }
};

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "GS LAB | GAVS TECHNOLOGIES",
      position: "Software Engineer",
      duration: "December 2024 – Present",
      location: "Chennai, India",
      description: [
        "Developing and maintaining full-stack web applications using Spring Boot for backend and React.js for frontend.",
        "Collaborating with cross-functional teams to design and implement RESTful APIs.",
        "Working on Perl scripts for automation and backend processing.",
        "Ensuring code quality and performance optimization through rigorous testing.",
        "Participating in Agile sprints to deliver high-quality software solutions.",
        "Spearheaded CI/CD implementation with Jenkins and GitLab."
      ],
      logo: "https://www.gslab.com/wp-content/uploads/2022/11/GS-Lab-GAVS-Logo.svg",
      website: "https://www.gslab.com",
      tech: [<SiSpring />, <SiReact />, <SiMysql />,<SiGit/>, <SiJenkins />, <SiPerl />, <DiScrum />]
    },
    {
      id: 2,
      company: "Smart Data Solutions",
      position: "Full Stack Developer",
      duration: "July 2024 – December 2024",
      location: "Chennai, India",
      description: [
        "Developed full-stack applications using React.js and Spring Boot, delivering responsive user interfaces and dynamic functionality.",
        "Designed intuitive frontend interfaces with React and implemented robust backend APIs, ensuring seamless data flow across the system.",
        "Optimized MySQL queries for performance and scalability.",
        "Participated in unit testing and debugging to improve reliability.",
        "Delivered features through CI/CD pipelines, ensuring automated testing and continuous delivery for faster project iteration.",
        "Collaborated in an Agile environment, worked closely with teams to iterate and deliver efficient software solutions."
      ],
      logo: "https://sdata.us/wp-content/uploads/2020/02/SDS-GLOBE.png",
      website: "https://sdata.us/",
      tech: [<SiSpring />, <SiMysql />, <SiDotnet />]
    },
    {
      id: 3,
      company: "Smart Data Solutions",
      position: "Java Developer",
      duration: "June 2023 – July 2024",
      location: "Chennai, India",
      description: [
        "Developed and optimized scalable backend systems using Java, Spring Boot, and Spring MVC, ensuring robust and maintainable architectures.",
        "Designed and implemented RESTful APIs for seamless integration between frontend and backend systems, improving communication and data flow.",
        "Created and managed relational database schemas with MySQL, enhancing performance through indexing and query optimization.",
        "Maintained high code quality with JUnit automated unit tests and rigorous code reviews, ensuring system reliability."
      ],
      logo: "https://sdata.us/wp-content/uploads/2020/02/SDS-GLOBE.png",
      website: "https://sdata.us/",
      tech: [<SiSpring />, <SiMysql />, <SiDotnet />]
    },
    // {
    //   id: 4,
    //   company: "Chess Achievements",
    //   position: "Competitive Player",
    //   duration: "Ongoing",
    //   location: "International",
    //   description: [
    //     "39th Rank in 17th Delhi Open Grandmaster FIDE-rated International Chess Tournament (C Category)",
    //     "2nd Rank in MANNU International FIDE-rated Chess Tournament (B-1350), Hyderabad"
    //   ],
    //   logo: "",
    //   website: "#",
    //   tech: [<FaChessKnight />, <FaChessKnight />]
    // }
  ];

  return (
    <ExperienceSection id="experience">
      <ExperienceContainer>
        <SectionHeader
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Professional Experience</h2>
          <div className="divider"></div>
        </SectionHeader>

        <ExperienceList
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp) => (
            <ExperienceCard 
              key={exp.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <CompanyHeader>
                {exp.logo && (
                  <CompanyLogo>
                    <img 
                      src={exp.logo} 
                      alt={exp.company} 
                      loading="lazy" 
                      width="48" 
                      height="48" 
                    />
                  </CompanyLogo>
                )}
                <CompanyInfo>
                  <h3>{exp.company}</h3>
                  <CompanyMeta>
                    <span><FaBuilding /> {exp.position}</span>
                    <span><FaCalendarAlt /> {exp.duration}</span>
                    <span><FaMapMarkerAlt /> {exp.location}</span>
                  </CompanyMeta>
                </CompanyInfo>
              </CompanyHeader>

              <CompanyDescription>
                <ul>
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </CompanyDescription>

              <TechStack>
                <h4>Technologies Used:</h4>
                <TechIcons>
                  {exp.tech.map((Icon, i) => (
                    <TechIcon key={i}>{Icon}</TechIcon>
                  ))}
                </TechIcons>
              </TechStack>

              {exp.website !== "#" && (
                <CompanyLink href={exp.website} target="_blank" rel="noopener noreferrer">
                  Visit Company Website
                </CompanyLink>
              )}
            </ExperienceCard>
          ))}
        </ExperienceList>
      </ExperienceContainer>
    </ExperienceSection>
  );
};

export default Experience;