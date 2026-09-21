# WeIntern - Week 1 Assignments

This repository contains the completed assignments for Week 1 of the **WeIntern Web Development Internship Program**.

---

## 📂 Assignments Overview

### 1. [Task 1: Personal Portfolio Website](./portfolio-website/)
- **Description**: A multi-page responsive personal portfolio website showcasing profile information, education, skills, projects, and contact form.
- **Technologies**: HTML5, CSS3, JavaScript.
- **Features**: Responsive navigation bar, project filter & cards, resume download, contact validation.

---

### 2. [Task 2: Responsive Business Landing Page - NEXORA Technologies](./business-landing-page/)
- **Description**: A modern, high-converting business landing page for **NEXORA Technologies** based in **Sangli, Maharashtra**.
- **Technologies**: HTML5, CSS3 (Flexbox & Grid), Vanilla JavaScript.
- **Features**: Sticky navbar with mobile hamburger menu, hero section with analytics visual card, 6-card services grid, interactive contact form with validation, office info, and footer.

---

### 3. [Task 3: CSS Challenge - Flexbox, Grid & Animations](./css-challenge/)
- **Description**: Practical CSS exercises covering modern responsive layouts and subtle UI animations.
- **Technologies**: Semantic HTML5, Vanilla CSS3 (Flexbox, CSS Grid, Transitions, Keyframes).
- **Directory**: [`css-challenge/`](./css-challenge/)

#### 🚀 Key Challenge Features:
1. **Flexbox Layout Challenge**:
   - 3-card feature row laid out horizontally on desktop using `display: flex;`, `justify-content: space-between;`, `align-items: stretch;`, and `gap: 24px;`.
   - Cards flex dynamically with `flex: 1` and provide subtle hover feedback.
   - Fully responsive: Stacks vertically on mobile screens (`<= 768px`) with clean spacing.

2. **CSS Grid Dashboard Challenge**:
   - 6-item analytics & metrics dashboard arranged in a 2D layout.
   - Built using `display: grid;` and `grid-template-columns: repeat(3, 1fr);`.
   - Seamlessly rearranges to 2 columns on tablets (`<= 992px`) and 1 column on mobile (`<= 768px`).

3. **CSS Animation Showcase**:
   - **Button Hover Effect**: Interactive scale and shadow elevation.
   - **Loading Spinner**: Continuous 360-degree rotation with `@keyframes spin`.
   - **Card Lift Effect**: Smooth translation (`translateY(-8px)`) with cubic-bezier timing.
   - **Animated Underline Link**: Expanding underline using pseudo-element `::after` with `scaleX`.
   - **Pulsing Status Badge**: Glowing wave pulse effect with `@keyframes pulse`.
   - **Fade-In Reveal**: Smooth entrance animation with `@keyframes fadeIn`.

---

## 📸 Task 3: CSS Challenge Screenshots

### 1. Flexbox Layout - Desktop View
![Flexbox Desktop](screenshots/flex-desktop.png)

### 2. Flexbox Layout - Mobile View (Stacked)
![Flexbox Mobile](screenshots/flex-mobile.png)

### 3. CSS Grid Layout - 6 Cards Dashboard View
![Grid Layout](screenshots/grid-layout.png)

### 4. CSS Animation Showcase Components
![Animation Demo](screenshots/animation-demo.png)

---

## 🛠️ How to Run Any Assignment Locally

1. Clone or download this repository:
   ```bash
   git clone https://github.com/vighnesh1310/WeIntern-Week-1-Assignment.git
   ```
2. Navigate into any assignment folder (`portfolio-website`, `business-landing-page`, or `css-challenge`).
3. Double-click `index.html` to open it in your default web browser (Chrome, Edge, Firefox).
4. Alternatively, use **VS Code Live Server** extension for live reload during development.