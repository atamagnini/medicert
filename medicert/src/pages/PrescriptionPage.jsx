import { useState } from "react";

function PrescriptionPage() {
    const [fullName, setFullName] = useState({ firstName: "", lastName: "" });
    const [ssn, setSsn] = useState("");
    const [insurance, setInsurance] = useState("");
    const [diagnosis, setDiagnosis] = useState("");
    const [doctorSignature, setDoctorSignature] = useState("");
    //repeats - make own component eventually
    const [medication, setMedication] = useState(null);
    const [dosage, setDosage] = useState("");
    const [frequency, setFrequency] = useState("");
    const [form, setForm] = useState(null);
    const [duration, setDuration] = useState("");
  
    const medicatonOptions = ["Med 1", "Med 2", "Med 3"]; 
    const formOptions = ["pill", "liquid", "injection"]; 

    return (
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
  
  
        {/* medication section: make own component eventually**
        
        Medication Dropdown */}
        <div>
          <label>Medication</label>
          <select
            value={medication}
            onChange={(e) => setMedication(e.target.value)}
          >
            <option value="">-- Select --</option>
            {medicatonOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Dosage */}
        <div>
          <label>Dosage</label>
          <input
            type="text"
            value={dosage}
            onChange={(e) => setDosage(e.target.value)}
            placeholder="Enter Dosage"
          />
        </div>   

        {/* Frequency */}
        <div>
          <label>Frequency</label>
          <input
            type="text"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            placeholder="Enter Frequency"
          />
        </div>

        {/* Form */}
        <div>
          <label>Form</label>
          <select
            value={form}
            onChange={(e) => setForm(e.target.value)}
          >
            <option value="">-- Select --</option>
            {formOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Duration */}
        <div>
          <label>Duration</label>
          <input
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="Enter duration"
          />
        </div>

  
        {/* bottom of form:
        Textarea for Description */}
        <div>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
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
    );
  };
  
  
export default PrescriptionPage;