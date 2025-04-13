import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';
import Contact from './Contact';
import Footer from './Footer';
import Loading from './Loading';
import { FiChevronUp } from 'react-icons/fi';

const HomeContainer = styled(motion.div)`
  position: relative;
  max-width: 100vw;
  overflow-x: hidden;
`;

const ScrollToTopButton = styled(motion.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #4fc3f7;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <HomeContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />

      {showScroll && (
        <ScrollToTopButton
          onClick={scrollToTop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiChevronUp size={24} />
        </ScrollToTopButton>
      )}
    </HomeContainer>
  );
};

export default Home;