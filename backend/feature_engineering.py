import pandas as pd

def add_risk_score(df):
    df['RISK_SCORE'] = df['SPEEDING_VIOLATIONS'] + df['PAST_ACCIDENTS'] + df['DUIS'] * 2
    return df