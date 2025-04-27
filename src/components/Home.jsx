import React, { useState, useEffect, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Header from './Header';
import Hero from './Hero';
import Loading from './Loading';
import { FiChevronUp } from 'react-icons/fi';

const About = lazy(() => import('./About'));
const Skills = lazy(() => import('./Skills'));
const Experience = lazy(() => import('./Experience'));
const Projects = lazy(() => import('./Projects'));
const Education = lazy(() => import('./Education'));
const Contact = lazy(() => import('./Contact'));
const Footer = lazy(() => import('./Footer'));

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
      <Suspense fallback={<Loading />}>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </Suspense>

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