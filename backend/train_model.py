import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
import joblib

def train_models():
    df = pd.read_csv('../data/processed/preprocessed_data.csv')
    X = df.drop('OUTCOME', axis=1)
    y = df['OUTCOME']
    lr_model = LogisticRegression(random_state=42, max_iter=1000)
    dt_model = DecisionTreeClassifier(random_state=42)
    lr_model.fit(X, y)
    dt_model.fit(X, y)
    joblib.dump(lr_model, '../models/logistic_regression_model.pkl')
    joblib.dump(dt_model, '../models/decision_tree_model.pkl')