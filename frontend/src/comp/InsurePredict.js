import React, { useEffect } from 'react';
import '../cssfiles/InsurePredict.css';

const InsurePredict = () => {
    useEffect(() => {
        // Load the Vanta.js script dynamically
        const loadVanta = () => {
            if (window.VANTA && window.VANTA.TRUNK) {
                initializeVanta();
            } else {
                // If Vanta is not available, load it
                const script = document.createElement('script');
                script.src = 'https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.trunk.min.js';
                script.onload = () => {
                    // Also make sure p5.js is loaded as Vanta depends on it
                    if (!window.p5) {
                        const p5Script = document.createElement('script');
                        p5Script.src = 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js';
                        p5Script.onload = initializeVanta;
                        document.head.appendChild(p5Script);
                    } else {
                        initializeVanta();
                    }
                };
                document.head.appendChild(script);
            }
        };

        const initializeVanta = () => {
            if (window.VANTA && window.VANTA.TRUNK) {
                window.VANTA.TRUNK({
                    el: "#insurepredict-vanta-bg",
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.00,
                    scaleMobile: 1.00,
                    color: 0x3a86ff,
                    backgroundColor: 0x0,
                    spacing: 5.00,
                    chaos: 3.00
                });
            }
        };

        loadVanta();

        // Cleanup function
        return () => {
            if (window.VANTA && window.VANTA.current) {
                window.VANTA.current.destroy();
            }
        };
    }, []);

    return (
        <div className="insurepredict-container">
            <div className="insurepredict-hero">
                <div id="insurepredict-vanta-bg" className="insurepredict-vanta-bg"></div>
                <div className="insurepredict-hero-content">
                    <h1 className="insurepredict-hero-title">
                        Predicting insurance<br />
                        <span>claims</span> with<br />
                        AI-powered accuracy
                    </h1>
                </div>
            </div>

            <div className="insurepredict-content-section">
                <div className="insurepredict-company-header">
                    <div className="insurepredict-steps">
                        <button className="insurepredict-step-btn">Get Started</button>
                    </div>
                    <button className="insurepredict-about-btn">How It Works</button>
                    <h2 className="insurepredict-company-title">Advanced Certificate Claim Prediction Platform</h2>
                </div>

                <p className="insurepredict-description">
                    Our cutting-edge AI platform analyzes insurance certificate data to predict claim likelihood with unprecedented accuracy. Using machine learning algorithms and historical data patterns, we help insurance companies mitigate risk, optimize pricing, and improve customer service through proactive claim management.
                </p>

                <div className="insurepredict-features">
                    <div className="insurepredict-feature">Risk Assessment</div>
                    <div className="insurepredict-feature">Fraud Detection</div>
                    <div className="insurepredict-feature">Claim Prediction</div>
                    <div className="insurepredict-feature">Data Analytics</div>
                </div>
            </div>
        </div>
    );
};

export default InsurePredict;