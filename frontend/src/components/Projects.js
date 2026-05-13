import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";

const Projects = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with real-time inventory management, payment integration, and advanced analytics dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      year: "2024"
    },
    {
      title: "AI-Powered Analytics Tool",
      description: "Machine learning-powered analytics platform that provides predictive insights and automated reporting for businesses.",
      tech: ["Python", "FastAPI", "TensorFlow", "PostgreSQL"],
      year: "2024"
    },
    {
      title: "Social Media Dashboard",
      description: "Unified dashboard for managing multiple social media accounts with scheduling, analytics, and engagement tracking.",
      tech: ["Next.js", "TypeScript", "Tailwind", "AWS"],
      year: "2023"
    },
    {
      title: "Healthcare Management System",
      description: "Comprehensive healthcare platform for patient records, appointment scheduling, and telemedicine consultations.",
      tech: ["React", "Express", "MySQL", "WebRTC"],
      year: "2023"
    }
  ];

  return (
    <section id="projects" className="projects-section" ref={ref}>
      <div className="projects-container">
        <div className={`projects-label ${isVisible ? 'visible' : ''}`}>PORTFOLIO</div>
        
        <h2 className={`projects-title ${isVisible ? 'visible' : ''}`}>
          Featured Projects
        </h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.2 + index * 0.15}s` }}
            >
              <div className="project-image">
                <div className="project-number">{String(index + 1).padStart(2, '0')}</div>
                <div className="project-year">{project.year}</div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href="#" className="project-link">View Project →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;