# AI Electricity Bill Error Detection & Savings System

An AI-powered multi-agent system that analyzes electricity bills, detects anomalies, and provides actionable recommendations for reducing costs.

## Project Structure

- **frontend/**: React + Vite application with Premium UI.
- **backend/**: FastAPI Python server for OCR and Analysis.

## Getting Started

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

## Implementation Details
- **Frontend**: React, CSS Variables, Glassmorphism
- **Backend**: FastAPI, Pydantic
- **AI/ML**: (Mocked for initial version) Ready for Tesseract OCR & Classification Models.
