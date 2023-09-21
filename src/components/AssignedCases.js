import React, { useEffect, useState,useContext } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  startAt,
  endAt,
  doc,
  updateDoc
} from "@firebase/firestore";
import { firestore } from "../firebase";
import { Table, Input } from "reactstrap";
import { Button } from "reactstrap";
import {
  FaBeer,
  TiTickOutline,
  FaTiTick,
  FaCheck,
  FaTimes
} from "react-icons/fa";
import '../styles/AssignedCases.css'
import JudgeContext from "../JudgeContext";
const AssignedCases = () => {
  const {judgeId} = useContext(JudgeContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [cases, setCases] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleCaseClick = (caseId) => {
    navigate(`caseDetails/${caseId}`);
  };
  
 

  useEffect(() => {
    if (!judgeId) return;

    const fetchData = async () => {
      const casesCollection = collection(firestore, "CivilCases");
      const q = query(
        casesCollection,
        where("judgeId", "==", judgeId),
        where("status", "!=", "accepted")
      );
      try {
        const querySnapshot = await getDocs(q);
        const caseList = [];
        querySnapshot.forEach((doc) => {
            const caseData = doc.data();
            caseList.push({
                id: doc.id,
                ...caseData
            });
        });
        setCases(caseList);
    } catch (error) {
        console.error("Error fetching cases:", error);
        // Optionally, display a user-friendly error message in the UI
    }
    
    };

    fetchData();
  }, [judgeId]);

  const updateCaseStatus = async (caseId, newStatus) => {
    if (newStatus === "accepted") {
      const caseRef = doc(firestore, "CivilCases", caseId);
      await updateDoc(caseRef, {
        status: newStatus
      });
    }

    const updatedCases = cases.filter(c => c.id !== caseId);
    setCases(updatedCases);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div
      className="ac"
      style={{
        padding: "50px",
        paddingLeft: "30px",
        paddingRight: "30px",
        margin: "10px",
        background: "white",
        boxShadow: "0 5px 25px -5px rgba(0,0,0,2.1)",
        overflow: "scroll"
      }}
    >
      <h2>Assigned Cases</h2>
      <Input
        type="text"
        placeholder="Search by Case Number"
        value={searchTerm}
        onChange={handleSearch}
        style={{ marginBottom: "10px" }}
      />
      <Table striped>
        <thead>
          <tr>
            <th>Case Number</th>
            <th>CaseType</th>
            <th>Accept/Reject</th>
          </tr>
        </thead>
        <tbody>
          {cases.map((c) => (
            <tr
              key={c.id}
             
              
            >
              <td  onClick={() => handleCaseClick(c.id)} style={{ cursor: "pointer" }}>{c.caseNumber}</td>
              <td>{c.specificType}</td>
              <td style={{ padding: "20px" }}>
                <div style={{ display: "flex" }} className="icons">
                  <span className="icons" style={{ cursor: "pointer" }}>
                    <FaCheck
                      color="green"
                      onClick={(e) => {
                        e.stopPropagation();
                        updateCaseStatus(c.id, "accepted");
                      }}
                    />
                  </span>
                  <span className="icons" style={{ marginLeft: "60px" ,cursor:'pointer'}}>
                    <FaTimes
                      color="red"
                      onClick={(e) => {
                        e.stopPropagation();
                        updateCaseStatus(c.id, "rejected");
                      }}
                    />
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AssignedCases;