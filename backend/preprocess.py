import pandas as pd
import joblib
import os

def preprocess_input(data):
    # Convert dict to DataFrame
    df = pd.DataFrame([data])
    
    # Define feature columns (must match preprocessing.ipynb)
    categorical_cols = ['AGE', 'GENDER', 'RACE', 'DRIVING_EXPERIENCE', 'EDUCATION', 'INCOME', 'VEHICLE_YEAR', 'VEHICLE_TYPE']
    numerical_cols = ['CREDIT_SCORE', 'VEHICLE_OWNERSHIP', 'MARRIED', 'CHILDREN', 'ANNUAL_MILEAGE', 'SPEEDING_VIOLATIONS', 'DUIS', 'PAST_ACCIDENTS']
    
    # Load preprocessor
    preprocessor_path = os.path.join(os.path.dirname(__file__), '../models/preprocessor.pkl')
    preprocessor = joblib.load(preprocessor_path)
    
    # Ensure only expected columns are passed
    X = df[categorical_cols + numerical_cols]
    
    # Apply preprocessor
    X_transformed = preprocessor.transform(X)
    return X_transformed