---
layout: archive
title: "Audio CV"
permalink: /cv-audio/
author_profile: true
---

{% include base_path %}

<nav class="cv-mode-nav" aria-label="CV mode navigation">
  <a href="{{ base_path }}/cv-modes/" class="cv-back-link">← All CV Modes</a>
  <span class="cv-current-mode" aria-current="page">Mode: <strong>Audio</strong></span>
</nav>

<div class="cv-audio-container">
  <header class="cv-audio-header">
    <h1>Audio CV - Narrated Introduction</h1>
    <p class="cv-mode-description">Listen to a professional overview with accessible audio controls and full text transcript.</p>
  </header>

  <!-- Audio Player Section -->
  <section id="audio-player-section" aria-labelledby="audio-player-heading">
    <h2 id="audio-player-heading">Audio Introduction</h2>
    
    <div class="audio-player-wrapper">
      <div class="audio-visual-indicator" aria-hidden="true">
        <div class="eq-bar"></div>
        <div class="eq-bar"></div>
        <div class="eq-bar"></div>
        <div class="eq-bar"></div>
        <div class="eq-bar"></div>
      </div>

      <div class="audio-player" role="region" aria-label="Audio CV player">
        
        <!-- Audio element -->
        <audio id="cv-audio" preload="metadata">
          <source src="{{ base_path }}/files/cv-audio-intro.mp3" type="audio/mpeg">
          <p>Your browser does not support the audio element. Please read the transcript below or download the audio file.</p>
        </audio>

        <!-- Custom Controls -->
        <div class="audio-controls">
          <button id="play-pause-btn" class="audio-btn primary" aria-label="Play audio introduction">
            <span class="icon play-icon" aria-hidden="true">▶</span>
            <span class="btn-text">Play</span>
          </button>

          <button id="rewind-btn" class="audio-btn" aria-label="Rewind 10 seconds">
            <span class="icon" aria-hidden="true">⏪</span>
            <span class="btn-text">-10s</span>
          </button>

          <button id="forward-btn" class="audio-btn" aria-label="Forward 10 seconds">
            <span class="icon" aria-hidden="true">⏩</span>
            <span class="btn-text">+10s</span>
          </button>

          <div class="audio-time">
            <span id="current-time" aria-live="off">0:00</span>
            <span aria-hidden="true">/</span>
            <span id="total-time">0:00</span>
          </div>
        </div>

        <!-- Progress Bar -->
        <div class="progress-container">
          <label for="progress-bar" class="visually-hidden">Audio progress</label>
          <input 
            type="range" 
            id="progress-bar" 
            class="progress-bar" 
            min="0" 
            max="100" 
            value="0"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow="0"
            aria-label="Audio playback progress"
          />
          <div class="progress-fill" aria-hidden="true"></div>
        </div>

        <!-- Additional Controls -->
        <div class="audio-settings">
          <div class="playback-speed">
            <label for="speed-select">Speed:</label>
            <select id="speed-select" class="speed-select">
              <option value="0.75">0.75x</option>
              <option value="1" selected>1.0x</option>
              <option value="1.25">1.25x</option>
              <option value="1.5">1.5x</option>
            </select>
          </div>

          <a href="{{ base_path }}/files/cv-audio-intro.mp3" download class="download-btn" aria-label="Download audio file">
            <span aria-hidden="true">⬇</span> Download
          </a>
        </div>

        <!-- Status Message -->
        <div id="audio-status" class="audio-status" role="status" aria-live="polite" aria-atomic="true"></div>
      </div>

      <!-- Keyboard Shortcuts Info -->
      <aside class="keyboard-shortcuts" role="complementary">
        <h3>Keyboard Shortcuts</h3>
        <ul>
          <li><kbd>Space</kbd> - Play/Pause</li>
          <li><kbd>←</kbd> - Rewind 10 seconds</li>
          <li><kbd>→</kbd> - Forward 10 seconds</li>
          <li><kbd>↑</kbd> - Increase speed</li>
          <li><kbd>↓</kbd> - Decrease speed</li>
        </ul>
      </aside>
    </div>
  </section>

  <!-- Transcript Section -->
  <section id="transcript" aria-labelledby="transcript-heading">
    <h2 id="transcript-heading">Full Transcript</h2>
    
    <div class="transcript-content">
      <p class="transcript-intro"><strong>Note:</strong> This is a complete text transcript of the audio CV introduction for accessibility purposes.</p>
      
      <div class="transcript-text">
        <p>Hello, I'm Waleed Binsaad, a .NET and Python developer with a strong foundation in automation tools, system-level applications, and IoT solutions.</p>

        <p>I'm currently working as an Automation Developer at Infineon Technologies in Munich, Germany, where I design and implement automated tools using Python to improve efficiency and quality across our development processes.</p>

        <p>Previously, I spent over two years as a Software Developer at Aquat Food Industries in Jeddah, Saudi Arabia, where I developed applications and APIs using .NET and C# with multithreading. I integrated REST APIs, managed PostgreSQL and MS SQL databases, and built Dockerized applications in collaboration with DevOps teams.</p>

        <p>I hold a Master's degree in User Experience Design from Technische Hochschule Ingolstadt, where I developed an AR-based onboarding system using C# and Unity, incorporating usability testing with over 20 student participants. My Bachelor's degree in Information Technology from King Abdulaziz University included a thesis project where I built an IoT Smart Garden Automation system using Arduino, Python, Flask, and Raspberry Pi.</p>

        <p>My technical expertise spans C#, Python, and SQL, with extensive experience in .NET frameworks, Docker, CI/CD pipelines, and Agile development practices. I'm proficient in both MS SQL Server and PostgreSQL databases, and I use testing frameworks like xUnit and Selenium to ensure code quality.</p>

        <p>I'm passionate about combining my software development background with my growing UX expertise to create user-centered solutions, particularly in high-performance computing and embedded automotive platforms. Outside of work, I enjoy cycling, hiking, and rock climbing.</p>

        <p>Thank you for listening. For more details, please explore my text-based or visual CV modes, or feel free to reach out via the contact information on this site.</p>
      </div>
    </div>
  </section>

  <!-- Audio File Status Notice -->
  <aside class="audio-notice" role="note">
    <h3>Audio File Information</h3>
    <p><strong>Status:</strong> <span class="notice-label placeholder-label">Placeholder Audio</span></p>
    <p>This page is designed to support an audio introduction. The audio file path is configured as <code>files/cv-audio-intro.mp3</code>. If you plan to record a narrated CV, please replace the placeholder file with your recording.</p>
    <p><strong>Recommended specifications:</strong></p>
    <ul>
      <li>Duration: 90-120 seconds</li>
      <li>Format: MP3, 128kbps or higher</li>
      <li>Content: Professional summary, key experience, education, and career goals</li>
    </ul>
  </aside>

</div>

<aside class="cv-accessibility-note" role="complementary">
  <p><strong>Accessibility Note:</strong> All audio controls are keyboard accessible. Use Tab to navigate and Enter/Space to activate. Full transcript is provided for those who cannot or prefer not to use audio. Keyboard shortcuts are available for efficient navigation.</p>
</aside>

<script src="{{ base_path }}/assets/js/cv-audio-player.js"></script>
