import React, { useState } from 'react';
import '../cssfiles/ClaimForm.css';

const ClaimForm = ({ onPredict }) => {
    const [formData, setFormData] = useState({
        AGE: '16-25',
        GENDER: 'male',
        RACE: 'majority',
        DRIVING_EXPERIENCE: '0-9y',
        EDUCATION: 'none',
        INCOME: 'poverty',
        CREDIT_SCORE: "0.5",
        VEHICLE_OWNERSHIP: "1.0",
        VEHICLE_YEAR: 'before 2015',
        MARRIED: "0.0",
        CHILDREN: "0.0",
        ANNUAL_MILEAGE: "10000.0",
        VEHICLE_TYPE: 'sedan',
        SPEEDING_VIOLATIONS: "0",
        DUIS: "0",
        PAST_ACCIDENTS: "0",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const numericFields = [
            "CREDIT_SCORE",
            "VEHICLE_OWNERSHIP",
            "MARRIED",
            "CHILDREN",
            "ANNUAL_MILEAGE",
            "SPEEDING_VIOLATIONS",
            "DUIS",
            "PAST_ACCIDENTS"
        ];

        const processedData = { ...formData };
        numericFields.forEach((field) => {
            processedData[field] = parseFloat(formData[field]);
        });

        console.log('Form data submitted:', processedData);
        onPredict(processedData);
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="claim-form">
                <h2 className="form-title">Policyholder Details</h2>
                
                <div className="form-grid">
                    <div className="form-group">
                        <label className="form-label">Age</label>
                        <select name="AGE" value={formData.AGE} onChange={handleChange} className="form-select">
                            <option value="16-25">16-25</option>
                            <option value="26-39">26-39</option>
                            <option value="40-64">40-64</option>
                            <option value="65+">65+</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Gender</label>
                        <select name="GENDER" value={formData.GENDER} onChange={handleChange} className="form-select">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Race</label>
                        <select name="RACE" value={formData.RACE} onChange={handleChange} className="form-select">
                            <option value="majority">Majority</option>
                            <option value="minority">Minority</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Driving Experience</label>
                        <select name="DRIVING_EXPERIENCE" value={formData.DRIVING_EXPERIENCE} onChange={handleChange} className="form-select">
                            <option value="0-9y">0-9y</option>
                            <option value="10-19y">10-19y</option>
                            <option value="20-29y">20-29y</option>
                            <option value="30y+">30y+</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Education</label>
                        <select name="EDUCATION" value={formData.EDUCATION} onChange={handleChange} className="form-select">
                            <option value="none">None</option>
                            <option value="high school">High School</option>
                            <option value="university">University</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Income</label>
                        <select name="INCOME" value={formData.INCOME} onChange={handleChange} className="form-select">
                            <option value="poverty">Poverty</option>
                            <option value="working class">Working Class</option>
                            <option value="middle class">Middle Class</option>
                            <option value="upper class">Upper Class</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Credit Score</label>
                        <input
                            type="number"
                            name="CREDIT_SCORE"
                            value={formData.CREDIT_SCORE}
                            onChange={handleChange}
                            className="form-input"
                            step="0.1"
                            min="0"
                            max="1"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Vehicle Ownership</label>
                        <select name="VEHICLE_OWNERSHIP" value={formData.VEHICLE_OWNERSHIP} onChange={handleChange} className="form-select">
                            <option value="1.0">Yes</option>
                            <option value="0.0">No</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Vehicle Year</label>
                        <select name="VEHICLE_YEAR" value={formData.VEHICLE_YEAR} onChange={handleChange} className="form-select">
                            <option value="before 2015">Before 2015</option>
                            <option value="after 2015">After 2015</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Married</label>
                        <select name="MARRIED" value={formData.MARRIED} onChange={handleChange} className="form-select">
                            <option value="1.0">Yes</option>
                            <option value="0.0">No</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Children</label>
                        <select name="CHILDREN" value={formData.CHILDREN} onChange={handleChange} className="form-select">
                            <option value="1.0">Yes</option>
                            <option value="0.0">No</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Annual Mileage</label>
                        <input
                            type="number"
                            name="ANNUAL_MILEAGE"
                            value={formData.ANNUAL_MILEAGE}
                            onChange={handleChange}
                            className="form-input"
                            step="1000"
                            min="0"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Vehicle Type</label>
                        <select name="VEHICLE_TYPE" value={formData.VEHICLE_TYPE} onChange={handleChange} className="form-select">
                            <option value="sedan">Sedan</option>
                            <option value="sports car">Sports Car</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Speeding Violations</label>
                        <input
                            type="number"
                            name="SPEEDING_VIOLATIONS"
                            value={formData.SPEEDING_VIOLATIONS}
                            onChange={handleChange}
                            className="form-input"
                            min="0"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">DUIs</label>
                        <input
                            type="number"
                            name="DUIS"
                            value={formData.DUIS}
                            onChange={handleChange}
                            className="form-input"
                            min="0"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Past Accidents</label>
                        <input
                            type="number"
                            name="PAST_ACCIDENTS"
                            value={formData.PAST_ACCIDENTS}
                            onChange={handleChange}
                            className="form-input"
                            min="0"
                        />
                    </div>
                </div>

                <button type="submit" className="submit-button">Predict Claim Probability</button>
            </form>
        </div>
    );
};

export default ClaimForm;