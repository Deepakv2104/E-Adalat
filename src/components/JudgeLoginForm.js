// JudgeLoginForm.js
import React, { useState } from 'react';
import { useNavigate ,browserHistory} from 'react-router-dom'; 
const JudgeLoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Implement login logic for judges
    navigate('judge-Dashboard');
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
      
      <button className='btn-login' type="button" onClick={handleLogin} style={{backgroundColor:"#007bff",width:'100%'}} >Login</button>
    </form>
  );
};

export default JudgeLoginForm;
