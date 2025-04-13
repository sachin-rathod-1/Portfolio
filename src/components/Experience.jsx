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

const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 3rem;
`;

const ExperienceCard = styled(motion.div)`
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
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

  img {
    max-width: 80%;
    max-height: 80%;
    object-fit: contain;
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
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

const CompanyLink = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  color: #4fc3f7;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    color: #29b6f6;
    text-decoration: underline;
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
                    <img src={exp.logo} alt={exp.company} />
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







// // // /components/Experience.jsx
// // import React from "react";
// // import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
// // import "react-vertical-timeline-component/style.min.css";
// // import { FaLaptopCode, FaUniversity } from "react-icons/fa";

// // export default function Experience() {
// //   return (
// //     <div className="py-16 px-6 bg-gray-50">
// //       <h2 className="text-4xl font-bold text-center text-indigo-600 mb-12">Experience</h2>

// //       <VerticalTimeline lineColor="#4f46e5">
// //         <VerticalTimelineElement
// //           className="vertical-timeline-element--work"
// //           contentStyle={{ background: "#6366f1", color: "#fff" }}
// //           contentArrowStyle={{ borderRight: "7px solid  #6366f1" }}
// //           date="Dec 2024 – Present"
// //           iconStyle={{ background: "#4f46e5", color: "#fff" }}
// //           icon={<FaLaptopCode />}
// //         >
// //           <h3 className="vertical-timeline-element-title">Software Engineer</h3>
// //           <h4 className="vertical-timeline-element-subtitle">GS LAB | GAVS Technologies, Chennai</h4>
// //           <p>
// //             Full-stack development with Spring Boot and React, API design, automation with Perl,
// //             CI/CD pipelines with Jenkins & GitLab, MySQL optimization.
// //           </p>
// //         </VerticalTimelineElement>

// //         <VerticalTimelineElement
// //           className="vertical-timeline-element--work"
// //           contentStyle={{ background: "#4f46e5", color: "#fff" }}
// //           contentArrowStyle={{ borderRight: "7px solid  #4f46e5" }}
// //           date="July 2024 – Dec 2024"
// //           iconStyle={{ background: "#4f46e5", color: "#fff" }}
// //           icon={<FaLaptopCode />}
// //         >
// //           <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
// //           <h4 className="vertical-timeline-element-subtitle">Smart Data Solutions, Chennai</h4>
// //           <p>
// //             Java + Spring Boot backend services, MySQL queries, unit testing, debugging,
// //             and RESTful services.
// //           </p>
// //         </VerticalTimelineElement>

// //         <VerticalTimelineElement
// //           className="vertical-timeline-element--education"
// //           contentStyle={{ background: "#dbeafe", color: "#1e3a8a" }}
// //           contentArrowStyle={{ borderRight: "7px solid  #93c5fd" }}
// //           date="2023"
// //           iconStyle={{ background: "#3b82f6", color: "#fff" }}
// //           icon={<FaUniversity />}
// //         >
// //           <h3 className="vertical-timeline-element-title">PG-DAC</h3>
// //           <h4 className="vertical-timeline-element-subtitle">C-DAC ACTS, Pune</h4>
// //           <p>Advanced Java, Web-based Java programming, DB technologies, .NET</p>
// //         </VerticalTimelineElement>
// //       </VerticalTimeline>
// //     </div>
// //   );
// // }


// // components/Experience.jsx
// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
// import { SiSpring, SiReact, SiMysql, SiJenkins, SiPerl } from 'react-icons/si';
// import { DiScrum } from 'react-icons/di';
// import './Experience.css';

// const experiences = [
//   {
//     id: 1,
//     company: "GS LAB | GAVS TECHNOLOGIES",
//     position: "Software Engineer",
//     duration: "December 2024 – Present",
//     location: "Chennai, India",
//     description: [
//       "Developing and maintaining full-stack web applications using Spring Boot for backend and React.js for frontend.",
//       "Collaborating with cross-functional teams to design and implement RESTful APIs.",
//       "Working on Perl scripts for automation and backend processing.",
//       "Ensuring code quality and performance optimization through rigorous testing.",
//       "Participating in Agile sprints to deliver high-quality software solutions.",
//       "Spearheaded CI/CD implementation with Jenkins and GitLab."
//     ],
//     logo: "https://www.gslab.com/wp-content/uploads/2021/05/GSLab-Logo.svg",
//     website: "https://www.gslab.com",
//     tech: [<SiSpring />, <SiReact />, <SiMysql />, <SiJenkins />, <SiPerl />, <DiScrum />]
//   },
//   // Other experiences similarly...
// ];

// const Experience = () => {
//   const container = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const item = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5
//       }
//     }
//   };

//   return (
//     <section id="experience" className="experience-section">
//       <motion.div
//         className="section-header"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         viewport={{ once: true }}
//       >
//         <h2>Professional Experience</h2>
//         <div className="section-divider"></div>
//       </motion.div>

//       <motion.div
//         className="experience-container"
//         variants={container}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         {experiences.map((exp) => (
//           <motion.div key={exp.id} className="experience-card" variants={item}>
//             <div className="company-header">
//               <div className="company-logo-container">
//                 <img src={exp.logo} alt={exp.company} className="company-logo" />
//               </div>
//               <div className="company-info">
//                 <h3>{exp.company}</h3>
//                 <div className="company-meta">
//                   <span><FaBuilding /> {exp.position}</span>
//                   <span><FaCalendarAlt /> {exp.duration}</span>
//                   <span><FaMapMarkerAlt /> {exp.location}</span>
//                 </div>
//               </div>
//             </div>
//             <div className="company-description">
//               <ul>
//                 {exp.description.map((desc, i) => (
//                   <li key={i}>{desc}</li>
//                 ))}
//               </ul>
//             </div>
//             <div className="tech-stack">
//               <h4>Technologies Used:</h4>
//               <div className="tech-icons">
//                 {exp.tech.map((Icon, i) => (
//                   <span key={i} className="tech-icon">{Icon}</span>
//                 ))}
//               </div>
//             </div>
//             <a href={exp.website} target="_blank" rel="noopener noreferrer" className="company-link">
//               Visit Company Website
//             </a>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default Experience;