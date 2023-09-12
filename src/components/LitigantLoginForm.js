// LitigantLoginForm.js
import React, { useState } from 'react';
import { useNavigate ,browserHistory} from 'react-router-dom'; 
const LitigantLoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [caseNumber, setCaseNumber] = useState('');
  const navigate = useNavigate();
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCaseNumberChange = (e) => {
    setCaseNumber(e.target.value);
  };

  const handleLogin = () => {
    // Implement login logic for litigants
    navigate('litigant-dashboard');
        
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={username} onChange={handleUsernameChange} />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
      </div>
      <div className="form-group">
        <label htmlFor="caseNumber">Case Number</label>
        <input type="text" id="caseNumber" value={caseNumber} onChange={handleCaseNumberChange} />
      </div>
      <button type="button" onClick={handleLogin} style={{backgroundColor:"#007bff",width:'100%',padding:'10px',color:'white',border:'none',borderRadius:'4px',cursor:'pointer',fontSize:'16px',marginTop:'10px'}}>Login</button>
    </form>
  );
};

export default LitigantLoginForm;
