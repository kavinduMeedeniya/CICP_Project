import matplotlib.pyplot as plt
import seaborn as sns
import os

def save_correlation_heatmap(df, output_path):
    numerical_cols = ['CREDIT_SCORE', 'ANNUAL_MILEAGE', 'SPEEDING_VIOLATIONS', 'DUIS', 'PAST_ACCIDENTS', 'OUTCOME']
    plt.figure(figsize=(8, 6))
    sns.heatmap(df[numerical_cols].corr(), annot=True, cmap='coolwarm')
    plt.title('Correlation Heatmap')
    plt.savefig(os.path.join(output_path, 'correlation_heatmap.png'))
    plt.close()