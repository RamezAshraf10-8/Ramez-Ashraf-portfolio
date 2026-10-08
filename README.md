# Ramez Ashraf Abdelmoniem — AI & Computer Engineering Portfolio

A modern, high-performance personal portfolio website for **Ramez Ashraf Abdelmoniem**, fresh Computer Engineering graduate from **The British University in Egypt (BUE)** specializing in **Artificial Intelligence, Computer Vision, Machine Learning, Data Analysis, and Software Engineering**.

---

## 🚀 Quick Launch Locally

1. **Option 1 (One-Click Launch)**: Double-click `start-portfolio.bat` in this folder. It will launch the local HTTP server and automatically open `http://localhost:8080` in your default browser.
2. **Option 2 (Terminal Command)**:
   ```bash
   python -m http.server 8080
   ```
   Then open `http://localhost:8080` in your web browser.
3. **Option 3 (Direct File)**: Double-click `index.html` to view directly.

---

## 📁 Project Architecture

```
Ramez Ashraf/
├── index.html                 # Semantic HTML5, accessible structure, SEO & OpenGraph meta tags
├── start-portfolio.bat        # One-click launcher script
├── Ramez_Ashraf_final_CV.pdf  # Original resume
├── css/
│   └── style.css              # 2026-style design system (Dark & Light modes, Glassmorphism, Responsive)
├── js/
│   ├── data.js                # CENTRALIZED CONFIGURATION: edit all text, links, projects & skills here!
│   └── main.js                # Dynamic rendering, interactive simulators, recruiter snapshot modal
└── assets/
    ├── docs/
    │   └── Ramez_Ashraf_CV.pdf # Direct download copy of the CV
    └── images/
        ├── profile-portrait.jpg     # Professional AI engineer portrait
        ├── eyelid-morse.jpg         # Assistive CV & MediaPipe project visual
        ├── vehicle-inspection.jpg   # YOLOv11m damage detection dashboard visual
        ├── chatbot-nlp.jpg          # NLP & TF-IDF architecture visual
        ├── cloud-pipeline.jpg       # AWS Serverless data pipeline visual
        └── etfrag-movie.jpg         # React movie streaming web application visual
```

---

## ⚙️ Centralized Configuration (`js/data.js`)

All content is cleanly separated from the layout. To update any information (contact details, projects, skills, education, or links), simply open [`js/data.js`](js/data.js):

- **Personal Info**: Update name, headline, email, phone, LinkedIn, GitHub, or target roles.
- **Skills**: Add or modify categories, tags, and proficiency levels (no fake percentage bars).
- **Projects**: Add new projects, adjust highlights, update GitHub URLs, or change metrics.
- **Experience**: Edit internships or training details.
- **Interactive Demos**: Customize the Morse dictionary or chatbot Q&A knowledge base.

---

## 🌟 Key Features

1. **Recruiter-First Fast Track**:
   - Top banner with 1-click **Recruiter 15s Snapshot** modal.
   - 1-click **Download CV** (pointing directly to `assets/docs/Ramez_Ashraf_CV.pdf`).
   - 1-click **Copy Email** with instant toast feedback.
2. **Interactive AI Demo Lab**:
   - **Eyelid Morse Code Simulator**: Interactive blink duration classifier simulating eye aspect ratio (EAR) tracking and Ramez's dissertation innovation (hold >1.2s for the eyes-free Delete gesture with audio feedback).
   - **FixZone AI Chatbot**: Interactive Q&A widget demonstrating TF-IDF intent matching for automotive damage questions.
3. **Verified Academic & Internship Record**:
   - B.Sc. in Computer Engineering from BUE (GPA 3.1/4.0).
   - 60+ Hours AI Training at ICT Hub.
   - AWS Cloud, Cybersecurity, and Enterprise Network Security internships.
4. **Theme Switcher**:
   - Sleek 2026 dark mode by default with glowing neon cyan/indigo accents.
   - Clean light mode toggle with local storage persistence.

---

## 🌐 Deploying to GitHub Pages (Free & Instant)

1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of professional AI portfolio"
   git branch -M main
   git remote add origin https://github.com/RamezAshraf10-8/portfolio.git
   git push -u origin main
   ```
2. Go to your repository settings on GitHub:
   - Navigate to **Settings** → **Pages**
   - Under **Build and deployment**, select source: **Deploy from a branch**
   - Select branch: `main` / `root`
   - Click **Save**. Your site will be live within 60 seconds at `https://ramezashraf10-8.github.io/portfolio/`!
