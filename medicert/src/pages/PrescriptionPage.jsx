import { useState } from "react";
import MedicationFormInput from "../components/MedcationFormInput";
import './PrescriptionPage.css';


function PrescriptionPage() {
  const [fullName, setFullName] = useState({ firstName: "", lastName: "" });
  const [ssn, setSsn] = useState("");
  const [insurance, setInsurance] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [doctorSignature, setDoctorSignature] = useState("");
  const [medications, setMedications] = useState([{}]);

  const handleAddMedication = () => {
    setMedications([...medications, {}]);
  };

  const handleRemoveMedication = (index) => {
    const updateMedications = medications.filter((_, i) => i !== index);
    setMedications(updateMedications);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      fullName,
      ssn,
      insurance,
      diagnosis,
      doctorSignature,
      medications,
    };

    console.log('Prescription data:', formData);
    
    try {
      const response = await fetch("https://medicertdb.crc48ss6s75k.us-east-1.rds.amazonaws.com/endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) throw new Error("Something went wrong");
  
      const data = await response.json();
      console.log("Success:", data);
      // Optionally reset form or show success message
    } catch (error) {
      console.error("Error submitting form:", error);
    }

    alert('Form submitted!');
  };

  return (
    <div className="prescription-page">
      <div className="header">
        <h1>MEDICAL PRESCRIPTION</h1>
      </div>
      <form onSubmit={handleSubmit} className="prescription-form">
        <div className="form-row">
          {/* Name Fields */}
          <label>First Name</label>
          <input
            type="text"
            value={fullName.firstName}
            onChange={(e) => setFullName({ ...fullName, firstName: e.target.value })}
            placeholder="Enter first name"
          />

          <div className="spacer"></div>

          <label>Last Name</label>
          <input
            type="text"
            value={fullName.lastName}
            onChange={(e) => setFullName({ ...fullName, lastName: e.target.value })}
            placeholder="Enter last name"
          />
        </div>

        <div className="form-row">
          {/* SSN */}

          <label>SSN</label>
          <input
            type="text"
            value={ssn}
            onChange={(e) => setSsn(e.target.value)}
            placeholder="Enter SSN"
          />

          <div className="spacer"></div>
          {/* Insurance */}
          <label>Insurance</label>
          <input
            type="text"
            value={insurance}
            onChange={(e) => setInsurance(e.target.value)}
            placeholder="Enter insurance"
          />
        </div>
        {/* Medications */}
        {medications.map((medication, index) => (
          <div key={index} className="form-row">
            <MedicationFormInput
              medication={medication}
              setMedication={(newMedication) => {
                const updateMedications = [...medications];
                updateMedications[index] = newMedication;
                setMedications(updateMedications);
              }}
            />
            <button
              type="button"
              className="icon-btn action-btn cancel"
              onClick={() => handleRemoveMedication(index)}
            >
              X
            </button>
          </div>
        ))}

        <div className="form-actions">
          <button type="button" className="action-btn approve" onClick={handleAddMedication}>
            +
          </button>
        </div>

        {/* Diagnosis */}
        <div className="form-row diagnosis-row">
          <label>Diagnosis</label>
          <textarea
            value={diagnosis}
            onChange={(e) => setDiagnosis(e.target.value)}
            placeholder="Enter diagnosis"
          />
        </div>

        {/* Signature */}
        <div className="form-row diagnosis-row">
          <label>Doctor's Signature</label>
          <textarea
            value={doctorSignature}
            onChange={(e) => setDoctorSignature(e.target.value)}
            placeholder="Sign here"
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="action-btn approve">✓</button>
          <button type="button" className="action-btn print" onClick={() => window.print()}>P</button>
          <button type="button" className="action-btn cancel" onClick={() => window.location.reload()}>X</button>
        </div>
      </form>
    </div>
  );
}

export default PrescriptionPage;