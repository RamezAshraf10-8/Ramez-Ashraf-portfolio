/**
 * RAMEZ ASHRAF — PORTFOLIO APPLICATION LOGIC
 * Dynamic UI Engine, Interactive AI Simulators & Recruiter Utilities
 */

document.addEventListener('DOMContentLoaded', () => {
  // Ensure PORTFOLIO_DATA is available
  if (typeof PORTFOLIO_DATA === 'undefined') {
    console.error('PORTFOLIO_DATA is not defined. Ensure js/data.js is loaded.');
    return;
  }

  // Initialize Components
  initThemeToggle();
  initMobileNav();
  renderHeroAndStats();
  renderSkills();
  renderProjects();
  initProjectFilters();
  renderExperience();
  renderEducation();
  renderCertifications();
  renderGithubRepos();
  initMorseSimulator();
  initChatbotSimulator();
  initRecruiterModal();
  initContactForm();
  initQuickCopyEmail();
  initScrollSpy();
});

/* ==========================================================================
   1. Theme Toggle (Dark Mode Default)
   ========================================================================== */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const storedTheme = localStorage.getItem('ramez_portfolio_theme') || 'dark';

  document.documentElement.setAttribute('data-theme', storedTheme);
  updateThemeIcon(storedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('ramez_portfolio_theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('theme-icon');
  if (!icon) return;
  if (theme === 'dark') {
    icon.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  } else {
    icon.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  }
}

/* ==========================================================================
   2. Mobile Navigation
   ========================================================================== */
function initMobileNav() {
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });

    // Close menu when clicking any nav link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
      });
    });
  }
}

/* ==========================================================================
   3. Hero Section & Stats Rendering
   ========================================================================== */
function renderHeroAndStats() {
  const data = PORTFOLIO_DATA.personal;

  // Render Target Roles Tags
  const rolesContainer = document.getElementById('hero-roles-tags');
  if (rolesContainer && data.targetRoles) {
    rolesContainer.innerHTML = data.targetRoles.map(role => `
      <span class="role-tag">${escapeHtml(role)}</span>
    `).join('');
  }

  // Render Stats Grid
  const statsContainer = document.getElementById('stats-grid-container');
  if (statsContainer && data.stats) {
    statsContainer.innerHTML = data.stats.map(stat => `
      <div class="stat-card">
        <div class="stat-value">${escapeHtml(stat.value)}</div>
        <div class="stat-label">${escapeHtml(stat.label)}</div>
        <div class="stat-detail">${escapeHtml(stat.detail)}</div>
      </div>
    `).join('');
  }
}

/* ==========================================================================
   4. Skills Rendering
   ========================================================================== */
function renderSkills() {
  const skillsContainer = document.getElementById('skills-grid-container');
  if (!skillsContainer) return;

  const categories = Object.values(PORTFOLIO_DATA.skills);

  skillsContainer.innerHTML = categories.map(cat => `
    <div class="skill-category-card">
      <div class="category-header">
        <div class="category-icon">
          ${getCategoryIcon(cat.icon)}
        </div>
        <h3 class="category-title">${escapeHtml(cat.category)}</h3>
      </div>
      <div class="skill-items-list">
        ${cat.items.map(item => `
          <div class="skill-item-row">
            <div class="skill-name-col">
              <span>${escapeHtml(item.name)}</span>
              ${item.tag ? `<span class="skill-tag-pill">${escapeHtml(item.tag)}</span>` : ''}
            </div>
            <div class="skill-level-text">${escapeHtml(item.level)}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function getCategoryIcon(iconType) {
  switch (iconType) {
    case 'code':
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`;
    case 'cpu':
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line></svg>`;
    case 'database':
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`;
    case 'cloud':
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`;
    case 'wrench':
    default:
      return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`;
  }
}

/* ==========================================================================
   5. Projects Rendering & Filtering
   ========================================================================== */
function renderProjects(filter = 'all') {
  const container = document.getElementById('projects-grid-container');
  if (!container) return;

  const projects = PORTFOLIO_DATA.projects;
  const filtered = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  container.innerHTML = filtered.map(p => `
    <article class="project-card ${p.featured ? 'featured-card' : ''}" data-category="${p.category}" id="project-${p.id}">
      <div class="project-media-wrapper">
        <img src="${p.image}" alt="${escapeHtml(p.title)}" class="project-img" loading="lazy">
        <div class="project-badge-overlay">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          <span>${escapeHtml(p.badge)}</span>
        </div>
      </div>
      <div class="project-content">
        <h3 class="project-title">${escapeHtml(p.title)}</h3>
        <div class="project-subheading">${escapeHtml(p.subheading)}</div>
        <p class="project-summary">${escapeHtml(p.summary)}</p>

        ${p.metrics ? `
          <div class="project-metrics-strip">
            ${Object.entries(p.metrics).map(([key, val]) => `
              <div class="metric-strip-item">
                <span class="metric-strip-value">${escapeHtml(val)}</span>
                <span class="metric-strip-label">${formatMetricLabel(key)}</span>
              </div>
            `).join('')}
          </div>
        ` : ''}

        <ul class="project-highlights-list">
          ${p.highlights.slice(0, 3).map(h => `
            <li class="project-highlight-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>${escapeHtml(h)}</span>
            </li>
          `).join('')}
        </ul>

        <div class="project-tech-tags">
          ${p.technologies.map(t => `<span class="tech-tag">${escapeHtml(t)}</span>`).join('')}
        </div>

        <div class="project-actions">
          ${p.demoType ? `
            <button class="project-btn project-btn-primary" onclick="openInteractiveDemo('${p.demoType}')">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              <span>Interactive Demo</span>
            </button>
          ` : ''}
          <button class="project-btn project-btn-secondary" onclick="openProjectModal('${p.id}')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            <span>Architecture & Details</span>
          </button>
          <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-btn project-btn-secondary" title="View Source on GitHub">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </article>
  `).join('');
}

function formatMetricLabel(key) {
  const map = {
    accuracy: 'Test Accuracy',
    benchmark: 'Benchmark Delta',
    fps: 'Performance',
    hardware: 'Input Source',
    mAP_box: 'Detection mAP',
    mAP_mask: 'Segmentation mAP',
    classes: 'Trained Classes',
    stack: 'Architecture',
    model: 'Core Model',
    framework: 'ML Libraries',
    ui: 'Demo Interface',
    domain: 'Domain Scope',
    infra: 'Cloud Architecture',
    bi: 'Analytics Engine',
    iac: 'Provisioning',
    ai_services: 'Managed AI',
    auth: 'Authentication',
    api: 'API Integration',
    design: 'Design System',
    features: 'Key Capabilities',
    protocols: 'Supported Protocols',
    concurrency: 'Execution Model',
    cpp: 'Implementation',
    standard: 'Specification'
  };
  return map[key] || key.replace('_', ' ').toUpperCase();
}

function initProjectFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter') || 'all';
      renderProjects(filter);
    });
  });
}

/* ==========================================================================
   6. Practical Experience & Internships Timeline
   ========================================================================== */
function renderExperience() {
  const container = document.getElementById('experience-timeline-container');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.experience.map(item => `
    <div class="timeline-item">
      <div class="timeline-node"></div>
      <div class="timeline-card">
        <div class="timeline-header">
          <div>
            <h3 class="timeline-role">${escapeHtml(item.title)}</h3>
            <div class="timeline-org">${escapeHtml(item.organization)} • ${escapeHtml(item.location)}</div>
          </div>
          <div style="display: flex; gap: 0.5rem; align-items: center;">
            <span class="timeline-badge">${escapeHtml(item.period)}</span>
            <span class="timeline-badge" style="background: rgba(99, 102, 241, 0.12); color: var(--indigo-400);">${escapeHtml(item.type)}</span>
          </div>
        </div>
        <p class="timeline-desc">${escapeHtml(item.description)}</p>
        <ul class="timeline-bullets">
          ${item.bulletPoints.map(b => `
            <li class="timeline-bullet-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>${escapeHtml(b)}</span>
            </li>
          `).join('')}
        </ul>
        <div class="timeline-tags">
          ${item.tags.map(t => `<span class="timeline-tag">${escapeHtml(t)}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   7. Education & Coursework
   ========================================================================== */
function renderEducation() {
  const edu = PORTFOLIO_DATA.education;
  const container = document.getElementById('education-card-container');
  if (!container) return;

  container.innerHTML = `
    <div class="academic-card">
      <div class="academic-badge">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
        <span>${escapeHtml(edu.status)}</span>
      </div>
      <h3 class="academic-title">${escapeHtml(edu.degree)}</h3>
      <div class="academic-institution">${escapeHtml(edu.institution)} — ${escapeHtml(edu.location)}</div>
      <div class="academic-meta">
        <span>Years: ${escapeHtml(edu.period)}</span>
        <span class="gpa-pill">GPA: ${escapeHtml(edu.gpa)}</span>
      </div>
      <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1.25rem;">
        ${escapeHtml(edu.overview)}
      </p>
      <div class="coursework-title">Relevant Academic Coursework</div>
      <div class="coursework-tags">
        ${edu.keyCoursework.map(c => `<span class="course-tag">${escapeHtml(c)}</span>`).join('')}
      </div>
    </div>
  `;
}

/* ==========================================================================
   8. Certifications & Credentials
   ========================================================================== */
function renderCertifications() {
  const container = document.getElementById('certifications-container');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.certifications.map(cert => `
    <div class="cert-card">
      <div class="cert-header">
        <h4 class="cert-title">${escapeHtml(cert.title)}</h4>
        <span class="cert-badge">${escapeHtml(cert.status)}</span>
      </div>
      <div class="cert-issuer">${escapeHtml(cert.issuer)} • ${escapeHtml(cert.date)} • <span style="color: var(--text-muted); font-size: 0.775rem;">${escapeHtml(cert.category)}</span></div>
      <p class="cert-desc">${escapeHtml(cert.description)}</p>
    </div>
  `).join('');
}

/* ==========================================================================
   9. GitHub Code Repositories Explorer
   ========================================================================== */
function renderGithubRepos() {
  const container = document.getElementById('github-repos-container');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.githubRepos.map(repo => `
    <div class="repo-card">
      <div class="repo-header">
        <div class="repo-title-row">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="color: var(--cyan-400);"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          <span class="repo-title">${escapeHtml(repo.name)}</span>
        </div>
        <span style="font-size: 0.75rem; color: var(--emerald-400); font-family: var(--font-mono); font-weight: 600;">${escapeHtml(repo.stars)}</span>
      </div>
      <p class="repo-desc">${escapeHtml(repo.description)}</p>
      <div class="repo-topics">
        ${repo.topics.map(t => `<span class="repo-topic-pill">#${escapeHtml(t)}</span>`).join('')}
      </div>
      <div class="repo-footer">
        <span>${escapeHtml(repo.forks)}</span>
        <a href="${repo.url}" target="_blank" rel="noopener noreferrer" class="repo-link">
          <span>View on GitHub</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </a>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   10. Interactive Morse Code Assistive Simulator
   ========================================================================== */
let morseState = {
  pressStartTime: 0,
  timerInterval: null,
  currentSymbolBuffer: '',
  fullDecodedText: '',
  commitTimeout: null,
  audioCtx: null
};

function initMorseSimulator() {
  const triggerBtn = document.getElementById('morse-trigger-btn');
  const symbolsDisplay = document.getElementById('morse-symbols-display');
  const decodedDisplay = document.getElementById('morse-decoded-display');
  const durationIndicator = document.getElementById('morse-duration-indicator');
  const clearBtn = document.getElementById('morse-clear-btn');
  const spaceBtn = document.getElementById('morse-space-btn');
  const dictGrid = document.getElementById('morse-dict-grid');

  if (!triggerBtn) return;

  // Render dictionary items
  if (dictGrid && PORTFOLIO_DATA.interactiveDemos.morse.dictionary) {
    dictGrid.innerHTML = Object.entries(PORTFOLIO_DATA.interactiveDemos.morse.dictionary).map(([code, char]) => `
      <div class="morse-dict-item">
        <span class="dict-char">${char}</span>
        <span class="dict-code">${code}</span>
      </div>
    `).join('');
  }

  // Audio tone generator
  function playTone(freq = 600, duration = 0.1) {
    try {
      if (!morseState.audioCtx) {
        morseState.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (morseState.audioCtx.state === 'suspended') {
        morseState.audioCtx.resume();
      }
      const osc = morseState.audioCtx.createOscillator();
      const gain = morseState.audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.08, morseState.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, morseState.audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(morseState.audioCtx.destination);
      osc.start();
      osc.stop(morseState.audioCtx.currentTime + duration);
    } catch (e) {
      // Audio autoplay policy fallback
    }
  }

  function handleStart(e) {
    e.preventDefault();
    if (morseState.pressStartTime !== 0) return;
    morseState.pressStartTime = Date.now();
    triggerBtn.classList.add('blinking');

    if (morseState.commitTimeout) {
      clearTimeout(morseState.commitTimeout);
    }

    morseState.timerInterval = setInterval(() => {
      const elapsed = Date.now() - morseState.pressStartTime;
      durationIndicator.textContent = `Blink duration: ${elapsed} ms`;
      if (elapsed > 1200) {
        durationIndicator.textContent = `Blink duration: ${elapsed} ms [DELETE GESTURE TRIGGER]`;
        durationIndicator.style.color = 'var(--rose-500)';
      } else {
        durationIndicator.style.color = 'var(--cyan-400)';
      }
    }, 50);
  }

  function handleEnd(e) {
    e.preventDefault();
    if (morseState.pressStartTime === 0) return;
    const duration = Date.now() - morseState.pressStartTime;
    morseState.pressStartTime = 0;
    triggerBtn.classList.remove('blinking');
    clearInterval(morseState.timerInterval);

    // Classify gesture
    if (duration > 1200) {
      // Delete gesture (Research Innovation from Dissertation!)
      playTone(300, 0.25);
      if (morseState.currentSymbolBuffer.length > 0) {
        morseState.currentSymbolBuffer = morseState.currentSymbolBuffer.slice(0, -1);
      } else if (morseState.fullDecodedText.length > 0) {
        morseState.fullDecodedText = morseState.fullDecodedText.slice(0, -1);
      }
      durationIndicator.textContent = `Delete gesture executed! (Hold > 1.2s)`;
    } else if (duration >= 380) {
      // Dash (—)
      playTone(550, 0.25);
      morseState.currentSymbolBuffer += '-';
      durationIndicator.textContent = `Recorded: Dash (-) [${duration}ms]`;
    } else {
      // Dot (•)
      playTone(750, 0.1);
      morseState.currentSymbolBuffer += '.';
      durationIndicator.textContent = `Recorded: Dot (.) [${duration}ms]`;
    }

    symbolsDisplay.textContent = morseState.currentSymbolBuffer || '_';
    decodedDisplay.textContent = morseState.fullDecodedText || '—';

    // Set automatic commit threshold (after 900ms pause)
    morseState.commitTimeout = setTimeout(() => {
      commitMorseLetter();
    }, 900);
  }

  function commitMorseLetter() {
    if (!morseState.currentSymbolBuffer) return;
    const char = PORTFOLIO_DATA.interactiveDemos.morse.dictionary[morseState.currentSymbolBuffer] || '?';
    morseState.fullDecodedText += char;
    morseState.currentSymbolBuffer = '';
    symbolsDisplay.textContent = '_';
    decodedDisplay.textContent = morseState.fullDecodedText;
    durationIndicator.textContent = `Committed character: '${char}'`;
  }

  // Pointer & Touch Events
  triggerBtn.addEventListener('mousedown', handleStart);
  window.addEventListener('mouseup', handleEnd);

  triggerBtn.addEventListener('touchstart', handleStart, { passive: false });
  window.addEventListener('touchend', handleEnd, { passive: false });

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      morseState.currentSymbolBuffer = '';
      morseState.fullDecodedText = '';
      symbolsDisplay.textContent = '_';
      decodedDisplay.textContent = '—';
      durationIndicator.textContent = 'Buffer cleared.';
    });
  }

  if (spaceBtn) {
    spaceBtn.addEventListener('click', () => {
      morseState.fullDecodedText += ' ';
      decodedDisplay.textContent = morseState.fullDecodedText;
    });
  }
}

/* ==========================================================================
   11. Interactive FixZone AI Chatbot Simulation
   ========================================================================== */
function initChatbotSimulator() {
  const container = document.getElementById('chat-messages-area');
  const input = document.getElementById('chat-input-field');
  const sendBtn = document.getElementById('chat-send-btn');
  const presetsContainer = document.getElementById('chat-presets-container');

  if (!container || !input || !sendBtn) return;

  const demoData = PORTFOLIO_DATA.interactiveDemos.chatbot;

  // Render presets
  if (presetsContainer && demoData.sampleQueries) {
    presetsContainer.innerHTML = demoData.sampleQueries.map(q => `
      <button class="preset-query-btn" onclick="askPresetQuery('${escapeHtml(q)}')">
        <span>${escapeHtml(q)}</span>
      </button>
    `).join('');
  }

  window.askPresetQuery = (queryText) => {
    input.value = queryText;
    processChatMessage();
  };

  sendBtn.addEventListener('click', processChatMessage);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      processChatMessage();
    }
  });

  function processChatMessage() {
    const userText = input.value.trim();
    if (!userText) return;

    // Append user message
    appendMessage('user', userText);
    input.value = '';

    // Show typing simulation
    setTimeout(() => {
      const response = matchQueryResponse(userText);
      appendMessage('bot', response);
    }, 450);
  }

  function appendMessage(sender, text) {
    const msg = document.createElement('div');
    msg.className = `chat-msg ${sender}`;
    msg.innerHTML = `
      <div class="chat-msg-avatar">${sender === 'user' ? 'YOU' : 'AI'}</div>
      <div class="chat-bubble">${escapeHtml(text)}</div>
    `;
    container.appendChild(msg);
    container.scrollTop = container.scrollHeight;
  }

  function matchQueryResponse(query) {
    const lower = query.toLowerCase();
    const kb = demoData.kb;

    if (lower.includes('fixzone') || lower.includes('project') || lower.includes('what is')) {
      return kb['what is fixzone'];
    }
    if (lower.includes('damage') || lower.includes('types') || lower.includes('classes') || lower.includes('cardd')) {
      return kb['damage types'];
    }
    if (lower.includes('accuracy') || lower.includes('map') || lower.includes('performance') || lower.includes('metrics')) {
      return kb['accuracy'];
    }
    if (lower.includes('cost') || lower.includes('price') || lower.includes('repair') || lower.includes('estimate')) {
      return kb['repair cost'];
    }
    if (lower.includes('tech') || lower.includes('stack') || lower.includes('python') || lower.includes('flutter')) {
      return kb['technologies'];
    }
    return "Thank you for inquiring! FixZone is Ramez's graduation project combining YOLOv11m-seg instance segmentation on the CarDD dataset with a Flutter mobile app for real-time car damage detection and repair cost estimation. Feel free to try asking about damage types, accuracy, or technologies!";
  }
}

/* ==========================================================================
   12. Interactive Demo Tab Switcher
   ========================================================================== */
window.switchDemoTab = function(tabName) {
  const tabs = document.querySelectorAll('.demo-tab-btn');
  tabs.forEach(t => {
    if (t.getAttribute('data-tab') === tabName) {
      t.classList.add('active');
    } else {
      t.classList.remove('active');
    }
  });

  const morsePane = document.getElementById('demo-pane-morse');
  const chatPane = document.getElementById('demo-pane-chatbot');

  if (tabName === 'morse') {
    if (morsePane) morsePane.style.display = 'block';
    if (chatPane) chatPane.style.display = 'none';
  } else {
    if (morsePane) morsePane.style.display = 'none';
    if (chatPane) chatPane.style.display = 'block';
  }
};

window.openInteractiveDemo = function(demoType) {
  const demoSection = document.getElementById('interactive-demo-lab');
  if (demoSection) {
    demoSection.scrollIntoView({ behavior: 'smooth' });
    if (demoType === 'morse-simulator') {
      window.switchDemoTab('morse');
    } else if (demoType === 'chatbot-simulator' || demoType === 'vehicle-preview') {
      window.switchDemoTab('chatbot');
    }
  }
};

/* ==========================================================================
   13. Recruiter Snapshot & Project Details Modals
   ========================================================================== */
function initRecruiterModal() {
  const backdrop = document.getElementById('recruiter-modal-backdrop');
  const closeBtn = document.getElementById('modal-close-btn');

  if (closeBtn && backdrop) {
    closeBtn.addEventListener('click', () => {
      backdrop.classList.remove('active');
    });

    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        backdrop.classList.remove('active');
      }
    });
  }
}

window.openRecruiterSnapshot = function() {
  const backdrop = document.getElementById('recruiter-modal-backdrop');
  const content = document.getElementById('modal-dynamic-content');
  const title = document.getElementById('modal-title');
  const subtitle = document.getElementById('modal-subtitle');

  if (!backdrop || !content) return;

  title.textContent = "Recruiter Fast Track: 15-Second Candidate Snapshot";
  subtitle.textContent = "Verified Overview: Ramez Ashraf Abdelmoniem";

  content.innerHTML = `
    <div class="recruiter-snapshot-sections">
      <div>
        <div class="snapshot-block-title">Candidate Profile & Target Roles</div>
        <p class="snapshot-block-p">
          Fresh <strong>Computer Engineering Graduate (2026)</strong> from <strong>The British University in Egypt (BUE)</strong> (GPA: 3.1/4.0). Specializing in <strong>Applied AI, Computer Vision, Data Engineering, and Full-Stack Software</strong>.
        </p>
      </div>

      <div>
        <div class="snapshot-block-title">Standout Engineering Achievements</div>
        <ul class="snapshot-features-list">
          <li class="snapshot-feature-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span><strong>Eyelid Morse Code Assistive System (Dissertation):</strong> Designed real-time webcam blink communication with custom error-correction achieving <strong>100% accuracy</strong> (outperforming 62% benchmark study).</span>
          </li>
          <li class="snapshot-feature-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span><strong>FixZone AI Vehicle Damage Estimator (Graduation Project):</strong> YOLOv11m-seg instance segmentation (0.769 mAP@0.5) with Flutter app and cost modeling.</span>
          </li>
          <li class="snapshot-feature-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span><strong>Practical Internships:</strong> AWS Cloud microservices & data pipelines, Juniper enterprise security, and 60+ hours intensive AI training.</span>
          </li>
        </ul>
      </div>

      <div>
        <div class="snapshot-block-title">Core Technology Stack</div>
        <p class="snapshot-block-p">
          <strong>Languages:</strong> Python, SQL, C++, Java, JavaScript, C#<br>
          <strong>AI/ML & Vision:</strong> PyTorch, YOLOv11, OpenCV, MediaPipe, Scikit-learn, NLTK, Pandas, NumPy<br>
          <strong>Cloud & Infra:</strong> AWS (S3, Lambda, Athena, QuickSight), Terraform, Git, Linux
        </p>
      </div>

      <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1rem;">
        <a href="${PORTFOLIO_DATA.personal.cvPdfPath}" download class="btn btn-primary" style="flex: 1;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          <span>Download Formal CV (PDF)</span>
        </a>
        <a href="mailto:${PORTFOLIO_DATA.personal.email}?subject=Interview%20Opportunity%20-%20Ramez%20Ashraf" class="btn btn-secondary" style="flex: 1;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          <span>Schedule an Interview</span>
        </a>
      </div>
    </div>
  `;

  backdrop.classList.add('active');
};

window.openProjectModal = function(projectId) {
  const backdrop = document.getElementById('recruiter-modal-backdrop');
  const content = document.getElementById('modal-dynamic-content');
  const title = document.getElementById('modal-title');
  const subtitle = document.getElementById('modal-subtitle');

  const p = PORTFOLIO_DATA.projects.find(item => item.id === projectId);
  if (!p || !backdrop || !content) return;

  title.textContent = p.title;
  subtitle.textContent = p.subheading;

  content.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 1.25rem;">
      <div style="border-radius: var(--radius-lg); overflow: hidden; max-height: 260px;">
        <img src="${p.image}" alt="${escapeHtml(p.title)}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>

      <div>
        <div class="snapshot-block-title">Overview & Engineering Intent</div>
        <p class="snapshot-block-p">${escapeHtml(p.summary)}</p>
      </div>

      ${p.metrics ? `
        <div>
          <div class="snapshot-block-title">Key Performance Metrics</div>
          <div class="project-metrics-strip">
            ${Object.entries(p.metrics).map(([k, v]) => `
              <div class="metric-strip-item">
                <span class="metric-strip-value">${escapeHtml(v)}</span>
                <span class="metric-strip-label">${formatMetricLabel(k)}</span>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <div>
        <div class="snapshot-block-title">Architecture & Key Highlights</div>
        <ul class="snapshot-features-list">
          ${p.highlights.map(h => `
            <li class="snapshot-feature-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>${escapeHtml(h)}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div>
        <div class="snapshot-block-title">Technologies Used</div>
        <div class="project-tech-tags">
          ${p.technologies.map(t => `<span class="tech-tag">${escapeHtml(t)}</span>`).join('')}
        </div>
      </div>

      <div style="display: flex; gap: 1rem; margin-top: 0.5rem;">
        <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="flex: 1;">
          <span>View Source on GitHub</span>
        </a>
        <button class="btn btn-secondary" onclick="document.getElementById('recruiter-modal-backdrop').classList.remove('active')">
          <span>Close Details</span>
        </button>
      </div>
    </div>
  `;

  backdrop.classList.add('active');
};

/* ==========================================================================
   14. Contact Form & Feedback Handling
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  const alertBox = document.getElementById('form-status-alert');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();

    if (!name || !email || !message) {
      showAlert('Please complete all required fields.', 'error');
      return;
    }

    if (!validateEmail(email)) {
      showAlert('Please provide a valid email address.', 'error');
      return;
    }

    // Direct mailto fallback + visual confirmation
    const mailtoLink = `mailto:${PORTFOLIO_DATA.personal.email}?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\nSender Email: ' + email)}`;

    showAlert('Thank you for reaching out! Opening your email client to send your message directly to Ramez...', 'success');
    showToast('Message ready! Connecting to email client...');

    setTimeout(() => {
      window.location.href = mailtoLink;
      form.reset();
    }, 1000);
  });

  function showAlert(text, type) {
    if (!alertBox) return;
    alertBox.textContent = text;
    alertBox.className = `form-status-alert ${type}`;
    alertBox.style.display = 'block';
  }
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* ==========================================================================
   15. Quick Copy Email & Toast Notifications
   ========================================================================== */
function initQuickCopyEmail() {
  const copyBtns = document.querySelectorAll('.copy-email-btn');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const email = PORTFOLIO_DATA.personal.email;
      navigator.clipboard.writeText(email).then(() => {
        showToast(`Copied ${email} to clipboard!`);
      }).catch(() => {
        showToast(`Email: ${email}`);
      });
    });
  });
}

function showToast(message) {
  let toast = document.getElementById('toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
    <span>${escapeHtml(message)}</span>
  `;
  toast.classList.add('visible');

  setTimeout(() => {
    toast.classList.remove('visible');
  }, 3200);
}

/* ==========================================================================
   16. Scroll Spy for Active Navigation
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

/* Helper function for XSS safety */
function escapeHtml(str) {
  if (typeof str !== 'string') return str;
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
