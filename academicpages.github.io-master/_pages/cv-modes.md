---
layout: archive
title: "Choose Your CV Experience"
permalink: /cv-modes/
author_profile: true
---

{% include base_path %}

<div class="cv-modes-container">
  <header class="cv-modes-header">
    <h1>Accessible CV - Three Modes</h1>
    <p class="cv-modes-intro">Experience my professional background in the format that works best for you. Each mode presents the same information in different, accessible ways.</p>
  </header>

  <nav class="cv-modes-selector" aria-label="CV presentation modes">
    <article class="cv-mode-card" id="text-mode">
      <div class="cv-mode-icon" aria-hidden="true">
        <span class="terminal-prompt">&gt;_</span>
      </div>
      <h2>
        <a href="{{ base_path }}/cv/" class="cv-mode-link">
          <span class="mode-number">01</span> Text-Based CV
        </a>
      </h2>
      <p class="cv-mode-description">
        Semantic, screen-reader optimized CV with proper heading hierarchy and keyboard navigation. 
        <strong>Recommended for accessibility.</strong>
      </p>
      <ul class="cv-mode-features" aria-label="Text mode features">
        <li>✓ Fully keyboard accessible</li>
        <li>✓ Screen reader optimized</li>
        <li>✓ Semantic HTML structure</li>
        <li>✓ Print-friendly</li>
      </ul>
      <a href="{{ base_path }}/cv/" class="btn btn--primary" aria-label="View text-based CV">
        View Text CV →
      </a>
    </article>

    <article class="cv-mode-card" id="visual-mode">
      <div class="cv-mode-icon" aria-hidden="true">
        <span class="terminal-prompt">◆◇◆</span>
      </div>
      <h2>
        <a href="{{ base_path }}/cv-visual/" class="cv-mode-link">
          <span class="mode-number">02</span> Visual CV
        </a>
      </h2>
      <p class="cv-mode-description">
        Interactive timeline and infographic presentation with high-contrast neon terminal aesthetic. 
        <strong>WCAG compliant.</strong>
      </p>
      <ul class="cv-mode-features" aria-label="Visual mode features">
        <li>✓ Interactive timeline</li>
        <li>✓ High contrast design</li>
        <li>✓ Responsive layout</li>
        <li>✓ Color + icon coding</li>
      </ul>
      <a href="{{ base_path }}/cv-visual/" class="btn btn--primary" aria-label="View visual timeline CV">
        View Visual CV →
      </a>
    </article>

    <article class="cv-mode-card" id="audio-mode">
      <div class="cv-mode-icon" aria-hidden="true">
        <span class="terminal-prompt">♫♪♫</span>
      </div>
      <h2>
        <a href="{{ base_path }}/cv-audio/" class="cv-mode-link">
          <span class="mode-number">03</span> Audio CV
        </a>
      </h2>
      <p class="cv-mode-description">
        Narrated professional introduction with accessible controls and full text transcript. 
        <strong>Multisensory experience.</strong>
      </p>
      <ul class="cv-mode-features" aria-label="Audio mode features">
        <li>✓ Keyboard shortcuts</li>
        <li>✓ Full transcript included</li>
        <li>✓ Adjustable playback</li>
        <li>✓ Download option</li>
      </ul>
      <a href="{{ base_path }}/cv-audio/" class="btn btn--primary" aria-label="View audio narrated CV">
        View Audio CV →
      </a>
    </article>
  </nav>

  <aside class="cv-modes-accessibility" role="complementary">
    <h2>Accessibility Statement</h2>
    <p>All three CV modes are designed to meet <strong>WCAG 2.1 Level AA</strong> standards. Each mode presents identical factual content in different formats to accommodate various user preferences and assistive technologies.</p>
    <ul>
      <li><strong>Keyboard Navigation:</strong> All interactive elements are accessible via keyboard</li>
      <li><strong>Screen Readers:</strong> Proper ARIA labels and semantic markup throughout</li>
      <li><strong>Color Contrast:</strong> All text meets minimum 4.5:1 contrast ratio</li>
      <li><strong>No Information by Color Alone:</strong> Icons and labels supplement color coding</li>
    </ul>
  </aside>
</div>
