# [Project Name] — Vibe-Coding PRD (UXD Master)

**Project Vibe (1-sentence pitch):** A clean, accessible personal UX website that clearly communicates my skills, experience, and design thinking.

**Date:** 15/12/2025  
**Author(s):** Waleed Binsaad  
**Version:** v0.1  

**Links:**  
https://github.com/wbinsaad/Vibe-Coding-Hackathons

---

## 1) Core Context — “Master Prompt”

### Problem (1–2 sentences)
UX designers need a clear and engaging way to present their skills, experience, and thinking beyond a static CV. Existing portfolios are often generic and lack interactivity or personality.

### Solution (1–2 sentences)
A personalized, accessible web profile built on Academic Pages, enhanced with custom design, interactivity, and AI-assisted vibe-coding to showcase my UX work, CV, and publications.

### Target Users
- Recruiters  
- Hiring managers  
- Professors  
- Collaborators  

### Primary Use Cases
- Review CV  
- Explore projects  
- Understand design approach  
- Contact me  

### North-Star Success Metric
Users can understand my profile and key skills in under 2 minutes.

### Non-Goals
- Not a job application portal  
- Not a social network  
- Not a content management system  

---

## 2) UX Foundations (Vibe, Research, Accessibility)

### Personas

**Persona 1: Hiring Manager**
- **Goal:** Quickly assess skills and experience  
- **Context:** Reviewing multiple candidates  

### Top Insights / Pain Points
- Limited time  
- Too much text in traditional portfolios  
- Hard to understand designer’s thinking  

### Emotional & Contextual “Vibe” Principles
- Professional but human  
- Confident, not flashy  
- Clear, calm, and readable  

### Accessibility & Inclusion Requirements
- WCAG-compliant contrast  
- Keyboard navigation  
- Screen-reader friendly content  
- Text alternatives for visuals  

### High-Level Journey
Landing → About/Hero → CV → Project/Paper → Contact

---

## 3) Scope & Priorities

### MVP (V1) Goals
- Custom theme  
- Hero landing page  
- Accessible CV  
- One interactive paper or portfolio project  

### Out of Scope for V1
- Multiple projects  
- Full CMS  
- User accounts  

### Assumptions & Risks
- Limited hackathon time  
- Reliance on template constraints  
- AI-generated content may need correction  

---

## 4) Tech Stack & Architecture

### Frontend
- Jekyll (Academic Pages)  
- HTML  
- CSS  

### Backend
- None (static site)

### Database
- None

### Key APIs
- Optional (AI tools for content)

### Deployment
- GitHub Pages / Vercel

### Security / Privacy
- No sensitive user data stored

---

## 5) Feature Modules (Prompt-by-Prompt, Build the MVP)

### Module #1: Hero Landing Page
**Priority:** P0  

**User Story:**  
As a visitor, I want to immediately understand who I am and what I do, so that I can decide whether to explore further.

**Acceptance Criteria — To-Prompt Checklist**
- [ ] Clear headline  
- [ ] Profile image  
- [ ] Navigation links  

---

### Module #2: Interactive CV
**Priority:** P0  

**User Story:**  
As a recruiter, I want to scan experience quickly in multiple formats.

**Acceptance Criteria — To-Prompt Checklist**
- [ ] Text version  
- [ ] Visual timeline  
- [ ] Accessible structure  

---

## 6) AI Design & Prompting Strategy

AI is used as a collaborative assistant following **TACO principles** (Task, Actor, Context, Output).

Prompting is iterative:  
**draft → review → refine**

Step-by-step prompts are used for structuring content.

All AI-generated outputs are manually reviewed.

---

## 7) IA, Flows & UI

- **Information Architecture:** Home, CV, Projects, Contact  
- **Key Flows:** Landing → CV → Project → Contact  
- **Design Tokens & Components:** Simple navigation, fast scanning, accessible typography  

**Localization & Tone Guidelines:**  
_(To be defined)_

---

## 8) Iteration Plan & Workflow

**Build Rhythm:**  
Development follows a vibe-coding workflow.

**Versioning & Reviews:**  
One feature at a time, frequent Git checkpoints, AI-assisted debugging.

**Risk / Spike Tickets:**  
Each milestone is validated before moving on.

---

## 9) Quality: Testing, A11y, Performance

- **Testing:** Manual testing across devices  
- **Accessibility:** AI suggestions + human validation  
- **Performance Budgets:** Lightweight assets for performance  

---

## 10) Metrics & Analytics

- Page views  
- Time on page  
- Qualitative feedback  

---

## 11) Launch & Ops

- Single production deployment via GitHub Pages  
- Occasional content updates  
