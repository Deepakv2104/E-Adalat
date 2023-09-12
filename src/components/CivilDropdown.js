import React, { useState } from "react";

const CivilTypeDropdown = ({ onTypeChange }) => {
  const [selectedType, setSelectedType] = useState("");

  const caseTypes = [
    "Select Type",
    "Contract Disputes",
    "Personal Injury Cases",
    "Property Disputes",
    "Family Law Cases",
    "Employment Cases",
    "Consumer Protection Cases",
    "Debt Collection Cases",
    "Tort Claims",
    "Medical Malpractice",
    "Environmental Cases",
    "Intellectual Property Cases",
    "Construction Disputes",
    "Probate and Estate Cases",
    "Civil Rights Cases",
    "Business and Commercial Litigation",
    "Insurance Claims",
    // Add more case types here
  ];

  const handleTypeChange = (event) => {
    const selectedType = event.target.value;
    setSelectedType(selectedType);

    // Pass the selected type to the parent component using the callback function
    onTypeChange(selectedType);
  };

  return (
    <div style={{display:"flex",padding:'20px'}}>
      <label style={{paddingRight:'10px'}}>Select Type of Civil Case:</label>
      <select  value={selectedType} onChange={handleTypeChange}>
        {caseTypes.map((caseType, index) => (
          <option key={index} value={caseType}>
            {caseType}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CivilTypeDropdown;
