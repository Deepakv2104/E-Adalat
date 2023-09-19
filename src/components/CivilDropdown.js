import React, { useState } from "react";

const CivilTypeDropdown = ({ onTypeChange }) => {
  const [selectedType, setSelectedType] = useState("");

  const caseTypes = [
    "Contract Disputes",
    "Torts (Negligence, Defamation, etc.)",
    "Property Disputes",
    "Family Matters (Divorce, Custody, Alimony, etc.)",
    "Administrative Law",
    "Intellectual Property (Patents, Trademarks, Copyrights)",
    "Tax Law",
    "Trust and Estates (Wills, Successions)",
    "Real Estate (Landlord-Tenant)",
    "Consumer Cases",
    "Cyber Law",
    "Environmental Law",
    "Labor and Employment",
    // Add more case types here
  ];

  const handleTypeChange = (event) => {
    const selectedType = event.target.value;
    setSelectedType(selectedType);

    // Pass the selected type to the parent component using the callback function
    onTypeChange(selectedType); 
  };

  return (
    <div style={{ display: "flex", padding: "20px" }}>
      <label style={{ paddingRight: "10px" }}>Select Type of Civil Case:</label>
      
      <select value={selectedType} onChange={handleTypeChange}>
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
