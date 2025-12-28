from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional, List
import uvicorn
import shutil
import os

app = FastAPI(title="AI Electricity Bill Error Detection System")

# CORS Setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify the frontend origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Models
class BillAnalysisResult(BaseModel):
    bill_id: str
    customer_name: str
    billing_period: str
    total_amount: float
    detected_errors: List[str]
    savings_recommendations: List[str]
    confidence_score: float

# Mock Services (Placeholders)
def mock_ocr_process(file_path: str):
    # Determine result based on filename or random for demo
    return {
        "text": "Extracted Text...",
        "data": {
            "customer_name": "Jeswin Jones",
            "units_consumed": 450,
            "tariff_slab": "Tier 3",
            "billed_amount": 3500.00
        }
    }

def analyze_bill_logic(extracted_data):
    errors = []
    # Logic: simple heuristic check
    if extracted_data["units_consumed"] > 400 and extracted_data["billed_amount"] > 3000:
        errors.append("Potential overcharge: Tariff rate mismatch for Tier 3.")
    
    recommendations = ["Switch to LED bulbs.", "Check for appliance leakage."]
    
    return BillAnalysisResult(
        bill_id="BILL-12345",
        customer_name=extracted_data["customer_name"],
        billing_period="Nov-Dec 2025",
        total_amount=extracted_data["billed_amount"],
        detected_errors=errors,
        savings_recommendations=recommendations,
        confidence_score=0.92
    )

@app.get("/")
def read_root():
    return {"message": "AI Electricity Bill Detection API is running"}

@app.post("/api/analyze", response_model=BillAnalysisResult)
async def analyze_bill(file: UploadFile = File(...)):
    try:
        # Save file temporarily
        temp_dir = "temp_uploads"
        os.makedirs(temp_dir, exist_ok=True)
        file_path = os.path.join(temp_dir, file.filename)
        
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
            
        # 1. OCR Step
        ocr_result = mock_ocr_process(file_path)
        
        # 2. Analysis Step
        final_result = analyze_bill_logic(ocr_result["data"])
        
        # Cleanup
        os.remove(file_path)
        
        return final_result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
