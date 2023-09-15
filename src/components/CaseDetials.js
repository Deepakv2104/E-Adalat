import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, updateDoc } from "@firebase/firestore"; // imported updateDoc
import { firestore } from "../firebase";
import { FormGroup, Label, Input, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer,toast } from "react-toastify";
const CaseDetails = () => {
  const { documentId } = useParams();
  const [caseData, setCaseData] = useState(null);
  const [editableData, setEditableData] = useState({}); // state to store edited data

  useEffect(() => {
    const fetchCaseData = async () => {
      if (!documentId) {
        console.error(
          "documentId is not provided or is in an unexpected format!"
        );
        return;
      }

      const caseDocRef = doc(firestore, "CivilCases", documentId);
      const caseDocSnapshot = await getDoc(caseDocRef);
      if (caseDocSnapshot.exists()) {
        const data = caseDocSnapshot.data();
        setCaseData(data);
        setEditableData(data); // set editableData to fetched data
      } else {
        console.error("Document not found!");
      }
    };

    fetchCaseData();
  }, [documentId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditableData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const caseDocRef = doc(firestore, "CivilCases", documentId);
      await updateDoc(caseDocRef, editableData); // update document with edited data
      toast.success("Record Updated successfully!", {
        position: "top-right",
        autoClose: 2000, // 5 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };

  if (!caseData) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        padding: "50px",
        paddingLeft: "30px",
        paddingRight: "30px",
        margin: "10px",
        background: "white",
        boxShadow: "0 5px 25px -5px rgba(0,0,0,2.1)",
        overflow: "scroll",
      }}
    >
      
      <h2>CNR: {editableData.caseNumber}</h2>

      <FormGroup>
        <Label>Title:</Label>
        <Input
          type="text"
          value={editableData.title || ""}
          onChange={handleInputChange}
          name="title"
        />
      </FormGroup>

      <FormGroup>
        <Label>Plaintiff Name:</Label>
        <Input
          type="text"
          value={editableData.plaintiffName || ""}
          onChange={handleInputChange}
          name="plaintiffName"
        />
      </FormGroup>
      <FormGroup>
        <Label>Plaintiff's Attorney:</Label>
        <Input
          type="text"
          value={editableData.plaintiffName || ""}
          onChange={handleInputChange}
          name="plaintiffName"
        />
      </FormGroup>
      <FormGroup>
        <Label>Defendent Name:</Label>
        <Input
          type="text"
          value={editableData.plaintiffName || ""}
          onChange={handleInputChange}
          name="plaintiffName"
        />
      </FormGroup>
      <FormGroup>
        <Label>Allegations/Claims of plaintiff:</Label>
        <Input
          type="text"
          value={editableData.alligations || ""}
          onChange={handleInputChange}
          name="Allegations/Claims of plaintiff:"
        />
      </FormGroup>
      <FormGroup>
        <Label>Date of filing:</Label>
        <Input
          type="date"
          value={editableData.dateoffiling || ""}
          onChange={handleInputChange}
          name="Date of filing:"
        />
      </FormGroup>
      <FormGroup>
        <Label>Legal Basis for the Claims:</Label>
        <Input
          type="text"
          value={editableData.witnessName || ""}
          onChange={handleInputChange}
          name="Legal Basis for the Claims:"
        />
      </FormGroup>
      <FormGroup>
        <Label>Legal Basis for the Claims:</Label>
        <Input
          type="text"
          value={editableData.reliefSought || ""}
          onChange={handleInputChange}
          name="Legal Basis for the Claims:"
        />
      </FormGroup>
      <FormGroup>
        <Label>Legal Basis for the Claims:</Label>
        <Input
          type="text"
          value={editableData.legalBais || ""}
          onChange={handleInputChange}
          name="Legal Basis for the Claims:"
        />
      </FormGroup>
      <FormGroup>
        <Label>Related Files:</Label>
        {editableData.imageUrls &&
          editableData.imageUrls.map((url, index) => {
            const decodedUrl = decodeURIComponent(url); // Decode the URL
            const fileName = decodedUrl.split("/").pop().split("?")[0]; // Extract file name from decoded URL
            return (
              <div key={index}>
                <a href={url} download>
                  {fileName}
                </a>
              </div>
            );
          })}
        <Input type="file" onChange={handleInputChange} name="relatedFiles" />
      </FormGroup>

      {/* ... Add more fields as per your requirement ... */}

      <Button color="success"style={{fontsize:'20px',margin:'10px',marginLeft:'500px'}} onClick={handleSave}>Save</Button>
      <ToastContainer />
    </div>
  );
};

export default CaseDetails;
