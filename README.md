# MERN Stack Production Deployment Assignment

## Deployment Instructions

### Prerequisites
- Node.js and npm installed
- Accounts on GitHub, MongoDB Atlas, Render/Railway/Heroku, Vercel/Netlify/GitHub Pages

### Environment Setup
1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd <repo-folder>
   ```
2. Install dependencies for both client and server:
   ```sh
   cd client && npm install
   cd ../server && npm install
   ```
3. Create environment variable files:
   - Copy `.env.example` to `.env` in both client and server folders and fill in your values.

### Backend Deployment (Express.js)
1. Push your code to GitHub.
2. Connect your repository to Render, Railway, or Heroku.
3. Set environment variables in the cloud platform dashboard.
4. Enable automatic deploys from GitHub.
5. (Optional) Configure a custom domain and HTTPS.

### Frontend Deployment (React)
1. Push your code to GitHub.
2. Connect your repository to Vercel, Netlify, or GitHub Pages.
3. Set build settings and environment variables.
4. Enable automatic deploys from GitHub.
5. (Optional) Configure a custom domain and HTTPS.

### CI/CD Setup
1. Use GitHub Actions workflows for testing and deployment.
2. Example workflow files are in `.github/workflows/`.
3. On each push, tests and builds will run automatically.

### Links
- **Frontend:** [Deployed URL here]
- **Backend API:** [Deployed URL here]

### Monitoring & Maintenance
- Health check endpoint available at `/health` (backend)
- Set up uptime monitoring using services like UptimeRobot or Pingdom
- Error tracking: Integrate Sentry or similar for backend and frontend
- Performance monitoring: Use server resource monitoring tools and browser performance APIs
- Database backups: Schedule regular backups in MongoDB Atlas
- Maintenance plan: Document update, patch, and rollback procedures

## Overview
This project demonstrates a production-ready MERN stack application with CI/CD, environment configuration, monitoring, and deployment to cloud platforms.

## Tech Stack
- **Frontend:** React (client/)
- **Backend:** Express.js (server/)
- **Database:** MongoDB Atlas
- **CI/CD:** GitHub Actions
- **Backend Hosting:** Render
- **Frontend Hosting:** Vercel

## URLs
- **Frontend:** [https://your-frontend-url.vercel.app](https://your-frontend-url.vercel.app)
- **Backend API:** [https://your-backend-url.onrender.com/api](https://your-backend-url.onrender.com/api)

## Features
- Production-optimized React build (code splitting, caching)
- Secure, production-ready Express backend (security headers, error handling, logging)
- Environment variable configuration for all environments
- MongoDB Atlas with connection pooling and secure user permissions
- CI/CD pipelines for test, lint, build, and deploy
- Health check endpoints and monitoring
- Error and performance tracking (Sentry, uptime)

## Setup
1. Clone the repo
2. Create `.env` files in `server/` and `client/` (see `.env.example` in each)
3. Install dependencies:
   - `cd server && npm install`
   - `cd ../client && npm install`
4. Start MongoDB Atlas cluster and update `MONGODB_URI`
5. Run locally:
   - Backend: `npm run dev` in `server/`
   - Frontend: `npm start` in `client/`

## Deployment
- **Backend:** Deploys to Render via GitHub Actions on push to `main`
- **Frontend:** Deploys to Vercel via GitHub Actions on push to `main`
- Configure secrets in GitHub for Render and Vercel API keys

## CI/CD
- Automated tests, linting, and builds for both frontend and backend
- Deploys only on successful builds
- Health checks post-deployment

## Monitoring
- Health check endpoint: `/api/health`
- Uptime monitoring via GitHub Actions
- Error logging with Winston (backend)
- (Optional) Integrate Sentry for error tracking

## Maintenance Plan
- Schedule regular dependency updates
- Monitor uptime and error logs
- Plan for regular database backups via MongoDB Atlas
- Document rollback procedures in case of failed deployments

## Screenshots


## License
MIT