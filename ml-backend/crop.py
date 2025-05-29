import os
import joblib
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
# Load your machine learning model
model_file = os.path.join(os.path.dirname(__file__), "models/new_crop_recommendation_model.pkl")  # Adjust the path as needed
crop_model = joblib.load(model_file)
Crops = ['Rice', 'Maize', 'Chick Pea', 'Kidney Beans', 'Pigeon Peas',
       'Moth Beans', 'Mung Bean', 'Black Gram', 'Lentil', 'Pomegranate',
       'Banana', 'Mango', 'Grapes', 'Watermelon', 'Muskmelon', 'Apple',
       'Orange', 'Papaya', 'Coconut', 'Cotton', 'Jute', 'Coffee']
# Load environment variables from .env file
load_dotenv()
# Define the FastAPI app
app = FastAPI()
# Allow CORS for your frontend (adjust origins as needed)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.getenv("URL"),],  # Adjust this to your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Define the input data model
class InputData(BaseModel):
    nitrogen: float
    phosphorus: float
    potassium: float
    temperature: float
    humidity: float
    ph: float
    rainfall: float
# Define the prediction endpoint
@app.post("/cropPredict")
def predict(data: InputData):
    try:
        # Prepare the input data for the model
        input_data = [[data.nitrogen, data.phosphorus, data.potassium,
                       data.temperature, data.humidity, data.ph, data.rainfall]]
        print(input_data)
        prediction = crop_model.predict(input_data)
        return {"prediction": Crops[prediction[0]]}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
@app.get("/")
def read_root():
    return {"message": "Welcome to the Models base of FieldMaven"}

#uvicorn crop:app --reload