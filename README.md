# Yuvraj Singh Shekhawat — Portfolio

A stunning React portfolio with animated grid effects, glassmorphism, and smooth scroll animations.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher) — download from https://nodejs.org

### Setup

```bash
# 1. Open this folder in terminal
cd yuvraj-portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm start
```

The portfolio opens automatically at **http://localhost:3000**

---

## 📁 Folder Structure

```
yuvraj-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Sticky navbar with blur
│   │   ├── Hero.jsx         # Animated hero + typewriter
│   │   ├── About.jsx        # About + education timeline
│   │   ├── Skills.jsx       # Animated skill bars + tech stack
│   │   ├── Projects.jsx     # Project cards with hover effects
│   │   ├── Certificates.jsx # Certifications grid
│   │   └── Contact.jsx      # Contact section + footer
│   ├── hooks/
│   │   └── useInView.js     # Scroll-trigger animation hook
│   ├── App.jsx              # Root app + custom cursor
│   ├── index.css            # Global styles + animations
│   └── index.js             # Entry point
└── package.json
```

## ✨ Features

- **Custom cursor** with smooth lag effect
- **Animated grid background** with glowing cells
- **Floating gradient orbs** that move slowly
- **Typewriter effect** cycling through job titles
- **Scroll-triggered animations** on every section
- **Animated skill bars** with shimmer effect
- **Hover effects** on all project cards
- **Glassmorphism** navbar on scroll
- **Fully responsive** design

## 🎨 Customization

- Colors: Edit CSS variables in `src/index.css` under `:root`
- Content: Update data arrays in each component file
- Profile photo: Replace the initials avatar in `Hero.jsx` with an `<img>` tag

## 📦 Build for Production

```bash
npm run build
```

Creates a `build/` folder ready to deploy on Vercel, Netlify, or GitHub Pages.

---

Built with React · Designed for Yuvraj Singh Shekhawat
