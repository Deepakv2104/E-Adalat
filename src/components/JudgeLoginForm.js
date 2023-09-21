// JudgeLoginForm.js
import React, { useState } from 'react';
import { useNavigate ,browserHistory} from 'react-router-dom'; 
import { ToastContainer ,toast} from 'react-toastify';
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../firebase";  // Assuming you've set up auth in your firebase.js
import JudgeContext from '../JudgeContext';
const JudgeLoginForm = ({setJudgeId}) => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // App.js


  const navigate = useNavigate();
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Implement login logic for judges
    signInWithEmailAndPassword(auth, username, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user.uid)
            setJudgeId(user.uid);  
            navigate("judge-Dashboard")
            toast.success("Logged In successfully!", {
              position: "top-right",
              autoClose: 1000, // 5 seconds
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
           
            // console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error('Invalid Credentials !')
            console.log(errorCode, errorMessage)
        });
   
  


    
  };

  return (
    
    <div>
        <form>
      <div >
        <label htmlFor="username">Username/Email</label>
        <input type="text" id="username" value={username} onChange={handleUsernameChange} />
      </div>
      <div >
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
      </div>
      
      <button className='btn-login' type="button" onClick={handleLogin} style={{backgroundColor:"#007bff",width:'100%'}} >Login</button>
    </form>
   
    </div>

    
    
   
  );
};

export default JudgeLoginForm;
