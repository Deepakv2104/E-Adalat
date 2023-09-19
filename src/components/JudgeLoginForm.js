// JudgeLoginForm.js
import React, { useState } from 'react';
import { useNavigate ,browserHistory} from 'react-router-dom'; 
import { ToastContainer ,toast} from 'react-toastify';
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
    toast.success("Logged In successfully!", {
      position: "top-right",
      autoClose: 1000, // 5 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });


    
  };

  return (
    <div>
        <form>
      <div >
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={username} onChange={handleUsernameChange} />
      </div>
      <div >
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
      </div>
      
      <button className='btn-login' type="button" onClick={handleLogin} style={{backgroundColor:"#007bff",width:'100%'}} >Login</button>
    </form>
    <ToastContainer/>
    </div>
    
   
  );
};

export default JudgeLoginForm;
