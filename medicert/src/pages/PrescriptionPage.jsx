import { useState } from "react";
import MedicationFormInput from "../components/MedcationFormInput";
import Navbar from "../components/Navbar";

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

    return (
      <>
      <Navbar/>
      <form>
        {/* Full Name */}
        <div>
          <label>First Name</label>
          <input
            type="text"
            value={fullName.firstName}
            onChange={(e) => setFullName({ ...fullName, firstName: e.target.value })}
            placeholder="Enter first name"
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            value={fullName.lastName}
            onChange={(e) => setFullName({ ...fullName, lastName: e.target.value })}
            placeholder="Enter last name"
          />
        </div>
  
        {/* SSN */}
        <div>
          <label>SSN</label>
          <input
            type="text"
            value={ssn}
            onChange={(e) => setSsn(e.target.value)}
            placeholder="Enter SSN"
          />
        </div>

        {/* Insurance */}
        <div>
          <label>Insurance</label>
          <input
            type="text"
            value={insurance}
            onChange={(e) => setInsurance(e.target.value)}
            placeholder="Enter insurance"
          />
        </div>
  
  
        {/* Render MedicationForms dynamically */}
        {medications.map((medication, index) => (
        <div key={index}>
          <MedicationFormInput
            medication={medication}
            setMedication={(newMedication) => {
              const updateMedications = [...medications];
              updateMedications[index] = newMedication; // Update selected medication
              setMedications(updateMedications);
            }}
          />
          <button
            type="button"
            onClick={() => handleRemoveMedication(index)} // Rremoves selected medication
          >
            Remove Medication
          </button>
        </div>
        ))}

        {/* Add new medication w component */}
        <button type="button" onClick={handleAddMedication}>Add Medication</button>
  
        {/* bottom of form:
        Textarea for Description */}
        <div>
          <label>Diagnosis</label>
          <textarea
            value={diagnosis}
            onChange={(e) => setDiagnosis(e.target.value)}
            placeholder="Enter diagnosis"
          />
        </div>
        {/* Signature */}
        <div>
          <label>Doctor's Signature</label>
          <textarea
            value={doctorSignature}
            onChange={(e) => setDoctorSignature(e.target.value)}
            placeholder="Sign here"
          />
        </div>
      </form>
      </>
    );
  };
  
  
export default PrescriptionPage;