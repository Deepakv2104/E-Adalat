import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CaseType.css"; // Import the CSS file

const CaseType = () => {
  const navigate = useNavigate();

  const handleCivilCaseClick = () => {
    navigate("civil-case");
  };

  const handleCriminalCaseClick = () => {
    navigate("criminal-case");
  };

  return (
    <div className="typecontainer">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          className="case-box"
          onClick={handleCivilCaseClick}
        >
          <h2>Civil Case</h2>
          {/* Content for Civil Case */}
        </div>
        <div
          className="case-box"
          onClick={handleCriminalCaseClick}
        >
          <h2>Criminal Case</h2>
          {/* Content for Criminal Case */}
        </div>
      </div>
    </div>
  );
};

export default CaseType;
