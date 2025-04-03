import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Projects.css';

//Import your project images
//import Crichub from './assets/images/Crichub.png';
//import KMaths from './assets/images/K-Maths.png';
//import Hero from './assets/images/hero-image.jpg';

const projectsData = [
  {
    id: 1,
    title: 'CricHub',
    description: 'A cricket statistics platform with live scores, player profiles, and match analysis.',
    tags: ['React', 'Node.js', 'MongoDB', 'API'],
    //image: Crichub,
    github: '#',
    live: '#'
  },
  {
    id: 2,
    title: 'K-Maths',
    description: 'An interactive math learning app with problem-solving exercises and progress tracking.',
    tags: ['React', 'Firebase', 'Material UI'],
    //image: KMaths,
    github: '#',
    live: '#'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Real-time weather information with forecasts and interactive maps using weather API.',
    tags: ['JavaScript', 'API Integration', 'CSS3'],
    //image: Hero,
    github: '#',
    live: '#'
  }
];

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'React', 'JavaScript', 'API'];

  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.tags.includes(activeFilter));

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="section projects" ref={ref}>
      <div className="container">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            My Projects
          </motion.h2>

          <motion.div 
            className="project-filters" 
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {filters.map((filter, index) => (
              <motion.button
                key={index}
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
                whileHover={{ scale: 1.05, backgroundColor: '#6c63ff', color: 'white' }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                {filter}
              </motion.button>
            ))}
          </motion.div>

          <motion.div 
            className="projects-grid" 
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                className="project-card"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="project-image">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-img"
                    loading="lazy"
                  />
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <h3>{project.title}</h3>
                      <div className="overlay-tags">
                        {project.tags.map((tag, index) => (
                          <span key={index}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-links">
                    <motion.a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="github-link"
                    >
                      GitHub
                    </motion.a>
                    <motion.a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="live-link"
                    >
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;