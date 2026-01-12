# Server Overview

A React + TypeScript application for visualizing and comparing server specifications.

## Local Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the development server:**

   ```bash
   npm run dev
   ```

3. **Open in browser:**

   Visit [http://localhost:5173](http://localhost:5173)

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

### Testing Production Build Locally

To test the production build before deploying:

```bash
npm run build
npm run preview
```

This will build the app and serve it at [http://localhost:4173](http://localhost:4173).

## Deployment

This app is configured for deployment on Vercel. Make sure to set the **Root Directory** to `server-overview` in your Vercel project settings.
