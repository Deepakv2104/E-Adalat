import React from "react";
import { useState } from "react";
import { addDoc, collection } from "@firebase/firestore";
import LocationBar from "./location";
import { firestore } from "../firebase";
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
const NewCriminalCaseCard = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCourt, setSelectedCourt] = useState("");
  const[selectedCivilType,setSelectedCivilType] = useState("")

  const [formData, setFormData] = useState({
    title: "",
    plaintiffName: "",
    accusedName: "",
    accusedDOB: "",
    accusedAddress: "",
    state:'',
    city: "",
        court: "",
        civiltype:"",
    // firTiming: "",
    // numberOfAccused: "",
    // investigatingOfficer: "",
    // offenseInformation: "",
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

  const handleTypeChange = (Type) =>{
    setSelectedCivilType(Type)
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const randomCNRNumber = generateRandomNumber();
    const updatedFormData = {
      ...formData,
      caseNumber: randomCNRNumber,
      state: selectedState,
      city: selectedCity,
      court: selectedCourt,
      civiltype:selectedCivilType,
    };
    console.log(updatedFormData);

    try {
      

      // Add the chargesheet data to the "Cases" collection
      const docRef = await addDoc(collection(firestore, "Cases"), updatedFormData);
      console.log("Document written with ID: ", docRef.id);
      setFormData({
        title: "",
        plaintiffName: "",
        accusedName: "",
        accusedDOB: "",
        accusedAddress: "",
        state: "",
        city: "",
        court: "",
        civiltype :"",
        // ... other form fields you want to reset
        
      });
      setSelectedState("");
      setSelectedCity("");
      setSelectedCourt("");
      setSelectedCivilType("");
    } catch (error) {
      console.error("Error submitting data: ", error);
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
    <div
      style={{
        padding: "50px",
        paddingLeft: "30px",
        paddingRight: "30px",
        margin: "10px",
        background: "white",
        boxShadow: "0 5px 25px -5px rgba(0,0,0,2.1)",
      }}
    >
      <div style={{ fontFamily: "bold", fontWeight: "700" }}>
        <h1>NEW CRIMINAL CASE</h1>
        <LocationBar onSelectedOptions={handleSelectedOptions}/>
        <CivilTypeDropdown onTypeChange={handleTypeChange}/>
        
      
      </div>
      <Form onSubmit={handleSubmit}>
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
          <Label for="plaintiffName">Plaintiff Name: </Label>
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
          <Label for="accusedName">Accused Name:</Label>
          <Input
            id="accusedName"
            name="accusedName"
            //placeholder="url placeholder"
            type="accusedName"
            value={formData.accusedName}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="date">Accused DOB: </Label>
          <Input
            type="date"
            id="selectedDate"
            name="date"
            value={formData.accusedDOB}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="accusedAddress">Accused's Address:</Label>
          <Input
            id="accuseaccusedAddressdName"
            name="accusedAddress"
            //placeholder="url placeholder"
            type="accusedAddress"
            value={formData.accusedAddress}
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
          <Label for="investigatingOfficer">Investigating Officer:</Label>
          <Input
            id="investigatingOfficer"
            name="investigatingOfficer"
            //placeholder="datetime placeholder"
            type="investigatingOfficer"
            value={formData.investigatingOfficer}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="offenseInformation">Offense Information:</Label>
          <Input
            id="eoffenseInformation"
            name="offenseInformation"
            //placeholder="date placeholder"
            type="text"
            value={formData.offenseInformation}
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
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input id="exampleFile" name="file" type="file" />
          <FormText>
            This is some placeholder block-level help text for the above input.
            It‘s a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>

        <FormGroup check>
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
        </FormGroup> */}
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default NewCriminalCaseCard;
