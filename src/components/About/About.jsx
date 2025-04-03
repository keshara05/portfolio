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
            <span className="title-decorator">{'//'}</span> About Me
          </motion.h2>

          <div className="about-content">
            <motion.div className="about-text" variants={itemVariants}>
              <p className="about-paragraph">
                I'm a passionate <span className="highlight">frontend developer</span> with expertise in React.js and modern JavaScript frameworks. 
                I love creating beautiful, interactive, and user-friendly web applications.
              </p>
              <p className="about-paragraph">
                With a strong eye for design and attention to detail, I strive to build not only functional 
                but also <span className="highlight">visually appealing</span> digital experiences.
              </p>
              <p className="about-paragraph">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or enjoying outdoor activities.
              </p>
              
              <h3 className="skills-title">Technologies I work with:</h3>
              <div className="skills-list">
                <ul>
                  <li><span className="skill-icon">⚡</span>JavaScript (ES6+)</li>
                  <li><span className="skill-icon">⚡</span>React.js</li>
                  <li><span className="skill-icon">⚡</span>HTML5 & CSS3</li>
                </ul>
                <ul>
                  <li><span className="skill-icon">⚡</span>Git & GitHub</li>
                  <li><span className="skill-icon">⚡</span>Responsive Design</li>
                  <li><span className="skill-icon">⚡</span>UI/UX Principles</li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              className="about-image" 
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="image-container">
                <div className="image-placeholder"></div>
                <div className="image-border"></div>
                <div className="image-dots"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;