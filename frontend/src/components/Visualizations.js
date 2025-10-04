import React, { useEffect, useState } from 'react';
/*
const Visualizations = () => {
    const [figures, setFigures] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/visualizations')
            .then((res) => res.json())
            .then((data) => setFigures(data.figures))
            .catch((err) => console.error('Error fetching visualizations:', err));
    }, []);

    return (
        <div style={{ margin: '20px', textAlign: 'center' }}>
            <h2>EDA Visualizations</h2>
            {figures.length === 0 ? (
                <p>No visualizations available.</p>
            ) : (
                figures.map((fig) => (
                    <div key={fig} style={{ margin: '10px' }}>
                        <img
                            src={`../outputs/figures/${fig}`}
                            alt={fig}
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                    </div>
                ))
            )}
        </div>
    );
};

export default Visualizations;*/