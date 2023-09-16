import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { addDoc, collection } from "@firebase/firestore";
import LocationBar from "./location";
import { firestore } from "../firebase"; // Assuming you've set up firebase.js as explained before
import "../styles/JudgeSignupForm.css";

const JudgeSignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    dateOfBirth: "",
    email: "",
    phoneNumber: "",
    address: "",
    judgeID: "",
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await collection(firestore, "judges").add(formData);
      console.log("Data added successfully");
      // Reset form or navigate to another page
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="jsuf">
      <Form onSubmit={handleSubmit}>
        <div className="input-row">
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
            <Label for="gender">Gender</Label>
            <Input
              type="select"
              name="gender"
              id="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Input>
          </FormGroup>
        </div>

        <div className="input-row">
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
        </div>

        <div className="input-row">
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

        <div className="input-row">
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

        <div className="input-row">
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

        <div className="input-row">
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

        <div className="input-row">
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

        <div className="input-row">
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

        <div className="input-row">
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
        {/* Add similar FormGroup blocks for other inputs */}
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default JudgeSignupForm;
