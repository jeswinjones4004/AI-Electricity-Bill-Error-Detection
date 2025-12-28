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
