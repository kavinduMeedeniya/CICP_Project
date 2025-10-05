import React from 'react';
import '../cssfiles/InsurePredict.css';

const InsurePredict = () => {
    return (
        <div className="ip-main-container">

            <div className="ip-content-section">
                <div className="ip-company-header-section">
                    <div className="ip-action-buttons-group">
                        <button className="ip-primary-action-btn">Get Started</button>
                    </div>
                    <button className="ip-secondary-action-btn">How It Works</button>
                    <h2 className="ip-platform-title">Advanced Certificate Claim Prediction Platform</h2>
                </div>

                <p className="ip-platform-description">
                    Our cutting-edge  platform analyzes insurance certificate data to predict claim likelihood with unprecedented accuracy. Using machine learning algorithms and historical data patterns, we help insurance companies mitigate risk, optimize pricing, and improve customer service through proactive claim management.
                </p>

                <div className="ip-features-grid">
                    <div className="ip-feature-item">Risk Assessment</div>
                    <div className="ip-feature-item">Fraud Detection</div>
                    <div className="ip-feature-item">Claim Prediction</div>
                    <div className="ip-feature-item">Data Analytics</div>
                </div>
            </div>
        </div>
    );
};

export default InsurePredict;