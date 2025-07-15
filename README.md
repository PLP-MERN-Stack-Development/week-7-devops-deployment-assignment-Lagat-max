# MERN Stack Production Deployment Assignment

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