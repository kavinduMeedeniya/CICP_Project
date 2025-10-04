import React from 'react';
import '../cssfiles/ResultsDisplay.css';

const ResultsDisplay = ({ prediction, probability }) => {
    if (prediction === null) return null;

    const isApproved = prediction === 1;
    const riskLevel = isApproved ? 'Low Risk' : 'High Risk';
    const probabilityPercentage = (probability * 100).toFixed(2);

    return (
        <div className="results-container">
            <div className={`results-card ${isApproved ? 'approved' : 'denied'}`}>
                <h2 className="results-title">Risk Assessment Result</h2>
                
                <div className="result-status">
                    <div className={`status-indicator ${isApproved ? 'status-approved' : 'status-denied'}`}>
                        <span className="status-icon">
                            {isApproved ? '✓' : '✗'}
                        </span>
                        <span className="status-text">
                            {isApproved ? 'APPROVED' : 'DENIED'}
                        </span>
                    </div>
                    <div className="risk-level">{riskLevel}</div>
                </div>

                <div className="probability-section">
                    <div className="probability-label">Probability of Approval</div>
                    <div className="probability-value">{probabilityPercentage}%</div>
                    <div className="probability-bar">
                        <div 
                            className="probability-fill"
                            style={{ width: `${probabilityPercentage}%` }}
                        ></div>
                    </div>
                </div>

                <div className="result-details">
                    <div className="detail-item">
                        <span className="detail-label">Decision:</span>
                        <span className={`detail-value ${isApproved ? 'decision-approved' : 'decision-denied'}`}>
                            {isApproved ? 'Claim Approved' : 'Claim Denied'}
                        </span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-label">Risk Category:</span>
                        <span className="detail-value">{riskLevel}</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-label">Confidence Score:</span>
                        <span className="detail-value">{probabilityPercentage}%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultsDisplay;