import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { AnimatePresence } from 'framer-motion';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  body {
    background: #f8f9fa;
    color: #333;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <AnimatePresence mode='wait'>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </AnimatePresence>
      </Router>
    </>
  );
}

export default App;






// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
// import About from "./components/About";
// import Experience from "./components/Experience";
// // import Projects from "./components/Projects";
// // import Contact from "./components/Contact";
// // import Navbar from "components/Navbar";
// // import Footer from "components/Footer";
// import "./App.css";

// export default function App() {
//   return (
//     <Router>
//       <div className="bg-gradient-to-br from-white to-gray-100 min-h-screen text-gray-900 font-sans">
//         {/* <Navbar /> */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/experience" element={<Experience />} />
//           {/* <Route path="/projects" element={<Projects />} />
//           <Route path="/contact" element={<Contact />} /> */}
//         </Routes>
//         {/* <Footer /> */}
//       </div>
//     </Router>
//   );
// }


// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/Home';
// import './App.css';
// import { AnimatePresence } from 'framer-motion';

// function App() {
//   return (
//     <Router>
//       <AnimatePresence mode='wait'>
//         <Routes>
//           <Route path="/" element={<Home />} />
//         </Routes>
//       </AnimatePresence>
//     </Router>
//   );
// }

// export default App;



// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/Home';
// import './App.css';
// import { AnimatePresence } from 'framer-motion';

// function App() {
//   return (
//     <Router>
//       <AnimatePresence mode='wait'>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           {/* We can add more routes later if needed */}
//         </Routes>
//       </AnimatePresence>
//     </Router>
//   );
// }

// export default App;