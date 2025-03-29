// CertificatePage.js
import React, { useState } from 'react';
import './CertificatePage.css';
import Navbar from "../components/Navbar";
// Admin should manage accounts if admin logs in it can see all of the users


function CertificatePage() {
    // State for form fields
    const [formData, setFormData] = useState({
        name: '',
        ssn: '',
        insurance: '',
        insuranceId: '',
        address: '',
        illness: false,
        accident: false,
        occupational: false,
        familyMed: false,
        other: false,
        wrongAddress: false,
        noAnswer: false,
        bedRest: 'Yes',
        homeRest: 'No',
        outpatient: '',
        medication: '',
        presentedCertificate: 'Yes',
        doctor: '',
        diagnosis: '',
        continuesWorking: 'No',
        returnsToWork: '',
        disability: 'No',
        changesTasksFrom: '',
        changesTasksUntil: '',
        justifiedFrom: '',
        justifiedUntil: '',
        unjustifiedFrom: '',
        unjustifiedUntil: '',
        clinicDate: '',
        clinicTime: '',
        medicalClearance: '',
        observations: ''
    });

    // Dropdown options
    const yesNoOptions = ['Yes', 'No'];

    // State for open dropdowns
    const [openDropdown, setOpenDropdown] = useState(null);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    // Handle dropdown changes
    const handleDropdownChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value
        });
        setOpenDropdown(null);
    };

    // Toggle dropdown
    const toggleDropdown = (name) => {
        setOpenDropdown(openDropdown === name ? null : name);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Certificate data:', formData);
        // Future Lambda function call will go here
        alert('Form submitted!');
    };

    return (
        <div className="certificate-page">
            <Navbar />
            <div className="certificate-content">
                <div className="header">
                    <h1>MEDICAL SERVICE</h1>
                </div>

                <form onSubmit={handleSubmit} className="certificate-form">
                    <div className="form-row date-time">
                        <div className="spacer"></div>
                        <div>DATETIME</div>
                    </div>

                    <div className="form-row">
                        <label>Last and First Name:</label>
                        <div className="input-with-dropdown">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <button type="button" className="dropdown-btn" onClick={() => toggleDropdown('name')}>▼</button>
                        </div>
                        <button type="button" className="icon-btn add-btn">+</button>
                        <button type="button" className="icon-btn calendar-btn"><span className="calendar-icon"></span></button>
                    </div>

                    <div className="form-row">
                        <label>SSN:</label>
                        <div className="input-with-dropdown">
                            <input
                                type="text"
                                name="ssn"
                                value={formData.ssn}
                                onChange={handleChange}
                            />
                            <button type="button" className="dropdown-btn" onClick={() => toggleDropdown('ssn')}>▼</button>
                        </div>
                        <label className="second-label">Address:</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-row">
                        <label>Insurance:</label>
                        <input
                            type="text"
                            name="insurance"
                            value={formData.insurance}
                            onChange={handleChange}
                        />
                        <label className="second-label">Insurance ID:</label>
                        <input
                            type="text"
                            name="insuranceId"
                            value={formData.insuranceId}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-row checkboxes">
                        <div className="checkbox-group">
                            <label>ILLNESS</label>
                            <input
                                type="checkbox"
                                name="illness"
                                checked={formData.illness}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="checkbox-group">
                            <label>ACCIDENT</label>
                            <input
                                type="checkbox"
                                name="accident"
                                checked={formData.accident}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="checkbox-group">
                            <label>OCCUPATIONAL DISEASE</label>
                            <input
                                type="checkbox"
                                name="occupational"
                                checked={formData.occupational}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="checkbox-group">
                            <label>FAMILY MED. ASSISTANCE</label>
                            <input
                                type="checkbox"
                                name="familyMed"
                                checked={formData.familyMed}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="checkbox-group">
                            <label>OTHER</label>
                            <input
                                type="checkbox"
                                name="other"
                                checked={formData.other}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="form-row med-section">
                        <div className="complies-section">
                            <div className="complies-header">COMPLIES WITH:</div>
                            <div className="complies-row">
                                <label>Bed Rest</label>
                                <div className="dropdown-container">
                                    <div
                                        className="dropdown-field"
                                        onClick={() => toggleDropdown('bedRest')}
                                    >
                                        {formData.bedRest} <span className="dropdown-arrow">▼</span>
                                    </div>
                                    {openDropdown === 'bedRest' && (
                                        <div className="dropdown-options">
                                            {yesNoOptions.map(option => (
                                                <div
                                                    key={option}
                                                    className="dropdown-option"
                                                    onClick={() => handleDropdownChange('bedRest', option)}
                                                >
                                                    {option}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="complies-row">
                                <label>Home Rest</label>
                                <div className="dropdown-container">
                                    <div
                                        className="dropdown-field"
                                        onClick={() => toggleDropdown('homeRest')}
                                    >
                                        {formData.homeRest} <span className="dropdown-arrow">▼</span>
                                    </div>
                                    {openDropdown === 'homeRest' && (
                                        <div className="dropdown-options">
                                            {yesNoOptions.map(option => (
                                                <div
                                                    key={option}
                                                    className="dropdown-option"
                                                    onClick={() => handleDropdownChange('homeRest', option)}
                                                >
                                                    {option}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="complies-row">
                                <label>Outpatient</label>
                                <div className="dropdown-container">
                                    <div
                                        className="dropdown-field"
                                        onClick={() => toggleDropdown('outpatient')}
                                    >
                                        {formData.outpatient || 'Select'} <span className="dropdown-arrow">▼</span>
                                    </div>
                                    {openDropdown === 'outpatient' && (
                                        <div className="dropdown-options">
                                            {yesNoOptions.map(option => (
                                                <div
                                                    key={option}
                                                    className="dropdown-option"
                                                    onClick={() => handleDropdownChange('outpatient', option)}
                                                >
                                                    {option}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="complies-row">
                                <label>Medication</label>
                                <div className="dropdown-container">
                                    <div
                                        className="dropdown-field"
                                        onClick={() => toggleDropdown('medication')}
                                    >
                                        {formData.medication || 'Select'} <span className="dropdown-arrow">▼</span>
                                    </div>
                                    {openDropdown === 'medication' && (
                                        <div className="dropdown-options">
                                            {yesNoOptions.map(option => (
                                                <div
                                                    key={option}
                                                    className="dropdown-option"
                                                    onClick={() => handleDropdownChange('medication', option)}
                                                >
                                                    {option}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="address-section">
                            <div className="checkbox-group">
                                <label>Wrong Address</label>
                                <input
                                    type="checkbox"
                                    name="wrongAddress"
                                    checked={formData.wrongAddress}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="checkbox-group">
                                <label>No Answer</label>
                                <input
                                    type="checkbox"
                                    name="noAnswer"
                                    checked={formData.noAnswer}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="certificate-row">
                                <label>Presented Certificate:</label>
                                <div className="dropdown-container">
                                    <div
                                        className="dropdown-field"
                                        onClick={() => toggleDropdown('presentedCertificate')}
                                    >
                                        {formData.presentedCertificate} <span className="dropdown-arrow">▼</span>
                                    </div>
                                    {openDropdown === 'presentedCertificate' && (
                                        <div className="dropdown-options">
                                            {yesNoOptions.map(option => (
                                                <div
                                                    key={option}
                                                    className="dropdown-option"
                                                    onClick={() => handleDropdownChange('presentedCertificate', option)}
                                                >
                                                    {option}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="doctor-row">
                                <label>Doctor:</label>
                                <input
                                    type="text"
                                    name="doctor"
                                    value={formData.doctor}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="diagnosis-row">
                                <label>Diagnosis:</label>
                                <textarea
                                    name="diagnosis"
                                    value={formData.diagnosis}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-row resolution-section">
                        <div className="medical-department">
                            <div className="department-header">Medical Department Resolution</div>
                            <div className="resolution-row">
                                <label>Continues Working:</label>
                                <div className="dropdown-container">
                                    <div
                                        className="dropdown-field"
                                        onClick={() => toggleDropdown('continuesWorking')}
                                    >
                                        {formData.continuesWorking} <span className="dropdown-arrow">▼</span>
                                    </div>
                                    {openDropdown === 'continuesWorking' && (
                                        <div className="dropdown-options">
                                            {yesNoOptions.map(option => (
                                                <div
                                                    key={option}
                                                    className="dropdown-option"
                                                    onClick={() => handleDropdownChange('continuesWorking', option)}
                                                >
                                                    {option}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="resolution-row">
                                <label>Returns to Work on:</label>
                                <div className="date-input">
                                    <input
                                        type="text"
                                        name="returnsToWork"
                                        value={formData.returnsToWork}
                                        onChange={handleChange}
                                    />
                                    <button type="button" className="calendar-btn"><span className="calendar-icon"></span></button>
                                </div>
                            </div>
                            <div className="resolution-row">
                                <label>Disability:</label>
                                <div className="dropdown-container">
                                    <div
                                        className="dropdown-field"
                                        onClick={() => toggleDropdown('disability')}
                                    >
                                        {formData.disability} <span className="dropdown-arrow">▼</span>
                                    </div>
                                    {openDropdown === 'disability' && (
                                        <div className="dropdown-options">
                                            {yesNoOptions.map(option => (
                                                <div
                                                    key={option}
                                                    className="dropdown-option"
                                                    onClick={() => handleDropdownChange('disability', option)}
                                                >
                                                    {option}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="resolution-row">
                                <label>Changes Tasks:</label>
                                <div className="date-range">
                                    <div className="date-input">
                                        From:
                                        <input
                                            type="text"
                                            name="changesTasksFrom"
                                            value={formData.changesTasksFrom}
                                            onChange={handleChange}
                                        />
                                        <button type="button" className="calendar-btn"><span className="calendar-icon"></span></button>
                                    </div>
                                    <div className="date-input">
                                        Until:
                                        <input
                                            type="text"
                                            name="changesTasksUntil"
                                            value={formData.changesTasksUntil}
                                            onChange={handleChange}
                                        />
                                        <button type="button" className="calendar-btn"><span className="calendar-icon"></span></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absence-section">
                            <div className="absence-row">
                                <label>Justified Absence:</label>
                                <div className="date-range">
                                    <div className="date-input">
                                        From:
                                        <input
                                            type="text"
                                            name="justifiedFrom"
                                            value={formData.justifiedFrom}
                                            onChange={handleChange}
                                        />
                                        <button type="button" className="calendar-btn"><span className="calendar-icon"></span></button>
                                    </div>
                                    <div className="date-input">
                                        Until:
                                        <input
                                            type="text"
                                            name="justifiedUntil"
                                            value={formData.justifiedUntil}
                                            onChange={handleChange}
                                        />
                                        <button type="button" className="calendar-btn"><span className="calendar-icon"></span></button>
                                    </div>
                                </div>
                            </div>
                            <div className="absence-row">
                                <label>Unjustified Absence:</label>
                                <div className="date-range">
                                    <div className="date-input">
                                        From:
                                        <input
                                            type="text"
                                            name="unjustifiedFrom"
                                            value={formData.unjustifiedFrom}
                                            onChange={handleChange}
                                        />
                                        <button type="button" className="calendar-btn"><span className="calendar-icon"></span></button>
                                    </div>
                                    <div className="date-input">
                                        Until:
                                        <input
                                            type="text"
                                            name="unjustifiedUntil"
                                            value={formData.unjustifiedUntil}
                                            onChange={handleChange}
                                        />
                                        <button type="button" className="calendar-btn"><span className="calendar-icon"></span></button>
                                    </div>
                                </div>
                            </div>
                            <div className="clinic-row">
                                <label>Attends the Clinic:</label>
                                <div className="date-time-fields">
                                    <div className="date-input">
                                        Date:
                                        <input
                                            type="text"
                                            name="clinicDate"
                                            value={formData.clinicDate}
                                            onChange={handleChange}
                                        />
                                        <button type="button" className="calendar-btn"><span className="calendar-icon"></span></button>
                                    </div>
                                    <div>
                                        Time:
                                        <input
                                            type="text"
                                            name="clinicTime"
                                            value={formData.clinicTime}
                                            onChange={handleChange}
                                            className="time-input"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="clearance-row">
                                <label>Medical Clearance:</label>
                                <div className="date-input">
                                    <input
                                        type="text"
                                        name="medicalClearance"
                                        value={formData.medicalClearance}
                                        onChange={handleChange}
                                    />
                                    <button type="button" className="calendar-btn"><span className="calendar-icon"></span></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-row observations-section">
                        <label>Observations:</label>
                        <textarea
                            name="observations"
                            value={formData.observations}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-row signatures">
                        <div className="signature-box">PATIENT'S SIGNATURE</div>
                        <div className="signature-box">DOCTOR'S SIGNATURE</div>
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="action-btn approve">✓</button>
                        <button type="button" className="action-btn print" onClick={() => window.print()}>P</button>
                        <button type="button" className="action-btn cancel" onClick={() => window.location.reload()}>X</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CertificatePage;