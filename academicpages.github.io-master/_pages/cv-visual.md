---
layout: archive
title: "Visual CV"
permalink: /cv-visual/
author_profile: true
---

{% include base_path %}

<nav class="cv-mode-nav" aria-label="CV mode navigation">
  <a href="{{ base_path }}/cv-modes/" class="cv-back-link">← All CV Modes</a>
  <span class="cv-current-mode" aria-current="page">Mode: <strong>Visual Timeline</strong></span>
</nav>

<div class="cv-visual-container">
  <header class="cv-visual-header">
    <h1>Visual CV - Interactive Timeline</h1>
    <p class="cv-mode-description">Chronological visualization of professional experience and skills with high-contrast neon terminal aesthetic.</p>
  </header>

  <!-- Timeline Navigation -->
  <nav class="timeline-legend" aria-label="Timeline legend">
    <h2 class="visually-hidden">Timeline Color Coding</h2>
    <ul class="legend-items">
      <li>
        <span class="legend-icon work-icon" aria-hidden="true">◆</span>
        <span>Work Experience</span>
      </li>
      <li>
        <span class="legend-icon education-icon" aria-hidden="true">●</span>
        <span>Education</span>
      </li>
      <li>
        <span class="legend-icon current-icon" aria-hidden="true">★</span>
        <span>Current Position</span>
      </li>
    </ul>
  </nav>

  <!-- Professional Timeline -->
  <section id="timeline" aria-labelledby="timeline-heading">
    <h2 id="timeline-heading">Professional Timeline</h2>
    
    <div class="timeline" role="list">
      
      <!-- Current: Infineon -->
      <article class="timeline-item work current" role="listitem">
        <div class="timeline-marker" aria-hidden="true">
          <span class="marker-icon">★</span>
        </div>
        <div class="timeline-content">
          <time class="timeline-date" datetime="2025-05">May 2025 - Present</time>
          <h3 class="timeline-title">Automation Developer</h3>
          <p class="timeline-org">
            <span class="org-icon" aria-hidden="true">▸</span>
            Infineon Technologies | Munich, Germany
          </p>
          <ul class="timeline-details">
            <li>Designs, develops, and implements automated tools using Python to improve efficiency and quality</li>
            <li>Maintain and update existing automation tools and scripts</li>
          </ul>
          <div class="timeline-tags" aria-label="Technologies used">
            <span class="tag">Python</span>
            <span class="tag">Automation</span>
          </div>
        </div>
      </article>

      <!-- Aquat Food Industries -->
      <article class="timeline-item work" role="listitem">
        <div class="timeline-marker" aria-hidden="true">
          <span class="marker-icon">◆</span>
        </div>
        <div class="timeline-content">
          <time class="timeline-date" datetime="2022-05/2024-10">May 2022 - Oct 2024</time>
          <h3 class="timeline-title">Software Developer - C#</h3>
          <p class="timeline-org">
            <span class="org-icon" aria-hidden="true">▸</span>
            Aquat Food Industries | Jeddah, Saudi Arabia
          </p>
          <ul class="timeline-details">
            <li>Developed applications and APIs using .NET and C# with Multithreading</li>
            <li>Integrated REST APIs and managed PostgreSQL/MS SQL databases</li>
            <li>Built and deployed Dockerized applications, collaborating with DevOps teams</li>
          </ul>
          <div class="timeline-tags" aria-label="Technologies used">
            <span class="tag">C#</span>
            <span class="tag">.NET</span>
            <span class="tag">Docker</span>
            <span class="tag">PostgreSQL</span>
          </div>
        </div>
      </article>

      <!-- Master's Degree -->
      <article class="timeline-item education" role="listitem">
        <div class="timeline-marker" aria-hidden="true">
          <span class="marker-icon">●</span>
        </div>
        <div class="timeline-content">
          <time class="timeline-date" datetime="2024-10/2026-08">Oct 2024 - Aug 2026</time>
          <h3 class="timeline-title">Master of Science in User Experience Design</h3>
          <p class="timeline-org">
            <span class="org-icon" aria-hidden="true">▸</span>
            Technische Hochschule Ingolstadt
          </p>
          <p class="timeline-grade">Grade: 1.9 (German system)</p>
          <p class="timeline-highlight">Developed an AR-based onboarding system using C# & Unity, integrating usability testing with 20+ student samples</p>
          <div class="timeline-tags" aria-label="Technologies used">
            <span class="tag">C#</span>
            <span class="tag">Unity</span>
            <span class="tag">AR</span>
            <span class="tag">UX Research</span>
          </div>
        </div>
      </article>

      <!-- Internship -->
      <article class="timeline-item work" role="listitem">
        <div class="timeline-marker" aria-hidden="true">
          <span class="marker-icon">◆</span>
        </div>
        <div class="timeline-content">
          <time class="timeline-date" datetime="2019-06/2019-08">Jun 2019 - Aug 2019</time>
          <h3 class="timeline-title">Web Developer (Intern)</h3>
          <p class="timeline-org">
            <span class="org-icon" aria-hidden="true">▸</span>
            King Abdulaziz University | Jeddah, Saudi Arabia
          </p>
          <ul class="timeline-details">
            <li>Assisted in designing and optimizing backend APIs for a student portal using .NET, C#</li>
            <li>Supported web development for internal university tools</li>
          </ul>
          <div class="timeline-tags" aria-label="Technologies used">
            <span class="tag">C#</span>
            <span class="tag">.NET</span>
            <span class="tag">APIs</span>
          </div>
        </div>
      </article>

      <!-- Bachelor's Degree -->
      <article class="timeline-item education" role="listitem">
        <div class="timeline-marker" aria-hidden="true">
          <span class="marker-icon">●</span>
        </div>
        <div class="timeline-content">
          <time class="timeline-date" datetime="2016-06/2020-08">Jun 2016 - Aug 2020</time>
          <h3 class="timeline-title">Bachelor of Science in Information Technology</h3>
          <p class="timeline-org">
            <span class="org-icon" aria-hidden="true">▸</span>
            King Abdulaziz University
          </p>
          <p class="timeline-grade">Grade: 1.4 (German system)</p>
          <p class="timeline-highlight">Thesis: Developed an IoT Smart Garden Automation system using Arduino, Python, Flask, C++, Raspberry Pi, and SQL</p>
          <div class="timeline-tags" aria-label="Technologies used">
            <span class="tag">Python</span>
            <span class="tag">C++</span>
            <span class="tag">IoT</span>
            <span class="tag">Arduino</span>
          </div>
        </div>
      </article>

    </div>
  </section>

  <!-- Skills Grid -->
  <section id="skills-visual" aria-labelledby="skills-heading">
    <h2 id="skills-heading">Technical Skills Overview</h2>
    
    <div class="skills-grid">
      <div class="skill-block">
        <h3>
          <span class="skill-icon" aria-hidden="true">{"{"}</span>
          Programming Languages
        </h3>
        <ul class="skill-list">
          <li><span aria-hidden="true">►</span> C#</li>
          <li><span aria-hidden="true">►</span> Python</li>
          <li><span aria-hidden="true">►</span> SQL</li>
        </ul>
      </div>

      <div class="skill-block">
        <h3>
          <span class="skill-icon" aria-hidden="true">⚙</span>
          Frameworks & Tech
        </h3>
        <ul class="skill-list">
          <li><span aria-hidden="true">►</span> .NET / .NET Core</li>
          <li><span aria-hidden="true">►</span> Entity Framework</li>
          <li><span aria-hidden="true">►</span> REST APIs</li>
        </ul>
      </div>

      <div class="skill-block">
        <h3>
          <span class="skill-icon" aria-hidden="true">☁</span>
          Cloud & DevOps
        </h3>
        <ul class="skill-list">
          <li><span aria-hidden="true">►</span> Docker</li>
          <li><span aria-hidden="true">►</span> CI/CD Pipelines</li>
          <li><span aria-hidden="true">►</span> Git</li>
          <li><span aria-hidden="true">►</span> Agile / Scrum</li>
        </ul>
      </div>

      <div class="skill-block">
        <h3>
          <span class="skill-icon" aria-hidden="true">⚡</span>
          Databases
        </h3>
        <ul class="skill-list">
          <li><span aria-hidden="true">►</span> MS SQL Server</li>
          <li><span aria-hidden="true">►</span> PostgreSQL</li>
        </ul>
      </div>

      <div class="skill-block">
        <h3>
          <span class="skill-icon" aria-hidden="true">✓</span>
          Testing & Automation
        </h3>
        <ul class="skill-list">
          <li><span aria-hidden="true">►</span> xUnit</li>
          <li><span aria-hidden="true">►</span> Selenium</li>
          <li><span aria-hidden="true">►</span> Postman</li>
        </ul>
      </div>

      <div class="skill-block">
        <h3>
          <span class="skill-icon" aria-hidden="true">🛠</span>
          Tools
        </h3>
        <ul class="skill-list">
          <li><span aria-hidden="true">►</span> Visual Studio</li>
          <li><span aria-hidden="true">►</span> VS Code</li>
          <li><span aria-hidden="true">►</span> Jira</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Languages & Interests -->
  <div class="cv-extras">
    <section class="extras-section" aria-labelledby="languages-heading">
      <h2 id="languages-heading">
        <span aria-hidden="true">🌐</span> Languages
      </h2>
      <ul class="extras-list">
        <li><strong>English:</strong> Fluent (C1)</li>
        <li><strong>German:</strong> Beginner (A1)</li>
      </ul>
    </section>

    <section class="extras-section" aria-labelledby="interests-heading">
      <h2 id="interests-heading">
        <span aria-hidden="true">★</span> Interests
      </h2>
      <ul class="extras-list">
        <li>Cycling</li>
        <li>Hiking and Rock Climbing</li>
      </ul>
    </section>
  </div>

</div>

<aside class="cv-accessibility-note" role="complementary">
  <p><strong>Accessibility Note:</strong> This visual timeline uses both color and icons to distinguish between work experience and education. All interactive elements are keyboard accessible. Press Tab to navigate.</p>
</aside>
