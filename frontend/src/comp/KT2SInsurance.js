import React from 'react';
import '../cssfiles/KT2SInsurance.css';

const KT2SInsurance = () => {
    return (
        <div className="KT2S-container">
            <div className="KT2S-badge">
                Insurance Innovator <span className="KT2S-availability">KT2S</span>
            </div>

            <h1 className="KT2S-headline">
                Anticipating claims <strong>through<br />intelligent systems</strong>
            </h1>

            <p className="KT2S-subtitle">
                Harness the power to accurately forecast insurance claims and<br /> transform risk into strategy.
            </p>

            <div className="KT2S-cta-buttons">
                <a href="#" className="KT2S-btn KT2S-btn-primary">Make</a>
                <a href="#" className="KT2S-btn KT2S-btn-secondary">It Easy</a>
            </div>

            <div className="KT2S-image-section">
                <div className="KT2S-image-container">
                    <img
                        src="https://i.postimg.cc/xTxWbmQ1/Affordable-Car-Insurance-Compare-Save-on-Auto-Insurance-Quotes.jpg"
                        alt="AI Risk Analysis Dashboard"
                    />
                </div>
                <p className="KT2S-image-description">
                    Move beyond reactive models. Our system delivers unparalleled accuracy in forecasting insurance claims.
                </p>
            </div>
        </div>
    );
};

export default KT2SInsurance;