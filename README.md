# Samuel — Personal Portfolio

A modern, responsive personal portfolio site for **Samuel Katongole** — Software Engineer, Team Lead, Writer, and Educator. Built with React and Vite.

## Features

- **Multi-page layout** — Home, About, Resume, Portfolio, Blog, Quotes, Contact
- **Dark / light theme** — Theme toggle with preference persisted in `localStorage`
- **Profile card** — Contact info, location (Kampala, Uganda), and role highlights
- **Services section** — Website development, Java development, writing, team leadership, education & mentoring
- **Responsive design** — Sidebar + main content layout with theme-aware styling

## Tech Stack

- **React** 19
- **Vite** 7
- **React Router DOM** 7
- **Lucide React** — icons

## Project Structure

```
src/
├── App.jsx              # App shell, routing, theme provider
├── main.jsx             # Entry point
├── index.css            # Global styles
├── assets/              # CSS modules, images, styles
├── components/          # Reusable UI
│   ├── AboutSection.jsx
│   ├── InfoItem.jsx
│   ├── Navigation.jsx
│   ├── ProfileCard.jsx
│   ├── Resume.jsx
│   ├── ServiceCard.jsx
│   ├── ServicesSection.jsx
│   └── ThemeToggle.jsx
├── contexts/
│   └── ThemeContext.jsx # Theme state (dark/light)
├── hooks/
│   └── useThemeStyles.js
└── pages/
    ├── Home.jsx
    ├── About.jsx
    ├── Resume.jsx
    ├── Portfolio.jsx
    ├── Blog.jsx
    ├── Quotes.jsx
    └── Contact.jsx
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Runs the app at [http://localhost:5173](http://localhost:5173) (or the port Vite assigns).

### Build

```bash
npm run build
```

Output goes to `dist/`. Preview the production build:

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## License

Private project.
