from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
import os
from backend.preprocess import preprocess_input
from backend.predict import predict

app = FastAPI()

# CORS middleware (allow all origins for deployment; change later to your frontend URL)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ----------------------------
# Backend API routes
# ----------------------------

# Root route for testing API
@app.get("/api")
async def root_api():
    return {"message": "Insurance Prediction API is live!"}

# Input schema for prediction
class PolicyHolder(BaseModel):
    AGE: str
    GENDER: str
    RACE: str
    DRIVING_EXPERIENCE: str
    EDUCATION: str
    INCOME: str
    CREDIT_SCORE: float
    VEHICLE_OWNERSHIP: float
    VEHICLE_YEAR: str
    MARRIED: float
    CHILDREN: float
    ANNUAL_MILEAGE: float
    VEHICLE_TYPE: str
    SPEEDING_VIOLATIONS: int
    DUIS: int
    PAST_ACCIDENTS: int

# Prediction endpoint
@app.post("/api/predict")
async def predict_claim(data: PolicyHolder):
    try:
        data_dict = data.dict()
        X = preprocess_input(data_dict)
        prediction, probability = predict(X)
        return {"prediction": int(prediction), "probability": float(probability)}
    except Exception as e:
        return {"error": str(e)}

# List available figure files
@app.get("/api/visualizations")
async def get_visualizations():
    figures_dir = os.path.join("outputs", "figures")
    try:
        figures = os.listdir(figures_dir)
        figures = [f for f in figures if f.endswith('.png')]
        return {"figures": figures}
    except FileNotFoundError:
        return {"figures": [], "error": "Figures directory not found"}

# Serve individual figure file
@app.get("/api/figures/{filename}")
async def get_figure(filename: str):
    file_path = os.path.join("outputs", "figures", filename)
    if os.path.exists(file_path):
        return FileResponse(file_path)
    return {"error": "File not found"}

# ----------------------------
# Serve React frontend
# ----------------------------

# Make sure frontend build is at: backend/build
# Correct — points to the build folder inside backend
app.mount("/", StaticFiles(directory=os.path.join(os.path.dirname(__file__), "build"), html=True), name="frontend")

