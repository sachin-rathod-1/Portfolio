import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import { SiLeetcode, SiHackerrank, SiWhatsapp } from 'react-icons/si';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') no-repeat center center/cover;
    opacity: 0.1;
    z-index: 0;
  }
`;

const HeroContainer = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  z-index: 1;
  padding-top: 80px;
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: 1rem;
  line-height: 1.2;
`;

const Highlight = styled.span`
  color: #4fc3f7;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: #4fc3f7;
    transform: scaleX(0);
    transform-origin: right;
    animation: underline 1.5s ease-in-out forwards;
  }

  @keyframes underline {
    to {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;

const HeroSubtitle = styled(motion.h2)`
  font-size: clamp(1.5rem, 3vw, 2rem);
  margin-bottom: 1.5rem;
  color: #b0bec5;
`;

const HeroDescription = styled(motion.p)`
  font-size: 1.2rem;
  max-width: 600px;
  margin-bottom: 2rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Button = styled.a`
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  &.primary {
    background: #4fc3f7;
    color: #0f2027;

    &:hover {
      background: #29b6f6;
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
  }

  &.secondary {
    border: 2px solid #4fc3f7;
    color: #4fc3f7;

    &:hover {
      background: rgba(79, 195, 247, 0.1);
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
  }
`;

const HeroSocials = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SocialIcon = styled.a`
  font-size: 1.5rem;
  color: #b0bec5;
  transition: all 0.3s ease;

  &:hover {
    color: #4fc3f7;
    transform: translateY(-3px);
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

const Hero = () => {
  return (
    <HeroSection id="home">
      <HeroContainer
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <HeroTitle variants={itemVariants}>
          Hi, I'm <Highlight>Sachin Rathod</Highlight>
        </HeroTitle>
        <HeroSubtitle variants={itemVariants}>
          Software Engineer | Full Stack Developer
        </HeroSubtitle>
        <HeroDescription variants={itemVariants}>
          Building scalable and user-friendly web applications with Java, Spring Boot, and React.js
        </HeroDescription>
        <HeroButtons variants={itemVariants}>
          <Button href="#contact" className="primary">
            Contact Me
          </Button>
          <Button href="#projects" className="secondary">
            View Projects
          </Button>
        </HeroButtons>

        <HeroSocials variants={itemVariants}>
          <SocialIcon href="https://github.com/sachin-rathod-1" target="_blank" rel="noopener noreferrer">
            <FiGithub />
          </SocialIcon>
          <SocialIcon href="https://linkedin.com/in/sachin-rathodchess" target="_blank" rel="noopener noreferrer">
            <FiLinkedin />
          </SocialIcon>
          <SocialIcon href="https://leetcode.com/sachin_rathod" target="_blank" rel="noopener noreferrer">
            <SiLeetcode />
          </SocialIcon>
          <SocialIcon href="https://www.hackerrank.com/Sachin_Rathod" target="_blank" rel="noopener noreferrer">
            <SiHackerrank />
          </SocialIcon>
          <SocialIcon href="mailto:rsachin179@gmail.com">
            <FiMail />
          </SocialIcon>
          <SocialIcon href="https://wa.me/+918007540792">
            <SiWhatsapp />
          </SocialIcon>
          <SocialIcon href="tel:+918007540792">
            <FiPhone />
          </SocialIcon>
        </HeroSocials>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;