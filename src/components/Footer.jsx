import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { 
  FiGithub, 
  FiLinkedin, 
  FiMail,
  FiPhone
} from 'react-icons/fi';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';

const FooterContainer = styled.footer`
  background: #0a161b;
  color: white;
  padding: 3rem 2rem;
  text-align: center;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const SocialLink = styled.a`
  color: #b0bec5;
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: #4fc3f7;
    transform: translateY(-3px);
  }
`;

const Copyright = styled.p`
  color: #b0bec5;
  font-size: 0.9rem;
  margin-top: 2rem;
`;

const FooterNav = styled.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const NavLink = styled.a`
  color: white;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #4fc3f7;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <SocialLinks>
            <SocialLink href="https://github.com/sachin-rathod-1" target="_blank" rel="noopener noreferrer">
              <FiGithub />
            </SocialLink>
            <SocialLink href="https://linkedin.com/in/sachin-rathodchess" target="_blank" rel="noopener noreferrer">
              <FiLinkedin />
            </SocialLink>
            <SocialLink href="https://leetcode.com/sachin_rathod" target="_blank" rel="noopener noreferrer">
              <SiLeetcode />
            </SocialLink>
            <SocialLink href="https://www.hackerrank.com/Sachin_Rathod" target="_blank" rel="noopener noreferrer">
              <SiHackerrank />
            </SocialLink>
            <SocialLink href="mailto:rsachin179@gmail.com">
              <FiMail />
            </SocialLink>
            <SocialLink href="tel:+918007540792">
              <FiPhone />
            </SocialLink>
          </SocialLinks>

          <FooterNav>
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#education">Education</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </FooterNav>

          <Copyright>
            &copy; {currentYear} Sachin Rathod. All rights reserved.
          </Copyright>
        </motion.div>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;