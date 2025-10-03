import React, { useState } from 'react';
import './App.css';
import ClaimForm from './components/ClaimForm';
import ResultsDisplay from './components/ResultsDisplay';
import InsurePredict from './comp/InsurePredict';
import CertificatePredictionPlatform from './comp/CertificatePredictionPlatform';
//import Visualizations from './components/Visualizations'; // if need you can add 

function App() {
  const [prediction, setPrediction] = useState(null);
  const [probability, setProbability] = useState(null);
  const [error, setError] = useState(null);

  const handlePredict = (formData) => {
    setError(null);
    console.log('Sending to backend:', JSON.stringify(formData)); // Debug input
    fetch('http://127.0.0.1:8000/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Backend error: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        console.log('Backend response:', data); // Debug response
        if (data.error) {
          setError(data.error);
        } else {
          setPrediction(data.prediction);
          setProbability(data.probability);
        }
      })
      .catch((err) => {
        setError(`Failed to fetch prediction: ${err.message}`);
        console.error('Error predicting:', err);
      });
  };

  return (
    <div className="App">

      <InsurePredict />
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ClaimForm onPredict={handlePredict} />
      <ResultsDisplay prediction={prediction} probability={probability} />

      <CertificatePredictionPlatform />
      
    </div>
  );
}

export default App;