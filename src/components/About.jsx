import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaCode, FaServer, FaChessKnight } from 'react-icons/fa';
import  ChessImage from '../assets/chess_profile_2.jpg';

const AboutSection = styled.section`
  padding: 5rem 2rem;
  background: #f5f7fa;
`;

const AboutContainer = styled.div`
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

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutText = styled(motion.div)`
  h3 {
    font-size: 1.8rem;
    color: #203a43;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #555;
    margin-bottom: 1.5rem;
  }
`;

const AboutHighlights = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const HighlightCard = styled(motion.div)`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }

  svg {
    font-size: 2rem;
    color: #4fc3f7;
    margin-bottom: 1rem;
  }

  h4 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: #0f2027;
  }

  p {
    font-size: 0.9rem;
    color: #666;
  }
`;

const AboutImage = styled(motion.div)`
  position: relative;
  height: 500px;
  ${'' /* background: url('https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80') center/cover; */}

background: url(${ChessImage}) center/cover;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: 300px;
    order: -1;
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

const About = () => {
  return (
    <AboutSection id="about">
      <AboutContainer>
        <SectionHeader
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          <div className="divider"></div>
        </SectionHeader>

        <AboutContent>
          <AboutText
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 variants={itemVariants}>
              Full Stack Developer
            </motion.h3>
            <motion.p variants={itemVariants}>
              Result-oriented Full Stack Developer with experience in building scalable and user-friendly web applications. 
              Proficient in Java, Spring Boot, React.js, Node.js, and MySQL, with hands-on expertise in RESTful APIs, 
              microservices, and database design.
            </motion.p>
            <motion.p variants={itemVariants}>
              Experienced in Agile methodologies and CI/CD pipelines. Passionate about solving complex problems and 
              continuously learning emerging technologies.
            </motion.p>

            <AboutHighlights>
              <HighlightCard
                whileHover={{ scale: 1.05 }}
                variants={itemVariants}
              >
                <FaCode />
                <h4>Frontend</h4>
                <p>React.js, Angular, JavaScript, TypeScript, Velocity, HTML, CSS, Bootstrap, </p>
              </HighlightCard>

              <HighlightCard
                whileHover={{ scale: 1.05 }}
                variants={itemVariants}
              >
                <FaServer />
                <h4>Backend</h4>
                <p>Java, Node.js, Python, Spring Boot </p>
              </HighlightCard>

              <HighlightCard
                whileHover={{ scale: 1.05 }}
                variants={itemVariants}
              >
                <FaChessKnight />
                <h4>Chess Player</h4>
                <p>Ranked in international tournaments</p>
              </HighlightCard>
            </AboutHighlights>
          </AboutText>

          <AboutImage
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          />
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;