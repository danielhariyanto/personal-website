# Daniel Hariyanto - Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Inter & JetBrains Mono
- **Animations**: Custom CSS animations

## Features

- Responsive design that works on all devices
- Smooth scrolling navigation
- Custom animations and transitions
- Optimized performance with Next.js
- Clean, minimalist design

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles and animations
│   ├── layout.tsx       # Root layout with fonts
│   └── page.tsx         # Home page
├── components/
│   ├── about.tsx        # About section
│   ├── contact.tsx      # Contact section
│   ├── experience.tsx   # Experience section
│   ├── hero.tsx         # Hero/landing section
│   ├── navigation.tsx   # Navigation component
│   ├── projects.tsx     # Projects showcase
│   └── skills.tsx       # Skills section
└── public/              # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository
```bash
git clone [repository-url]
cd v0personalwebsite
```

2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```