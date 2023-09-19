import React, { useEffect, useState } from "react";
import { useParams ,useNavigate} from "react-router-dom";
import { collection, getDocs, query, where, orderBy, startAt, endAt } from "@firebase/firestore";
import { firestore } from "../firebase";
import { useLocation } from "react-router-dom";
import { Table, Input } from "reactstrap";
import '../styles/CaseList.css'

const CaseList = () => {
    const navigate = useNavigate();
  const [cases, setCases] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  const handleCaseClick = (caseId) => {
    // Redirect to the NewCivilCaseCard component with case data in view mode
    
    navigate(`caseDetails/${caseId}`);
  };
  // Determine the title based on the URL
  const getTitle = () => {
    console.log(location.pathname)
    if (location.pathname.includes('judge-Dashboard/assigned-cases')) {
      return 'Assigned Cases';
    }
    return 'List of Civil Cases';
  }

  useEffect(() => {
    // Fetch cases from the "CivilCases" collection
    const fetchData = async () => {
      const casesCollection = collection(firestore, "CivilCases");
      const q = query(
        casesCollection,
        where("caseNumber", ">=", searchTerm),
        orderBy("caseNumber"),
        startAt(searchTerm),
        endAt(searchTerm + "\uf8ff")
      );

      const querySnapshot = await getDocs(q);
      const caseList = [];

      querySnapshot.forEach((doc) => {
        // Extract data from each document
        const caseData = doc.data();
        caseList.push({
          id: doc.id,
          ...caseData,
        });
      });

      setCases(caseList);
    };

    fetchData();
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="main-container"style={{
        padding: "50px",
        paddingLeft: "30px",
        paddingRight: "30px",
        margin: "10px",
        background: "white",
        boxShadow: "0 5px 25px -5px rgba(0,0,0,2.1)",
        overflow: "scroll",
      }}>
      <h2>{getTitle()}</h2>
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
            <th >Case Number</th>
            <th >Date of filing</th>
            <th>Status</th>
            {/* Add more table headers for other case properties */}
          </tr>
        </thead>
        <tbody>
          {cases.map((c) => (
            <tr
              key={c.id}
               onClick={() => handleCaseClick(c.id)}
              style={{ cursor: "pointer" }}
            >
              <td>{c.caseNumber}</td>
              
              <td>{c.dateoffiling}</td>
              <td>{c.state}</td>
              {/* Add more table cells for other case properties */}
            </tr>
            
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CaseList;
