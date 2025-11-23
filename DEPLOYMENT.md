# Deployment Guide

## GitHub Pages Deployment

This site is configured to deploy to GitHub Pages at `https://JahyLuky.github.io`

### Option 1: Manual Deployment

1. Build the production version:
   ```bash
   npm run build
   ```

2. The build output will be in the `dist` folder

3. Deploy the `dist` folder to GitHub Pages:
   ```bash
   # Install gh-pages if you haven't
   npm install -D gh-pages
   
   # Deploy
   npx gh-pages -d dist
   ```

### Option 2: GitHub Actions (Automated)

The repository can be configured with GitHub Actions to automatically deploy on push to main.

1. Go to your repository settings on GitHub
2. Navigate to Pages section
3. Set Source to "GitHub Actions"
4. The workflow will automatically build and deploy on every push to main

### Local Testing

Before deploying, test the production build locally:

```bash
npm run build
npm run preview
```

Visit `http://localhost:4173` to see the production build.

### Troubleshooting

- **404 on routes**: Make sure you're using HashRouter (already configured)
- **Assets not loading**: Verify the `base` URL in `vite.config.ts` is set to `/`
- **Build fails**: Run `npm run lint` to check for TypeScript errors

## Current Configuration

- Base URL: `/` (correct for username.github.io repos)
- Router: HashRouter (works with GitHub Pages)
- Build output: `dist/`
- Bundle size: ~354KB uncompressed, ~115KB gzipped
