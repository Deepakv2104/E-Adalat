import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginCard.css';
import JudgeLoginForm from './JudgeLoginForm';
import LitigantLoginForm from './LitigantLoginForm';
import AdminLoginForm from './AdminLoginForm';
import LawyerLoginForm from './LawyerLoginForm';


const LoginCard = ({ setJudgeId }) => {
  console.log(typeof setJudgeId); 

  const [isSignupVisible, setIsSignupVisible] = useState(false);
  const [selectedRole, setSelectedRole] = useState('litigant');
  const navigate = useNavigate();

  const toggleFormVisibility = () => {
    setIsSignupVisible(!isSignupVisible);
  };

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleLogin = () => {
    switch (selectedRole) {
      case 'judge':
        navigate('judge-Dashboard');
        break;
      case 'litigant':
        navigate('litigant-dashboard');
        break;
      case 'admin':
        navigate('admin-dashboard');
        break;
      case 'lawyer':
        navigate('/lawyer-dashboard');
        break;
      default:
        break;
    }
  };

  const renderForm = () => {
    if (isSignupVisible) {
        {navigate('/sign-up')}
    } else {
        switch (selectedRole) {
            case 'judge':
                return <JudgeLoginForm setJudgeId={setJudgeId}/>;
            case 'litigant':
                return <LitigantLoginForm />;
            case 'admin':
                return <AdminLoginForm />;
            case 'lawyer':
                return <LawyerLoginForm />;
            default:
                return null;
        }
    }
};


  return (
    <div className="login-card">
      <div className="card-inner">
        <h2>{isSignupVisible ? 'Sign Up' : 'Login'}</h2>
        <div  style={{ display: 'flex' }}>
          <label htmlFor="role" style={{ paddingRight: '30px' }}>
            Select Role:
          </label>
          <select
            id="role"
            name="role"
            value={selectedRole}
            onChange={handleRoleChange}
          >
            <option value="judge">Judge</option>
            <option value="litigant">Litigant</option>
            <option value="admin">Admin</option>
            <option value="lawyer">Lawyer</option>
          </select>
        </div>
        {renderForm()}
        <p className="toggle-link">
          {isSignupVisible ? "Already a user?" : "Don't have an account?"}
          <button onClick={toggleFormVisibility}>
            {isSignupVisible ? 'Sign In' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginCard;
