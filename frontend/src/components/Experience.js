import React, { useEffect, useRef, useState } from "react";
import "./Experience.css";

const Experience = () => {
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

  const experiences = [
    {
      role: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description: "Leading development of scalable web applications, mentoring junior developers, and architecting cloud-based solutions.",
      achievements: [
        "Led migration to microservices architecture, improving system performance by 40%",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Mentored team of 5 junior developers"
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client projects, focusing on responsive design and API integrations.",
      achievements: [
        "Built e-commerce platform serving 10,000+ daily users",
        "Reduced application load time by 50% through optimization",
        "Integrated third-party APIs for payment and shipping"
      ]
    },
    {
      role: "Frontend Developer",
      company: "Creative Web Studio",
      period: "2019 - 2020",
      description: "Specialized in creating engaging user interfaces with modern JavaScript frameworks.",
      achievements: [
        "Developed 15+ responsive websites for various clients",
        "Implemented design system increasing development speed by 30%",
        "Collaborated with design team to improve UX workflows"
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section" ref={ref}>
      <div className="experience-container">
        <div className={`experience-label ${isVisible ? 'visible' : ''}`}>WORK EXPERIENCE</div>
        
        <h2 className={`experience-title ${isVisible ? 'visible' : ''}`}>
          Professional Journey
        </h2>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`experience-item ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.2 + index * 0.2}s` }}
            >
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                <div className="marker-line"></div>
              </div>
              
              <div className="experience-card">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-role">{exp.role}</h3>
                    <div className="experience-company">{exp.company}</div>
                  </div>
                  <div className="experience-period">{exp.period}</div>
                </div>
                
                <p className="experience-description">{exp.description}</p>
                
                <div className="experience-achievements">
                  {exp.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="achievement-item">
                      <span className="achievement-bullet">✦</span>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;