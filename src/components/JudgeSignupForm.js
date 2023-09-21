import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from "@firebase/firestore";
import LocationBar from "./location";
import { firestore } from "../firebase"; // Assuming you've set up firebase.js as explained before
import "../styles/JudgeSignupForm.css";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../firebase";  // Assuming you've set up auth in your firebase.js

import CivilTypeDropdown from "./CivilDropdown";
import { ToastContainer ,toast} from "react-toastify";
import CaseTypeForm from "./CaseTypeForm";

const JudgeSignupForm = () => {
  const  Navigate = useNavigate();
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCourt, setSelectedCourt] = useState("");
  const [caseType, setCaseType] = useState(''); 
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('')
const [specificType, setSpecificType] = useState('');

  const [selectedCivilType, setSelectedCivilType] = useState("");
  const [gender, setGender] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    state: "",
    city: "",
    court: "",
    caseType:"",
    specificType:"",
    dateOfBirth: "",
    email: "",
    password:"",
    phoneNumber: "",
    address: "",
    
    courtName: "",
    jurisdiction: "",
    specialization: "",
    yearsOfExperience: "",
    primaryLocation: "",
    timeZone: "",
    lawDegree: "",
    otherDegrees: "",
    primaryLanguage: "",
    otherLanguages: "",
    digitalPlatformExperience: "",
    bio: "",
    // ... (other fields can be added similarly)
  });
  const generateRandomNumber = () => {
    const randomNumber = Math.floor(1000000 + Math.random() * 9000000);
    return randomNumber.toString().padStart(8, "0"); // Ensure it's 11 digits
  };
 
  
  const handleSelectedOptions = (state, city, court) => {
    setSelectedState(state);
    setSelectedCity(city);
    setSelectedCourt(court);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const isValidEmail = (email) => {
    // Simple email regex pattern
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(email);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidEmail(formData.email)) {
      toast.error("Invalid email address!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    const randomJudgeId = generateRandomNumber();
  


   
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;
      console.log("User UID:", user.uid);  

      const updatedFormData = {
        ...formData,
        judgeId: user.uid,
        caseType: caseType,
        specificType: specificType,
        gender: gender,
        state: selectedState,
        city: selectedCity,
        court: selectedCourt,
      };
      console.log(updatedFormData);


      await addDoc(collection(firestore, "Judges"), updatedFormData);
      toast.success("Signed up successfully!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      Navigate('/login');
      // Resetting state after successful operations
      setGender("");
      setSelectedState("");
      setSelectedCity("");
      setSelectedCourt("");
      setCaseType("");
      setSpecificType("");
    } catch (error) {
      console.error("Error:", error);
      toast.error(`Error: ${error.message}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
   

  
  };

  return (
    <div className="jsuf" style={{borderStyle:'solid'}}>
      <Form onSubmit={handleSubmit}>
        <div className="Input-row">
        <FormGroup>
          <CaseTypeForm   caseType={caseType} 
    setCaseType={setCaseType}
    specificType={specificType}
    setSpecificType={setSpecificType}/>
          </FormGroup>
          <FormGroup>
            <Label for="fullName">Full Name</Label>
            <Input
              type="text"
              name="fullName"
              id="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
        <p>Please select gender:</p>
        <div style={{ display: "flex" }}>
            <div style={{ display: "flex", paddingLeft: "20px", paddingRight: "20px" }}>
                <Input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    onChange={(e) => setGender(e.target.value)}
                />
                  <Label for="male">Male</Label>
            </div>

            <div style={{ display: "flex", paddingLeft: "20px", paddingRight: "20px" }}>
                <Input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    onChange={(e) => setGender(e.target.value)}
                /> 
                <Label for="female">Female</Label>
            </div>

            <div style={{ display: "flex", paddingLeft: "20px" }}>
                <Input
                    type="radio"
                    id="others"
                    name="gender"
                    value="others"
                    onChange={(e) => setGender(e.target.value)}
                />
                <Label for="others">Others</Label>
            </div>
        </div>
    </FormGroup>
          <div style={{paddingBottom:'10px',display:'flex'}}>
          <LocationBar  onSelectedOptions={handleSelectedOptions} />
          </div>
        </div>

        <div className="Input-row">
          <FormGroup>
            <Label for="dateOfBirth">Date of Birth</Label>
            <Input
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">password</Label>
            <Input
              type="text"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
            />
          </FormGroup>
        </div>

        <div className="Input-row">
          <FormGroup>
            <Label for="phoneNumber">Phone Number</Label>
            <Input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label for="address">Address</Label>
            <Input
              type="text"
              name="address"
              id="address"
              value={formData.address}
              onChange={handleChange}
            />
          </FormGroup>
        </div>
      

        <div className="Input-row">
          <FormGroup>
            <Label for="judgeID">Judge ID/Badge Number</Label>
            <Input
              type="text"
              name="judgeID"
              id="judgeID"
              value={formData.judgeID}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="courtName">Current Court/Institution</Label>
            <Input
              type="text"
              name="courtName"
              id="courtName"
              value={formData.courtName}
              onChange={handleChange}
            />
          </FormGroup>
        </div>

        <div className="Input-row">
          <FormGroup>
            <Label for="jurisdiction">Jurisdiction Level</Label>
            <Input
              type="text"
              name="jurisdiction"
              id="jurisdiction"
              value={formData.jurisdiction}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="specialization">Specialization</Label>
            <Input
              type="text"
              name="specialization"
              id="specialization"
              value={formData.specialization}
              onChange={handleChange}
            />
          </FormGroup>
        </div>

        <div className="Input-row">
          <FormGroup>
            <Label for="yearsOfExperience">Years of Experience</Label>
            <Input
              type="number"
              name="yearsOfExperience"
              id="yearsOfExperience"
              value={formData.yearsOfExperience}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="primaryLocation">Primary Location</Label>
            <Input
              type="text"
              name="primaryLocation"
              id="primaryLocation"
              value={formData.primaryLocation}
              onChange={handleChange}
            />
          </FormGroup>
        </div>

        <div className="Input-row">
          <FormGroup>
            <Label for="timeZone">Time Zone</Label>
            <Input
              type="text"
              name="timeZone"
              id="timeZone"
              value={formData.timeZone}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="lawDegree">Law Degree</Label>
            <Input
              type="text"
              name="lawDegree"
              id="lawDegree"
              value={formData.lawDegree}
              onChange={handleChange}
            />
          </FormGroup>
        </div>

        <div className="Input-row">
          <FormGroup>
            <Label for="otherDegrees">Other Degrees/Certifications</Label>
            <Input
              type="textarea"
              name="otherDegrees"
              id="otherDegrees"
              value={formData.otherDegrees}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="primaryLanguage">Primary Language</Label>
            <Input
              type="text"
              name="primaryLanguage"
              id="primaryLanguage"
              value={formData.primaryLanguage}
              onChange={handleChange}
            />
          </FormGroup>
        </div>

        <div className="Input-row">
          <FormGroup>
            <Label for="otherLanguages">Other Languages</Label>
            <Input
              type="text"
              name="otherLanguages"
              id="otherLanguages"
              value={formData.otherLanguages}
              onChange={handleChange}
              placeholder="Separate multiple languages with commas"
            />
          </FormGroup>
          <FormGroup>
            <Label for="digitalPlatformExperience">
              Digital Platforms Used
            </Label>
            <Input
              type="textarea"
              name="digitalPlatformExperience"
              id="digitalPlatformExperience"
              value={formData.digitalPlatformExperience}
              onChange={handleChange}
            />
          </FormGroup>
        </div>

        <FormGroup>
          <Label for="bio">Brief Bio</Label>
          <Input
            type="textarea"
            name="bio"
            id="bio"
            value={formData.bio}
            onChange={handleChange}
          />
        </FormGroup>
        {/* Add similar FormGroup blocks for other Inputs */}
        <Button   type="submit">
          Submit
        </Button>
      </Form>
     
    </div>
  );
};

export default JudgeSignupForm;
