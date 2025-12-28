# AI Electricity Bill Error Detection & Savings System

An AI-powered multi-agent system that analyzes electricity bills, detects anomalies, and provides actionable recommendations for reducing costs.

## 🚀 Live Demo & Deployment

### Option 1: Frontend Only (Easiest)
Get the UI running in seconds. Since the current version uses a Mock AI engine, the frontend works fully without the backend.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fjeswinjones4004%2FAI-Electricity-Bill-Error-Detection&root-directory=frontend)

### Option 2: Full Stack (Frontend + Backend)
Deploy both the React Frontend and the Python FastAPI Backend.

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/jeswinjones4004/AI-Electricity-Bill-Error-Detection)

---

## Project Structure

- **frontend/**: React + Vite application with Premium UI.
- **backend/**: FastAPI Python server for OCR and Analysis.

## Getting Started Locally

### Prerequisites
- Node.js (v18+)
- Python (v3.9+)

### 1. Setup Frontend
```bash
cd frontend
npm install
npm run dev
```
Access the UI at `http://localhost:5173`.

### 2. Setup Backend
```bash
cd backend
pip install -r requirements.txt
python main.py
```
Access the API docs at `http://localhost:8000/docs`.

## Key Features
- **Bill Upload**: Drag-and-drop support for PDF and Images.
- **Error Detection**: Identifies tariff mismatches and calculation errors.
- **Savings Engine**: Recommends ways to reduce electricity consumption.
- **Premium UI**: Modern Glassmorphism design with animations.

---

## Auto-deploy to Render (GitHub Actions)

This repository includes a GitHub Actions workflow that triggers Render deploys when you push to `main`.

- Workflow path: `.github/workflows/deploy-to-render.yml`

Required repository secrets (set these in your GitHub repository Settings → Secrets):

- `RENDER_API_KEY`: Your Render API key (create in Render dashboard → Account → API Keys).
- `RENDER_SERVICE_ID_BACKEND`: The Render service ID for the backend service (find in Render dashboard → Service → Settings → Service ID).
- `RENDER_SERVICE_ID_FRONTEND`: The Render service ID for the frontend/static service.

How it works:

- On push to `main`, the workflow will POST to Render's API to create a new deploy for each service ID provided.
- The workflow requires that you have already imported the repo into Render using `render.yaml` (or manually created two services for backend and frontend) so you can obtain the Service IDs.

Steps to enable CI deploy:

1. Push this repo to GitHub (if not already):

```bash
git remote add origin <your-repo-url>
git push -u origin main
```

2. In Render, import the repo using `render.yaml` (Dashboard → New → Import from GitHub → Deploy using render.yaml) or create two services matching the `render.yaml` configuration.

3. In GitHub repo Settings → Secrets → Actions, add `RENDER_API_KEY`, `RENDER_SERVICE_ID_BACKEND`, and `RENDER_SERVICE_ID_FRONTEND`.

4. Push a commit to `main`. The workflow will run and trigger deploys on Render.

Notes:

- If you prefer not to store service IDs as secrets, you can modify the workflow to trigger a single deploy (or to use only the frontend/backend service you need).
- For full automation (create services on first deploy from `render.yaml`), follow Render's documentation for `render.yaml` import; service IDs are available after import.

