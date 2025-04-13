import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaGraduationCap, FaCertificate, FaUniversity, FaEye  } from 'react-icons/fa';

const EducationSection = styled.section`
  padding: 5rem 2rem;
  background: #f5f7fa;
`;

const EducationContainer = styled.div`
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

const EducationTimeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 3rem auto 0;
  padding-left: 2rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 30px;
    height: 100%;
    width: 2px;
    background: #4fc3f7;
  }
`;

const EducationItem = styled(motion.div)`
  position: relative;
  margin-bottom: 2.5rem;
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 30px;
    left: -40px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #4fc3f7;
    border: 4px solid white;
  }
`;

const EducationHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  svg {
    font-size: 1.5rem;
    color: #4fc3f7;
    margin-right: 1rem;
  }

  h3 {
    font-size: 1.3rem;
    color: #203a43;
  }
`;

const EducationMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #666;

  span {
    display: flex;
    align-items: center;

    svg {
      font-size: 1rem;
      margin-right: 0.3rem;
    }
  }
`;

const EducationDescription = styled.p`
  color: #555;
  line-height: 1.6;
`;

const Certifications = styled.div`
  margin-top: 4rem;
`;

const CertificationsTitle = styled.h3`
  text-align: center;
  font-size: 1.8rem;
  color: #0f2027;
  margin-bottom: 2rem;
`;

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const ViewButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: #4fc3f7;
  font-size: 0.9rem;
  cursor: pointer;
  padding: 0;
  transition: all 0.3s ease;

  &:hover {
    color: #29b6f6;
    text-decoration: underline;
  }
`;

const CertificationCard = styled(motion.div)`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }

  h4 {
    font-size: 1.2rem;
    color: #203a43;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;

    svg {
      color: #4fc3f7;
      margin-right: 0.5rem;
    }
  }

  p {
    color: #666;
    font-size: 0.9rem;
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

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Post Graduate Diploma in Advanced Computing (PG-DAC)",
      institution: "C-DAC ACTS, Pune, India",
      year: "2023",
      percentage: "84.63%",
      description: "Focus on Java, Web-Based Java Programming, OOP, Database Technologies, Software development methodologies, Data Structures, Algorithms, Design Patterns, Project Management Concepts, Agile Methodology, Cloud Computing Basics, Python Programming and .NET Technologies."
    },
    {
      id: 2,
      degree: "Bachelor of Engineering",
      institution: "Government College of Engineering and Research, Pune, India",
      year: "2020",
      percentage: "64%",
      description: ""
    }
  ];

  const certifications = [
    {
      id: 1,
      title: "Generative AI for Everyone",
      issuer: "C-DAC Advanced Computing",
      score: "84.63%",
      viewUrl: "https://www.coursera.org/account/accomplishments/verify/C1D5NJP2PTSL"
    },
    {
      id: 2,
      title: "MS-CIT",
      issuer: "Maharashtra State Board",
      score: "90%",
      viewUrl: "https://www.cdac.ac.in/portal/certificate.php?certificate=40237"
    },
    {
      id: 3,
      title: "HackerRank Java Certification",
      issuer: "HackerRank",
      viewUrl: "https://www.hackerrank.com/certificates/534691d291e1"
    },
    {
      id: 4,
      title: "HackerRank Problem Solving",
      issuer: "HackerRank",
      viewUrl: "https://www.hackerrank.com/certificates/fb6f74a52037"
    }
  ];

  return (
    <EducationSection id="education">
      <EducationContainer>
        <SectionHeader
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Education & Certifications</h2>
          <div className="divider"></div>
        </SectionHeader>

        <EducationTimeline
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {educationData.map((edu) => (
            <EducationItem
              key={edu.id}
              variants={itemVariants}
            >
              <EducationHeader>
                <FaGraduationCap />
                <h3>{edu.degree}</h3>
              </EducationHeader>
              <EducationMeta>
                <span><FaUniversity /> {edu.institution}</span>
                <span>📅 {edu.year}</span>
                <span>🎯 {edu.percentage}</span>
              </EducationMeta>
              <EducationDescription>{edu.description}</EducationDescription>
            </EducationItem>
          ))}
        </EducationTimeline>

        <Certifications>
          <CertificationsTitle>Certifications</CertificationsTitle>
          <CertificationsGrid>
            {certifications.map((cert) => (
              <CertificationCard
                key={cert.id}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
              >
                <h4><FaCertificate /> {cert.title}</h4>
                <p><strong>Issuer:</strong> {cert.issuer}</p>
                {cert.score && <p><strong>Score:</strong> {cert.score}</p>}
                <ViewButton 
                onClick={() => window.open(cert.viewUrl, '_blank')}
              >
                <FaEye /> View Certificate
              </ViewButton>
                {/* <p><a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer">View Certificate</a></p> */}
              </CertificationCard>
            ))}
          </CertificationsGrid>
        </Certifications>
      </EducationContainer>
    </EducationSection>
  );
};

export default Education;