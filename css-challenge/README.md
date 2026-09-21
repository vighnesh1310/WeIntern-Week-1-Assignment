# CSS Challenge - Practical Layout & Animation Exercises

This project contains the completed solutions for **Task 3: CSS Challenge**, covering modern CSS layout techniques and keyframe animations through practical exercises.

---

## 📌 Project Overview

The challenge is divided into three core mini-tasks:

1. **Flexbox Layout Task**: A responsive 3-card feature row utilizing Flexbox properties (`justify-content`, `align-items`, `gap`, flexible widths) with interactive hover feedback and mobile vertical stacking.
2. **Grid Layout Task**: A clean 6-item dashboard metrics gallery built with CSS Grid using `repeat()` and responsive multi-column restructuring.
3. **Animation Task**: Subtle, professional UI animation components utilizing CSS `transition`, `transform`, and `@keyframes` (button hover effect, continuous spinning loader, card lift, animated underline navigation, pulsing status indicator, and fade-in reveal).

---

## 🚀 Tasks Breakdown

### 1. Flexbox Layout Task
- **Desktop**: 3 cards displayed horizontally in a single row with equal heights (`align-items: stretch`).
- **Mobile (`<= 768px`)**: Cards stack vertically with consistent spacing and alignment.
- **Key CSS Properties**:
  - `display: flex;`
  - `justify-content: space-between;`
  - `align-items: stretch;`
  - `gap: 24px;`
  - `flex: 1;`
  - `transition: transform 0.3s ease, box-shadow 0.3s ease;`

### 2. CSS Grid Layout Task
- **Grid Structure**: 6 dashboard metric cards displayed in a two-dimensional grid.
- **Responsive Columns**:
  - Desktop: 3 columns (`repeat(3, 1fr)`)
  - Tablet (`<= 992px`): 2 columns (`repeat(2, 1fr)`)
  - Mobile (`<= 768px`): 1 column (`1fr`)
- **Key CSS Properties**:
  - `display: grid;`
  - `grid-template-columns: repeat(3, 1fr);`
  - `gap: 20px;`

### 3. Animation Task
- **Button Hover Effect**: Scale and elevation shadow transition on hover.
- **Loading Spinner**: Continuous 360-degree rotation using `@keyframes spin`.
- **Card Lift Effect**: Smooth translation (`translateY(-8px)`) with cubic-bezier timing and subtle glow.
- **Animated Underline Link**: Pseudo-element `::after` with `scaleX` transition on hover.
- **Pulsing Status Badge**: Glowing wave pulse effect with `@keyframes pulse`.
- **Fade-In Reveal**: Smooth opacity and translation on entrance with `@keyframes fadeIn`.

---

## 📁 File Structure

```text
css-challenge/
├── css/
│   └── style.css       # Complete layout, grid, and animation styles
├── index.html          # Main HTML challenge showcase
└── README.md           # Documentation and task summary
```

---

## 💻 How to Run Locally

1. Open the `css-challenge` folder in your terminal or file explorer.
2. Double click `index.html` to open it in any modern browser (Chrome, Firefox, Edge).
3. Resize the browser window or use DevTools (F12) to test responsive breakpoints on mobile and tablet screens.
