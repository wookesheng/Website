# Personal Portfolio Website - Customization Guide

## 🎨 How to Customize Your Portfolio

This guide will help you update the demo content with your own information.

---

## 📝 Basic Information

### 1. **Hero Section** (`/app/frontend/src/components/Hero.js`)

Update lines 31-38 with your information:
```javascript
<div className="hero-name">
  JOHN DOE  // ← Change to your name
</div>
<div className="hero-title">
  Full Stack Developer & Creative Designer  // ← Change to your title
</div>
<div className="hero-tagline">
  Crafting beautiful, functional experiences through code and design  // ← Your tagline
</div>
```

---

## 👤 About Section

### 2. **About Me** (`/app/frontend/src/components/About.js`)

Update lines 37-61:
- **Profile Image**: Replace the placeholder in line 37 with your photo URL or keep the initials
- **Title**: Line 48 - "Passionate Developer & Designer"
- **Bio**: Lines 49-60 - Write your personal story
- **Statistics**: Lines 65-75 - Update numbers (50+ Projects, 5+ Years, 30+ Clients)

---

## 💻 Skills Section

### 3. **Skills** (`/app/frontend/src/components/Skills.js`)

Update lines 29-43 with your tech stack:
```javascript
const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "JavaScript", ...] // ← Add/remove your skills
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", ...] // ← Add/remove your skills
  },
  ...
]
```

---

## 🚀 Projects Section

### 4. **Projects** (`/app/frontend/src/components/Projects.js`)

Update lines 29-63 with your actual projects:
```javascript
const projects = [
  {
    title: "E-Commerce Platform",  // ← Your project name
    description: "...",  // ← Project description
    tech: ["React", "Node.js", ...],  // ← Technologies used
    year: "2024"  // ← Year
  },
  // Add more projects...
]
```

**To add project images:**
- Replace the placeholder in line 85 with actual project screenshots
- Or use the numbered design (current implementation)

---

## 💼 Work Experience

### 5. **Experience** (`/app/frontend/src/components/Experience.js`)

Update lines 29-65 with your work history:
```javascript
const experiences = [
  {
    role: "Senior Full Stack Developer",  // ← Your role
    company: "Tech Innovations Inc.",  // ← Company name
    period: "2022 - Present",  // ← Time period
    description: "...",  // ← Job description
    achievements: [  // ← Your achievements
      "Achievement 1",
      "Achievement 2",
      ...
    ]
  },
  // Add more experiences...
]
```

---

## 💬 Testimonials

### 6. **Testimonials** (`/app/frontend/src/components/Testimonials.js`)

Update lines 29-50 with real testimonials:
```javascript
const testimonials = [
  {
    name: "Sarah Johnson",  // ← Client/colleague name
    role: "CEO, TechStart Inc.",  // ← Their role
    content: "Working with John was...",  // ← Testimonial text
    avatar: "SJ"  // ← Initials for avatar
  },
  // Add more testimonials...
]
```

---

## 📞 Contact Information

### 7. **Contact** (`/app/frontend/src/components/Contact.js`)

Update lines 29-42 with your contact details:
```javascript
const contactInfo = [
  {
    label: "Email",
    value: "john.doe@example.com",  // ← Your email
    link: "mailto:john.doe@example.com",
  },
  {
    label: "Phone",
    value: "+1 (555) 123-4567",  // ← Your phone
    link: "tel:+15551234567",
  },
  {
    label: "Location",
    value: "San Francisco, CA",  // ← Your location
  }
]
```

Update social links (lines 45-50):
```javascript
const socialLinks = [
  { name: "LinkedIn", url: "https://linkedin.com/in/yourprofile" },
  { name: "GitHub", url: "https://github.com/yourusername" },
  { name: "Twitter", url: "https://twitter.com/yourhandle" },
  { name: "Dribbble", url: "https://dribbble.com/yourprofile" }
];
```

---

## 📄 Resume Download

### 8. **Resume** (`/app/frontend/src/components/ResumeDownload.js`)

#### Option A: Use the demo text resume (current)
Update lines 7-48 with your actual resume content.

#### Option B: Use a PDF file
1. Place your PDF in `/app/frontend/public/` folder (e.g., `resume.pdf`)
2. Replace the `handleDownload` function (lines 6-52) with:

```javascript
const handleDownload = () => {
  const link = document.createElement('a');
  link.href = '/resume.pdf';
  link.download = 'YourName_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
```

---

## 🎨 Branding

### 9. **Logo** (`/app/frontend/src/components/Navigation.js`)

Update line 21 to change your logo initials:
```javascript
<a href="#" className="logo-text">JD</a>  // ← Change "JD" to your initials
```

---

## 🌐 Navigation

### 10. **Navigation Links** (`/app/frontend/src/components/Navigation.js`)

The navigation automatically links to sections. If you add/remove sections, update lines 8-14:
```javascript
const navItems = [
  { label: "ABOUT", id: "about" },
  { label: "SKILLS", id: "skills" },
  // Add/remove as needed
];
```

---

## 🎭 Colors & Styling

All components use a dark theme by default. To customize colors:

- **Background colors**: Change in each component's CSS file (e.g., `Hero.css`, `About.css`)
- **Accent colors**: Look for `#fff` (white) in CSS files and replace with your brand color
- **Gradients**: Search for `linear-gradient` in CSS files

---

## 📱 Testing Your Changes

After making changes:

1. Save all files
2. The website will automatically reload (hot reload enabled)
3. View your changes at: https://motion-launch-474.preview.emergentagent.com
4. Check on different screen sizes (mobile, tablet, desktop)

---

## 🚀 Quick Start Checklist

- [ ] Update name and title in Hero section
- [ ] Write your bio in About section
- [ ] List your skills
- [ ] Add your projects
- [ ] Add work experience
- [ ] Get and add testimonials
- [ ] Update contact information
- [ ] Update social media links
- [ ] Upload your resume PDF (or update text version)
- [ ] Change logo initials
- [ ] Test all sections and links

---

## 💡 Tips

1. **Keep It Concise**: Visitors scan quickly, so make every word count
2. **Use Real Projects**: Replace demo projects with your actual work
3. **Get Testimonials**: Reach out to past clients/colleagues for quotes
4. **Professional Photo**: Consider replacing the "JD" placeholder with a professional headshot
5. **Regular Updates**: Keep your portfolio current with latest projects and skills

---

## 🆘 Need Help?

If you encounter issues while customizing:
1. Check that you've saved all files
2. Look for any error messages in the browser console
3. Make sure you're editing the correct file paths

---

**Remember**: All changes are made in the `/app/frontend/src/components/` directory. Each section has its own `.js` and `.css` file for easy customization!
