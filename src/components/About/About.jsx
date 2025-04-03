import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

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
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="section about" ref={ref}>
      <div className="container">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            About Me
          </motion.h2>

          <div className="about-content">
            <motion.div className="about-text" variants={itemVariants}>
              <p>
                I'm a passionate frontend developer with expertise in React.js and modern JavaScript frameworks. 
                I love creating beautiful, interactive, and user-friendly web applications.
              </p>
              <p>
                With a strong eye for design and attention to detail, I strive to build not only functional 
                but also visually appealing digital experiences.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or enjoying outdoor activities.
              </p>
              <div className="skills-list">
                <ul>
                  <li>JavaScript (ES6+)</li>
                  <li>React.js</li>
                  <li>HTML5 & CSS3</li>
                </ul>
                <ul>
                  <li>Git & GitHub</li>
                  <li>Responsive Design</li>
                  <li>UI/UX Principles</li>
                </ul>
              </div>
            </motion.div>

            <motion.div className="about-image" variants={itemVariants}>
              {/* Replace with your image */}
              <div className="image-placeholder"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;