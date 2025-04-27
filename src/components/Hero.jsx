import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';
import styled from 'styled-components';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiDownload } from 'react-icons/fi';
import { SiLeetcode, SiHackerrank, SiWhatsapp } from 'react-icons/si';
import profilePhoto from '../assets/profile.jpg';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 clamp(1rem, 5vw, 2rem);
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

  .animated-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 0;
    overflow: hidden;
  }

  .circle {
    position: absolute;
    border-radius: 50%;
    background: rgba(79, 195, 247, 0.1);
    backdrop-filter: blur(10px);
    z-index: 0;
  }

  .circle-1 {
    width: clamp(150px, 30vw, 300px);
    height: clamp(150px, 30vw, 300px);
    top: -75px;
    right: -75px;
    
    @media (min-width: 768px) {
      top: -150px;
      right: -150px;
    }
  }

  .circle-2 {
    width: clamp(250px, 40vw, 500px);
    height: clamp(250px, 40vw, 500px);
    bottom: -125px;
    left: -125px;
    
    @media (min-width: 768px) {
      bottom: -250px;
      left: -250px;
    }
  }

  .circle-3 {
    width: clamp(100px, 20vw, 200px);
    height: clamp(100px, 20vw, 200px);
    top: 30%;
    right: 10%;
    background: rgba(3, 169, 244, 0.05);
  }

  .floating-shape {
    position: absolute;
    background: linear-gradient(45deg, rgba(79, 195, 247, 0.2), rgba(3, 169, 244, 0.1));
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    z-index: 0;
    animation: morphing 15s ease-in-out infinite;
  }

  .shape-1 {
    width: clamp(200px, 40vw, 400px);
    height: clamp(200px, 40vw, 400px);
    top: 10%;
    right: -100px;
    animation-delay: 0s;
    
    @media (min-width: 768px) {
      right: -200px;
    }
  }

  .shape-2 {
    width: clamp(150px, 30vw, 300px);
    height: clamp(150px, 30vw, 300px);
    bottom: 10%;
    left: -75px;
    animation-delay: -5s;
    
    @media (min-width: 768px) {
      left: -150px;
    }
  }

  @keyframes morphing {
    0% {
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    }
    25% {
      border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
    }
    50% {
      border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
    }
    75% {
      border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
    }
    100% {
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    }
  }

  .particle {
    position: absolute;
    width: 5px;
    height: 5px;
    background: rgba(79, 195, 247, 0.5);
    border-radius: 50%;
    z-index: 0;
  }

  .particle-1 {
    top: 20%;
    left: 20%;
    animation: float 20s linear infinite;
  }

  .particle-2 {
    top: 70%;
    left: 60%;
    animation: float 15s linear infinite;
    animation-delay: -5s;
  }

  .particle-3 {
    top: 30%;
    left: 80%;
    animation: float 18s linear infinite;
    animation-delay: -10s;
  }

  .particle-4 {
    top: 80%;
    left: 10%;
    animation: float 22s linear infinite;
    animation-delay: -7s;
  }

  .particle-5 {
    top: 50%;
    left: 50%;
    animation: float 25s linear infinite;
    animation-delay: -12s;
  }

  @keyframes float {
    0% {
      transform: translate(0, 0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: translate(100px, -100px);
      opacity: 0;
    }
  }
  
  @media (max-width: 480px) {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;

const HeroContainer = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  position: relative;
  z-index: 1;
  padding-top: clamp(40px, 8vh, 80px);
  gap: clamp(1.5rem, 4vw, 2rem);

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  @media (max-width: 480px) {
    padding-top: 20px;
  }
`;

const HeroContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  
  @media (max-width: 992px) {
    align-items: center;
    order: 2;
    padding: 0 clamp(0.5rem, 3vw, 1.5rem);
  }
`;

const ProfileImageContainer = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 992px) {
    order: 1;
    margin-bottom: clamp(1rem, 4vw, 2rem);
  }
`;

const ProfileImage = styled(motion.div)`
  width: clamp(250px, 35vw, 350px);
  height: clamp(250px, 35vw, 350px);
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  overflow: hidden;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
  border: 4px solid rgba(79, 195, 247, 0.5);
  position: relative;
  z-index: 2;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: clamp(200px, 70vw, 280px);
    height: clamp(200px, 70vw, 280px);
  }
  
  @media (max-width: 480px) {
    width: clamp(180px, 60vw, 220px);
    height: clamp(180px, 60vw, 220px);
  }
`;

const ImageBackground = styled(motion.div)`
  position: absolute;
  width: clamp(250px, 35vw, 350px);
  height: clamp(250px, 35vw, 350px);
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  background: rgba(79, 195, 247, 0.2);
  z-index: 1;
  top: 20px;
  left: 20px;
  
  @media (max-width: 768px) {
    width: clamp(200px, 70vw, 280px);
    height: clamp(200px, 70vw, 280px);
    top: 15px;
    left: 15px;
  }
  
  @media (max-width: 480px) {
    width: clamp(180px, 60vw, 220px);
    height: clamp(180px, 60vw, 220px);
    top: 10px;
    left: 10px;
  }
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  width: clamp(40px, 6vw, 60px);
  height: clamp(40px, 6vw, 60px);
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  z-index: 3;
  font-size: clamp(1rem, 1.5vw, 1.5rem);
  color: #0f2027;
  
  &.element-1 {
    top: 0;
    right: 30%;
    
    @media (max-width: 480px) {
      top: -5%;
      right: 20%;
    }
  }
  
  &.element-2 {
    bottom: 10%;
    right: 0;
    
    @media (max-width: 480px) {
      bottom: 5%;
      right: -5%;
    }
  }
  
  &.element-3 {
    bottom: 30%;
    left: 0;
    
    @media (max-width: 480px) {
      bottom: 20%;
      left: -5%;
    }
  }
  
  @media (max-width: 480px) {
    width: clamp(30px, 10vw, 40px);
    height: clamp(30px, 10vw, 40px);
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(2rem, 5vw, 4.5rem);
  margin-bottom: clamp(0.5rem, 2vw, 1rem);
  line-height: 1.2;
  font-weight: 800;
  background: linear-gradient(to right, #ffffff, #4fc3f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  
  @media (max-width: 992px) {
    text-align: center;
  }
  
  @media (max-width: 480px) {
    font-size: clamp(1.8rem, 8vw, 2.5rem);
  }
`;

const Highlight = styled(motion.span)`
  position: relative;
  display: inline-block;
  color: #4fc3f7;
  -webkit-text-fill-color: #4fc3f7;
  text-fill-color: #4fc3f7;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 5px;
    left: 0;
    width: 100%;
    height: clamp(4px, 1vw, 8px);
    background: rgba(79, 195, 247, 0.3);
    z-index: -1;
    border-radius: 4px;
    
    @media (max-width: 480px) {
      bottom: 2px;
    }
  }
`;

const HeroSubtitle = styled(motion.h2)`
  font-size: clamp(1.2rem, 3vw, 2.2rem);
  margin-bottom: clamp(1rem, 3vw, 1.5rem);
  color: #b0bec5;
  font-weight: 600;
  
  @media (max-width: 992px) {
    text-align: center;
  }
  
  @media (max-width: 480px) {
    font-size: clamp(1rem, 5vw, 1.5rem);
  }
`;

const HeroDescription = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.2rem);
  max-width: 600px;
  margin-bottom: clamp(1.5rem, 4vw, 2rem);
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);

  @media (max-width: 992px) {
    text-align: center;
    margin: 0 auto 2rem;
    font-size: clamp(0.9rem, 2vw, 1.1rem);
    max-width: 90%;
  }
  
  @media (max-width: 768px) {
    font-size: clamp(0.85rem, 2vw, 1rem);
  }
  
  @media (max-width: 480px) {
    line-height: 1.6;
  }
`;

const TypedText = styled(motion.span)`
  position: relative;
  
  &::after {
    content: '|';
    position: absolute;
    right: -8px;
    animation: blink 1s infinite;
  }
  
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: clamp(0.8rem, 2vw, 1.5rem);
  margin-bottom: clamp(2rem, 5vw, 3rem);

  @media (max-width: 992px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 1rem;
  }
`;

const Button = styled(motion.a)`
  padding: clamp(0.7rem, 2vw, 1rem) clamp(1.2rem, 3vw, 2rem);
  border-radius: 50px;
  font-weight: 600;
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 0.5rem;
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
    transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
    z-index: -1;
  }

  &.primary {
    background: #4fc3f7;
    color: #0f2027;
    box-shadow: 0 4px 15px rgba(79, 195, 247, 0.4);
    
    &::before {
      background: #29b6f6;
    }

    &:hover {
      transform: translateY(-5px) scale(1.02);
      box-shadow: 0 15px 30px rgba(79, 195, 247, 0.5);
      
      &::before {
        width: 100%;
      }
    }
  }

  &.secondary {
    border: 2px solid #4fc3f7;
    color: #4fc3f7;
    
    &::before {
      background: rgba(79, 195, 247, 0.1);
    }

    &:hover {
      transform: translateY(-5px) scale(1.02);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
      
      &::before {
        width: 100%;
      }
    }
  }
  
  &.resume {
    background: transparent;
    border: 2px solid rgba(255, 255, 255, 0.2);
    color: white;
    
    &::before {
      background: rgba(255, 255, 255, 0.1);
    }
    
    &:hover {
      border-color: rgba(255, 255, 255, 0.4);
      transform: translateY(-5px) scale(1.02);
      
      &::before {
        width: 100%;
      }
    }
  }
  
  @media (max-width: 480px) {
    width: 80%;
    padding: 0.8rem 1rem;
  }
`;

const HeroSocials = styled(motion.div)`
  display: flex;
  gap: clamp(0.8rem, 2vw, 1.5rem);
  margin-top: clamp(1.5rem, 3vw, 2rem);
  flex-wrap: wrap;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    gap: clamp(0.5rem, 3vw, 1rem);
  }
`;

const SocialIcon = styled(motion.a)`
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  color: #b0bec5;
  transition: all 0.3s ease;
  width: clamp(40px, 6vw, 50px);
  height: clamp(40px, 6vw, 50px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    color: #4fc3f7;
    transform: translateY(-5px) rotate(10deg);
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(79, 195, 247, 0.3);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 480px) {
    width: clamp(35px, 10vw, 40px);
    height: clamp(35px, 10vw, 40px);
    font-size: clamp(1rem, 4vw, 1.2rem);
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: clamp(1rem, 3vw, 2rem);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-size: clamp(0.7rem, 1.5vw, 0.9rem);
  
  .mouse {
    width: clamp(20px, 4vw, 30px);
    height: clamp(30px, 6vw, 50px);
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    padding-top: clamp(6px, 2vw, 10px);
    margin-bottom: clamp(5px, 2vw, 10px);
  }
  
  .wheel {
    width: clamp(3px, 0.5vw, 4px);
    height: clamp(6px, 1vw, 8px);
    background: white;
    border-radius: 2px;
    animation: scroll 1.5s infinite;
  }
  
  @keyframes scroll {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(15px);
      opacity: 0;
    }
  }
  
  @media (max-width: 480px) {
    bottom: 0.5rem;
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
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.8
    }
  }
};

const imageContainerVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 15,
      duration: 1
    }
  }
};

const imageVariants = {
  hidden: { scale: 0.9, opacity: 0, rotate: -10 },
  visible: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 15,
      duration: 1.2,
      delay: 0.3
    }
  }
};

const backgroundVariants = {
  hidden: { scale: 0.7, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 15,
      duration: 1,
      delay: 0.2
    }
  }
};

const floatingElementVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (custom) => ({
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 10,
      delay: 1 + (custom * 0.2)
    }
  }),
  float: (custom) => ({
    y: [0, -15, 0],
    rotate: [0, custom, 0],
    transition: {
      y: {
        repeat: Infinity,
        duration: 3,
        ease: "easeInOut",
        delay: custom * 0.2
      },
      rotate: {
        repeat: Infinity,
        duration: 4,
        ease: "easeInOut",
        delay: custom * 0.1
      }
    }
  })
};

const socialVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (custom) => ({
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 1.2 + (custom * 0.1)
    }
  }),
  hover: {
    scale: 1.2,
    rotate: 10,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10
    }
  }
};

const buttonVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: (custom) => ({
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 0.8 + (custom * 0.2)
    }
  }),
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

const highlightVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 0.5
    }
  }
};

const scrollIndicatorVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 2,
      duration: 0.8
    }
  },
  float: {
    y: [0, -10, 0],
    transition: {
      y: {
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut"
      }
    }
  }
};

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      controls.start("float");
    }
  }, [controls, isInView]);

  const [typedText, setTypedText] = useState("");
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  
  const desktopText = "Building scalable and user-friendly web applications with Java, Spring Boot, and React.js";
  const tabletText = "Building scalable web applications with Java, Spring Boot, and React.js";
  const mobileText = "Building web apps with Java and React.js";
  
  const fullText = windowWidth > 992 ? desktopText : windowWidth > 480 ? tabletText : mobileText;
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setTypedText("");
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 50);
      
      return () => clearTimeout(timeout);
    }
  }, [typedText, fullText]);

  const showAllElements = windowWidth > 480;

  return (
    <HeroSection id="home" ref={ref}>
      <div className="animated-bg">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        {showAllElements && <div className="circle circle-3"></div>}
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        {showAllElements && (
          <>
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
            <div className="particle particle-5"></div>
          </>
        )}
      </div>
      
      <HeroContainer
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        style={{ opacity, y }}
      >
        <HeroContent>
          <HeroTitle variants={itemVariants}>
            Hi, I'm <Highlight variants={highlightVariants}>Sachin Rathod</Highlight>
          </HeroTitle>
          
          <HeroSubtitle variants={itemVariants}>
            Software Engineer | Full Stack Developer
          </HeroSubtitle>
          
          <HeroDescription variants={itemVariants}>
            <TypedText>{typedText}</TypedText>
          </HeroDescription>
          
          <HeroButtons>
            <Button 
              href="#contact" 
              className="primary"
              variants={buttonVariants}
              custom={0}
              whileHover="hover"
              whileTap="tap"
            >
              Contact Me
            </Button>
            
            <Button 
              href="#projects" 
              className="secondary"
              variants={buttonVariants}
              custom={1}
              whileHover="hover"
              whileTap="tap"
            >
              View Projects
            </Button>
            
            {windowWidth > 480 && (
              <Button 
                href="https://drive.google.com/file/d/1Lf0rKw9jyivoa3QgjNjmF5qkWuW8gCmn/view?usp=drive_link" 
                className="resume"
                variants={buttonVariants}
                custom={2}
                whileHover="hover"
                whileTap="tap"
              >
                <FiDownload /> Resume
              </Button>
            )}
          </HeroButtons>

          <HeroSocials>
            <SocialIcon 
              href="https://github.com/sachin-rathod-1" 
              target="_blank" 
              rel="noopener noreferrer"
              variants={socialVariants}
              custom={0}
              whileHover="hover"
            >
              <FiGithub />
            </SocialIcon>
            
            <SocialIcon 
              href="https://linkedin.com/in/sachin-rathodchess" 
              target="_blank" 
              rel="noopener noreferrer"
              variants={socialVariants}
              custom={1}
              whileHover="hover"
            >
              <FiLinkedin />
            </SocialIcon>
            
            <SocialIcon 
              href="https://leetcode.com/sachin_rathod" 
              target="_blank" 
              rel="noopener noreferrer"
              variants={socialVariants}
              custom={2}
              whileHover="hover"
            >
              <SiLeetcode />
            </SocialIcon>
            
            <SocialIcon 
              href="https://www.hackerrank.com/Sachin_Rathod" 
              target="_blank" 
              rel="noopener noreferrer"
              variants={socialVariants}
              custom={3}
              whileHover="hover"
            >
              <SiHackerrank />
            </SocialIcon>
            
            <SocialIcon 
              href="mailto:rsachin179@gmail.com"
              variants={socialVariants}
              custom={4}
              whileHover="hover"
            >
              <FiMail />
            </SocialIcon>
            
            {windowWidth > 480 && (
              <>
                <SocialIcon 
                  href="https://wa.me/+918007540792"
                  variants={socialVariants}
                  custom={5}
                  whileHover="hover"
                >
                  <SiWhatsapp />
                </SocialIcon>
                
                <SocialIcon 
                  href="tel:+918007540792"
                  variants={socialVariants}
                  custom={6}
                  whileHover="hover"
                >
                  <FiPhone />
                </SocialIcon>
              </>
            )}
          </HeroSocials>
        </HeroContent>
        
        <ProfileImageContainer
          variants={imageContainerVariants}
        >
          <ProfileImage
            variants={imageVariants}
            animate={controls}
            whileHover={{ scale: 1.05, rotate: 5, transition: { duration: 0.3 } }}
          >
            <img src={profilePhoto} alt="Sachin Rathod" loading="eager" />
          </ProfileImage>
          
          <ImageBackground
            variants={backgroundVariants}
            animate={controls}
          />
          
          <FloatingElement 
            className="element-1"
            variants={floatingElementVariants}
            custom={5}
            animate={controls}
          >
            <SiLeetcode />
          </FloatingElement>
          
          <FloatingElement 
            className="element-2"
            variants={floatingElementVariants}
            custom={-5}
            animate={controls}
          >
            <FiGithub />
          </FloatingElement>
          
          <FloatingElement 
            className="element-3"
            variants={floatingElementVariants}
            custom={10}
            animate={controls}
          >
            <FiLinkedin />
          </FloatingElement>
        </ProfileImageContainer>
      </HeroContainer>
      
      {windowWidth > 480 && (
        <ScrollIndicator
          variants={scrollIndicatorVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div>Scroll Down</div>
        </ScrollIndicator>
      )}
    </HeroSection>
  );
};

export default Hero;