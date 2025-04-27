import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { createGlobalStyle } from 'styled-components';
import Loading from './components/Loading';

const Home = lazy(() => import('./components/Home'));

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  body {
    background: #f8f9fa;
    color: #333;
    line-height: 1.6;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ::selection {
    background: rgba(79, 195, 247, 0.3);
    color: #0288d1;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #4fc3f7;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #0288d1;
  }
`;

function App() {
  useEffect(() => {
    const setVh = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVh();

    window.addEventListener('resize', setVh);
    window.addEventListener('orientationchange', setVh);

    return () => {
      window.removeEventListener('resize', setVh);
      window.removeEventListener('orientationchange', setVh);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <Router>
        <AnimatePresence mode='wait'>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </Router>
    </>
  );
}

export default App;