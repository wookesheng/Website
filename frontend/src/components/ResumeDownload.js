import React from "react";
import "./ResumeDownload.css";

const ResumeDownload = () => {
  const handleDownload = () => {
    // Create a simple demo resume content
    const resumeContent = `
JOHN DOE
Full Stack Developer & Creative Designer

EMAIL: john.doe@example.com
PHONE: +1 (555) 123-4567
LOCATION: San Francisco, CA

PROFESSIONAL SUMMARY
Passionate full-stack developer with 5+ years of experience building scalable web applications.
Specializing in React, Node.js, and cloud technologies.

SKILLS
- Frontend: React, JavaScript, TypeScript, HTML/CSS, Tailwind, Next.js
- Backend: Node.js, Python, FastAPI, Express, PostgreSQL, MongoDB
- Tools: Git, Docker, AWS, Figma, REST APIs, GraphQL

WORK EXPERIENCE

Senior Full Stack Developer | Tech Innovations Inc. | 2022 - Present
- Led migration to microservices architecture, improving system performance by 40%
- Implemented CI/CD pipeline reducing deployment time by 60%
- Mentored team of 5 junior developers

Full Stack Developer | Digital Solutions Ltd. | 2020 - 2022
- Built e-commerce platform serving 10,000+ daily users
- Reduced application load time by 50% through optimization
- Integrated third-party APIs for payment and shipping

Frontend Developer | Creative Web Studio | 2019 - 2020
- Developed 15+ responsive websites for various clients
- Implemented design system increasing development speed by 30%
- Collaborated with design team to improve UX workflows

EDUCATION
Bachelor of Science in Computer Science
University of Technology | 2015 - 2019

CERTIFICATIONS
- AWS Certified Developer
- Google Cloud Professional
- React Advanced Certification
    `;

    // Create a blob and download
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'John_Doe_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <section className="resume-section">
      <div className="resume-container">
        <div className="resume-card">
          <div className="resume-icon">📄</div>
          <h3 className="resume-title">Download My Resume</h3>
          <p className="resume-description">
            Get a detailed overview of my experience, skills, and achievements
          </p>
          <button onClick={handleDownload} className="download-button">
            <span className="download-icon">↓</span>
            <span>Download Resume</span>
          </button>
          <div className="resume-note">
            Note: You can replace this with your own PDF resume file
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeDownload;