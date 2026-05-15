// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll Reveal Animation
const observerOptions = {
    threshold: 0.2,
    rootMargin: '-20% 0px -20% 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe sections for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.about-section, .skills-section, .projects-section, .experience-section, .testimonials-section, .contact-section');
    
    sections.forEach(section => {
        const label = section.querySelector('[class$="-label"]');
        const title = section.querySelector('[class$="-title"]');
        const container = section.querySelector('[class$="-container"]');
        
        if (label) label.classList.add('fade-in');
        if (title) title.classList.add('fade-in');
        
        observer.observe(section);
        
        // Animate children with delay
        const items = section.querySelectorAll('.skill-category, .project-card, .experience-item, .testimonial-card, .contact-info-item');
        items.forEach((item, index) => {
            item.classList.add('fade-in');
            item.style.transitionDelay = `${0.2 + index * 0.1}s`;
            observer.observe(item);
        });
    });
});

// Navigation Active State
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-item').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navItems = document.querySelector('.nav-items');

if (menuBtn && navItems) {
    menuBtn.addEventListener('click', () => {
        navItems.classList.toggle('mobile-open');
    });
}

// Download Resume Function
function downloadResume() {
    // Create resume content
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

    // Create blob and download
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'John_Doe_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
}

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// Duplicate scroller items for infinite scroll effect
document.addEventListener('DOMContentLoaded', () => {
    const scrollerTrack = document.querySelector('.scroller-track');
    if (scrollerTrack) {
        const items = scrollerTrack.innerHTML;
        scrollerTrack.innerHTML = items + items; // Duplicate for seamless loop
    }
});

console.log('Portfolio loaded successfully! 🎉');
