// LawyerLoginForm.js
import React, { useState } from 'react';
import { useNavigate ,browserHistory} from 'react-router-dom'; 
const LawyerLoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [barCouncilID, setBarCouncilID] = useState('');
  const navigate = useNavigate();
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleBarCouncilIDChange = (e) => {
    setBarCouncilID(e.target.value);
  };

  const handleLogin = () => {
    // Implement login logic for lawyers
    navigate('/lawyer-dashboard');
  };

  return (
    <form>
      <div >
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={username} onChange={handleUsernameChange} />
      </div>
      <div >
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
      </div>
      <div >
        <label htmlFor="barCouncilID">Bar Council ID</label>
        <input type="text" id="barCouncilID" value={barCouncilID} onChange={handleBarCouncilIDChange} />
      </div>
      <button type="button" onClick={handleLogin} style={{backgroundColor:"#007bff",width:'100%',padding:'10px',color:'white',border:'none',borderRadius:'4px',cursor:'pointer',fontSize:'16px',marginTop:'10px'}}>Login</button>
    </form>
  );
};

export default LawyerLoginForm;
