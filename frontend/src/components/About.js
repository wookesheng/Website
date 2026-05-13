import React, { useEffect, useRef, useState } from "react";
import "./About.css";

const About = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="about-container">
        <div className={`about-label ${isVisible ? 'visible' : ''}`}>ABOUT ME</div>
        
        <div className="about-content">
          <div className={`about-image ${isVisible ? 'visible' : ''}`}>
            <div className="image-placeholder">
              <div className="image-text">JD</div>
            </div>
            <div className="image-decoration"></div>
          </div>
          
          <div className={`about-text ${isVisible ? 'visible' : ''}`}>
            <h2 className="about-title">Passionate Developer & Designer</h2>
            <p className="about-description">
              I'm a full-stack developer with a passion for creating elegant solutions to complex problems. With over 5 years of experience in web development, I specialize in building scalable applications that prioritize user experience and performance.
            </p>
            <p className="about-description">
              My journey in tech started with a curiosity about how things work, which evolved into a career dedicated to crafting digital experiences that make a difference. I believe in clean code, thoughtful design, and continuous learning.
            </p>
            <p className="about-description">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
            
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">30+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;