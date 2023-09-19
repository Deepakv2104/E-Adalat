import React, { useState } from "react";
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
const LocationBar = ({onSelectedOptions}) => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCourt, setSelectedCourt] = useState("");

  const states = [
    "Select State",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const cities = {
    "Andhra Pradesh": [
      "Select City",
      "Visakhapatnam",
      "Vijayawada",
      "Tirupati",
    ],
    "Arunachal Pradesh": ["Select City", "Itanagar", "Naharlagun"],
    Assam: ["Select City", "Guwahati", "Silchar", "Dibrugarh"],
    Bihar: ["Select City", "Patna", "Gaya", "Muzaffarpur"],
    Chhattisgarh: ["Select City", "Raipur", "Bhilai", "Durg"],
    Goa: ["Select City", "Panaji", "Margao"],
    Gujarat: ["Select City", "Ahmedabad", "Surat", "Vadodara"],
    Haryana: ["Select City", "Chandigarh", "Faridabad", "Gurgaon"],
    "Himachal Pradesh": ["Select City", "Shimla", "Manali", "Dharamshala"],
    Jharkhand: ["Select City", "Ranchi", "Jamshedpur", "Bokaro"],
    Karnataka: ["Select City", "Bangalore", "Mysore", "Hubli"],
    Kerala: ["Select City", "Thiruvananthapuram", "Kochi", "Kozhikode"],
    "Madhya Pradesh": ["Select City", "Bhopal", "Indore", "Jabalpur"],
    Maharashtra: ["Select City", "Mumbai", "Pune", "Nagpur"],
    Manipur: ["Select City", "Imphal"],
    Meghalaya: ["Select City", "Shillong"],
    Mizoram: ["Select City", "Aizawl"],
    Nagaland: ["Select City", "Kohima"],
    Odisha: ["Select City", "Bhubaneswar", "Cuttack", "Rourkela"],
    Punjab: ["Select City", "Amritsar", "Ludhiana", "Jalandhar"],
    Rajasthan: ["Select City", "Jaipur", "Jodhpur", "Udaipur"],
    Sikkim: ["Select City", "Gangtok"],
    "Tamil Nadu": ["Select City", "Chennai", "Coimbatore", "Madurai"],
    Telangana: ["Select City", "Hyderabad", "Warangal", "Karimnagar"],
    Tripura: ["Select City", "Agartala"],
    "Uttar Pradesh": ["Select City", "Lucknow", "Kanpur", "Agra"],
    Uttarakhand: ["Select City", "Dehradun", "Haridwar", "Nainital"],
    "West Bengal": ["Select City", "Kolkata", "Howrah", "Durgapur"],
  };

  const courts = {
    "Visakhapatnam": [
      "Select Court",
      "Visakhapatnam District Court",
    ],
    "Vijayawada": [
      "Select Court",
      "Vijayawada District Court",
    ],
    "Tirupati": ["Select Court", "Tirupati District Court"],
    "Itanagar": ["Select Court", "Itanagar District Court"],
    "Naharlagun": [
      "Select Court",
      "Naharlagun District Court",
    ],
    Guwahati: ["Select Court", "Guwahati District Court"],
    Silchar: ["Select Court", "Silchar District Court"],
    Dibrugarh: ["Select Court", "Dibrugarh District Court"],
    Patna: ["Select Court", "Patna District Court"],
    Gaya: ["Select Court", "Gaya District Court"],
    Muzaffarpur: ["Select Court", "Muzaffarpur District Court"],
    Raipur: ["Select Court", "Raipur District Court"],
    Bhilai: ["Select Court", "Bhilai District Court"],
    Durg: ["Select Court", "Durg District Court"],
    Panaji: ["Select Court", "Panaji District Court"],
    Margao: ["Select Court", "Margao District Court"],
    Ahmedabad: ["Select Court", "Ahmedabad District Court"],
    Surat: ["Select Court", "Surat District Court"],
    Vadodara: ["Select Court", "Vadodara District Court"],
    Chandigarh: ["Select Court", "Chandigarh District Court"],
    Faridabad: ["Select Court", "Faridabad District Court"],
    Gurgaon: ["Select Court", "Gurgaon District Court"],
    "Shimla": ["Select Court", "Shimla District Court"],
    Manali: ["Select Court", "Manali District Court"],
    Dharamshala: ["Select Court", "Dharamshala District Court"],
    Ranchi: ["Select Court", "Ranchi District Court"],
    Jamshedpur: ["Select Court", "Jamshedpur District Court"],
    Bokaro: ["Select Court", "Bokaro District Court"],
    Bangalore: ["Select Court", "Bangalore District Court"],
    Mysore: ["Select Court", "Mysore District Court"],
    Hubli: ["Select Court", "Hubli District Court"],
    Thiruvananthapuram: [
      "Select Court",
      "Thiruvananthapuram District Court",
    ],
    Kochi: ["Select Court", "Kochi District Court"],
    Kozhikode: ["Select Court", "Kozhikode District Court"],
    Bhopal: ["Select Court", "Bhopal District Court"],
    Indore: ["Select Court", "Indore District Court"],
    Jabalpur: ["Select Court", "Jabalpur District Court"],
    Mumbai: ["Select Court", "Mumbai District Court"],
    Pune: ["Select Court", "Pune District Court"],
    Nagpur: ["Select Court", "Nagpur District Court"],
    Imphal: ["Select Court", "Imphal District Court"],
    Shillong: ["Select Court", "Shillong District Court"],
    Aizawl: ["Select Court", "Aizawl District Court"],
    Kohima: ["Select Court", "Kohima District Court"],
    Bhubaneswar: ["Select Court", "Bhubaneswar District Court"],
    Cuttack: ["Select Court", "Cuttack District Court"],
    Rourkela: ["Select Court", "Rourkela District Court"],
    Amritsar: ["Select Court", "Amritsar District Court"],
    Ludhiana: ["Select Court", "Ludhiana District Court"],
    Jalandhar: ["Select Court", "Jalandhar District Court"],
    Jaipur: ["Select Court", "Jaipur District Court"],
    Jodhpur: ["Select Court", "Jodhpur District Court"],
    Udaipur: ["Select Court", "Udaipur District Court"],
    Gangtok: ["Select Court", "Gangtok District Court"],
    Chennai: ["Select Court", "Chennai District Court"],
    Coimbatore: ["Select Court", "Coimbatore District Court"],
    Madurai: ["Select Court", "Madurai District Court"],
    Hyderabad: ["Select Court", "Hyderabad District Court"],
    Warangal: ["Select Court", "Warangal District Court"],
    Karimnagar: ["Select Court", "Karimnagar District Court"],
    Agartala: ["Select Court", "Agartala District Court"],
    Lucknow: ["Select Court", "Lucknow District Court"],
    Kanpur: ["Select Court", "Kanpur District Court"],
    Agra: ["Select Court", "Agra District Court"],
    Dehradun: ["Select Court", "Dehradun District Court"],
    Haridwar: ["Select Court", "Haridwar District Court"],
    Nainital: ["Select Court", "Nainital District Court"],
    Kolkata: ["Select Court", "Kolkata District Court"],
    Howrah: ["Select Court", "Howrah District Court"],
    Durgapur: ["Select Court", "Durgapur District Court"],
  };

  const handleStateChange = (event) => {
    const newState = event.target.value;
    setSelectedState(newState);
    setSelectedCity("");
    setSelectedCourt("");
    
    // Call the parent component's function with selected options
    onSelectedOptions(newState, selectedCity, selectedCourt);
  
  };

  const handleCityChange = (event) => {
    const newCity = event.target.value;
    setSelectedCity(newCity);
    setSelectedCourt("");
    
    // Call the parent component's function with selected options
    onSelectedOptions(selectedState, newCity, selectedCourt);
  };

  const handleCourtChange = (event) => {
    const newCourt = event.target.value;
    setSelectedCourt(newCourt);
    
    // Call the parent component's function with selected options
    onSelectedOptions(selectedState, selectedCity, newCourt);
  };

  return (
    <div style={{display:"flex"}}>
      <label>Select State:</label>
      <select value={selectedState} onChange={handleStateChange}>
        {states.map((state, index) => (
          <option key={index} value={state}>
            {state}
          </option>
        ))}
      </select>

      <label style={{paddingLeft:'30px',paddingRight:'10px'}}>Select City:</label>
      <select
        value={selectedCity}
        onChange={handleCityChange}
        disabled={!selectedState || selectedState === "Select State"}
      >
        {selectedState && cities[selectedState].map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>

      <label style={{paddingLeft:'30px',paddingRight:'10px'}}>Select Court:</label>
      <select
        value={selectedCourt}
        onChange={handleCourtChange}
        disabled={!selectedCity || selectedCity === "Select City"}
      >
        {selectedCity && courts[selectedCity].map((court, index) => (
          <option key={index} value={court}>
            {court}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LocationBar;
