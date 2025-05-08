import React, { useState, useEffect } from 'react';
import './PatientManagement.css'; // You'll need to create this CSS file

const PatientManagement = ({ userRole, canEdit, canDelete }) => {
    // State variables
    const [patients, setPatients] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    // Fetch all patients on component mount
    useEffect(() => {
        fetchPatients();
    }, []);

    // Function to fetch all patients
    const fetchPatients = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://47tp9617qh.execute-api.us-east-1.amazonaws.com/get-all-patients/get-all-patients');

            if (!response.ok) {
                throw new Error('Failed to fetch patients');
            }

            const data = await response.json();
            setPatients(data.patients || []);
        } catch (err) {
            setError('Error loading patients: ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    // Function to fetch patient details
    const fetchPatientDetails = async (patientId) => {
        setLoading(true);
        try {
            const response = await fetch('https://acdh0h064h.execute-api.us-east-1.amazonaws.com/get-patient-details-by-id/get-patient-details-by-id', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ patient_id: patientId }),
            });

            if (!response.ok) {
                throw new Error('Failed to fetch patient details');
            }

            const data = await response.json();
            setSelectedPatient(data);
        } catch (err) {
            setError('Error loading patient details: ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    // Function to delete a patient
    const handleDeletePatient = async (patientId) => {
        if (!canDelete) {
            setError('You do not have permission to delete patients.');
            return;
        }

        if (!window.confirm('Are you sure you want to delete this patient?')) {
            return;
        }

        setLoading(true);
        try {
            const response = await fetch('https://qwj6gtz236.execute-api.us-east-1.amazonaws.com/delete-patient/delete-patient', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ patient_id: patientId }),
            });

            if (!response.ok) {
                throw new Error('Failed to delete patient');
            }

            // Refresh patient list and clear selection
            await fetchPatients();
            setSelectedPatient(null);
        } catch (err) {
            setError('Error deleting patient: ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    // Handle search input change
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Filter patients based on search query
    const filteredPatients = patients.filter(patient => {
        const fullName = `${patient.first_name} ${patient.last_name}`.toLowerCase();
        const query = searchQuery.toLowerCase();
        return fullName.includes(query) ||
            (patient.patient_id && patient.patient_id.toLowerCase().includes(query));
    });

    // Format date for display
    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        const date = new Date(dateString);
        return date.toLocaleDateString();
    };

    return (
        <div className="patient-management">
            {/* Error message display */}
            {error && <div className="error-message">{error}</div>}

            {/* Search and controls */}
            <div className="controls">
                <input
                    type="text"
                    placeholder="Search patients..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="search-input"
                />

                {canEdit && (
                    <button className="add-button">
                        Add New Patient
                    </button>
                )}
            </div>

            {/* Main content area */}
            <div className="content-area">
                {/* Patient list */}
                <div className="patient-list">
                    <h2>Patients</h2>

                    {loading && !selectedPatient && (
                        <div className="loading">Loading patients...</div>
                    )}

                    <ul>
                        {filteredPatients.map(patient => (
                            <li
                                key={patient.patient_id}
                                className={selectedPatient && selectedPatient.patient_info.patient_id === patient.patient_id ? 'active' : ''}
                                onClick={() => fetchPatientDetails(patient.patient_id)}
                            >
                                <div className="patient-name">{patient.first_name} {patient.last_name}</div>
                                <div className="patient-id">ID: {patient.patient_id}</div>
                            </li>
                        ))}

                        {filteredPatients.length === 0 && !loading && (
                            <li className="no-results">No patients found</li>
                        )}
                    </ul>
                </div>

                {/* Patient details */}
                <div className="patient-details">
                    {loading && selectedPatient && (
                        <div className="loading">Loading patient details...</div>
                    )}

                    {!selectedPatient && !loading && (
                        <div className="no-selection">
                            <p>Select a patient to view details</p>
                        </div>
                    )}

                    {selectedPatient && !loading && (
                        <>
                            <div className="detail-header">
                                <h2>{selectedPatient.patient_info.first_name} {selectedPatient.patient_info.last_name}</h2>
                                <div className="patient-actions">
                                    {canEdit && (
                                        <button className="edit-button">Edit</button>
                                    )}
                                    {canDelete && (
                                        <button
                                            className="delete-button"
                                            onClick={() => handleDeletePatient(selectedPatient.patient_info.patient_id)}
                                        >
                                            Delete
                                        </button>
                                    )}
                                </div>
                            </div>

                            <div className="detail-section">
                                <h3>Personal Information</h3>
                                <div className="detail-row">
                                    <div className="detail-label">Patient ID:</div>
                                    <div className="detail-value">{selectedPatient.patient_info.patient_id}</div>
                                </div>
                                <div className="detail-row">
                                    <div className="detail-label">Date of Birth:</div>
                                    <div className="detail-value">{formatDate(selectedPatient.patient_info.pdob)}</div>
                                </div>
                                <div className="detail-row">
                                    <div className="detail-label">Sex:</div>
                                    <div className="detail-value">{selectedPatient.patient_info.sex}</div>
                                </div>
                            </div>

                            <div className="detail-section">
                                <h3>Contact Information</h3>
                                <div className="detail-row">
                                    <div className="detail-label">Email:</div>
                                    <div className="detail-value">{selectedPatient.patient_info.email}</div>
                                </div>
                                <div className="detail-row">
                                    <div className="detail-label">Phone:</div>
                                    <div className="detail-value">{selectedPatient.patient_info.phone_number || 'N/A'}</div>
                                </div>
                                <div className="detail-row">
                                    <div className="detail-label">Address:</div>
                                    <div className="detail-value">
                                        {selectedPatient.patient_info.street} {selectedPatient.patient_info.house_number},
                                        {selectedPatient.patient_info.city}, {selectedPatient.patient_info.postal_code}
                                    </div>
                                </div>
                            </div>

                            <div className="detail-section">
                                <h3>Medical Information</h3>
                                <div className="detail-row">
                                    <div className="detail-label">File ID:</div>
                                    <div className="detail-value">{selectedPatient.patient_info.file_id}</div>
                                </div>
                                <div className="detail-row">
                                    <div className="detail-label">Department:</div>
                                    <div className="detail-value">{selectedPatient.patient_info.department}</div>
                                </div>
                                <div className="detail-row">
                                    <div className="detail-label">Insurance:</div>
                                    <div className="detail-value">{selectedPatient.patient_info.insurance_name || 'N/A'}</div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PatientManagement;