import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "@firebase/firestore";
import LocationBar from "./location";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { updateDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { firestore } from "../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FormGroup,
  Label,
  Input,
  FormText,
  Form,
  Col,
  Button,
  Nav,
  Dropdown,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fahome,
  fachartpie,
  faPieChart,
  faTags,
  faCalendarDays,
  faUser,
  faGear,
  faThumbsUp,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import CivilTypeDropdown from "./CivilDropdown";
const NewCivilCaseCard = ({caseData,isViewMode}) => {
  const navigate = useNavigate();
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCourt, setSelectedCourt] = useState("");
  const [selectedCivilType, setSelectedCivilType] = useState("");

  const [formData, setFormData] = useState({
    title: "",

    plaintiffName: "",
    plaintiffs_Attorney: "",
    defendantName: "",
    allegations: "",
    dateoffiling: "",
    witnessName: "",
    state: "",
    city: "",
    court: "",
    civiltype: "",
    // firTiming: "",
    // numberOfAccused: "",
    // reliefSought: "",
    // legalBais: "",
    // selectValue: "1", // Default select value
    // textArea: "",
    // file: null, // File input value
    // radioChecked: false, // Radio button checked state
    // checkboxChecked: false, // Checkbox checked state
  });
  const generateRandomNumber = () => {
    const randomNumber = Math.floor(10000000000 + Math.random() * 90000000000);
    return randomNumber.toString().padStart(11, "0"); // Ensure it's 11 digits
  };
  const handleSelectedOptions = (state, city, court) => {
    setSelectedState(state);
    setSelectedCity(city);
    setSelectedCourt(court);
  };

  const handleTypeChange = (Type) => {
    setSelectedCivilType(Type);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const randomCNRNumber = generateRandomNumber();
    const updatedFormData = {
      ...formData,
      caseNumber: randomCNRNumber,
      state: selectedState,
      city: selectedCity,
      court: selectedCourt,
      civiltype: selectedCivilType,
    };
    console.log(updatedFormData);
    setSelectedState("");
      setSelectedCity("");
      setSelectedCourt("");
      setSelectedCivilType("");

    try {
      // Add the chargesheet data to the "Cases" collection
      const docRef = await addDoc(
        collection(firestore, "CivilCases"),
        updatedFormData
      );

      // Create a reference to the unique folder using the document ID
      const storage = getStorage();
      const storageRef = ref(storage, `images/${docRef.id}`);

      // Upload images to the folder
      const imageFiles = document.getElementById("exampleFile").files; // Replace with the correct file input ID
      const downloadUrls = [];

      for (const imageFile of imageFiles) {
        const imageName = imageFile.name;
        const imageRef = ref(storageRef, imageName);
        await uploadBytes(imageRef, imageFile);

        // Get download URL for each uploaded image
        const imageUrl = await getDownloadURL(imageRef);
        downloadUrls.push(imageUrl);
      }

      // Include the image URLs in the document data
      updatedFormData.imageUrls = downloadUrls;

      // Add the updated data to Firestore with image URLs
      const caseDocRef = doc(firestore, "Cases", docRef.id);
      const caseDocSnapshot = await getDoc(caseDocRef);
      
      if (caseDocSnapshot.exists()) {
        // Update the existing document
        await updateDoc(caseDocRef, updatedFormData);
      } else {
        // Create a new document with the provided ID
        await setDoc(caseDocRef, updatedFormData);
      }
      // Now you have download URLs of the uploaded images in the 'downloadUrls' array
      console.log("Download URLs:", downloadUrls);

      console.log("Document written with ID: ", docRef.id);

      // Notify success with a toast

      toast.success("Form submitted successfully!", {
        position: "top-right",
        autoClose: 2000, // 5 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setFormData({
        title: "",
        plaintiffName: "",
        plaintiffs_Attorney: "",
        defendantName: "",
        allegations: "",
        dateoffiling: "",
        witnessName: "",
        state: "",
        city: "",
        court: "",
        civiltype: "",
        // ... other form fields you want to reset
        
      });
    } catch (error) {
      console.error("Error submitting data: ", error);
      toast.error("Form failed to submit!", {
        position: "top-center",
        autoClose: 5000, // 5 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div>
      {isViewMode ? (<div
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
      <div style={{ fontFamily: "bold", fontWeight: "700" }}>
        <h1>NEW CIVIL CASE</h1>
      </div>
      <Form onSubmit={handleSubmit}>
        <LocationBar onSelectedOptions={handleSelectedOptions} />
        <CivilTypeDropdown onTypeChange={handleTypeChange} />
        <FormGroup>
          <Label for="title">Title </Label>
          <Input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="caseNumber">Plaintiff Name: </Label>
          <Input
            id="plaintiffName"
            name="plaintiffName"
            //placeholder="with a placeholder"
            type="plaintiffName"
            value={formData.plaintiffName}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="plaintiffs_Attorney">Plaintiff's Attorney: </Label>
          <Input
            id="plaintiffs_Attorney"
            name="plaintiffs_Attorney"
            //placeholder="with a placeholder"
            type="plaintiffs_Attorney"
            value={formData.plaintiffs_Attorney}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="defendantName">Defendent Name:</Label>
          <Input
            id="defendantName"
            name="defendantName"
            //placeholder="url placeholder"
            type="defendantName"
            value={formData.defendantName}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="allegations">Allegations/Claims of plaintiff: </Label>
          <Input
            id="allegations"
            name="allegations"
            //placeholder="with a placeholder"
            type="allegations"
            value={formData.allegations}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="date">Date of filing: </Label>
          <Input
            type="date"
            id="selectedDate"
            name="selectedDate"
            value={formData.dateoffiling}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="witnessName">Witness Name:</Label>
          <Input
            id="witnessName"
            name="witnessName"
            //placeholder="url placeholder"
            type="witnessName"
            value={formData.witnessName}
            onChange={handleChange}
          />
        </FormGroup>
        {/* <FormGroup>
          <Label for="exampleTime">FIR Timing</Label>
          <Input
            id="exampleTime"
            name="time"
            placeholder="time placeholder"
            type="time"
            value={formData.firTiming}
            onChange={handleChange}
          />
        </FormGroup> */}

        {/* <FormGroup>
          <Label for="exampleNumber">Number of Accused: </Label>
          <Input
            id="exampleNumber"
            name="number"
            placeholder="number placeholder"
            type="number"
            value={formData.numberOfAccused}
            onChange={handleChange}
          />
        </FormGroup> */}
        <FormGroup>
          <Label for="reliefSought">Relief Sought:</Label>
          <Input
            id="reliefSought"
            name="reliefSought"
            //placeholder="datetime placeholder"
            type="reliefSought"
            value={formData.reliefSought}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="legalBais">Legal Basis for the Claims:</Label>
          <Input
            id="elegalBais"
            name="legalBais"
            //placeholder="date placeholder"
            type="text"
            value={formData.legalBais}
            onChange={handleChange}
          />
        </FormGroup>
        {/* <FormGroup>
          <Label for="exampleTime">Time</Label>
          <Input
            id="exampleTime"
            name="time"
            placeholder="time placeholder"
            type="time"
            value={formData.time}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input id="exampleSelect" name="select" type="select" value={formData.selectValue}
            onChange={handleChange}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup> */}

        {/* <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input id="exampleText" name="text" type="textarea" />
        </FormGroup> */}
        <FormGroup>
          <Label for="exampleFile">Files</Label>
          <Input id="exampleFile" name="file" type="file" multiple />
          <FormText>
            This is some placeholder block-level help text for the above input.
            It‘s a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>

        {/* <FormGroup check>
          <Input type="radio" /> Option one is this and that—be sure to
          <Label check>include why it‘s great</Label>
        </FormGroup>
        <FormGroup check>
          <Input type="checkbox" />
          <Label check>Check me out</Label>
        </FormGroup>
        <FormGroup check row>
          <Col
            sm={{
              offset: 2,
              size: 10,
            }}
          >
            
          </Col>
        </FormGroup> } */}
        <Button>Submit</Button>
      </Form>
      <ToastContainer />
    </div>):("hello")}
    </div>
  );
};

export default NewCivilCaseCard;
