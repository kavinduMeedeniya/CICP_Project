import joblib
import os

def predict(data):
    # Load model
    model_path = os.path.join(os.path.dirname(__file__), '../models/logistic_regression_model.pkl')
    model = joblib.load(model_path)
    
    # Predict
    prediction = model.predict(data)
    probability = model.predict_proba(data)[:, 1]
    return prediction[0], probability[0]