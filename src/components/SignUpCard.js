import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SignUpCard.css';
import JudgeSignupForm from './JudgeSignupForm';
import LawyerSignupForm from './LawyerSignupForm';
import AdminSignupForm from './AdminSignupForm';
import LitigantSignupForm from './LitigantSignupForm';



const SignUpCard = () => {
  const [isSignupVisible, setIsSignupVisible] = useState(false);
  const [selectedRole, setSelectedRole] = useState('litigant');
  const navigate = useNavigate();

  const toggleFormVisibility = () => {
    setIsSignupVisible(!isSignupVisible);
  };

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handlesignup = () => {
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
        switch (selectedRole) {
            case 'judge':
                navigate('judge-signup-form');
                break;
            case 'litigant':
                navigate('litigant-signup-form');
                break;
            case 'admin':
                navigate('admin-signup-form');
                break;
            case 'lawyer':
              navigate('lawyer-signup-form');
              break;
            default:
              break;
        }
    } else {
        switch (selectedRole) {
            case 'judge':
                return <JudgeSignupForm/>;
            case 'litigant':
                return <LitigantSignupForm/>;
            case 'admin':
                return <AdminSignupForm />;
            case 'lawyer':
                return <LawyerSignupForm />;
            default:
                return null;
        }
    }
};


  return (
    <div className="signup-card">
      <div className="card-inner">
        <h2>{isSignupVisible ? 'Sign In' : 'sign Up'}</h2>
        <div className="form-group" style={{ display: 'flex' }}>
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
        
      </div>
      
    </div>
  );
};

export default SignUpCard;
