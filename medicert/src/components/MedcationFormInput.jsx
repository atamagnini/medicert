

const MedicationFormInput = ({ medication, setMedication }) => {
    const medicatonOptions = ["Med 1", "Med 2", "Med 3"];
    const formOptions = ["pill", "liquid", "injection"];
  
    return (
      <div>
        {/* Medication */}
        <div>
          <label>Medication</label>
          <select
            value={medication.name || ""}
            onChange={(e) => setMedication({ ...medication, name: e.target.value })}
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
            value={medication.dosage || ""}
            onChange={(e) => setMedication({ ...medication, dosage: e.target.value })}
            placeholder="Enter Dosage"
          />
        </div>
  
        {/* Frequency */}
        <div>
          <label>Frequency</label>
          <input
            type="text"
            value={medication.frequency || ""}
            onChange={(e) => setMedication({ ...medication, frequency: e.target.value })}
            placeholder="Enter Frequency"
          />
        </div>
  
        {/* Form */}
        <div>
          <label>Form</label>
          <select
            value={medication.form || ""}
            onChange={(e) => setMedication({ ...medication, form: e.target.value })}
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
            value={medication.duration || ""}
            onChange={(e) => setMedication({ ...medication, duration: e.target.value })}
            placeholder="Enter duration"
          />
        </div>
      </div>
    );
  };
  
export default MedicationFormInput;