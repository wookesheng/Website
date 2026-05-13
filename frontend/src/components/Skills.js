import React, { useEffect, useRef, useState } from "react";
import "./Skills.css";

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "TypeScript", "HTML/CSS", "Tailwind", "Next.js"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "FastAPI", "Express", "PostgreSQL", "MongoDB"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "Figma", "REST APIs", "GraphQL"]
    }
  ];

  return (
    <section id="skills" className="skills-section" ref={ref}>
      <div className="skills-container">
        <div className={`skills-label ${isVisible ? 'visible' : ''}`}>SKILLS & EXPERTISE</div>
        
        <h2 className={`skills-title ${isVisible ? 'visible' : ''}`}>
          Technologies I Work With
        </h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className={`skill-category ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.2 + catIndex * 0.15}s` }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="skill-item"
                    style={{ transitionDelay: `${0.4 + (catIndex * 0.15) + (skillIndex * 0.05)}s` }}
                  >
                    <span className="skill-icon">✦</span>
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;