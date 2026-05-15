# Personal Portfolio Website

A clean, modern portfolio website built with pure HTML, CSS, and JavaScript. Features cinematic scroll animations and responsive design.

## 📁 Structure

```
portfolio-static/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styling
├── js/
│   └── main.js         # JavaScript functionality
└── assets/             # Images and media (add your own)
```

## 🚀 How to Use

### Option 1: Local Development
1. Open `index.html` directly in your browser
2. Or use a simple HTTP server:
   ```bash
   python -m http.server 8000
   # OR
   npx serve
   ```
3. Visit `http://localhost:8000`

### Option 2: Deploy to GitHub Pages

1. **Copy files to your repository root:**
   ```bash
   cp -r portfolio-static/* .
   ```

2. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Add static portfolio website"
   git push origin main
   ```

3. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Deploy from branch `main`
   - Folder: `/ (root)`
   - Save

4. **Your site will be live at:**
   `https://yourusername.github.io/repository-name/`

## ✏️ Customization Guide

### 1. Personal Information
Edit `index.html` and search for these sections:

- **Name**: Line 62 - Change "JOHN DOE"
- **Title**: Line 65 - Change your professional title
- **About**: Lines 107-129 - Update your bio
- **Skills**: Lines 145-180 - Add/remove your skills
- **Projects**: Lines 195-290 - Add your actual projects
- **Experience**: Lines 305-380 - Update work history
- **Testimonials**: Lines 395-445 - Add real testimonials
- **Contact**: Lines 465-500 - Update email, phone, location, social links

### 2. Colors & Styling
Edit `css/styles.css`:

- **Background**: Search for `#000`, `#0a0a0a` to change dark theme
- **Accent color**: Search for `#fff` to change white accents
- **Hover effects**: Look for `:hover` selectors

### 3. Resume
Replace the resume content in `js/main.js` (line 83-125) or:

1. Add a PDF file to the root directory
2. Update the download function:
   ```javascript
   function downloadResume() {
       const link = document.createElement('a');
       link.href = 'your-resume.pdf';
       link.download = 'Your_Name_Resume.pdf';
       link.click();
   }
   ```

### 4. Add Images
- Create an `assets/` folder
- Add your profile photo, project screenshots
- Update `<div class="image-placeholder">` in About section
- Update `<div class="project-image">` for project thumbnails

## 📱 Responsive Design

The website is fully responsive and works on:
- ✅ Desktop (1920px+)
- ✅ Tablet (768px - 968px)
- ✅ Mobile (320px - 640px)

## 🎨 Features

- ✨ Smooth scroll navigation
- 🎬 Cinematic scroll animations
- 📱 Fully responsive
- ⚡ Fast loading (no build process)
- 🎯 SEO friendly
- ♿ Accessible
- 🎨 Clean, modern design
- 💫 Hover effects and transitions

## 🔧 No Build Tools Required!

This is pure HTML/CSS/JS - no React, no webpack, no npm. Just open `index.html` and you're done!

## 📝 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 🤝 Need Help?

If you encounter any issues:
1. Check that all file paths are correct
2. Make sure you're viewing from a web server (not `file://`)
3. Clear browser cache if changes don't appear

---

**Made with ❤️ using pure HTML, CSS, and JavaScript**
