
const MedicationFormInput = ({ medication, setMedication }) => {
  const medicatonOptions = ["Medicine 1", "Medicine 2", "Medicine 3"];
  const formOptions = ["Pill", "Liquid", "Injection"];

  return (
    <div className=" form-row checkboxes">
      {/* Medication */}
      <div>
        <label>Medication</label>
        <div><select
          value={medication.name || ""}
          onChange={(e) => setMedication({ ...medication, name: e.target.value })}
        >
          <option value="">-- Select --</option>
          {medicatonOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select></div>
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
      <div className="spacer"></div>

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
      <div className="spacer"></div>

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
      <div className="spacer"></div>

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