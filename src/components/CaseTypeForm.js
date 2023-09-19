import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { addDoc, collection } from "@firebase/firestore";
import { firestore } from "../firebase";

const CaseTypeForm = ({ caseType, setCaseType, specificType, setSpecificType }) => {
    
    // Options for the second dropdown based on the selection of the first dropdown
    const specificTypes = {
        civil: [
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
            "Labor and Employment"
        ],
        criminal: [
            "Homicide (Murder, Manslaughter)",
            "Physical Assault",
            "Sexual Assault",
            "Theft, Robbery, Burglary",
            "Fraud",
            "Drug-related Offenses",
            "Domestic Violence",
            "Kidnapping and Abduction",
            "Corruption and Bribery",
            "Cyber Crimes",
            "Terrorism-related Offenses",
            "Dowry-related Offenses",
            "Economic Offenses (Money laundering, Financial scams)",
            "Wildlife and Forest-related Offenses",
            "Offenses related to Religion and Caste",
            "Traffic Violations"
        ]
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            caseType,
            specificType
        };

        try {
            await addDoc(collection(firestore, "Cases"), formData);
            console.log("Data added successfully");
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
           <div style={{display:'flex'}}>
           <FormGroup>
                <Label for="caseType">Case Type</Label>
                <Input type="select" name="caseType" id="caseType"value={caseType} onChange={e => setCaseType(e.target.value)}

>
                    <option value="" disabled>Select Case Type</option>
                    <option value="civil">Civil</option>
                    <option value="criminal">Criminal</option>
                </Input>
            </FormGroup>

            {caseType && (
                <FormGroup   style={{marginLeft:'20px'}}>
                    <Label for="specificType">Specific Type</Label>
                    <Input type="select" name="specificType" id="specificType"value={specificType} onChange={e => setSpecificType(e.target.value)}


>
                        <option value="" disabled>Select Specific Type</option>
                        {specificTypes[caseType].map(type => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </Input>
                </FormGroup>
            )}

           </div>
            
        </Form>
    );
};

export default CaseTypeForm;
