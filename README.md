# Terminal Portfolio

Modern, terminal-themed personal portfolio built with React + TypeScript.

🌐 **Live Site**: https://JahyLuky.github.io

## Features

- 🖥️ Terminal-inspired UI with typing animations
- ⚡ Fast and responsive (React + Vite)
- ♿ Fully accessible (keyboard navigation, ARIA labels)
- 📱 Mobile-friendly responsive design
- 🎨 Smooth page transitions with Framer Motion
- 🎯 TypeScript for type safety
- 🎭 Reduced motion support

## Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6 (HashRouter)
- **Animations**: Framer Motion
- **Deployment**: GitHub Pages

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npm run lint
```

## Deployment

This project automatically deploys to GitHub Pages via GitHub Actions when you push to the `main` branch.

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## Project Structure

```
src/
├── components/
│   ├── terminal/      # Terminal UI components
│   ├── navigation/    # Navigation component
│   └── layout/        # Layout components
├── pages/             # Page components
├── hooks/             # Custom React hooks
├── types/             # TypeScript type definitions
└── App.tsx            # Main app component
```

## Bundle Size

- Total JS: ~354KB uncompressed (~115KB gzipped)
- CSS: ~9KB uncompressed (~2.4KB gzipped)
- Optimized with code splitting and tree shaking
